import './App.css';
import { Component } from 'react';
import {CardList} from './component/card-list/card-list.component'
import {SearchBox} from './component/search-box/search-box.component'
class App extends Component {
  constructor(){
    super();
    this.state = {
       monsters: [],
       searchField:''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => this.setState({monsters:users}))
}

handleChange = (e) => {
  this.setState({searchField:e.target.value})
}

render(){
  const { monsters,searchField} = this.state;
  const filterMonsters = monsters.filter(monster => (
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
  ))
  return (
    <div className="App">
      <h1 className='h1-main'> Monsters Rolodex</h1>
      <SearchBox placeholder='search Monsters' handleChange={this.handleChange} />
      <CardList monsters={filterMonsters}></CardList>
    </div>
  );
}
}

export default App;
