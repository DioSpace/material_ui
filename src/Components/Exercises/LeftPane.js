import React, {Fragment} from "react";
import {Paper, ListItemText, ListItem, List, Typography, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

export default ({newData, onDetail, styles, selectedData, onDelete, onEdit}) =>
    <Paper style={styles.paper}>
        {
            newData.map((item, j) => (
                selectedData === '' || item[0] === selectedData
                    ?
                    <Fragment key={'main' + j}>
                        <Typography key={'m' + j} variant="h6">
                            {item[0]}
                        </Typography>
                        <List key={'L' + j}>
                            {
                                item[1].map((detailItem, k) => (
                                    <ListItem button key={'LL' + k} onClick={() => onDetail(detailItem.id)}>
                                        <ListItemText key={'LLL' + k}>
                                            {detailItem.title}
                                        </ListItemText>
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete"
                                                        onClick={() => onEdit(detailItem.id)}>
                                                <EditOutlinedIcon/>
                                            </IconButton>
                                            <IconButton edge="end" aria-label="delete"
                                                        onClick={() => onDelete(detailItem.id)}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Fragment>
                    :
                    null
            ))
        }
    </Paper>
