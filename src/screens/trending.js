import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import ActivityIndicator from '../components/ActivityIndicator';
import {connect} from 'react-redux';
import {getRepos} from '../redux/repositorios/action';
import ReposList from '../components/ReposList';

//Carega os repositórios
const Trending = props => {
  useEffect(() => {
    props.dispatch(getRepos());
  }, []);

  //navega para a tela de detalhes do repositório
  const navigateToDetails = repo => {
    props.navigation.navigate('RepoDetails', {repo: repo});
  };

  //return o loading de carregamento
  const {repos, isFetching} = props;
  if (isFetching) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <ReposList
        repos={repos}
        mensageEmptyList="Não há Repositórios"
        navigateToDetails={navigateToDetails}
      />
    </View>
  );
};

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
