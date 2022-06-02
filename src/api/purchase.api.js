import { purchaseStatus } from '@/constants/status';
import http from '@/utils/http';

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
  deletePurchases(data) {
    return http.delete(`${URL}`, data);
  },
  buyPurchases(data) {
    return http.post(`${URL}/buy-products`, data);
  },
};

export default purchaseAPI;
