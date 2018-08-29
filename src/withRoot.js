import react from 'react';

import { MuiThemeProvider, createMuiTheme } from '@materieal-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';

import CssBaseline from '@material/core/CssBaseline';


const theme = createMuiTheme({
    palette:{
        primary:{main:'#108B66',light:'#2FB56B',dark:'#164B34'}, //blue palette
        secondary:{main:'#2F547D',light:'#4972B8',dark:'#164B34'}, //green palette
        default:{main:'#7333563',light:'#2FB56B',dark:'#431934'} //magenta palette
    },
    
});

function withRoot(Component){
    function WithRoot(props){
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...props} />
            </MuiThemeProvider>

        )
    }
    return WithRoot;
};

export default withRoot;