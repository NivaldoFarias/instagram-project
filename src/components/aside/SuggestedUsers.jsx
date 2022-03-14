export default function SuggestedUsers(props) {
  const { postKey, user } = props;

  return (
    <div className="sugestao" key={postKey}>
      <div className="user">
        <img alt={`${user} avatar`} src={`./assets/img/${user}.svg`} />
        <div className="texto">
          <div className="nome">{user}</div>
          <div className="razao">Segue você</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}
