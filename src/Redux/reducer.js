const initialState={
    image: '',
    property:'',
    address:'',
    city:'',
    state:'',
    zip:null,
    mortgage_amount: 0,
    monthly_rent: 0
}

const UPDATE_IMAGE = 'UPDATE_IMAGE'
const UPDATE_PROPERTY = 'UPDATE_PROPERTY'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATE = 'UPDATE_STATE'
const UPDATE_ZIP = 'UPDATE_ZIP'
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
const UPDATE_RENT = 'UPDATE_RENT'

export default function Reducer(State = initialState,action){
    switch(action.type){
        case UPDATE_IMAGE:
        return Object.assign({}, State, {image: action.payload})
        case UPDATE_PROPERTY:
        return Object.assign({},State,{property: action.payload})
        case UPDATE_ADDRESS:
        return Object.assign({},State,{address:action.payload})
        case UPDATE_CITY:
        return Object.assign({},State,{city:action.payload})
        case UPDATE_STATE:
        return Object.assign({},State,{state:action.payload})
        case UPDATE_ZIP:
        return Object.assign({},State,{zip:action.payload})
        case UPDATE_MORTGAGE:
        return Object.assign({},State,{mortgage_amount:action.payload})
        case UPDATE_RENT:
        return Object.assign({},State,{monthly_rent:action.payload})
        

    default: return State
    }
}
export function updateMortgage(mortgage_amount){
    return{
        type:UPDATE_MORTGAGE,
        payload: mortgage_amount

    }
}
export function updateRent(monthly_rent){
    return{
        type: UPDATE_RENT,
        payload: monthly_rent
    }
}

export function updateImage(image){
    return{
        type: UPDATE_IMAGE,
        payload: image
    }
}

export function updateProperty(property){
    return{
        type: UPDATE_PROPERTY,
        payload:property
    }
}

export function updateAddress(address){
    return {
        type: UPDATE_ADDRESS,
        payload:address
    }
}

export function updateCity(city){
    return{
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state){
    return{
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZip(zip){
    return{
        type: UPDATE_ZIP,
        payload: zip
    }
}