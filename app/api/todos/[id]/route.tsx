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
import type { NextApiRequest, NextApiResponse } from 'next'

import { NextResponse } from 'next/server'
import db from '@/app/firebaseConfig'

interface IParams {
	id: string
}

export async function DELETE(request: Request, { params }: { params: IParams }) {
	const { id } = params

	if (!id) return NextResponse.error()
	await deleteDoc(doc(db, 'todos', id))

	return NextResponse.json({ message: 'Görev başarıyla silindi!' }, { status: 200 })
}
