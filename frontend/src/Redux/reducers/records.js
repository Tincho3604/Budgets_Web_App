const initialState = {
	records:[],
    horizontalBarTable:[],
    pieGraphic:[],
    barTable:[],
    homeTable:[],
    totalAmountIngress:[],
    totalAmountEgress:[],
    currentMoney:[]
}

function productReducer(state = initialState, action) {
	switch (action.type) {
		
        case "GET_ALL_RECORDS":	
			return {
				...state,
				records: action.payload,
			}
		
        case "GET_AMOUNT_HORIZONTAL_BAR_TABLE":	
			return {
				...state,
				horizontalBarTable: action.payload,
			}
        
        case "GET_AMOUNT_PIE_GRAPHIC":
            return {
                ...state,
                pieGraphic: action.payload
            }
        
        case "GET_BAR_TABLE":
            return {
                ...state,
                barTable: action.payload
            }
        
        case "GET_HOME_TABLE":
            return {   
                ...state,
            homeTable: action.payload    
        }

        case "GET_TOTAL_AMOUNT_INGRESS":
            return {   
                totalAmountIngress: action.payload    
        }
        
        case "GET_TOTAL_AMOUNT_EGRESS":
            return {   
                totalAmountEgress: action.payload    
        }

        case "GET_CURRENT_MONEY":
            return {   
                currentMoney: action.payload    
        }
        default:
			return state
	}
}

export default productReducer;