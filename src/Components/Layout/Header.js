import React from "react";
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import CreateFormDialog from "../Exercises/Dialogs/CreateFormDialog";

export default ({dialogSubmit, MainData}) =>
    <AppBar position="static">
        <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="h3">
                Header
            </Typography>
            <CreateFormDialog dialogSubmit={dialogSubmit} MainData={MainData}/>
        </Toolbar>
    </AppBar>
