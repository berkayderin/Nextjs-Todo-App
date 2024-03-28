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

import db from '@/app/firebaseConfig'
