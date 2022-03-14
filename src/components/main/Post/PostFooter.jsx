import { Actions } from "./Actions";
import { Likes } from "./Likes";

export function PostFooter(props) {
  const { likedByUser, numOfLikes } = props;

  return (
    <div className="post-footer">
      <Actions />
      <Likes likedByUser={likedByUser} numOfLikes={numOfLikes} />
    </div>
  );
}
