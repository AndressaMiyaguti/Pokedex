import { Link } from 'react-router-dom'
import proud from '../Img/Gif.gif';
import De from '../Img/Andressa.jpg';


export default function About() {
  return(
    <div className="app__about">
      <div className="app__about__container">
        <h2>Falar sobre mim...</h2>
        <img className="app__about__gif" src={proud} alt="proud woman" />
        <p className="app__about__header"> Muito prazer, meu nome é Andressa,sou estudante de programação na BlueEdtech.</p>
        <img className="app__about__me" src={De} alt="the author" />

        <p className="app__about__main">Sou uma pessoa  empática e resiliente.Vim da área de eventos 
        voltados a cultura oriental. Onde trabalhei por 15 anos.
        Meu primeiro contato com programação foi na BlueEdtech, e me dedico com paixão nos estudos, o que torna
        o aprender muito prazeroso.
        Gosto de animes,jogos de tabuleiro e Reiki.
        Tenho uma família harmoniosa onde também fazem parte dela, 6 caes e duas tartarugas. </p>

        <div className="app__about__links">
          <a href="https://github.com/AndressaMiyaguti" target="_blank" rel="noreferrer">
            <i class="im im-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/karine-miyaguti-042a07212/" target="_blank" rel="noreferrer">
            <i class="im im-linkedin"></i>
          </a>
        </div>

        <Link className="app__about__link" to="/">Voltar</Link>
      </div>
      
    </div>
  )
}