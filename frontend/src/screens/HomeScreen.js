import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'


const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword
    
    const pageNumber =  match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products, page, pages } = productList

    useEffect(() => {
      dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
      <>
      <Meta />
      {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light'>
        Go Back
        </Link>}
        <br />
          <h1 style={{'textAlign': 'center'}}>About Kiki Lopez</h1>
          <p style={{'textAlign': 'center'}}>Pabst live-edge prism cardigan hoodie ramps glossier farm-to-table. 
          Godard enamel pin vegan freegan fixie, franzen iPhone intelligentsia unicorn banjo ethical try-hard +1 lomo four dollar toast. 
          Kinfolk meggings freegan, polaroid brooklyn tote bag air plant microdosing neutra chambray gastropub before they sold out gochujang snackwave truffaut. 
          Chia kitsch cloud bread swag cold-pressed, keytar pug. Humblebrag marfa cliche gochujang twee. 
          Helvetica sustainable echo park copper mug.</p>
          <br />
          <p style={{'textAlign': 'center'}}>-Kiki</p>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
            <>
            <Row>
            {products.map((product) => (
                    <Col key={ product._id }sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
            ))}     
          </Row>
          <Paginate 
            pages={pages} 
            page={page} 
            keyword={keyword ? keyword : ''}/>
          </>
          )}  
      </>
    )
}

export default HomeScreen
