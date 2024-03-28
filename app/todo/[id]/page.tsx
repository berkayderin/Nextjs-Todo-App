'use client'

import { useEffect, useState } from 'react'

import { Container } from 'react-bootstrap'
import Service from '@/global/Service'
import { useParams } from 'next/navigation'

const TodoDetail = () => {
	const [todo, setTodo] = useState(null)
	const [error, setError] = useState('')
	const { id } = useParams()

	const handleFetch = async (id) => {
		try {
			const response = await Service.get(`/api/todos/${id}`)
			const todo = response.data
			setTodo(todo)
		} catch (error) {
			console.error(error)
			setError('Görev yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.')
		}
	}

	useEffect(() => {
		if (id) {
			handleFetch(id)
		}
	}, [id])

	if (!todo) return <p>Loading...</p>

	return (
		<Container className="d-flex flex-column justify-content-center align-items-center mt-5">
			<h1>Görev Detayı</h1>
			{error && <p className="text-danger">{error}</p>}
			{todo ? (
				// Görev detaylarını burada render edin
				<div>{/* Görev detayları */}</div>
			) : !error ? (
				<p>Görev yükleniyor...</p>
			) : null}
		</Container>
	)
}

export default TodoDetail
