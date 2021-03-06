import http from "../helpers/axiosInstance";

const seccion = 'users';

const getAll = data => {
  return http.post(`/${seccion}`, data);
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

const UsersService = {
  getAll,
  getById,
  create,
  update,
  remove,
};

export default UsersService;