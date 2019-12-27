import React from 'react';
import {connect} from 'react-redux';
import ReposList from '../components/ReposList';

const ReposFavoritos = props => {
  //retorna apenas os repositórios com a proppriedade isFavorito igual a true
  const renderFav = repos => {
    const data = {};
    Object.keys(repos).forEach(key => {
      if (repos[key].isFavorito) {
        data[key] = repos[key];
      }
    });
    return data;
  };

  //navega para a tela de detalhes do repositório
  const navigateToDetails = repo => {
    props.navigation.navigate('RepoDetails', {repo: repo});
  };
  const {repos} = props;
  return (
    <ReposList
      repos={renderFav(repos)}
      navigateToDetails={navigateToDetails}
      mensageEmptyList="Ops! Não há Favoritos..."
    />
  );
};

//passa o state repos como proppriedade de RepoFavoritos
const mapStateToProps = state => {
  const {repos} = state.reposReducer;

  return {repos};
};
export default connect(mapStateToProps)(ReposFavoritos);
