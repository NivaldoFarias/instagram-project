export function PostImage(props) {
  const { src, alt } = props;

  return (
    <div className="post-img">
      <img alt={alt} src={src} />
    </div>
  );
}
