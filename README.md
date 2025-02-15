## Intagram Logo

### Descrição
Este projeto é uma aplicação simples em JavaScript que muda a cor de fundo de uma `<div>` a cada 100 milissegundos quando clicada. A cor é gerada aleatoriamente em formato hexadecimal. O usuário pode parar a mudança de cor clicando novamente na `<div>`. A aplicação é uma demonstração de manipulação do DOM e uso de eventos em JavaScript.

### Tecnologias Utilizadas
- ![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/CSS-239120?style=for-the-badge&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-239120?style=for-the-badge&logo=javascript&logoColor=white)

### Instalação
1. Clone o repositório:
    ```bash
    git clone https://github.com/gsilva279/Instagram_Logo.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd nome-do-repositorio
    ```
3. Abra o arquivo `index.html` em um navegador:
    - Você pode abrir o arquivo diretamente no navegador ou usar um servidor local.

### Uso
1. Abra o arquivo `index.html` em um navegador.
2. Clique na `<div>` para iniciar a mudança de cor.
3. Clique novamente na `<div>` para parar a mudança de cor.
4. A cor de fundo da `<div>` mudará a cada 100 milissegundos enquanto estiver em execução.

### Estrutura do Código
#### Função `gerarCorAleatoria()`
Esta função gera uma cor hexadecimal aleatória.

**Retorno:** Uma string representando uma cor em formato hexadecimal (ex: `#a3c1e0`).

#### Eventos
**Evento de Clique:**
- Quando a `<div>` é clicada, a função verifica se a mudança de cor está em execução (`isRunning`).
- Se estiver em execução, o intervalo é limpo usando `clearInterval()`, e `isRunning` é definido como `false`.
- Se não estiver em execução, um novo intervalo é iniciado com `setInterval()`, que muda a cor de fundo da `<div>` a cada 100 milissegundos, e `isRunning` é definido como `true`.

### Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

### Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

### Contato
Para mais informações, entre em contato com josegilvanilson2020@gmail.com.
