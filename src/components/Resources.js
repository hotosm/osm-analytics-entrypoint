import React from 'react';

import resources from '../config/resources.json';


export class Resources extends React.Component {

  render() {
    console.log(resources);
    return(
      <div>
        <h4>Core analytics tools</h4>
        <div>
          {resources.analytics.map(
            (project, n) => <AnalyticsProjects data={project} key={n} />
            )
          }
        </div>
      </div>
    );
  }
}


class AnalyticsProjects extends React.Component {
  render() {
    return(
      <div>
        <div>
          <h3>{this.props.data.name}</h3>
          <img src={this.props.data.image}
            alt={`screenshot of ${this.props.data.name}`}
          />
        </div>
        <div>
          <span>{this.props.data.description}</span>
          <a href={this.props.data.url}>{this.props.data.url}</a>
        </div>
      </div>
    );
  }
}
