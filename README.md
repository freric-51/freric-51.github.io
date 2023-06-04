# freric-51.github.io



## Este repositório tem 3 branches:

1. [Main](https://github.com/freric-51/freric-51.github.io/tree/main)
Onde estamos. Serve para a documentação geral.

2. [Master](https://github.com/freric-51/freric-51.github.io/tree/master)
Onde fica o código fonte. A base foi feita ...
- Segui o passo a passo do próprio [Guihub Pages](https://pages.github.com/)
- No terminal, uma vez trazido para o meu computador pelo **git clone**, apaguei o *index.html* do diretório local *freric-51.github.io*.
- Volto um nível (cd ..) e executo : **npx create-react-app freric-51.github.io**
- Retorno para *freric-51.github.io* e executo **npm start** para ver o resultado. **Control C** para para-lo.
- E o deploy segue estes 2 comandos:

 **npm run build** 
 
 **./node_modules/.bin/gh-pages -d build**

3. [gh-pages](https://github.com/freric-51/freric-51.github.io/tree/gh-pages)
Usado pelo Git Pages para renderizar minha [página](https://freric-51.github.io/)

Para escolher o branche usado pelo github pages deve-se seguir a sequencia
1. Esteja na raiz do repositório [seusite.github.io](https://github.com/freric-51/freric-51.github.io)
2. Pressione **settings**
3. Procure por **Code and automation** seguido por **Pages**
4. No dropbox escolha o branche **gh-pages**

![howto](https://github.com/freric-51/freric-51.github.io/blob/main/Configuracao_branche_ghpages.png)
