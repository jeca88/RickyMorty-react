
import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Characters from './pages/Characters/Characters';




class App extends Component {
  state = { cardList: [], charId: null, pages: 1 };

  setCharacter = (id) => {
    this.setState({ charId: id })
  }

  next = () => {
    this.setState({
      pages: this.state.pages + 1
    })
  }

  prev = () => {
    if (this.state.pages > 1) {
      this.setState({
        pages: this.state.pages - 1
      })
    }
  }

  componentDidMount() {
    if (!this.state.cardList.length) {
      const url = " https://rickandmortyapi.com/api";
      const characters = url + "/character/?page=" + this.state.pages;
      fetch(characters)
        .then(res => res.json())
        .then(
          (result) =>

            this.setState({
              cardList: result.results
            })
        );
    }
  }

  componentDidUpdate() {
    
      const url = " https://rickandmortyapi.com/api";
      const characters = url + "/character/?page=" + this.state.pages;
      fetch(characters)
        .then(res => res.json())
        .then(
          (result) =>

            this.setState({
              cardList: result.results,
           
            })
        );
    
  }




  render() {

    return (
      <div className="App">
        < Header />
        {!this.state.charId ? (
          < Main setCharacter={this.setCharacter} chraracters={this.state.cardList} 
          page={this.state.pages} next={this.next} prev={this.prev} /> ) :
          (< Characters setCharacter={this.setCharacter} 
          character={this.state.cardList.find((e) => e.id === this.state.charId)}/>)}
      </div>
    );

  }
}
export default App;
