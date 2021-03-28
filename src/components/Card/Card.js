import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    
    state = {status: false}

    changeBtnStatus = () => {
      this.setState({status: !this.state.status})
    }

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
                        <button onClick={this.changeBtnStatus} 
                        className={`btn ${this.state.status ? " active" : ""}`}>Like</button>
                    </div>
                </div>
                )
            })} 
            </div>
         );
        
    }

}
 
export default Card;