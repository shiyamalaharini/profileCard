import React from 'react'
import '../CSS/Profile.css'

const Profile = (props) => {
  return (
   <div className="card-container">
    <div className="card">
        <span className='status'>{props.status}</span>
        <img src={props.img} alt="" />
        <h2>{props.name}</h2>
        <h3>{props.place}</h3>
        <p>{props.role}</p>
        <div className="buttons">
            <button className="btn1">Follow</button>
            <button className="btn2">Message</button>
        </div>
        <div className="skills">
            <h3>Skills</h3>
            <ul>
            { props.skill.map((skills,index)=>{
                return (
                    <li>{skills}</li>
                )
               })}
               

            </ul>
        </div>

    </div>
   </div>
  )
}

export default Profile
