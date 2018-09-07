import React, { Component } from 'react';

import Issues from '../../components/Issues';
import IndoorOutdoor from '../../components/IndoorOutdoor';

class AirLanding extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <Issues />
                <IndoorOutdoor />
            </React.Fragment>
         );
    }
}
 
export default AirLanding;