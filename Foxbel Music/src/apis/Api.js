import axios from "axios";

const Api = axios.create({
    baseURL: 'http://ws.audioscrobbler.com/2.0/'
});

export default Api;