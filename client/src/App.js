import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/about" component={AboutPage} />
              <Route path="/articles-list" component={ArticlesListPage} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <Footer title="Footer" description="some words"/>
        </div>
      </Router>
      
    );
  }
}

export default App;
