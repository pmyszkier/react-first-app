import React from 'react';
//import ReactDOM from 'react-dom';

import DateComponent from './DateComponent.js';

//const dateComponentChild = new DateComponent; // do wywołania metody innego komponentu w tym komponencie

// Wg https://typeofweb.com/metody-cyklu-zycia-komponentu-react-js/

class ShowDate extends React.Component {
  constructor(props) {  //w tym wypadku może nie być props
    super(props);

    this.state = { dateVisible: true };
  }

  // onButtonClick() {
    //// tak było:
  //   this.setState(state => ({ dateVisible: !state.dateVisible }));
  //   // alert("Kliknięto")
  //   alert(this.state);
  // }

  

  onButtonClick() {
    
    // DateComponentChild.componentWillUnmount();
    //dateComponentChild.clickAlert();
    this.clickButtonTimeout = setTimeout(() => {
      this.setState(state => ({ dateVisible: !state.dateVisible }));
    }, 5000);
  }

  // getDateState() {
  //   if (this.state.dateVisible == true) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  onButtonClickSecond() {
    if (this.state.dateVisible === true) {
      // this.clickButtonTimeout = setTimeout(() => {
      //   this.setState(state => ({ dateVisible: !state.dateVisible }));
      // }, 2000);
      alert("jest true")
      //DateComponentChild.misiek();
    } else {
      // this.setState(state => ({ dateVisible: state.dateVisible }));
      alert("nie jest true")
    }
  }


  render() {
    return (
      <div>SHOW DATE AND DATE COMPONENT:
        <br></br>
        <button onClick={this.onButtonClick.bind(this)}>Kliknij</button>
        <span id="date-field">{this.state.dateVisible && <DateComponent />}</span>
        <br></br>
        <br></br>
      </div>
    );
  }
}

//alert("React jest super")

// Dalej patrz index.js:
// ReactDOM.render(
//   <ShowDate />,
//   document.getElementById('root6')
// );

// To musi być:
export default ShowDate 