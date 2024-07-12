# Teste Prático - Guató

#### Os requisitos deste aplicativo são:

- O aplicativo deve ser desenvolvido utilizando Expo.
- A estilização deverá ser feita utilizando o Stylesheet ou Styled-Components.
- Serão 5 telas: 3 telas para o componente de Onboarding, Login e Registro. Estas telas são totalmente componentizáveis e com possibilidade de reaproveitamento de elementos. Elas devem ser feitas seguindo o estilo do Figma, respeitando a responsividade e acessibilidade.
- Os inputs devem conter validações de erros comuns em login Deve ser usado React Hook Form, Formik e yup para desenvolver os formulários.
- Para navegação do aplicativo com tab bar, deve ser utilizado o React Navigation.
- Haverá a possibilidade de configurar modo noturno, fica a critério do desenvolvedor como o fará e como o usuário
  irá selecionar a mudança no app.
- O uso de bibliotecas para melhoria da experiência do usuário é livre, desde que seja documentada no README
  do repositório no GITHUB.

#

#### Para a realização desse teste eu fiz as seguintes escolhas:

- A estilização foi feita usando o Stylesheet;
- Os inputs contem validações usando React Hook Form e yup;
- O Modo noturno acompanha o tema padrao do celular.

## Instalação

Clone o repositório e abra o terminal na pasta.

```bash
  npm i
```

```bash
  npx expo start
```

No aplicativo Expo Go, aponte a camera para o QR code gerado e teste a aplicação.

## Funcionalidades

- Temas dark e light acompanham a configuração do aparelho. Para ver as mudancas, troque o tema do seu celular e reinicie o app.
- A tela de Onboarding só aparece uma unica vez. Caso o usuário clique em "Get Started", a opção fica salva no aparelho do usuário, para entrar novamente para a tela de Onboarding, precisa apagar os dados do app Expo Go e entrar novamente.
- Formulário com validações.

## Melhorias

Eu decidi implementar algumas melhorias que identifiquei no Figma, visando a melhor performance e rapidez no desenvolvimento.

- Os icones (Apple, Google e Facebook) eu componentizei, bem como a logo. Sendo assim, não precisei salvar diversas imagens e fazer uma logica muito grande para trocar a imagem de acordo com o tema, ele simplesmente troca as cores das propriedades do SVG do componente icone e logo.

- Alterei a imagem da SplashScreen, colocando o fundo da imagem como transparente, caso no futuro escolha trocar a cor do fundo da SplashScreen, basta alterar no app.json
