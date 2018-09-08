import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import Issues from '../../components/Issues';
import IndoorOutdoor from '../../components/IndoorOutdoor';

class AirLanding extends Component {
    render() { 
        return ( 
            <Grid container item xs={12}>
                <Issues />
                <IndoorOutdoor />
            </Grid>
         );
    }
}
 
export default AirLanding;