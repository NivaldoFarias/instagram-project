export default function User(props) {
  const { user, displayName } = props;

  return (
    <div className="user">
      <img alt={`${user} avatar`} src={`./assets/img/${user}.svg`} />
      <div className="texto">
        <strong>{user}</strong>
        {displayName}
      </div>
    </div>
  );
}
