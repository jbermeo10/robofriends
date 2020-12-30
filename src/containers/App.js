import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor () {
    super()
    this.state = {
      //robots: robots,
      robots: [],
      searchfield: ''
    }
    //console.log('constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>response.json())
      .then(users => this.setState({ robots: users}));

    //Robots hardcoded
    //this.setState({ robots: robots});
    //console.log('componentDidMount');
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})

    //const filteredRobots = this.state.robots.filter(robot =>{
    //  return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    //})
    //console.log(filteredRobots);
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    //console.log('render');

    //if (robots.length === 0) {  //this line equals the following:
    //if (!robots.length) {

    //here use of ternary for if else sentence
    return !robots.length ?
    <h1>Cargando...</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>Amigos Robots</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );

  }
}

export default App;

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
// export default App;
