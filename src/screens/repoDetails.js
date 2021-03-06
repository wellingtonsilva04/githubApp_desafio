import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import StarComponent from '../components/StarComponent';
import ForkComponent from '../components/ForkComponent';
import ListCollaborators from '../components/ListaCollaborators.';

/*Exibir os detalhes do repositório individual: (Nome, quantidade de stars, quantidade de issues abertas,
quantidade de forks, Lista de colaboradores, Url do repositório e descrição do repositório)
*/
const RepoDetails = props => {
  /*Função renderiza a propriedade primaryLanguage de um repositório. Retorna null
  caso a mesma seja null
  */
  const renderPrimarylanguage = primaryLanguage => {
    if (primaryLanguage != null) {
      return (
        <Text style={styles.textLinguagePrimary}>
          Linguage Primary: {primaryLanguage.name}
        </Text>
      );
    }
    return null;
  };

  /*Função renderiza a propriedade description de um repositório. Retorna null
  caso o mesmo seja null
  */
  const renderDescription = description => {
    if (description != null) {
      return <Text>Description: {description}</Text>;
    }
    return null;
  };

  //navega para a screen UrlRepo
  const navigateToUrlRepo = ({url, name}) => {
    props.navigation.navigate('UrlRepo', {url: url, name: name});
  };

  const repo = props.navigation.getParam('repo');
  const {
    name,
    description,
    stargazers,
    primaryLanguage,
    forkCount,
    collaborators,
    url,
  } = repo;

  return (
    <ScrollView style={styles.containerScrollView}>
      <Text style={styles.textName}>{name}</Text>
      {renderDescription(description)}
      {renderPrimarylanguage(primaryLanguage)}
      <View style={styles.containerStarsForks}>
        <View style={styles.containerStars}>
          <Text style={styles.textStarts}>Stars</Text>
          <StarComponent starCount={stargazers.totalCount} />
        </View>
        <View style={styles.containerForks}>
          <Text style={styles.textForks}>Forks</Text>
          <ForkComponent forkCount={forkCount} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.urlRepo}
        onPress={() => navigateToUrlRepo({url, name})}>
        <Text>acessar: {url}</Text>
      </TouchableOpacity>
      <Text style={styles.textCollaborators}>Collaborators</Text>
      <ListCollaborators collaborators={collaborators} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textLinguagePrimary: {
    marginRight: 22,
  },
  containerScrollView: {
    flex: 1,
    padding: 5,
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#22252a',
  },
  containerStarsForks: {
    flexDirection: 'row',
  },
  containerStars: {
    flexDirection: 'row',
    marginRight: 20,
  },
  textStarts: {
    marginRight: 10,
  },
  containerForks: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  textForks: {
    marginRight: 10,
  },
  urlRepo: {
    paddingVertical: 10,
  },
  textCollaborators: {
    fontSize: 18,
    color: '#22252a',
  },
});

export default RepoDetails;
