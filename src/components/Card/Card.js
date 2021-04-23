import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    
   

    render() { 
       
        return ( 
            <div className="cardList">
            {this.props.characters.map(card => {
             return (
                <div className="card" >
                <img src={card.image} className="card-img-top" alt="..." 
                onClick={() => this.props.setCharacter(card.id)}></img>
                    <div className="card-body">
                        <h5 className="title">{card.name}</h5>
                    </div>
                </div>
                )
            })} 
            </div>
         );
        
    }

}
 
export default Card;