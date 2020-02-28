import React from 'react';
//import ReactDOM from 'react-dom';


// Wg https://typeofweb.com/react-js-w-przykladach-filtrowanie-statycznej-listy/

// Imiona będziemy pobierać z tablicy allUsers
// w prawdziwej aplikacji pochodziliby z API i/lub byli w Reduksowym storze 
const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania', 'Asia'];

class PersonListComponent extends React.Component {
  constructor() {
    super();    
    
    this.state = {
      filteredUsers: allUsers
    };
  }

  filterUsers(e) {
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text)
    this.setState({
      filteredUsers
    })
  }
  
  getFilteredUsersForText(text) {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  }

  resetFilteredList() {
    return this.filterUsers = ""
  }
  
  render () {
    return (
      <div>FILTERED LIST:
        <br></br>
        <input onInput={this.filterUsers.bind(this)} />
        <button onClick={this.state.resetFilteredList}>Resetuj</button>
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }
};


const UsersList = ({ users }) => {
  if (users.length > 0) {
    return (
      <ul>
        {users.map(user => <li key={user}>{user}</li>)}
      </ul>
    );
  }

  return (
    <p>No results!</p>
  );
};

// Dalej patrz index.js:
// ReactDOM.render(
//   <PersonListComponent />,
//   document.getElementById('root7')
// );

// To musi być:
export default PersonListComponent 