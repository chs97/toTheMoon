import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://ttmoon.and-who.cn/',
})
const token = window.localStorage.getItem('token')
if (token) instance.defaults.headers.common.token = token
export default instance