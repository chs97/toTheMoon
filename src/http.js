import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://ttmoon.and-who.cn/',
})

export default instance