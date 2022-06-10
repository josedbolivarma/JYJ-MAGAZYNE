import { Card } from 'antd'
import { useDetails } from 'hooks/useDetails'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import './DetailsProduct.css'

const { Meta } = Card

export function Details() {
  const { singelProduct, addProductToCart } = useDetails()

  return (
    <Card hoverable cover={<img alt='example' src={singelProduct.image} />}>
      <Meta title={singelProduct.name} description={`$${singelProduct.price}`} />
      <button className='addBtnCart'>
        <Link onClick={addProductToCart} to='/cart'>
          Comprar
        </Link>
      </button>
    </Card>
  )
}
