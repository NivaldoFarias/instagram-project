export function Likes(props) {
  return (
    <div className="curtidas">
      <img
        alt={`${props.likedByUser} avatar`}
        src={`./assets/img/${props.likedByUser}.svg`}
      />
      <div className="texto">
        Curtido por <strong>{props.likedByUser}</strong> e{" "}
        <strong>outras {props.numOfLikes} pessoas</strong>
      </div>
    </div>
  );
}
