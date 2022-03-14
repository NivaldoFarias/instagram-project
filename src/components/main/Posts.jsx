import UserPost from "./Post/index";

const usersPosts = [
  {
    user: "meowed",
    img: ["./assets/img/gato-telefone.svg", "gato no telefone"],
    likedByUser: "respondeai",
    numOfLikes: "101.523",
  },
  {
    user: "barked",
    img: ["./assets/img/dog.svg", "cachorro"],
    likedByUser: "adorable_animals",
    numOfLikes: "99.159",
  },
];

export default function Posts() {
  return (
    <section id="posts-container">
      {usersPosts.map((post, index) => (
        <UserPost
          key={index}
          user={post.user}
          img={post.img}
          likedByUser={post.likedByUser}
          numOfLikes={post.numOfLikes}
        />
      ))}
    </section>
  );
}
