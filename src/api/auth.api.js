import http from 'src/utils/http';

const authApi = {
  register(data) {
    return http.post('register', data);
  },
  login(data) {
    return http.post('login', data);
  },
};

export default authApi;
