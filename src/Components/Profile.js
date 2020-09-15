import React, { Component } from 'react';
import { data } from '../data.js'


class Profile extends Component {

  render() {
    return (

      <div >
        <h3 className="profiletitle">Profile</h3>
        <img className="profileImg" src={data.profile.avatarImage} alt="profileImage" />

        <h4 className="profiledatahead">first name</h4>
        <p className="profiledata">{data.profile.firstName}</p>

        <h4 className="profiledatahead">last name</h4>
        <p className="profiledata">{data.profile.lastName}</p>
        
        <h4 className="profiledatahead">phone</h4>
        <p className="profiledata">{data.profile.phone}</p>

        <h4 className="profiledatahead">email</h4>
        <p className="profiledata" >{data.profile.email}</p>

        <h4 className="profiledatahead1" >bio</h4>
        <p className="profiledata1" style={{ width: 200 }}>{data.profile.bio}</p>
      </div>
    );
  }
}

export default Profile;