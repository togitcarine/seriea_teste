Não foi possível encontrar a chave da API da Marvel, mesmo procurando por Marvel develop é jogado para o site oficial.

Aplicação desenvolvida em React para listagem, busca e gerenciamento de heróis favoritos consumindo a SuperHero API.

Token de Acesso: 8157b3128d3f08c6b9e0fcd52e6d992a
Base URL: https://superheroapi.com/api/

Diferencial notado: Diferente do HTML puro, no React (JSX) todas as tags devem ser auto-fechadas (Ex: <img /> e <input />).

A função iniciarHerois foi criada para carregar a carga inicial de 20 personagens.

Asyn - ajuda na requisiçao da api, juntamente com o await.
Promisse - espera as requisições de todos os heróis.
Map - pecorrer pelos 20 heróis.
Fetch manda o pedido para "pegar" os heróis. O map e o fetch trabalham juntos, um busca pelo heróis e outro pega.
.then(res => res.json()) - converte os dados da api para JS.

Busquei por outra API, consegui consumi-la, porém tive dificuldade de colocar uma lógica na sintaxe do jsx, por isso não consegui fomentá-la na aplicação.

Lógica:
Se o coração for clicado, é verificado se está no array ou não, caso não checa o limite, se tiver mais espaço é adicionado no array, caso não é ignorado.

Se o coração for clicado, é verificado se está no array, se tiver, é criado outro array para remove-lo.

Um array que vai comparando o nome dos heróis e vão sendo ordenados.

A parte de HTML e CSS foram as partes mais fáceis de realizar. E a sintaxe foi a parte mais díficil, mesmo com a lógica. 
Foi primeiro contato mais sistêmico, com busca pela sintaxe, desdobramento da mesma.




