const TOKEN = "8157b3128d3f08c6b9e0fcd52e6d992a";
const URL = `https://superheroapi.com/api.php/${TOKEN}`;

/*asyn - ajuda na requisiçao da api, juntamente com o await.
assim, como promisse, ele espera a "chegada" de todos os heróis.
map - vai pecorrer pelos 20 heróis.
fetch manda o pedido para "pegar" os heróis. o map e o fetch trabalha juntos, um busca pelo heróis e outro pega.
.then(res => res.json()) - faz com que o javascript entenda.
 */

export const iniciarHerois = async () => {
    const idArray = Array.from({ length: 20 }, (_, i) => i + 1);
    const promises = idArray.map(id => fetch(`${URL}/${id}`).then(res => res.json()));
    return await Promise.all(promises);
};

/*faz a checagem se o campo está vazio, sendo vazio vai retorna com o array vazio
try-catch - trata o erro */
export const buscarHeroisNome = async (nome) => {
    if (!nome) return [];
    try {
        const response = await fetch(`${URL}/search/${nome}`);
        const data = await response.json();
        return data.results || []; 
    } catch (error) {
        console.error("", error);
        return [];
    }
};
