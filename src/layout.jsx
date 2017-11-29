import React from 'react';
import { Header, Jumbotron, Footer } from 'watson-react-components';
import Demo from './demo';

export default function Layout() {
  return (
    <div>
      <header className="header">
        <div className="header--wordmark">
          <a id="fme" href="/" className="header--wordmark-link">
            <img id="logo-fme" src="https://www.fme.nl/sites/default/themes/fme/logo.png" />
          </a>
        </div>
    </header>
      <Jumbotron
        serviceName="FME Oracle Demo - Watson Discovery"
        repository=""
        documentation=""
        apiReference=""
        startInBluemix="https://console.ng.bluemix.net/registration/?target=/catalog/services/discovery/"
        version="GA"
        description="Unlock hidden value in data to find answers, monitor trends and surface patterns."
      />
      <Demo />
      <div className="footer-container--div">
        <div>
      <footer className="_full-width-row bottom-nav-bar">
        <div className="_container _container_xx-large">
          <div className="bottom-nav-bar--icon">
            <a id="orikami" href="https://www.orikami.nl" title="www.orikami.nl"><img id="logo-orikami" src="/static/images/orikami-logo.png" /></a>
          </div>
          <nav className="bottom-nav-bar--nav">
          </nav>
        </div>
      </footer>
    </div>
      </div>
    </div>
  );
}
