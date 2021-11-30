import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-e9b58.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-e9b58/us-central1/api' //the api(cloud function) url from functions/index.js use for debuggin
});
export default instance; 