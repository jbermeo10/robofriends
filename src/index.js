import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
//import Hello from './Hello';
//import Card from './Card';
//import CardList from './CardList';
//import reportWebVitals from './reportWebVitals';
import 'tachyons';
//import { robots } from './robots';

ReactDOM.render(
  // <React.StrictMode>
  //    <App />
  // </React.StrictMode>,

  //<h1>Hola Mundo</h1>,

  //<Hello greeting={'Hello ' + 'React Ninja'}/>,
  //document.getElementById('root')

  // <div>
  //   <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
  //   <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
  //   <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
  // </div>

  //<CardList robots={robots}/>

  <App />, document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
