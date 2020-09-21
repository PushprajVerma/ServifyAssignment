import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import appConfig from './config/config';

function App() {
  return (
    <div className="App">
      <Header {...appConfig}/>
      <Body {...appConfig}/>
      <Footer {...appConfig}/>
    </div>
  );
}

export default App;
