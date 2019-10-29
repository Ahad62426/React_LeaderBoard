import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';
import { usersJSON } from './data';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      users: usersJSON
    }

  }

  handleClick(type) {
    const { users } = this.state;
    users.sort((a, b) => {
      switch (type) {
        case 'age': return a.age - b.age;
        case 'name': {
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
          return 0;
        }
        case 'points': return a.points - b.points;
        default: return a.rank - b.rank;
      }
    });
    this.setState({ users });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age onclick={() => this.handleClick('age')}></Age>
          <Name onclick={() => this.handleClick('name')}></Name>
          <Points onclick={() => this.handleClick('points')}></Points>
          <Rank onclick={() => this.handleClick()}></Rank>
          <Table users={users}></Table>
        </div>
      </div>
    );
  }
}
