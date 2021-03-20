import Axios from 'axios';
import axios from 'axios';
import {ROUTE_API} from "../../Constants/index";
import api from '../api/index'



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
                type:"GET_ALL_RECORDS",
                payload:response.data
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


/*
export const getTotalEgress = () => {
    return async (dispatch, getState) => {
        const response = await axios.get(`${ROUTE_API}/getTotalEgress`)
        dispatch({
            type: "GET_TOTAL_AMOUNT_EGRESS",
            payload: response.data
        })
        return response.data
    }
}

export const deleteDessert =id=>async dispatch=>{
    await api.delete(`/api/dessert/delete/${id}`);
    dispatch({
        type:DELETE_DESSERT,
        payload:id
    })
}




return async (dispatch, getState) => {
			const response = await axios.get(`${RUTA_API}/api/orders`)
			const info = response.data.response
			dispatch({
				type: "ALL_ORDERS",
				payload: info
			})
		}







export const getTotalIngress = () => {
    return async (dispatch, getState) => {
        const response = await axios.get(`${ROUTE_API}/getTotalIngress`)
        dispatch({
            type: "GET_TOTAL_AMOUNT_INGRESS",
            payload: response.data
        })
        return response.data
    }
}
*/


export const updateRecords = (value) => {
    return async (dispatch, getState) => {
        const response = await axios.put(`${ROUTE_API}/update/:id`, {
        value: value,
        id: value.id
    })
    console.log("Response DATA", response.data)
    dispatch({
        type: "EDIT_RECORD",
        payload: response.data
    })
        return response.data
    }
}
