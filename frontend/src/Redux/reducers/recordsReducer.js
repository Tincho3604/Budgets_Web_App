const initialState = {
	records:[],
	firstTenRecords:[],
	secondRecords:[]
}

function recordsReducer(state = initialState, action) {
	switch (action.type) {
		
        case "GET_ALL_RECORDS":	
			return {
            
				...state,
				records: action.payload,
				secondRecords:action.payload,
			}
            
        case "GET_FIRST_TEN_RECORDS":	
			return {
				...state,
				firstTenRecords: action.payload,
			}    

        case "EDIT_RECORD":
            return {
                ...state,
                records: action.payload
            }
			case "DELETE_RECORD":
				return {
			    ...state,
			    //secondRecords: state.secondRecords.filter(ex => ex.id !== action.payload.id)
			}                           
        default:
			return state
	}

}

export default recordsReducer;