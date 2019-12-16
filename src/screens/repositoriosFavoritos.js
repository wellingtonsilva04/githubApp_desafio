import React, {Component} from 'react';
import {View, Text} from 'react-native';
import favoritosReducer from '../redux/favoritos/reducer';
import {connect} from 'react-redux';

class ReposFavoritos extends Component {
  render() {
    const {reposFavoritos} = this.props;
    console.log('fav', reposFavoritos);
    return (
      <View>
        <Text>Meus favoritos</Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  const {reposFavoritos} = state.favoritosReducer;
  return {reposFavoritos};
};
export default connect(mapStateToProps)(ReposFavoritos);
