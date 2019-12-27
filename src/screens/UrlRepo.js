import React from 'react';
import {WebView} from 'react-native-webview';

const UrlRepo = props => {
  const url = props.navigation.getParam('url');
  return <WebView source={{uri: url}} />;
};

export default UrlRepo;
