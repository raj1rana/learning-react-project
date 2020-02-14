import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list-component'
import {SearchBox} from './components/search-box/search-box-component'
// class APP
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
      search: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
    
  }
  render(){
    const {monsters, search} = this.state
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()) );
    return(
      <div className="App">
        <SearchBox placeholder = "search monstors" handelChange={e => this.setState({search: e.target.value}, ()=> console.log(this.state))} />
      <CardList monsters= {filterMonsters} >
      </CardList>
      </div>
    )
  }
};

export default App;
