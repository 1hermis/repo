import React from "react";
import mockedData from './DetailMockedData.json'


export function ItemDatail(props){
    return(
        <div>
            <h1>{mockedData.name}</h1>
            <p>{mockedData.description}</p>
            <p>{mockedData.language}</p>
            {mockedData.fork? <span>repo forked</span> : undefined} 
            <p>{mockedData.created_at}</p>
            <a href={mockedData.html_url}>Go to Github</a>
        </div>
    )
}