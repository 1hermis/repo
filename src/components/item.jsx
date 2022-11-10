import React from "react";


export function Item(props){
    function handClick(){
        props.handLeSelectItem(props.Item)
    }
    
    return <li onClick={handClick}>{props.Item.name} </li>
}