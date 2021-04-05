import React from "react";
import "./App.css";
import Populate from "./components/populateFolder/Populate";
import {store} from './redux/store'
import {Provider} from 'react-redux'





const App = () => {
  return (
  
    
    <Provider store={store}>
      <React.Fragment>
        <Populate/> 
      </React.Fragment>
      </Provider>

  );
};

export default App;
