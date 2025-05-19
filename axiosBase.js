import axios from 'axios'

const axiosBase=axios.create({
    baseURL:'https://reminder-app-backend-oldu.onrender.com'
})

export default axiosBase;