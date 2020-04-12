import React, {Fragment} from "react";
import {Header, Content, Footer} from './Layout/index'
import {DetailData, MainData} from "../store";
import {CssBaseline} from "@material-ui/core";

export default class MainClass extends React.Component {

    state = {
        DetailData,
        oneData: {},
        selectedData: '',
        ifEdit: false
    };

    createData() {
        var MainLevel = MainData.reduce((resData, item) => {
            resData = {
                ...resData,
                [item]: []
            };
            return resData;
        }, {});
        return Object.entries(this.state.DetailData.reduce((resData, item) => {
            resData[item.MainData] = [...resData[item.MainData], item];
            return resData;
        }, MainLevel));
    }

    handleDetail = (id) => {
        // var res = DetailData.find((item) => (item.id === id));
        // console.log(res);
        /*this.setState({
            oneData: res
        })*/
        this.setState((prevState) => ({
            ...prevState.DetailData,
            oneData: prevState.DetailData.find((item) => id === item.id),
            ifEdit: false
        }))
    };

    handleSelect = (obj) => {
        console.log("obj ", obj);
        this.setState({
            selectedData: obj
        })
    };

    handleDialogSubmit = (obj) => {
        // console.log("handleDialogSubmit ",obj)
        this.setState((prevState) => {
            return {
                DetailData: [
                    ...prevState.DetailData,
                    obj
                ]
            }
        })
    };

    handleDelete = (id) => {
        // console.log(id)
        this.setState((prevState) => ({
            DetailData: prevState.DetailData.filter((item) => (item.id !== id))
        }))
    };

    handleEdit = (id) => {
        this.setState((prevState) => ({
            ...prevState.DetailData,
            oneData: prevState.DetailData.find((item) => id === item.id),
            ifEdit: true
        }));
        // this.handleDetail(id);
    };

    handleFormUpdate = (obj) => {
        // console.log(obj);
        this.setState((prevState) => (
            {
                DetailData: [
                    ...prevState.DetailData.filter((item) => (item.id !== obj.id)),
                    obj
                ],
                oneData: obj
            }
        ));
    };

    render() {
        const newData = this.createData();
        console.log("ifEdit ", this.state.ifEdit);
        return (
            <Fragment>
                <CssBaseline/>
                <Header MainData={MainData} dialogSubmit={this.handleDialogSubmit}/>
                <Content MainData={MainData}
                         onFormUpdate={this.handleFormUpdate}
                         ifEdit={this.state.ifEdit}
                         newData={newData}
                         selectedData={this.state.selectedData}
                         oneData={this.state.oneData}
                         onDetail={this.handleDetail}
                         onDelete={this.handleDelete}
                         onEdit={this.handleEdit}/>
                <Footer MainData={MainData} selectedData={this.state.selectedData} onSelect={this.handleSelect}/>
            </Fragment>
        )
    }
}
