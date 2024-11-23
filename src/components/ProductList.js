import React, { Component } from 'react'
import Title from './Title'

import { ProductConsumer } from '../context'
import Products from './Products'
import ModalComponent from './Cart/ModalComponent'
import ReviewCard from './ReviewCard'
import DetailedArticleCard from './DetailedArticleCard'

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: true,
    }
  }

  openModal = () => {
    console.log('Opening Modal')
    this.setState({ showModal: true })
  }

  closeModal = () => {
    console.log('Closing Modal')
    this.setState({ showModal: false })
  }
  render() {
    const { showModal } = this.state
    const data = [
      {
        title: 'Jane Rose',
        description: 'Great product, highly recommended!',
        image: 'https://via.placeholder.com/300x200', // Replace with your image URL
      },
      {
        title: 'John Doe',
        description: 'Excellent quality and fast delivery.',
        image: 'https://via.placeholder.com/300x200',
      },
      // Add more card data here
    ]

    const articles = [
      {
        title: 'Article 1',
        subtitle: 'A brief description of Article 1.',
        rating: 5,
      },
      {
        title: 'Article 2',
        subtitle: 'A brief description of Article 2.',
        rating: 4,
      },
      {
        title: 'Article 2',
        subtitle: 'A brief description of Article 2.',
        rating: 4,
      },
    ]

    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='conatiner'>
            <Title name='Our' title='Products' />
            <div className='row'>
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Products key={product.id} product={product} />
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
          <div className='conatiner'>
            <Title name='New' title='Arrivals' />
            <div className='row'>
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Products key={product.id} product={product} />
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
          <div className='conatiner'>
            <Title name='Best' title='Sellers' />
            <div className='row'>
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Products key={product.id} product={product} />
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
          <div className='conatiner'>
            <Title name='Customer' title='Reviews' />
            <div className='row'>
              <ReviewCard data={data} />
            </div>
          </div>

          <div className='conatiner'>
            <Title name='Latest' title='Articles' />
            <div className='row'>
              <DetailedArticleCard articles={articles} />
            </div>
          </div>
          <div className='conatiner'>
            <Title name='Latest' title='Articles' />
            <div className='row'>
              <DetailedArticleCard articles={articles} />
            </div>
          </div>
        </div>
        <ModalComponent show={showModal} closeModal={this.closeModal} />
      </React.Fragment>
    )
  }
}

export default ProductList
