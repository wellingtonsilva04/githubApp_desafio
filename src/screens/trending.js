import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import RepoItem from '../components/RepoItem';
import ActivityIndicator from '../components/ActivityIndicator';
import cliente from '../services/apollo';
import {reposQuery} from './querys/repoQuery';
import {Divider} from 'react-native-elements';

// import { Container } from './styles';

export default class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      isFetching: true,
    };
  }
  componentDidMount() {
    console.log('aqui');
    cliente.query({query: reposQuery}).then(response => {
      this.setState({repos: response.data.viewer.repositories});
      this.setState({isFetching: false});
    });
  }
  render() {
    const {repos, isFetching} = this.state;
    if (isFetching) {
      return <ActivityIndicator />;
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={repos.edges}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={repo => {
            console.log(repo.item);
            return (
              <RepoItem
                name={repo.item.node.name}
                description={repo.item.node.description}
                stargazers={repo.item.node.stargazers.totalCount}
                primaryLanguage={repo.item.node.primaryLanguage}
                forkCount={repo.item.node.forkCount}
              />
            );
          }}
          keyExtractor={repo => repo.node.id}
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
});
