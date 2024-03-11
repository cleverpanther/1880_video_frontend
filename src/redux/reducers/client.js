import { action_type } from "redux/action_type";

// ==============================|| COMBINE REDUCER ||============================== //
// **  Initial State
const initialState = {
    clientData: [],
    selectClient: -1,
  }
  
const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.FETCH_CLIENT:
            return {...state, clientData: action.clientData}

        case action_type.FETCH_CLIENT_BY_ID:
            return {...state, clientData: action.clientData}

        case action_type.ADD_CLIENT:
            let aClient = [...state.clientData];
            aClient.push(action.clientData);
            return { ...state, clientData: aClient }
        
        case action_type.SET_SELECT_CLIENT:
            return {...state, selectClient: action.client_id}
                
        case action_type.DELETE_CLIENT:
            const client_id = action.client_id;
            let rClient = [...state.clientData];
            for (let i=0; i<rClient.length; i++) {
            const item = rClient[i];
            if (item.id == client_id) {
                rClient.splice(i, 1);
                break
            }
            }
            return { ...state, clientData: rClient }
            
        default:
            return state
    }
}


export default clientReducer;
