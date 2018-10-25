# TICK Stack

InfluxData provides a Modern Time Series Platform, designed from the ground up to handle metrics and events. InfluxData’s products are based on an open source core. This open source core consists of the projects—[Telegraf](https://github.com/influxdata/telegraf.git), [InfluxDB](https://github.com/influxdata/influxdb.git), [Chronograf](https://github.com/influxdata/chronograf.git), and [Kapacitor](https://github.com/influxdata/kapacitor.git); collectively called the TICK Stack

![TICK](https://docs.influxdata.com/img/chronograf/v1.4/intro-gs-diagram.png)

## InfluxDB

[InfluxDB](https://github.com/influxdata/influxdb.git) is a Time Series Database built from the ground up to handle high write & query loads. InfluxDB is a custom high performance datastore written specifically for timestamped data, including DevOps monitoring, application metrics, IoT sensor data, and real-time analytics. Conserve space on your machine by configuring InfluxDB to keep data for a defined length of time, and automatically expiring and deleting any unwanted data from the system. InfluxDB also offers a SQL-like query language for interacting with data



## Kapacitor

 [Kapacitor](https://github.com/influxdata/kapacitor.git) is a native data processing engine. It can process both stream and batch data from InfluxDB. Kapacitor lets you plug in your own custom logic or user-defined functions to process alerts with dynamic thresholds, match metrics for patterns, compute statistical anomalies, and perform specific actions based on these alerts like dynamic load rebalancing. Kapacitor integrates with HipChat, OpsGenie, Alerta, Sensu, PagerDuty, Slack, and more.


## Telegraf

[Telegraf](https://github.com/influxdata/telegraf.git) is a plugin-driven server agent for collecting and reporting metrics. Telegraf has plugins or integrations to source a variety of metrics directly from the system it’s running on, to pull metrics from third party APIs, or even to listen for metrics via a StatsD and Kafka consumer services. It also has output plugins to send metrics to a variety of other datastores, services, and message queues, including InfluxDB, Graphite, OpenTSDB, Datadog, Librato, Kafka, MQTT, NSQ, and many others.



## Chronograf

[Chronograf](https://github.com/influxdata/chronograf.git) is the administrative user interface and visualization engine of the platform. It makes the monitoring and alerting for your infrastructure easy to setup and maintain. It is simple to use and includes templates and libraries to allow you to rapidly build dashboards with real-time visualizations of your data and to easily create alerting and automation rules.


To know more about the individual components see [this](https://influxdata.com/).

---

# Development

To run the complete TICK stack use [docker-compose](https://docs.docker.com/compose/).
By using docker-compose all four official TICK stack images are started and linked together.

Start all the images as follows:

```sh
$ git clone https://github.com/CodeForAfricaLabs/sensors.AFRICA-TICK-dokku.git
$ cd sensors.AFRICA-TICK-dokku/
$ docker-compose up -d
```

### Check that InfluxDB works:

Run this curl command, if no errors occur InfluxDB is running:

```sh
$ curl http://localhost:8086/ping
```

#### The `influx` client

Use the built-in influx cli service:

    $ docker-compose run influxdb-cli


### Check that Telegraf works

By default, the Telegraf creates a `telegraf` database.
Check that InfluxDB has such a database in addition to the `_internal` database.

    $ docker-compose run influxdb-cli
    > show databases


### Check that Chronograf works

Access the Chronograf inteface, [http://localhost:8888](http://localhost:8888)

### Check Kapacitor works

First, run this curl command, if no errors occur Kapacitor is running:

    $ curl http://localhost:9092/kapacitor/v1/ping


Use the built-in kapacitor cli service:

    $ docker-compose run kapacitor-cli
    > kapacitor list tasks


Confirm Kapacitor is subscribed to all databases in InfluxDB

    $ docker-compose run influxdb-cli
    > show subscriptions


---

# Deployment

If not already installed, please install [dokku](http://dokku.viewdocs.io/dokku/)

```sh
# for debian systems, installs dokku via apt-get
$ wget https://raw.githubusercontent.com/dokku/dokku/v0.11.3/bootstrap.sh
$ sudo DOKKU_TAG=v0.11.3 bash bootstrap.sh
# go to your server's IP and follow the web installer
```

Using docker image tag deployment, we will deploy all TICK stack components from the docker registry. We then link the individual dokku apps to create the TICK stack.

### InfluxDB installation

```sh
sudo docker pull influxdb:1.4.3
sudo docker tag influxdb:1.4.3 dokku/influxdb:1.4.3

sudo docker volume create --name influxdb-data

dokku apps:create influxdb
dokku docker-options:add influxdb run,deploy --volume influxdb-data:/var/lib/influxdb
dokku proxy:ports-add influxdb http:8086:8086

dokku tags:deploy influxdb 1.4.3
```


### kapacitor installation

```sh
sudo docker pull kapacitor:1.4.1
sudo docker tag kapacitor:1.4.1 dokku/kapacitor:1.4.1

dokku apps:create kapacitor

# Link with InfluxDB
dokku docker-options:add kapacitor run,deploy --link influxdb.web.1:influxdb
dokku proxy:ports-add kapacitor http:9092:9092

dokku config:set kapacitor KAPACITOR_HOSTNAME=kapacitor \ KAPACITOR_INFLUXDB_0_URLS_0=http://influxdb:8086

dokku tags:deploy kapacitor 1.4.1
```



### Telegraf installation (Optional)

```
sudo docker pull telegraf:1.4.5
sudo docker tag telegraf:1.4.5 dokku/telegraf:1.4.5

dokku apps:create telegraf
dokku docker-options:add telegraf run,deploy --volume ${PWD}/etc/telegraf.conf:/etc/telegraf/telegraf.conf

# Link with InfluxDB
dokku docker-options:add telegraf run,deploy --link influxdb.web.1:influxdb
dokku proxy:ports-add telegraf http:8094:8094 udp:8092:8092 udp:8125:8125

dokku tags:deploy telegraf 1.4.5
```


### Chronograf installation

```
sudo docker pull chronograf:1.4.3.0
sudo docker tag chronograf:1.4.3.0 dokku/chronograf:1.4.3.0

dokku apps:create chronograf

# Link with InfluxDB
dokku docker-options:add chronograf run,deploy --link influxdb.web.1:influxdb

# Link with Kapacitor
dokku docker-options:add chronograf run,deploy --link kapacitor.web.1:kapacitor

dokku config:set chronograf INFLUXDB_URL=http://influxdb:8086 \ KAPACITOR_URL=http://kapacitor:9092

dokku proxy:ports-add chronograf http:8888:8888

dokku tags:deploy chronograf 1.4.3.0
```

### Grafana installation

```
sudo docker pull grafana/grafana:5.2.2
sudo docker tag grafana/grafana:5.2.2 dokku/grafana:5.2.2

dokku apps:create grafana

# Link with InfluxDB
dokku docker-options:add grafana run,deploy --link influxdb.web.1:influxdb

dokku config:set grafana INFLUXDB_URL=http://influxdb:8086 \
GF_AUTH_ANONYMOUS_ENABLED=true

dokku proxy:ports-add grafana http:3000:3000

dokku tags:deploy grafana 5.2.2

```

## Tests

TODO

---
# License

The MIT License (MIT)

Copyright (c) 2018 Code for Africa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
