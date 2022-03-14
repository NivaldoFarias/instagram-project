export default function UserStory(props) {
  const { storyKey, user } = props;

  return (
    <figure key={storyKey}>
      <div className="img-background">
        <img alt={`${user} avatar`} src={`./assets/img/${user}.svg`} />
      </div>
      <figcaption className="user">{user}</figcaption>
    </figure>
  );
}
