import React from 'react';
import './settings.css';
import SideBar from '../../components/sidebar/SideBar';

const Settings = () => {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder='Safak' />
          <label>Email</label>
          <input type="email" placeholder='safak@gmail.com' />
          <label>Password</label>
          <input type="password" />
          <button className='settingsSubmitButton'>Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  )
}

export default Settings;
