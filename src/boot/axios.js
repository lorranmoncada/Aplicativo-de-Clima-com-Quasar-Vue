import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather'
})
export default ({ Vue }) => {
    Vue.prototype.$axios = axiosInstance
}
export { axiosInstance }





/* import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

 */