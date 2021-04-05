import React from 'react'
import './App.css'
import MainView from './Components/MainView'
import { Provider } from 'react-redux'
import { store } from './Store'

function App() {

  return (
    <div className="app">
    <Provider store={store}>
        <MainView /> 
    </Provider>
      
    </div>
  );
}

export default App;