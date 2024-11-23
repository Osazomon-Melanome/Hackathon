import React from 'react'
import './DetailedArticleCard.css' // Optional: for styling

const DetailedArticleCard = ({ articles }) => {
  return (
    <div className='detailed-article-container'>
      {articles.map((article, index) => (
        <div className='detailed-article-card' key={index}>
          <div className='detailed-article-content'>
            <h3 className='detailed-article-title'>{article.title}</h3>
            <p className='detailed-article-subtitle'>{article.subtitle}</p>
            <div className='detailed-article-rating'>
              {[...Array(5)].map((_, starIndex) => (
                <span key={starIndex} className='star'>
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className='detailed-article-footer'>
            <span
              className='detailed-article-icon'
              role='img'
              aria-label='books'
            >
              📚
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DetailedArticleCard
