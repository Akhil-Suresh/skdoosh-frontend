import axios from 'axios'
import {
    BASE_URL,
    PORT
} from './config'


export default axios.create({
    baseURL: `${BASE_URL}:${PORT}/`
});

