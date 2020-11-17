import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import { Counter } from './components/Counter';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import './custom.css'
import './style.css'

import UserPage from './components/UserPage';
library.add(fab, faCheckSquare, faBoxOpen)

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/user' component={UserPage} />
       
      </Layout>
    );
  }
}
