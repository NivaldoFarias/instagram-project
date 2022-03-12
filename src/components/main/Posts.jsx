import UserPost from "./UserPost";

const usersPosts = [
  {
    userImg: ["./assets/img/meowed.svg", "meowed avatar"],
    userName: "meowed",
    postImg: ["./assets/img/gato-telefone.svg", "gato no telefone"],
    likedImg: ["./assets/img/respondeai.svg", "respondeai avatar"],
    focusedUser: "respondeai",
    numOfLikes: "101.523",
  },
  {
    userImg: ["./assets/img/barked.svg", "barked avatar"],
    userName: "barked",
    postImg: ["./assets/img/dog.svg", "cachorro"],
    likedImg: ["./assets/img/adorable_animals.svg", "adorable animais avatar"],
    focusedUser: "adorable_animals",
    numOfLikes: "99.159",
  },
];

export default function Posts() {
  return (
    <section id="posts-container">
      {usersPosts.map((post, index) => (
        <UserPost
          key={index}
          userImg={post.userImg}
          userName={post.userName}
          postImg={post.postImg}
          likedImg={post.likedImg}
          focusedUser={post.focusedUser}
          numOfLikes={post.numOfLikes}
        />
      ))}
    </section>
  );
}
