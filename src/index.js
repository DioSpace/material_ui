import React from "react";
import {render} from "react-dom";
import App from './Components/App';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {cyan} from "@material-ui/core/colors";
import {yellow} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: cyan,
        secondary: {
            main: yellow[100]
        },
        type: 'dark'
    }
});

render(
    <MuiThemeProvider theme={theme}>
        <App/>
    </MuiThemeProvider>,
    document.getElementById('root')
);
