import axios from 'axios'

const Service = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true // api oturum koruması için CORS
})

export default Service
