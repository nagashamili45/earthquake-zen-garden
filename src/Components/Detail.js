import React, { Component } from 'react';

import { data } from '../data.js'



class Detail extends Component {
  constructor() {
    super();
    this.state = data.data.features;
  }
  render() {
    const { place } = this.props;
    const properties = this.state.find(item => item.properties.place === place).properties;
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>{properties.title}</h3>

        <div className="detailtable">{
          <table >
            <tbody>
              <tr>
                <th>Place</th>
                <td className="detailtabledata">{properties.place}</td>
              </tr>
              <tr>
                <th>Magnitude</th>
                <td className="detailtabledata">{properties.mag}</td>
              </tr>
              <tr>
                <th>Time</th>
                <td className="detailtabledata">{properties.time}</td>
              </tr>
              <tr>
                <th>status</th>
                <td className="detailtabledata">{properties.status}</td>
              </tr>
              <tr>
                <th>tsunami</th>
                <td className="detailtabledata">{properties.tsunami}</td>
              </tr>
              <tr>
                <th>type</th>
                <td className="detailtabledata">{properties.type}</td>
              </tr>
            </tbody>
          </table>}
        </div>
      </div>
    );
  }
}

export default Detail;