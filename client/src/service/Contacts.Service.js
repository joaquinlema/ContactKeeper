import http from "../helpers/axiosInstance";

const seccion = 'Contacts';

const getAll = () => {
  return http.get(`/${seccion}`);
};

const getById = id => {
  return http.get(`/${seccion}/getById?Id=${id}`);
};

const create = data => {
  return http.post(`/${seccion}`, data);
};

const update = (data) => {
  return http.post(`/${seccion}/edit`,data);
};

const remove = (data) => {
  return http.post(`/${seccion}/deleteById`, data);
};

const ContactService = {
  getAll,
  getById,
  create,
  update,
  remove,
};

export default ContactService;