import React from 'react';
import { withRouter } from 'react-router'


class Header extends React.Component {
  render() {
    return(
      <header className='page__header'>
        <div className='page__header-inner'>
          <a className='project__name-link' href='/'><h1>OpenStreetMap Analytics</h1></a>
          <div className='page__header__links'>
            <a className={this.props.location.pathname === '/about' ? `active` : `inactive`} href='/#/about'>
              Tools
            </a>
            <a className={this.props.location.pathname === '/about' ? `active` : `inactive`} href='/#/about'>
              About
            </a>
            <a className={this.props.location.pathname === '/about' ? `active` : `inactive`} href='/#/about'>
              Contributors & Organizations
            </a>
          </div>
          <div className='page__header-hot-logo'>
            <span>Supported by: </span>
            <a href='https://hotosm.org' target='_blank' rel="noopener noreferrer">
              <img src='../images/logo.png' alt='HOT logo' />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

Header = withRouter(Header);
export {Header};
