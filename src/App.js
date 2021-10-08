import { Redirect, Route } from 'react-router';
import Main from './Main/Main';
import NavBar from './NavBar/NavBar';
import { Component } from 'react';
import StaffContainer from './Staff/staffContainer';

class App extends Component {

  render() {

  return (
    <div >
      <NavBar />
      <Route path='/main' render={() => <Main />} />
      <Route path='/staff' render={() => <StaffContainer/>} />
      <Redirect from='/' to='/main'/>
    </div>
  )
}
}

export default App;
