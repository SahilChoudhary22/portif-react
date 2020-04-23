import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import App from './App';
import Footer from './components/footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode><div>
    <Header/>

    <App />
    <Footer/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
