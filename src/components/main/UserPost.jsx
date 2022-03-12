export default function UserPost(props) {
  const {
    postKey,
    userImg: [srcUser, altUser],
    userName,
    postImg: [srcPost, altPost],
    likedImg: [srcLiked, altLiked],
    focusedUser,
    numOfLikes,
  } = props;

  return (
    <article key={postKey}>
      <div className="post-header">
        <div className="user">
          <img alt={altUser} src={srcUser} />
          {userName}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="post-img">
        <img alt={altPost} src={srcPost} />
      </div>

      <div className="post-footer">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img alt={altLiked} src={srcLiked} />
          <div className="texto">
            Curtido por <strong>{focusedUser}</strong> e{" "}
            <strong>outras {numOfLikes} pessoas</strong>
          </div>
        </div>
      </div>
    </article>
  );
}
