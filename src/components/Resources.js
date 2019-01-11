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
        <h4>More OSM tools</h4>
        <div>
          {sliceTools(resources.tools)}
        </div>
        <h4>Core contributors</h4>
        <div>
          {sliceContributors(resources.contributors)}
        </div>
      </div>
    );
  }
}


function sliceContributors( tools ) {
  var lines = []
  for (let i = 0; i < tools.length; i += 3) {
    lines.push(<Line lineItems={tools.slice(i, i+3)} key={i} type={'contributors'} />);
  }
  return lines;
}


function sliceTools( tools ) {
  var lines = []
  for (let i = 0; i < tools.length; i += 3) {
    lines.push(<Line lineItems={tools.slice(i, i+3)} key={i} type={'tools'} />);
  }
  return lines;
}


function sliceAnalytics( analytics ) {
  var lines = []
  for (let i = 0; i < analytics.length; i += 2) {
    lines.push(<Line lineItems={analytics.slice(i, i+2)} key={i} type={'analytics'} />);
  }
  return lines;
}


class Line extends React.Component {
  get_content(project, n) {
    if (this.props.type === 'analytics') {
      return <AnalyticsProject data={project} key={n} order={n} />;
    } else if (this.props.type === 'tools') {
      return <Tool data={project} key={n} order={n} />;
    } else if (this.props.type === 'contributors') {
      return <Contributor data={project} key={n} order={n} />;
    }
  }
  render() {
    return(
      <div className="resource-line">
        {this.props.lineItems.map(
          (project, n) => this.get_content(project, n)
      )}
    </div>
  );
  }
}


class AnalyticsProject extends React.Component {
  render() {
    const position = this.props.order % 2 === 0 ? 'left' : 'right';
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

class Tool extends React.Component {
  render() {
    var position;
    if (this.props.order % 3 === 0) {
      position = 'left';
    } else if (this.props.order % 3 === 1) {
      position = 'none';
    } else {
      position = 'right';
    }
    return(
      <div className={`osm-tool ${position}`}>
        <div className="project-title-section">
          <h3 className="project-title left">{this.props.data.name}</h3>
        </div>
        <div className="tool-description">
          <p>
            {this.props.data.description.length > 140
              ? this.props.data.description.slice(0,140) + '...'
              : this.props.data.description
            }
          </p>
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

class Contributor extends React.Component {
  render() {
    var position;
    if (this.props.order % 3 === 0) {
      position = 'left';
    } else if (this.props.order % 3 === 1) {
      position = 'none';
    } else {
      position = 'right';
    }
    return(
      <div className={`contributor ${position}`}>
        <div className="contributor-logo-section">
          <a href={this.props.data.url}>
            <img class="contributor-logo" src={this.props.data.image} alt={`${this.props.data.name} logo`} />
          </a>
        </div>
        <div className="contributor-description">
          <p>{this.props.data.description}</p>
        </div>
      </div>
    );
  }
}
