import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-e9b58/us-central1/api' //the api(cloud function) url from functions/index.js
});
export default instance; 