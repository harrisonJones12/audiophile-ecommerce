import axios from 'axios';

import {getProductsInstock} from '../reducer/reducer'



// fetchTodoById is the "thunk action creator"
export function fetchProducts(url) {
    // fetchTodoByIdThunk is the "thunk function"
    return async function fetchTodoByIdThunk(dispatch) {
        axios.get(url)
        .then(  (response)=> {
          // handle success
          dispatch(getProductsInstock(response))
          console.log(response);
        })
        .catch( (error) =>  {
          // handle error
          console.log(error);
        })
        .finally( () =>  {
          // always executed
        });
    }
  }