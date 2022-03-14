export function PostHeader(props) {
  const { user } = props;

  return (
    <div className="post-header">
      <div className="user">
        <img alt={`${user} avatar`} src={`./assets/img/${user}.svg`} />
        {user}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
