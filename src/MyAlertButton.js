import React from 'react';
//import ReactDOM from 'react-dom';

// Wg https://typeofweb.com/interakcja-komponentami-react-js/

// Bez użycia klasy:
// function MyButtonComponent() {
//   return (
//     <button onClick={() => alert('Kliknięto!')}>Kliknij!</button>
//   );
// }

//lub:
// function onClickHandler() {
//   alert('Kliknięto!');
// }
// function MyButtonComponent() {
//   return (
//     <button onClick={onClickHandler}>Kliknij!</button>
//   );
// }

// Zamiast tego lepsza klasa:
class MyButtonComponent extends React.Component {
  render() {
    return <button onClick={this.onClickHandler}>Kliknij!</button>;
  }
  onClickHandler() {
    alert("Kliknięto!");
  }
}

// Dalej patrz index.js:
// ReactDOM.render(
//   <MyComponent />,
//   document.getElementById('root3')
// );

// To musi być:
export default MyButtonComponent 