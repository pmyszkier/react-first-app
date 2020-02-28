import React from 'react';
//import ReactDOM from 'react-dom';

//import ShowDate from './ShowDate.js';

//const showDateChild = new ShowDate; // do wywołania metody innego komponentu w tym komponencie

// Wg https://typeofweb.com/metody-cyklu-zycia-komponentu-react-js/

class DateComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerId = window.setInterval(this.updateDate.bind(this), 1000);
     //alert("Interwał")
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    //alert("Unmount")
  }

  misiek() {
    window.clearInterval(this.timerId);
    alert("Unmount1")
  }
  
  clickAlert() {
    //alert("jestem")
  }

  updateDate() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const dateStr = this.state.date.toString();
    return <time>{dateStr}</time>;
  }

  // render() {
  //   if (showButtonAndDateChild.getDateState() == true) {
  //     const dateStr = this.state.date.toString();
  //     return <time>{dateStr}</time>;
  //   } else {
  //     const dateStr = this.state.date.toString();
  //     return <time>{dateStr}</time>;
  //   }   
  // }

}

// Dalej patrz index.js:
// ReactDOM.render(
//   <ShowDate />,
//   document.getElementById('root6')
// );

// To musi być:
export default DateComponent 