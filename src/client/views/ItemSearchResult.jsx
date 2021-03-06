import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {
  globalActions,
  routerActions,
  characterSelectors,
} from '../store';
import { connect } from 'react-redux';
import { Widget, Flex } from '../widgets';

export default class ItemSearchResult extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { character, actions, item, state } = this.props;
    return (<div className="ui grid">
      <div className="row">
        <div className="twelve wide column">
          <div>{this.props.item.get('name')}</div>
        </div>
      </div>
      <div className="row">
        <div className="twelve wide column" dangerouslySetInnerHTML={{ __html: this.props.item.get('description') }}></div>
        <div className="four wide column">
          {this.props.item.get('availability')}
          {this.props.item.get('frequentIn').size && ', frequent in: ' + this.props.item.get('frequentIn').join(', ') || ''}
        </div>
      </div>
      {character && <div className="twelve wide column">
        {character.get('name')}: <div className="ui button basic compact fitted icon green"
          onClick={() => actions.addItem(character.get('id'), item)}>
          Add
        </div>
      </div>}
    </div>);
  }

}