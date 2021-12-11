import './App.css';
// import background from "./assets/garden2.jpg"
import Apples from './components/Apples';
import Basket from './components/Basket';
import Tree from './components/Tree';
// import {useState} from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from './redux/reducer';
import initialState from './redux/store';

function App() {

// const[value, setValue] = useState(false)
// const changeValue = ()=>{
//       setValue(true)
//   }

const store = createStore(reducer, initialState)

  return (    
    <Provider store={store}>
    <div className="App">      
      <Tree/>
      <Apples/>      
      <Basket/>
    </div>    
    
    </Provider>
  );
}

export default App;
