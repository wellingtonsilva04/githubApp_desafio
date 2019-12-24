import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import ReposList from '../components/ReposList';

class ReposFavoritos extends Component {
  renderFav = repos => {
    const data = {};
    Object.keys(repos).forEach(key => {
      if (repos[key].isFavorito) {
        data[key] = repos[key];
      }
    });
    return data;
  };

  navigateToDetails = repo => {
    this.props.navigation.navigate('RepoDetails', {repo: repo});
  };
  render() {
    const {repos} = this.props;
    return (
      <ReposList
        repos={this.renderFav(repos)}
        navigateToDetails={this.navigateToDetails}
      />
    );
  }
}
const mapStateToProps = state => {
  const {repos} = state.reposReducer;

  return {repos};
};
export default connect(mapStateToProps)(ReposFavoritos);
