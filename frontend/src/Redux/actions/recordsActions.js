import Axios from 'axios';
import axios from 'axios';
import {ROUTE_API} from "../../Constants/index";


export const createRecord = (data) => {
    Axios.post(`${ROUTE_API}/createRegister`, {
        concept: data.concept,
        amount: data.amount,
        date: data.date,
        type: data.type
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}


export const getAllRecords = () => {
    return async (dispatch, getState) => {
        const response = await axios.get(`${ROUTE_API}/getAllRegisters`)
        dispatch({
            type: "GET_ALL_RECORDS",
            payload: response.data
        })
    }
}



export const getFirstTenRecords = () => {
    return async (dispatch, getState) => {
        const response = await axios.get(`${ROUTE_API}/getFirstTenRecords`)
        dispatch({
            type: "GET_FIRST_TEN_RECORDS",
            payload: response.data
        })
        return response.data
    }
}


