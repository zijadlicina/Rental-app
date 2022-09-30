import React from 'react'

function User({user}) {
    const {name, surname, username, contact, location} = user;
  return (
    <div>
      <p>User</p>
      <div className='detail'>
          <h2>{username}</h2>
          <p>{location}</p>
          <p>{contact}</p>
      </div>
    </div>
  );
}

export default User