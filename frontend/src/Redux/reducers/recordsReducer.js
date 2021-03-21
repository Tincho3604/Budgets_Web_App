const initialState = {
	records:[],
}

function recordsReducer(state = initialState, action) {
	switch (action.type) {
		
        case "GET_ALL_RECORDS":	
			return {
				...state,
				records: action.payload,
			}
        default:
			return state
	}

}

export default recordsReducer;