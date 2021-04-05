import {LOAD_DATA} from './populate.actionTypes'

let loadData = () =>{
    return{
        type: LOAD_DATA,
        payload: 'load data'
    }
}

export {loadData}