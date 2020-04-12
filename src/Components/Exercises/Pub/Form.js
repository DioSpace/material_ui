import React, {Fragment} from "react";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";

export default class extends React.Component {

    /*    state = {
            oneData: {
                title: '',
                detail: '',
                MainData: ''
            }
        };*/

    constructor(props) {
        super(props);
        this.state = this.initState(props);
    }

    initState(props) {
        if (props.ifEdit) {
            return {
                oneData: props.oneData
            }
        } else {
            return {
                oneData: {
                    title: '',
                    detail: '',
                    MainData: ''
                }
            }
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps.oneData, prevState.oneData);
        if (nextProps.oneData) {
            if (nextProps.oneData.id !== prevState.oneData.id) {
                return nextProps;
            }
        }
        return null
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    };

    handleClose = () => {
        this.setState({
            open: false
        })
    };

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
        // this.handleClose();
    };

    onUpdate = () => {
        this.props.onFormUpdate(this.state.oneData);
    };

    render() {
        const {MainData, ifEdit} = this.props;
        return (
            <Fragment>
                <TextField
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
                <FormControl style={{width: 200, height: 60}}>
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
                </FormControl>
                <br/>
                {
                    ifEdit
                        ?
                        <Button variant="contained" onClick={this.onUpdate} color="primary">
                            更新
                        </Button>
                        :
                        <Button variant="contained" onClick={this.onSubmit} color="primary">
                            提交
                        </Button>
                }
            </Fragment>
        )
    }
}
