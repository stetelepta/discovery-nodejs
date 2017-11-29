import React, { Component } from 'react';
import { func } from 'prop-types';
import moment from 'moment';

import { TextInput, Icon } from 'watson-react-components';

export default class QueryExpanded extends Component {
  static propTypes = {
    onQueryChange: func.isRequired,
  }

  state = {
    query: null,
  }

  handleInputChange = (event) => {
    this.setState({
      query: {
        text: event.target.value,
        date: {
          from: moment().subtract(2, 'months').format('YYYYMMDD'),
          to: moment().format('YYYYMMDD'),
        },
      },
    });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter' && event.target.value.match(/[^\s]+/)) {
      this.props.onQueryChange(this.state.query);
    }
  }

  handleSearchClick = () => {
    if (this.state.query && this.state.query.text.match(/[^\s]+/)) {
      this.props.onQueryChange(this.state.query);
    }
  }

  render() {
    return (
      <section className="_full-width-row query">
        <div className="row query--row _container _container_x-large">
          <div className="query--left">
            <div className="query--search-container">
              <TextInput
                placeholder="What company are you interested in?"
                onKeyPress={this.handleKeyPress}
                onInput={this.handleInputChange}
                defaultValue={this.state.query ? this.state.query.text : null}
              />
              <button
                type="button"
                onClick={this.handleSearchClick}
                className="query--icon-container"
              >
                <Icon type="search" size="regular" fill="#ffffff" />
              </button>
            </div>
          </div>
          <div className="query--right">
            <p className="base--p query--query-description">
              Quickly find insights in recent news articles. Easily explore a company&apos;s:
            </p>
            <ul className="base--ul query--query-list">
              <li className="base--li query--query-list-item"><strong>Top stories</strong> over the last two months</li>
              <li className="base--li query--query-list-item"><strong>Top entities (people, topics, companies)</strong> mentioned</li>
              <li className="base--li query--query-list-item"><strong>Trend</strong> of public sentiment in news</li>
              <li className="base--li query--query-list-item"><strong>Anomalous periods</strong> of high press coverage</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
