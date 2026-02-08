import { useState, useEffect } from 'react'
import { iniciarHerois, buscarHeroisNome } from './api.js'
import './App.css'

function App() {
  const [heroes, setHeroes] = useState([]);
  const [heroisIniciais, setHeroisIniciais] = useState([]);
  const [buscarHerois, setBuscarHerois] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarHerois() {
      try {
        const dados = await iniciarHerois();
        setHeroes(dados);
        setHeroisIniciais(dados);
      } catch (erro) {
        console.error("", erro);
      } finally {
        setLoading(false);
      }
    }
    carregarHerois();
  }, [])

  useEffect(() => {
    async function buscarNome() {
      if (buscarHerois.trim().length > 2) {
        setLoading(true);
        const resultados = await buscarHeroisNome(buscarHerois);
        setHeroes(resultados);
        setLoading(false);
      } else if (buscarHerois.trim().length === 0) {
        setHeroes(heroisIniciais);
      }
    }
    buscarNome();
  }, [buscarHerois, heroisIniciais]);

  return (
    <>
      <header>
        <div className="logo">
          <img src="assets/logo/Group@1,5x.svg"></img>
        </div>
      </header>

      <main className="container">
        <section className="explore-heroi">
          <h2>EXPLORE O UNIVERSO</h2>
          <p>Mergulhe no domínio deslubrante de todos os personagens clássicos que você ama - e aqueles que você
            descobrirá em breve!</p>
        </section>

        <div className="barra-buscar">
          <img src="assets/busca/Lupa/Shape.png"></img>
          <input type="text" placeholder="Procure por herói" value={buscarHerois}
            onChange={(e) => setBuscarHerois(e.target.value)}></input>
        </div>

        <section className="buscar-heroi">
          <div>
            <p>Encontrados 20 heróis</p>
          </div>

          <div>
            <img src="assets/icones/heroi/noun_Superhero_2227044.png"></img>
            <p>Ordenados por nome - A/Z</p>
            <input type="checkbox" ></input>
          </div>

          <div>
            <img src="assets/icones/heart/Path.png"></img>
            <p>Favoritos</p>
          </div>
        </section>

        <section className="grid-herois">
          {heroes.map((hero) => (
            <div key={hero.id} className="card-heroi">
              <div className="card-imagem">
                <img src={hero.image?.url}></img>
              </div>
              <div className="card-informacao">
                <p>{hero.name}</p>
                <button className="btn-favoritar">
                  <img src="assets/icones/heart/Path Copy 2.png"></img>
                </button>
              </div>
            </div>
          ))}
        </section>

      </main>

      <footer></footer>
    </>
  );
}

export default App
