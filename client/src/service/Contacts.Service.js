import axios from "axios";
import http from "../helpers/axiosInstance";

const seccion = 'contacts';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

const getAll = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0Y2U4MjE4NGI2YWEyNjA1NzU4ZmJkIn0sImlhdCI6MTYzMzYzODg4NCwiZXhwIjoxNjMzNjc0ODg0fQ.vK8oktRorp-CJWpgJFgAOuHCpeJ7kK4hXxEL45Az3XU";
    axios.defaults.headers.common['x-auth-token'] = token;
    return axios.get(`/api/${seccion}`);
};

const getById = id => {
    return http.get(`/${seccion}/getById?Id=${id}`);
};

const create = data => {

    return http.post(`/${seccion}`, data, config);
};

const update = (data) => {
    return http.put(`/${seccion}/:id`, data, config);
};

const remove = (data) => {
    return http.delete(`/${seccion}/:id`, data);
};

const ContactService = {
    getAll,
    getById,
    create,
    update,
    remove,
};

export default ContactService;