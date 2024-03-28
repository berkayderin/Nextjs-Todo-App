import { toast } from 'react-toastify'

export const sendToast = (message: string, success: boolean): void => {
	toast(message, {
		type: success ? 'success' : 'error',
		position: 'top-right',
		autoClose: success ? 2000 : 3000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined
	})
}
