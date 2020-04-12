import React from "react";
import {Grid} from "@material-ui/core";
import LeftPane from "../Exercises/LeftPane";
import RightPane from "../Exercises/RightPane";

const styles = {
    paper: {
        marginTop: 10,
        marginBottom: 10,
        padding: 30,
        height:'100%'
    }
};

export default ({newData, onDetail, oneData, selectedData, onDelete, onEdit, ifEdit, MainData, onFormUpdate}) => (
    <Grid container spacing={2}>
        <Grid item sm>
            <LeftPane selectedData={selectedData}
                      newData={newData}
                      onDetail={onDetail}
                      styles={styles}
                      onDelete={onDelete}
                      onEdit={onEdit}
            />
        </Grid>
        <Grid item sm>
            <RightPane styles={styles} oneData={oneData} ifEdit={ifEdit} MainData={MainData}
                       onFormUpdate={onFormUpdate}/>
        </Grid>
    </Grid>
)
