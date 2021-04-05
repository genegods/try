import {LOAD_DATA} from './populate.actionTypes'

export const POPULATE_KEY = 'populateStore'

let initialState = [
    {
        id: 'LX001',
        firstName: 'John',
        lastName: 'Doe',
        marks: 80,

    },
    {
        id: 'LX002',
        firstName: 'Anna',
        lastName: 'Challie',
        marks: 85,

    },
    {
        id: 'LX003',
        firstName: 'Francis',
        lastName: 'Rain',
        marks: 77,

    },
    {
        id: 'LX004',
        firstName: 'Chris',
        lastName: 'Biggie',
        marks: 72,

    },
    {
        id: 'LX005',
        firstName: 'Alex',
        lastName: 'Max',
        marks: 69,

    }
]

let populateReducer = (state = initialState, action) =>{
    let {type, payload} = action
    switch(type){
        case LOAD_DATA:
            return{
                ...state,
                ...payload

            }
            default: return state
    }

}

export {populateReducer}