const initialState = {
	records:[],
	firstTenRecords:[]
}

function recordsReducer(state = initialState, action) {
	switch (action.type) {
		
        case "GET_ALL_RECORDS":	
			return {
            
				...state,
				records: action.payload,
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
        default:
			return state
	}

}

export default recordsReducer;