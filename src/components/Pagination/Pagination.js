import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {


    render() {
        return (
            <div className="pagination">
                <button onClick={this.props.prev}>Prev</button>
                <div className="numberPage">{this.props.page}</div>
                <button onClick={this.props.next}>Next</button>
            </div>
        );
    }
}

export default Pagination;