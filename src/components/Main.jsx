import Stories from "./main/Stories";
import Posts from "./main/Posts";

export default function Main(props) {
  return (
    <main>
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>

      <aside>
        <div className="user">
          <img alt="" src="./assets/img/catanacomics.svg" />
          <div className="texto">
            <strong>catanacomics</strong>
            Catana
          </div>
        </div>

        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          <div className="sugestao">
            <div className="user">
              <img alt="" src="./assets/img/bad.vibes.memes.svg" />
              <div className="texto">
                <div className="nome">bad.vibes.memes</div>
                <div className="razao">Segue você</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>

          <div className="sugestao">
            <div className="user">
              <img alt="" src="./assets/img/chibirdart.svg" />
              <div className="texto">
                <div className="nome">chibirdart</div>
                <div className="razao">Segue você</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>

          <div className="sugestao">
            <div className="user">
              <img alt="" src="./assets/img/razoesparaacreditar.svg" />
              <div className="texto">
                <div className="nome">razoesparaacreditar</div>
                <div className="razao">Novo no Instagram</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>

          <div className="sugestao">
            <div className="user">
              <img alt="" src="./assets/img/adorable_animals.svg" />
              <div className="texto">
                <div className="nome">adorable_animals</div>
                <div className="razao">Segue você</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>

          <div className="sugestao">
            <div className="user">
              <img alt="" src="./assets/img/smallcutecats.svg" />
              <div className="texto">
                <div className="nome">smallcutecats</div>
                <div className="razao">Segue você</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>
        </div>

        <div className="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </aside>
    </main>
  );
}
