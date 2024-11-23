import React from 'react'
import './stat.css'

const StatCard = ({ title, value, percentage }) => {
  return (
    <div className='bordered-container'>
      <h4>{title}</h4>
      <h2>{value}</h2>
      <h5 style={{ color: percentage >= 0 ? 'green' : 'red' }}>
        {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
      </h5>
    </div>
  )
}

export default StatCard
