import React, { Component } from 'react';
import './Characters.css';

class Characters extends Component {
    state = {}
    
    render() {
     
        return (
            <div className="characters">
                <button className="back" onClick={() => this.props.setCharacter(null)}>
                    Back</button>
                    <div className="detailCard">
                        <img src={this.props.character.image}/>
                        <div className="name">
                        <h2>{this.props.character.name}</h2>
                        <p>Location: {this.props.character.location.name}</p>
                        <p>Gender: {this.props.character.gender}</p>
                        <p>Species: {this.props.character.species}</p>
                        <p>Status: {this.props.character.status}</p>
                        </div>
                     </div>  
            </div> 
        );
    }
}

export default Characters;