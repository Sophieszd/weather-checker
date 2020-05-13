import React, { Component } from 'react';
import './App.module.scss';
import NavBar from '../../components/NavBar';
import CardList from '../../components/CardList';
import Routes from '../../containers/routes/Routes';
import PhotoSlide from '../../components/PhotoSlide';

export default class App extends Component {
  render() {
    return (
      <section>
        <NavBar />
        <PhotoSlide />
        <CardList />
        <Routes />
      </section>
    
    );
  }
}

