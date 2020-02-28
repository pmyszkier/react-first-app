import React from 'react';
//import ReactDOM from 'react-dom';

// Wg https://typeofweb.com/state-react-js/

// Z użyciem klasy:
class InputContent extends React.Component {
  constructor() {
    super();  // super dajemy wtedy gdy klasa po czymś dziedziczy (czyli ma extends)
    this.state = {firstName: "", lastName: ""};
  }
  
  render() {
    return (
      <div>INPUT CONTENT:     
        <form>
          Imię: <input class="misiek" onChange={this.inputFirstName.bind(this)} value={this.state.firstName}></input>
          <br></br>
          <output>Wpisano imię: {this.state.firstName}</output>
          <br></br>
          Nazwisko: <input onChange={this.inputLastName.bind(this)} value={this.state.lastName}></input>
          <br></br>
          <output>Wpisano nazwisko: {this.state.lastName}</output>
          <br></br>
          <output>Wpisano imię i nazwisko: {this.state.firstName} {this.state.lastName}</output>
          <br></br>
          <br></br>
        </form>
      </div>
    );
  }
  

  inputFirstName(e) {
    this.setState( {
        firstName: e.target.value
    });
    console.log(e);
    console.log(e.target);
    console.log(e.target.value)
  }
  inputLastName(e) {
    this.setState( {
        lastName: e.target.value
    });
  }  


}

// Dalej patrz index.js:
// ReactDOM.render(
//   <InputContent />,
//   document.getElementById('root4')
// );

// To musi być:
export default InputContent