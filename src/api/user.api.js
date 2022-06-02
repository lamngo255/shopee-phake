import http from 'src/utils/http';

const URL = 'user';

const userAPI = {
  updateMe(data) {
    return http.put(`${URL}`, data);
  },
};

export default userAPI;
