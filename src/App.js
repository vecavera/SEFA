import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './component/Homepage';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;