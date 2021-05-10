import {ADD_PASSCAT,FETCH_PASSCAT} from "./passType.js";
const axios = require("axios");


export const addPassCat=(category)=>{
axios.post("http://localhost:5000/add-new-category/add",{passwordCategory:category})
.then=()=>{
    return {
        type:ADD_PASSCAT,
        payload:category
    }
}
}

