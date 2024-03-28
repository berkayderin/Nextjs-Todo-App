import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer, toast } from 'react-toastify'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Todo App'
}

export const revalidate = 0

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning={true}>
				<ToastContainer />
				{children}
			</body>
		</html>
	)
}
