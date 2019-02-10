import React from 'react';
import { connect } from "react-redux";

import resources from '../config/resources.json';
import { sliceAnalytics, sliceTools } from './Resources';


function filter_resources(field, value) {
  if (field && typeof(field) == 'object') {
    return field.map(i => i.toLowerCase()).includes(value.toLowerCase());
  } else {
    return (
      field && field.toLowerCase().includes(value.toLowerCase())
    );
  }
}


class Filters extends React.Component {

  render() {
    const analytics = resources.analytics.filter(
      item => filter_resources(item[this.props.filterKey], this.props.filterValue)
    );
    const tools = resources.tools.filter(
      item => filter_resources(item[this.props.filterKey], this.props.filterValue)
    );
    return(
      <section className='section__body'>
        <div className='inner'>
          <div className='filter-title'>
            <h2>Filtering by <i>{this.props.filterKey}</i>: <i>"{this.props.filterValue}"</i></h2>
          </div>
          <div className="resource-section">
            <h4>Core analytics tools</h4>
            <div>
              {sliceAnalytics(analytics)}
            </div>
            <h4>More OSM tools</h4>
            <div>
              {sliceTools(tools)}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Filters = connect(
  (state, props) => ({
    filterKey: props.match.params.key,
    filterValue: props.match.params.value
  })
)(Filters);

export {
  Filters
};
