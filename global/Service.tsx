import axios from 'axios'

const Service = axios.create({
	withCredentials: true
})

export default Service
