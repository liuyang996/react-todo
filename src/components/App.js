import "./App.css";

import React, { Component } from "react";
import StateProvider from "./wrappers/StateProvider";
import KeyStrokeHandler from "./wrappers/KeyStrokeHandler";
import TodoList from "./ui/TodoList";
class App extends Component {
  render() {
    return (
      <StateProvider>
        <KeyStrokeHandler>
          <TodoList />
        </KeyStrokeHandler>
      </StateProvider>
    );
  }
}

export default App;
