import React from 'react'
import "./style.css"


export default function Home() {
  return (
    <div className='container'>

      <div className='container-left'>

        <div className='container-left-text'>
          <h4 className='container-left-text-name'>Hello I'm Mousbah</h4>
          <h1 className='container-left-text-content'>Full stack Developer </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis.
             Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum
              diam.
          </p>
        </div>

      </div>

      <div className='container-right'>
        <div className='container-right-img'>
        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" className='profile-img' alt="alternatetext"></img>
        </div>
      </div>
        
    </div>
  )
}
