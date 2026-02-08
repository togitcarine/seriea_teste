const TOKEN = "8157b3128d3f08c6b9e0fcd52e6d992a";
const URL = `https://superheroapi.com/api.php/${TOKEN}`

export const iniciarHerois = async () => {
    const ids = Array.from({ length: 20 }, (_, i) => i + 1);
    const promises = ids.map(id => fetch(`${URL}/${id}`).then(res => res.json()));
    return await Promise.all(promises);
};

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
