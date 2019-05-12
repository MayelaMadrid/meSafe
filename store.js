import { createStore } from 'redux';
import reducer from './src/reducer';


// const store = createStore(reducer, {
//   suggestionList: [],
//   categoryList: [],
// })




const store = createStore(reducer)


export { store };