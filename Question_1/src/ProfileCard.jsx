import React from 'react'

function ProfileCard(props) {
  return (
    <div className='profile-card'>
        <img src={props.img} alt={` This is ${props.name}'s profile picture`} />
        <p>Name: {props.name}</p>
        <p>Job Title: {props.job_title}</p>
        <p>Contact info: {props.contact_info}</p>
    </div>
  )
}

export default ProfileCard