import React, { Component } from 'react';

class App extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/accounts/');
      const users = await res.json();
      this.setState({
        users
      });
      console.log(users)
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.users.map(item => (
          <div key={item.id}>
            <h1>{item.first_name}</h1>
            <span>{item.last_name}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;