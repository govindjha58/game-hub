import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '53a01ee448514dfaa60eea787236a211'
    }
})