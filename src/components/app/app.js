
import { Component } from 'react';
import FirstBlock from '../start-page/start-page';
import './app.scss';

class App extends Component {
  render(){
    return (
      <div className='app'>
        <FirstBlock/>
      </div>
    );
  }
}

export default App;