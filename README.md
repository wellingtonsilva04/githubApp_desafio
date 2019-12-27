# githubApp Desafio
### **Instruções para uso**
Instalação das dependências do projeto.
Na diretório raiz do projeto execute:
```yarn start```

Em seguida execute:
```react-native run-android```

### **Token do github**
Para executar o projecto requer uma token de acesso pessoal do gitHub para acessar a api versão 4 com graphQl.
Instruções de como obte-la você encontra [aqui](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token).
Crie um arquivo .env coloque sua token.
```
API_TOKEN='sua token'
```

### **Previews**
#### Screen Trending

Lista os repositórios

![Screenshot_20191227-175238](https://user-images.githubusercontent.com/39103979/71532600-df21d100-28d2-11ea-863f-a2516fdf3497.png)
---
#### Screen Favoritos
Ao clicar na screen favoritos sem ter favoritado nenhum repositório aparece assim

![Screenshot_20191227-175242](https://user-images.githubusercontent.com/39103979/71532729-8d2d7b00-28d3-11ea-8cad-aa7e5135f4f2.png)
---
#### Favorintando

Ao selecionar o toggle favoritar seu repositório fica favoritado

![Screenshot_20191227-175315](https://user-images.githubusercontent.com/39103979/71532791-dbdb1500-28d3-11ea-807b-b703e70af195.png)

Abrindo da tela de favoritos ele aparece lá

![Screenshot_20191227-175319](https://user-images.githubusercontent.com/39103979/71532822-062cd280-28d4-11ea-9516-c18b02a77ce3.png)

Selecionando novamente ele é desfavoritado. Pode ser desvaritado em ambas as telas.

---

#### Detalhes de um repositório

Clique num repositório... Logo após abrirar a tela de detalhes. Tanto na Tela TRENDING quanto na FAVORITOS.

![Screenshot_20191227-175253](https://user-images.githubusercontent.com/39103979/71532890-6d4a8700-28d4-11ea-94cb-336f3dbbf4d6.png)

---

#### URL do repositório

Ao clicar no url do repositório ele navega para uma nova tela e é exibido a o url dentro da webView.

![Screenshot_20191227-175304](https://user-images.githubusercontent.com/39103979/71533131-e5657c80-28d5-11ea-97f8-6640cc6e1b85.png)



