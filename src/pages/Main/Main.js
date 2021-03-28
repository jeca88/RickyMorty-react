import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import './Main.css';

class Main extends Component {



    render() {
        return (
            <div className="main">
                < Pagination page={this.props.page} next={this.props.next} prev={this.props.prev} />
                < Card characters={this.props.chraracters} setCharacter={this.props.setCharacter}/>
            </div>
        );
    }
}

export default Main;