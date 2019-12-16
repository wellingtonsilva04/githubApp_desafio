import React, {Component} from 'react';

import {View, Text, ScrollView} from 'react-native';
import StarComponent from '../components/StarComponent';
import ForkComponent from '../components/ForkComponent';
import ListCollaborators from '../components/ListaCollaborators.';

// import { Container } from './styles';
/*Ao clicar em um repositório da lista, deve exibir os detalhes
do repositório individual: (Nome, quantidade de stars, quantidade de issues abertas,
quantidade de forks, Lista de colaboradores, Url do repositório e descrição do repositório)

*/
export default class RepoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*Função renderiza a propriedade primaryLanguage de um repositório. Retorna null
  caso a mesma seja null
  */
  renderPrimarylanguage = primaryLanguage => {
    if (primaryLanguage != null) {
      return <Text style={{marginRight: 20}}>Linguage Primary: {primaryLanguage.name}</Text>;
    }
    return null;
  };

  /*Função renderiza a propriedade description de um repositório. Retorna null
  caso o mesmo seja null
  */
  renderDescription = description => {
    if (description != null) {
      return <Text>Description: {description}</Text>;
    }
    return null;
  };

  render() {
    const repo = this.props.navigation.getParam('repo');
    const {
      name,
      description,
      stargazers,
      primaryLanguage,
      forkCount,
      collaborators,
    } = repo.node;
    return (
      <ScrollView style={{flex: 1, padding: 5}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#22252a'}}>
          {name}
        </Text>
        {this.renderDescription(description)}
        {this.renderPrimarylanguage(primaryLanguage)}
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', marginRight: 20,}}>
            <Text style={{marginRight: 10}}>Stars</Text>
            <StarComponent starCount={stargazers.totalCount} />
          </View>
          <View style={{flexDirection: 'row', paddingBottom: 10}}>
            <Text style={{marginRight: 10}}>Forks</Text>
            <ForkComponent forkCount={forkCount} />
          </View>
        </View>
        <Text>Collaborators</Text>
        <ListCollaborators collaborators={collaborators} />
      </ScrollView>
    );
  }
}
