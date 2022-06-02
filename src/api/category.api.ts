import http from '@/utils/http';

const URL = 'categories';

const categoryAPI = {
  getCategories() {
    return http.get(URL);
  },
};

export default categoryAPI;
