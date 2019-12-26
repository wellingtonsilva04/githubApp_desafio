import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class UrlRepo extends Component {
  render() {
    const url = this.props.navigation.getParam('url');
    return <WebView source={{uri: url}} />;
  }
}
