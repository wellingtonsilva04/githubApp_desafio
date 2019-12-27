import React from 'react';
import {View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';
import RepoItem from './RepoItem';
import FavoritoComponent from './FavoritoComponent';
import {Divider} from 'react-native-elements';
import {connect} from 'react-redux';
import {setFavorito} from '../redux/repositorios/action';

const ReposList = props => {
  const handlerFavoritar = id => {
    props.dispatch(setFavorito(id));
  };
  const renderNotFavoritos = mensageEmptyList => {
    return <Text style={styles.mensagemText}>{mensageEmptyList}</Text>;
  };

  const {repos, mensageEmptyList, navigateToDetails} = props;
  return (
    <FlatList
      data={Object.keys(repos)}
      ItemSeparatorComponent={() => <Divider />}
      ListEmptyComponent={() => renderNotFavoritos(mensageEmptyList)}
      renderItem={({item}) => {
        return (
          <View style={styles.containerItem}>
            <TouchableOpacity
              style={styles.repoItemTouchable}
              onPress={() => navigateToDetails(repos[item])}>
              <RepoItem
                name={repos[item].name}
                stargazers={repos[item].stargazers.totalCount}
              />
            </TouchableOpacity>
            <View style={styles.containerFavorito}>
              <FavoritoComponent
                isOn={repos[item].isFavorito}
                onColor="#264954"
                offColor="#c9cfd1"
                size="small"
                onToggle={() => handlerFavoritar(item)}
              />
            </View>
          </View>
        );
      }}
      keyExtractor={item => item}
    />
  );
};

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mensagemText: {
    color: '#264954',
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 20,
  },
  repoItemTouchable: {
    flex: 7,
  },
  containerFavorito: {
    flex: 3,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    setFavorito: () => dispatch(setFavorito()),
    dispatch,
  };
};
export default connect(
  null,
  mapDispatchToProps,
)(ReposList);
