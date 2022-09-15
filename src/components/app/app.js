
import { Component } from 'react';
import StartPage from '../start-page/start-page';
import './app.scss';

class App extends Component {
  render(){
    return (
      <div className='app'>
        <StartPage/>
      </div>
    );
  }
}

export default App;