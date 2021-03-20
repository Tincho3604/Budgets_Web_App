import axios from 'axios';
import https from 'https';
import {previewMode} from "../../Config/previewMode";
export default axios.create({
    baseURL:'http://localhost:3000',
    responseType: 'json',
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
}) 
if(previewMode){
  https.globalAgent.options.rejectUnauthorized = false;
} 