import { purchaseStatus } from 'src/constants/status';
import http from 'src/utils/http';

const URL = 'purchases';

const purchaseAPI = {
  addToCart(data) {
    return http.post(`${URL}/add-to-cart`, data);
  },
  getCartPurchases() {
    return http.get(URL, {
      params: {
        status: purchaseStatus.inCart,
      },
    });
  },
  updatePurchase(data) {
    return http.put(`${URL}/update-purchase`, data);
  },
};

export default purchaseAPI;
