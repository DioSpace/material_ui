import React from "react";
import {Tabs, Tab} from '@material-ui/core';

export default ({MainData, selectedData, onSelect}) => {
    const index = selectedData === '' ? 0 : (MainData.findIndex((item) => (item === selectedData)) + 1);
    return (
        <Tabs
            style={{position: 'flxed', bottom: 0, width: '100%'}}
            value={index}
            variant="fullWidth"
            aria-label="simple tabs example"
            indicatorColor="primary"
            centered
            onChange={(even, i) => {
                onSelect(i === 0 ? '' : MainData[i - 1])
            }}>
            <Tab key="all" label="全部"/>
            {
                MainData.map((item, j) => (
                    <Tab key={j} label={item}/>
                ))
            }
        </Tabs>
    )
}