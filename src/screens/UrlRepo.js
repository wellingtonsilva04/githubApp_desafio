import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

// import { Container } from './styles';

export default class UrlRepo extends Component {
  render() {
    const url = this.props.navigation.getParam('url');
    console.log('url', url);
    return <WebView source={{uri: url}} />;
  }
}
