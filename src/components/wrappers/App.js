import React, {Component} from "react";
import StateProvider from './StateProvider';
import KeyStrokeHandler from "./KeyStrokeHandler";
import TodoList from "../ui/TodoList";

class App extends Component {

  render () {
    return (
      <div className="container">
        <div className="row">
          <StateProvider>
            <KeyStrokeHandler>
              <TodoList/>
            </KeyStrokeHandler>
          </StateProvider>
        </div>
      </div>
    );
  }
}

export default App;
