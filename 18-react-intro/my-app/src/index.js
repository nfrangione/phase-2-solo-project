import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
// console.log(React.createElement('h1',{}, 'hello world'))
// const Article = props => {
//   return (
//     React.createElement('div',{className:'container'}, [
//       React.createElement('h1',{}, props.title),
//       React.createElement('p',{}, props.article)
//     ])
//   )
// }


ReactDOM.render(<App/>, 
document.getElementById('root'))

