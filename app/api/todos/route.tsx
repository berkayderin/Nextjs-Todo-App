import {
	DocumentData,
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	orderBy,
	query,
	updateDoc
} from 'firebase/firestore'

import db from '@/app/firebaseConfig'

interface Todos {
	id: string
	name: string
	description: string
	isCompleted: boolean
	createdAt: string
	updatedAt: string
}

// todo eklemek için POST metodu
export async function POST(request: Request): Promise<Response> {
	const { name, description } = await request.json()

	try {
		const docRef = await addDoc(collection(db, 'todos'), {
			name,
			description,
			isCompleted: false,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString()
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

// todo listesini getirmek için GET metodu
export async function GET(): Promise<Response> {
	const todos: Todos[] = []

	const querySnapshot = await getDocs(collection(db, 'todos'))

	querySnapshot.forEach((doc) => {
		const data = doc.data() as DocumentData

		todos.push({
			id: doc.id,
			name: data.name,
			description: data.description,
			isCompleted: data.isCompleted,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt
		})
	})

	return new Response(JSON.stringify(todos), {
		status: 200
	})
}
