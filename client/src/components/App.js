import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dash = () => <h2>Dashboard</h2>;
const ServeyNew = () => <h2>ServeyNew</h2>;


class App extends Component {
    
    componentDidMount() {
        this.props.fetchUser();
    }
    
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Route  path="/" component ={Header} />
                        <Route exact path="/" component ={Landing} />
                        <Route exact path="/serveys" component ={Dash} />
                        <Route  path="/serveys/new" component ={ServeyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);