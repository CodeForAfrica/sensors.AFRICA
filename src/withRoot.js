import react from 'react';

import { MuiThemeProvider, createMuiTheme } from '@materieal-ui/core/styles';
import green from '@material-ui/core/colors/green';

import CssBaseline from '@material/core/CssBaseline';


const theme = createMuiTheme({
    palette:{
        primary:{main:'#108B66',light:'#2FB56B',dark:'#164B3E'}, //green palette
    }
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