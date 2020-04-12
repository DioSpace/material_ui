import React, {Fragment} from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Fab
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Form from "../Pub/Form";

/*const useStyles = (theme) => ({
    formClass: {
        width: 300
    }
});*/

export default class extends React.Component {

    state = {
        open: false,
        oneData: {
            title: '',
            detail: '',
            MainData: ''
        }
    };

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    };

    handleClose = () => {
        this.setState({
            open: false,
            oneData: {
                title: '',
                detail: '',
                MainData: ''
            }
        })
    };

    /*handleChange = (name) => {
           return (event) => {
               this.setState({
                   oneData: {
                       ...this.state.oneData,
                       [name]: event.target.value
                   }
               })
           }
       };*/
    handleChange = (name) => (event) => {
        this.setState({
            oneData: {
                ...this.state.oneData,
                [name]: event.target.value
            }
        })
    };

    //点击提交按钮
    onSubmit = () => {
        // console.log(this.state)
        // this.props.dialogSubmit(this.state.oneData);
        this.props.dialogSubmit({
            ...this.state.oneData,
            id: this.state.oneData.title.toLocaleLowerCase().replace(/ /g, '-')
        });
        this.handleClose();
    };

    dialogSubmit = (obj) => {
        this.handleClose();
        this.props.dialogSubmit(obj);
    };

    render() {
        // const {MainData} = this.props;
        return (
            <Fragment>
                <Fab size="small" aria-label="add" color="secondary" onClick={this.handleClickOpen}>
                    <AddIcon/>
                </Fab>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">表单</DialogTitle>
                    <DialogContent>
                        <Form MainData={this.props.MainData} dialogSubmit={this.dialogSubmit}/>
                        {/* <TextField
                            autoFocus
                            label="标题"
                            value={this.state.oneData.title}
                            fullWidth
                            onChange={this.handleChange('title')}
                        />
                        <TextField
                            autoFocus
                            label="明细"
                            value={this.state.oneData.detail}
                            fullWidth
                            onChange={this.handleChange('detail')}
                        />
                        <FormControl style={{width:200}}>
                            <InputLabel id="demo-simple-select-label">关联的主项目</InputLabel>
                            <Select
                                value={this.state.oneData.MainData}
                                onChange={this.handleChange('MainData')}>
                                {
                                    MainData.map((item, i) => (
                                        <MenuItem key={i} value={item}>{item}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>*/}
                    </DialogContent>
                </Dialog>
            </Fragment>
        )
    }
}