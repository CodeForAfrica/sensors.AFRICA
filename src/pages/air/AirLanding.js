import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import IndoorOutdoor from '../../components/IndoorOutdoor';

class AirLanding extends Component {
    render() { 
        return ( 
            <Grid>
                <IndoorOutdoor />
            </Grid>
         );
    }
}
 
export default AirLanding;