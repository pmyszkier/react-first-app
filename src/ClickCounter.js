import React from 'react';
//import ReactDOM from 'react-dom';

// Wg https://typeofweb.com/state-react-js/

// Z użyciem klasy:
class ClickCounter extends React.Component {
  constructor() {
    super();  // super dajemy wtedy gdy klasa po czymś dziedziczy (czyli ma extends)
    this.state = {counter: 0, totalClicks: 0, totalDoubleClicks: 0};
  }
  
  render() {
    return (
      <div>CLICK COUNTER:
        <br></br>
        <button onClick={this.decrement.bind(this)} onDoubleClick={this.doubleClick.bind(this)}>-</button>
        {/* <button onClick={()=>this.decrement()} onDoubleClick={this.doubleClick.bind(this)}>-</button> */}
        <output>{this.state.counter}</output>        
        <button onClick={this.increment.bind(this)} onDoubleClick={this.doubleClick.bind(this)}>+</button>
        <br></br>
        <output>Total clicks: {this.state.totalClicks}</output>
        <br></br>
        <output>Total double clicks: {this.state.totalDoubleClicks}</output>
        <br></br>
        <br></br>
      </div>      
    );
  }
  
  // increment() {
  //   this.setState({
  //     counter: this.state.counter + 1,
  //     totalClicks: this.state.totalClicks + 1
  //   })
  // }
  
  // decrement() {
  //   this.setState({
  //     counter: this.state.counter - 1,
  //     totalClicks: this.state.totalClicks + 1
  //   })
  // }

  // doubleClick() {
  //   this.setState({
  //     totalDoubleClicks: this.state.totalDoubleClicks + 1
  //   })
  // }

  // Inny sposób z użyciem tzw. updatera, czyli funkcji prevState (może być inna nazwa) a nie obiektu:
  // Wg:  https://typeofweb.com/state-react-js-2/ 
  increment() {
    this.setState(prevState => {  //nazwa prevState może być inna
      return {
        counter: prevState.counter + 1,
        totalClicks: prevState.totalClicks + 1
      };
    });
  }

  decrement() {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1,
        totalClicks: prevState.totalClicks + 1
      };
    });
  }

  doubleClick() {
    this.setState(prevState => {
      return {
        totalDoubleClicks: prevState.totalDoubleClicks + 1,
      };
    });
  }

}

// Dalej patrz index.js:
// ReactDOM.render(
//   <ClickCounter />,
//   document.getElementById('root4')
// );

// To musi być:
export default ClickCounter 