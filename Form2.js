import React from 'react'
import  './Form.css'
const Form2 = () => {
  return (
    <nav className="navbar">
      <div className ="Nav">
        <div className="nav-logo">Online Judo Demo</div>
        <ul className="nav-menu">
          <li className="nav-item">
            <img src="https://e7.pngegg.com/pngimages/1016/542/png-clipart-black-house-house-computer-icons-home-automation-kits-real-estate-home-icon-angle-building-thumbnail.png"/>
            Home
          </li>
          <li className="nav-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/9dots.svg/640px-9dots.svg.png"/>
            Problem</li>
          <li className="nav-item">
           <img src="https://w7.pngwing.com/pngs/693/336/png-transparent-black-trophy-illustration-computer-icons-prize-competition-symbol-trophy-medal-sport-logo.png"/>Contest   
          </li>
          <li className="nav-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeNxwHSz1j2SmFrLk09LYF0jD49yLibt5d0SZxBqrd9A&s"/>
            Status</li>
          <li className="nav-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkKVz0khdcdVLN9U8rflzDFyHOpB0uC9s_fO_SZKZlCw&s"/>
            Rank
          </li>
          <li className="nav-item">
            <img src="https://png.pngtree.com/png-vector/20190418/ourmid/pngtree-vector-information-icon-png-image_956051.jpg"/>
            About
          </li>
        </ul>
      </div>
      <div className="Buttons">
        <button> Login</button>
        <button>Register</button>
      </div>
  </nav>
 
  )
}
export default Form2