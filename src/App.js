import React, { Component } from 'react';
import './App.scss';
import OwnSideBar from './OwnSideBar';
import TopBar from './TopBar';

class App extends Component {
    render() {
        return (
            <div className="Apphallo">
                <TopBar />
                <OwnSideBar />
            </div>
        );
    }
}

export default App;
