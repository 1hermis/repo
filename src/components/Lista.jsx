import React from "react";
import mockedData from '../data.json'
import { Item } from "./item";

export function Lista(props){
   
    return(
        <ul>
            {mockedData.map((repo)=>{
                return <Item key={repo.id} handLeSelectItem={props.handLeSelectItem} Item = {repo}/>
            })}
        </ul>
    )
}
