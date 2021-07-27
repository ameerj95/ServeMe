// import { observer } from "mobx";
import { inject, observer } from "mobx-react";
import React from "react";
import { Redirect } from 'react-router-dom';

function Middleware(props) {
    console.log(props.match.params.tableNum)
    if (props.table.tableNum == 0) {
        props.table.setTable(parseInt(props.match.params.tableNum))
        props.table.fetchCart()
    }

    return (
        <div>
            <Redirect to="/" />
        </div>
    );
}


export default inject("table")(observer(Middleware));
