//src.App.js
import React, { Component } from 'react'; 
import './App.css';
import QuoteDisplay from './QuoteDisplay';
import QuoteGenerator from './QuoteGenerator';

const sampleQuote = {
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
}
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // sampleQuote par défaut: 
      // pour toujours avoir une quote affichée
      newQuote: sampleQuote
    };
  };

  getQuotes = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        this.setState({ newQuote: data[0] })
      })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simpsons Citations</h1>
        </header>
        <section className="App-section">
          <QuoteGenerator  generateNewQuote={() =>  this.getQuotes()}  />
          <QuoteDisplay newQuote={this.state.newQuote}/>
        </section>
      </div>
    );
  }
}

export default App;
