import { sendToast } from './sendToast'

// Genel bir hata yapısı tanımlayalım.
interface GeneralError {
	response?: {
		status?: number
		data?: {
			message?: string
		}
	}
}

export const showErrorMessage = (error: GeneralError, customMessage: string = 'Bir hata oluştu') => {
	if (error.response && error.response.status === 500) {
		sendToast(customMessage, false)
	} else {
		sendToast(error.response?.data?.message || customMessage, false)
	}
}
