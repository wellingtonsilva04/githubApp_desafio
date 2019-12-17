import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import RepoItem from '../components/RepoItem';
import ActivityIndicator from '../components/ActivityIndicator';
import {Divider} from 'react-native-elements';
import reposReducer from '../redux/repositorios/reducer';
import {connect} from 'react-redux';
import {getRepos, setFavorito} from '../redux/repositorios/action';
import FavoritoComponent from '../components/FavoritoComponent';

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
  handlerFavoritar = id => {
    this.props.dispatch(setFavorito(id));
  };
  render() {
    const {repos, isFetching} = this.props;
    //console.log('trending', repos);
    if (isFetching) {
      return <ActivityIndicator />;
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.keys(repos)}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({item}) => {
            console.log(item);
            return (
              <View style={styles.containerItem}>
                <TouchableOpacity style={{flex: 7}} onPress={() => this.navigateToDetails(repos[item])}>
                  <RepoItem
                    name={repos[item].name}
                    stargazers={repos[item].stargazers.totalCount}
                  />
                </TouchableOpacity>
                <View style={{flex: 3}}>
                  <FavoritoComponent
                    isOn={repos[item].isFavorito}
                    onColor="#264954"
                    offColor="#c9cfd1"
                    size="small"
                    onToggle={() => this.handlerFavoritar(item)}
                  />
                </View>
              </View>
            );
          }}
          keyExtractor={item => item}
        />
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
const mapDispatchToProps = dispatch => {
  return {
    setFavorito: () => dispatch(setFavorito()),
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trending);
