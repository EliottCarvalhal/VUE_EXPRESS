//connect frontend with backend

import axios from 'axios'

export const Api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000/api'
})
