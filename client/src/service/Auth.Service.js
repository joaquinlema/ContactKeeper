import http from "../helpers/axiosInstance";

const seccion = 'auth';

const getAll = () => {
  return http.get(`/${seccion}`);
};

const create = data => {
  return http.post(`/${seccion}`, data);
};

const AuthService = {
  getAll,
  create,
};

export default AuthService;