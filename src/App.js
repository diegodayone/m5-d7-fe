import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    books: []
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Books in the catalogue</h1>
        {this.state.books.map((book, index) => 
          <div key={index}>
            <img src={book.img} style={{ width:"200px"}}></img>
            <span>{book.title}</span>
          </div>)}
      </header>
    </div>
  );
  }

  componentDidMount = async () => {
    const resp = await fetch("https://m5-d7-oct19.herokuapp.com/books")
    const jsonBooks = await resp.json();

    this.setState({
      books: jsonBooks
    })
  }
}

export default App;
