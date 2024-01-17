import React, { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";


const CardList = (props) =>{
    const {monster} = props;
    return(
        <div className="card-list">
            {
                monster.map((monster)=>{
                    return(
                        <Card monster={monster}/>
                    )
                })
            }
        </div>
    );
}

export default CardList;