import { addDoc, collection } from 'firebase/firestore'

import db from '@/app/firebaseConfig'

export async function POST(request: Request): Promise<Response> {
	const { name, description } = await request.json()

	try {
		const docRef = await addDoc(collection(db, 'tasks'), {
			name,
			description,
			isCompleted: false,
			createdAt: new Date(),
			updatedAt: new Date()
		})

		console.log("Belge ID'si: ", docRef.id)

		return new Response(JSON.stringify({ message: 'Görev başarıyla eklendi!' }), {
			status: 201
		})
	} catch (error) {
		console.error('Error adding document: ', error)
		return new Response(JSON.stringify({ message: 'Görev eklenirken bir hata oluştu.' }), {
			status: 500
		})
	}
}
