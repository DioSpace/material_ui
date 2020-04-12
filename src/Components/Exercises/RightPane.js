import React, {Fragment} from "react";
import {Paper, Typography} from "@material-ui/core";
import Form from "./Pub/Form";
// import {MainData} from "../../store";

export default ({styles, oneData, ifEdit, MainData, onFormUpdate}) =>
    <Paper style={styles.paper}>
        {
            // console.log(oneData)
        }
        {
            JSON.stringify(oneData) !== '{}'
                ?
                ifEdit
                    ?
                    <Form MainData={MainData} oneData={oneData} ifEdit={ifEdit} onFormUpdate={onFormUpdate}/>
                    :
                    <Fragment>
                        <Typography variant='h6'>{oneData.title}</Typography>
                        <Typography style={{marginTop: 20}} variant='overline'>{oneData.id}</Typography>
                        <br/>
                        <Typography style={{marginTop: 20}} variant='overline'>{oneData.detail}</Typography>
                    </Fragment>
                :
                <Fragment>
                    <Typography variant='h6'>欢迎使用!</Typography>
                </Fragment>
        }
    </Paper>
