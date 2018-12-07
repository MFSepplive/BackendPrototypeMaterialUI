import React, { Component } from "react";
import "./App.scss";
import OwnSideBar from "./OwnSideBar";
import TopBar from "./TopBar";
import MainContent from "./MainContent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopBar />
                <OwnSideBar />
                <MainContent />
            </div>
        );
    }
}

export default App;
