import axios from 'axios';
import {ROUTE_API} from "../../Constants/index";



export const getAllRecords = () => {
    return async (dispatch, getState) => {
    const response = await axios.get(`${ROUTE_API}/getAllRegisters`)
            dispatch({
                type:"GET_ALL_RECORDS",
                payload:response.data
            })
        }   
    }   


export const updateRecords = (value) => {
        axios.put(`${ROUTE_API}/update/:id`, {
        value: value,
        id: value.id
    })
    
}
