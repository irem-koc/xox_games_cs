import React from 'react'
import "./MainPage.css"

const MainPage = () => {
  return (
    <div className='middle-section'>
        <input className='mail-input' type="text" placeholder='example@example.com' />
        <button className='notify-btn'>Get Notified</button>
    </div>
  )
}

export default MainPage