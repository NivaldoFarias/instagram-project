export default function SuggestedUsers(props) {
  const {
    postKey,
    img: [src, alt],
    userName,
  } = props;

  return (
    <div className="sugestao" key={postKey}>
      <div className="user">
        <img alt={alt} src={src} />
        <div className="texto">
          <div className="nome">{userName}</div>
          <div className="razao">Segue você</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}
