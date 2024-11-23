import React from 'react'
import './Card.css' // Optional: for styling the card

const ReviewCard = ({ data }) => {
  return (
    <div className='card-container'>
      {data.map((item, index) => (
        <div className='card' key={index}>
          <img src={item.image} alt={item.title} className='card-image' />
          <div className='card-content'>
            <h3 className='card-title'>{item.title}</h3>
            <p className='card-description'>{item.description}</p>
            <div className='card-rating'>
              {[...Array(5)].map((_, starIndex) => (
                <span key={starIndex} className='star'>
                  ★
                </span>
              ))}
            </div>
            <div className='card-footer'>
              <span role='img' aria-label='thumbs-up'>
                👍
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReviewCard
