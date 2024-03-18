import axios from "axios";

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api'
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

// до функції підчеплюємо then/catch
export function getPortfolioReviews() {
    return axios.get('/reviews');
}

// до функції підчеплюємо then/catch
export function getPortfolioRequest(obj) {
  return axios.post('/requests', obj);
}
