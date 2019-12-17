import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ActivityIndicator from '../components/ActivityIndicator';
import reposReducer from '../redux/repositorios/reducer';
import {connect} from 'react-redux';
import {getRepos} from '../redux/repositorios/action';
import ReposList from '../components/ReposList';

// import { Container } from './styles';

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.dispatch(getRepos());
  }
  navigateToDetails = repo => {
    console.log('reo', repo);
    this.props.navigation.navigate('RepoDetails', {repo: repo});
  };

  render() {
    const {repos, isFetching} = this.props;
    //console.log('trending', repos);
    if (isFetching) {
      return <ActivityIndicator />;
    }
    return (
      <View style={styles.container}>
        <ReposList repos={repos} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  containerItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
const mapStateToProps = state => {
  const {repos, isFetching} = state.reposReducer;
  return {repos, isFetching};
};

export default connect(mapStateToProps)(Trending);
