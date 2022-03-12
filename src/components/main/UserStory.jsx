export default function UserStory(props) {
  const {
    storyKey,
    img: [src, alt],
    user,
  } = props;

  return (
    <figure key={storyKey}>
      <div className="img-background">
        <img src={src} alt={alt} />
      </div>
      <figcaption className="user">{user}</figcaption>
    </figure>
  );
}
