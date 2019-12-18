import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';
import RepoItem from './RepoItem';
import FavoritoComponent from './FavoritoComponent';
import {Divider} from 'react-native-elements';
import {connect} from 'react-redux';
import {setFavorito} from '../redux/repositorios/action';

class ReposList extends Component {
  handlerFavoritar = id => {
    this.props.dispatch(setFavorito(id));
  };
  renderNotFavoritos = () => {
    return <Text style={styles.mensagemText}>Ops! Não há Favoritos...</Text>;
  };

  render() {
    const {repos, navigateToDetails} = this.props;
    return (
      <View>
        <FlatList
          data={Object.keys(repos)}
          ItemSeparatorComponent={() => <Divider />}
          ListEmptyComponent={() => this.renderNotFavoritos()}
          renderItem={({item}) => {
            return (
              <View style={styles.containerItem}>
                <TouchableOpacity style={{flex: 7}} onPress={() => navigateToDetails(repos[item])}>
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
  containerItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mensagemText:{
    color: '#264954',
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 20,
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
