const userData = {
  img: ["./assets/img/catanacomics.svg", "catanacomics avatar"],
  username: "catanacomics",
  displayName: "catana",
};

export default function User() {
  const {
    img: [src, alt],
    username,
    displayName,
  } = userData;

  return (
    <div className="user">
      <img alt={alt} src={src} />
      <div className="texto">
        <strong>{username}</strong>
        {displayName}
      </div>
    </div>
  );
}
