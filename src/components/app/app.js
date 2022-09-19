
import { Component } from 'react';
import StartPage from '../start-page/start-page';
import './app.scss';

class App extends Component {
  importAll = (r) => {
    return r.keys().map(r);
  }

  render(){
    return (
      <div className='app'>
        <StartPage importImages={this.importAll}/>
      </div>
    );
  }
}

export default App;