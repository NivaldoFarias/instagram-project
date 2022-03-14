import { PostHeader } from "./PostHeader";
import { PostImage } from "./PostImage";
import { PostFooter } from "./PostFooter";

export default function UserPost(props) {
  const {
    postKey,
    user,
    img: [src, alt],
    likedByUser,
    numOfLikes,
  } = props;

  return (
    <article key={postKey}>
      <PostHeader user={user} />
      <PostImage src={src} alt={alt} />
      <PostFooter likedByUser={likedByUser} numOfLikes={numOfLikes} />
    </article>
  );
}
