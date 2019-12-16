import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import RepoItem from '../components/RepoItem';
import ActivityIndicator from '../components/ActivityIndicator';
import {Divider} from 'react-native-elements';
import reposReducer from '../redux/repositorios/reducer';
import {connect} from 'react-redux';
import {getRepos, setFavorito} from '../redux/repositorios/action';

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
    //console.log(repos);
    if (isFetching) {
      return <ActivityIndicator />;
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={repos}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({item, index}) => {
            return (
              <View style={styles.containerItem}>
                <TouchableOpacity style={{flex: 6}} onPress={() => this.navigateToDetails(item)}>
                  <RepoItem
                    name={item.node.name}
                    stargazers={item.node.stargazers.totalCount}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handlerFavoritar(index)}>
                  <View
                    style={{
                      flex: 4,
                      paddingRight: 10,
                      marginVertical: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: item.node.isFavorito ? 'green': 'red',
                    }}>
                    <Text>{toString(item.node.isFavorito)}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={item => item.node.id}
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
