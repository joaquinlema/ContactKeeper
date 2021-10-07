import http from "../helpers/axiosInstance";

const seccion = 'contacts';

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
  return http.put(`/${seccion}/:id`,data);
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