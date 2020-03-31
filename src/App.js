import React, {Component} from 'react';

import CardList from './components/card-list/card-list.component'

import './App.css';

import uuidv4 from 'uuid';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            monsters:[
            {
            name: 'Frankenstein'
            },{
            name: 'Dracula'
            },{
            name: 'Zombie'
        }]}
        }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters:users }));
    }

    render(){
      return (
        <div className="App">
            <CardList >
                Yihua
            </CardList>
            {
                this.state.monsters.map(monster => <h1 key={uuidv4()}> { monster.name } </h1>

                )
            }
        </div>
      );
    }}

export default App;
