import React, { Component } from 'react';
import { data } from '../data.js'
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
    this.state = data.data.features;
  }
  render() {
    return (

      <div>
        <h1 className="heading"> {data.data.metadata.title}</h1>

        <div className="hometable">{
          <table>
            <thead>
              <th> Place</th>
              <th>Magnitude</th>
              <th>Time</th>
            </thead>
            <tbody>
              {
                this.state.map((dynamicData) =>
                  <tr>
                    <td><Link to={`/detail/${dynamicData.properties.place}`}>{dynamicData.properties.place}</Link></td>
                    <td className="paddingLeft20">{dynamicData.properties.mag}</td>
                    <td>{new Date(dynamicData.properties.time).toISOString({ hour: 12 })}</td>
                  </tr>
                )}
            </tbody>
          </table>}
        </div>
      </div>

    );
  }
}

export default Home;