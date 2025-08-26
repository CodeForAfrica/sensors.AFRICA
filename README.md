# sensors.AFRICA

[sensors.AFRICA](https://sensors.africa/) is a citizen-science focused project by [Code for Africa](https://twitter.com/Code4Africa/) that seeks to address data gaps by providing low cost sensors, which people can use to measure and monitor the quality of the air, water, and sound in their communities.

Are you interested in working with us, using our data, or learning more about what we do? Please fill in [this form](https://goo.gl/forms/4yc0iu2hUH8iSg4v2) and we'll get back to you ASAP.

## Goals

The key goals for this site:

- Provide an online platform to explore sensors.AFRICA data and initiatives (networks)
- Provide information + contacts on how users can kickstart their own network
- Provide an action path to petition local governments to do something about the quality of environment

## Development

This project uses [yarn](https://yarnpkg.com/lang/en/) as a dependancy. See [the documentation](https://yarnpkg.com/lang/en/) to set it up on your machine.

Run the following command to get started

```shell
git clone https://github.com/CodeForAfrica/sensors.AFRICA.git
cd sensors.AFRICA
yarn
yarn dev
```

---

## Docker Image

To build the docker image, run:

```shell
docker build -t codeforafrica/sensors-africa-ui .
```

And to run it:

```shell
docker run --expose 127.0.0.1:3000:3000/tcp codeforafrica/sensors-africa-ui
```

## Style Guidelines

This project will be primarily using [airbnb react](https://github.com/airbnb/javascript/tree/master/react) and [material-ui](https://material-ui.com/) as our main style guides when implementing components.This is to create code consistency and readability.

## Tests

[TODO](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

---

## sensors.AFRICA Stack

| First Header                                                                    | Second Header                                                                      |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [API](https://github.com/CodeForAfricaLabs/sensors.AFRICA-api)                  | Receives, stores, and processes data received from sensors across the continentent |
| [Map](https://github.com/CodeForAfrica/sensors.AFRICA-AQ-map-v2)                | Visualises the types and locations of all sensors nodes across the continent       |
| [Firmware](https://github.com/CodeForAfrica/sensors.AFRICA-AQ-sensors-software) | Powers all sensors.AFRICA nodes across the continent                               |

---

## Contributing

If you'd like to contribute to sensors.AFRICA, check out the [CONTRIBUTING.md](./CONTRIBUTING.md) file on how to get started; or jump right into our [GitHub issues](issues).

## Attribution

> If we have seen further it is by standing on the shoulders of giants. - Isaac Newton

### ✨ Contributors ✨

[TODO](https://www.npmjs.com/package/all-contributors-cli)

---

## License

GNU General Public License v3.0

sensors.AFRICA is a citizen-science focused project by Code for Africa that seeks to address data gaps by providing low cost sensors, which people can use to measure and monitor the quality of the air, water, and environment in their communities. This web app seeks to be the public portal through which most users would discover and explore the data and intiative.

Copyright (C) 2018 Code for Africa

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
