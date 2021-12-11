import './App.css';
// import background from "./assets/garden2.jpg"
import Apples from './components/Apples';
import Basket from './components/Basket';
import Tree from './components/Tree';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from './redux/reducer';
import initialState from './redux/store';

function App() {

const store = createStore(reducer, initialState) //redux'la props gönderimi için önce state'i tutacağımız store'u oluşturduk.

  return ( //divi provider ile sarmallayıp, state'in yer aldığı store'u props olarak child component'lara gönderiyoruz.
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
