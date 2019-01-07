import React from 'react';

import resources from '../config/resources.json';


export class Resources extends React.Component {

  render() {
    return(
      <div className="resource-section">
        <h4>Core analytics tools</h4>
        <div>
          {sliceAnalytics(resources.analytics)}
        </div>
      </div>
    );
  }
}


function sliceAnalytics( analytics ) {
  var lines = []
  for (let i = 0; i < analytics.length; i += 2) {
    lines.push(<AnalyticsLine lineItems={analytics.slice(i, i+2)} key={i} />);
  }
  return lines;
}


class AnalyticsLine extends React.Component {
  render() {
    return(
      <div className="resource-line">
        {this.props.lineItems.map(
          (project, n) => <AnalyticsProjects data={project} key={n} order={n} />
      )}
    </div>
  );
  }
}


class AnalyticsProjects extends React.Component {
  render() {
    const position = this.props.order % 2 === 0 ? 'left mr' : 'right ml';
    const style = {backgroundImage: 'url(' + this.props.data.image + ')'};
    return(
      <div className={`analytics-project ${position}`}>
        <div className="project-title-section">
          <h3 className="project-title left">{this.props.data.name}</h3>
        </div>
        <div className="project-thumb-section" style={style}>
        </div>
        <div className="project-description">
          <p>{this.props.data.description}</p>
          <a className="link-section" href={this.props.data.url}>
            <p className="project-link">
              {this.props.data.url}
            </p>
          </a>
        </div>
      </div>
    );
  }
}
