import {
	DocumentData,
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	orderBy,
	query,
	updateDoc
} from 'firebase/firestore'

import { NextResponse } from 'next/server'
import db from '@/app/firebaseConfig'

interface IParams {
	id: string
}

// todo silme işlemi
export async function DELETE(request: Request, { params }: { params: IParams }) {
	const { id } = params

	if (!id) return NextResponse.error()
	await deleteDoc(doc(db, 'todos', id))

	return NextResponse.json({ message: 'Görev başarıyla silindi!' }, { status: 200 })
}

// todo detay getirme işlemi
export async function GET(request: Request, { params }: { params: IParams }) {
	const { id } = params

	if (!id) return NextResponse.error()

	const docRef = doc(db, 'todos', id)
	const docSnap = await getDoc(docRef)

	if (docSnap.exists()) {
		let todoData = docSnap.data()
		return NextResponse.json({ id: docSnap.id, ...todoData })
	} else {
		return NextResponse.json({ error: 'Görev detayı bulunamadı.' }, { status: 404 })
	}
}

// todo güncelleme işlemi
export async function PUT(request: Request, { params }: { params: IParams }) {
	const { id } = params
	if (!id) return NextResponse.error()

	const requestBody = await request.json()
	const { name, description, isCompleted } = requestBody

	const todoRef = doc(db, 'todos', id)
	try {
		await updateDoc(todoRef, {
			name,
			description,
			isCompleted
		})

		return NextResponse.json({ message: 'Görev başarıyla güncellendi!' }, { status: 200 })
	} catch (error) {
		return NextResponse.json({ error: 'Görev güncelleme hatası!' }, { status: 500 })
	}
}
