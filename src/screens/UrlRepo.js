import React from 'react';
import {WebView} from 'react-native-webview';

//Carrega a url do repositório em uma WebView
const UrlRepo = props => {
  const url = props.navigation.getParam('url');
  return <WebView source={{uri: url}} />;
};

export default UrlRepo;
