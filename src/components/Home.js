import React from 'react';
import { Link } from 'react-router-dom';

import { Resources } from './Resources';


export class Home extends React.Component {
  render() {
    return(
      <div className='about-page'>
        <div className='section__header'>
          <div className='inner'>
            <div className='section__header__text'>
              <p>
                OpenStreetMap Analytics is a Suite of tools authored by a diverse
                community of developers and organizations.
              </p>
              <p>
                These tools help people explore how the world is mapped, analyze
                mapping data, and find gaps in OSM data.
              </p>
            </div>
            <div className="section__header__button">
              <Link to="/" className='button button--small button--tertiary-filled link-forward'>
                Explore the tools
              </Link>
            </div>
            <hr />
          </div>
        </div>
        <section className='section__body'>
          <div className='inner'>
            <Resources />
          </div>
        </section>
        <section className='footer'>
          <div className='inner'>
            <img src='images/logo.png' alt="Relative Completeness"></img>
            <p>
              This service is created the <a href='https://hotosm.org/'>Humanitarian OpenStreetMap Team</a> and is open source. If you are interested in getting involved don’t hesitate <a href='https://github.com/hotosm/osm-analytics-entrypoint'>reach out!</a>
            </p>
          </div>
        </section>
    </div>
    );
  }
}
