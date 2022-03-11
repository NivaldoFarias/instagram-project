function Post(props) {
  return (
    <article>
      <div className="post-header">
        <div className="user">
          <img alt={props.userImgAlt} src={props.userImgUrl} />
          <p>{props.user}</p>
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <img alt={props.postImgAlt} src={props.postImgUrl} />

      <div className="post-footer">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img alt="" src="./assets/img/respondeai.svg" />
          <div className="texto">
            Curtido por <strong>{props.likeByUser}</strong> e{" "}
            <strong>outras {props.numOfLikes} pessoas</strong>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Main(props) {
  return (
    <main>
      <div className="esquerda">
        <section id="stories-container">
          <figure>
            <div className="img-background">
              <img alt="" src="./assets/img/9gag.svg" />
            </div>
            <figcaption className="user">9gag</figcaption>
          </figure>

          <figure>
            <div className="img-background">
              <img alt="" src="./assets/img/meowed.svg" />
            </div>
            <figcaption className="user">meowed</figcaption>
          </figure>

          <figure>
            <div className="img-background">
              <img alt="" src="./assets/img/barked.svg" />
            </div>
            <figcaption className="user">barked</figcaption>
          </figure>

          <figure>
            <div className="img-background">
              <img alt="" src="./assets/img/nathanwpylestrangeplanet.svg" />
            </div>
            <figcaption className="user">nathanwpylestrangeplanet</figcaption>
          </figure>

          <figure>
            <div className="img-background">
              <img alt="" src="./assets/img/wawawicomics.svg" />
            </div>
            <figcaption className="user">wawawicomics</figcaption>
          </figure>

          <figure>
            <div className="img-background">
              <img alt="" src="./assets/img/respondeai.svg" />
            </div>
            <figcaption className="user">respondeai</figcaption>
          </figure>

          <figure>
            <div className="img-background">
              <img alt="" src="./assets/img/filomoderna.svg" />
            </div>
            <figcaption className="user">filomoderna</figcaption>
          </figure>

          <figure>
            <div className="img-background">
              <img alt="" src="./assets/img/memeriagourmet.svg" />
            </div>
            <figcaption className="user">memeriagourmet</figcaption>
          </figure>

          <ion-icon name="chevron-forward-circle"></ion-icon>
        </section>

        <section id="posts-container">
          <article>
            <div className="post-header">
              <div className="user">
                <img alt="" src="./assets/img/meowed.svg" />
                <p>meowed</p>
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="post-img">
              <img alt="" src="./assets/img/gato-telefone.svg" />
            </div>

            <div className="post-footer">
              <div className="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img alt="" src="./assets/img/respondeai.svg" />
                <div className="texto">
                  Curtido por <strong>respondeai</strong> e{" "}
                  <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
            </div>
          </article>

          <article>
            <div className="post-header">
              <div className="user">
                <img alt="" src="./assets/img/barked.svg" />
                barked
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="post-img">
              <img alt="" src="./assets/img/dog.svg" />
            </div>

            <div className="post-footer">
              <div className="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img alt="" src="./assets/img/adorable_animals.svg" />
                <div className="texto">
                  Curtido por <strong>adorable_animals</strong> e{" "}
                  <strong>outras 99.159 pessoas</strong>
                </div>
              </div>
            </div>
          </article>
        </section>
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
