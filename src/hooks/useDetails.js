import { AddToCart } from 'actions/actionCart'
import { productCollection } from 'actions/actionProduct'
import { getDocs } from 'firebase/firestore'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

export function useDetails() {
	const [singelProduct, setSingelProduct] = useState({})
	const { id } = useParams()

	useEffect(() => {
		const getProduct = async () => {
			const firebaseProducts = await getDocs(productCollection)
			const listProducts = firebaseProducts.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

			const product = listProducts.find((item) => item.id === id)
			setSingelProduct(product)
		}

		getProduct()
	}, [id])

	const dispatch = useDispatch()
	const addProductToCart = useCallback(
		() => dispatch(AddToCart(singelProduct)),
		[dispatch, singelProduct]
	)

	return { singelProduct, addProductToCart }
}
