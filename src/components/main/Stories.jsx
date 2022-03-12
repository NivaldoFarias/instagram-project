import UserStory from "./UserStory";

const usersStories = [
  {
    img: ["./assets/img/9gag.svg", "9gag logo"],
    user: "9gag",
  },
  {
    img: ["./assets/img/meowed.svg", "meowed user avatar"],
    user: "meowed",
  },
  {
    img: ["./assets/img/barked.svg", "barked user avatar"],
    user: "barked",
  },
  {
    img: [
      "./assets/img/nathanwpylestrangeplanet.svg",
      "nathanwpylestrangeplanet avatar",
    ],
    user: "nathanwpylestrangeplanet",
  },
  {
    img: ["./assets/img/wawawicomics.svg", "wawawicomics avatar"],
    user: "wawawicomics",
  },
  {
    img: ["./assets/img/respondeai.svg", "respondeai avatar"],
    user: "respondeai",
  },
  {
    img: ["./assets/img/filomoderna.svg", "filomoderna avatar"],
    user: "filomoderna",
  },
  {
    img: ["./assets/img/memeriagourmet.svg", "memeriagourmet avatar"],
    user: "memeriagourmet",
  },
];

export default function Stories() {
  return (
    <section id="stories-container">
      {usersStories.map((story, index) => (
        <UserStory key={index} img={story.img} user={story.user} />
      ))}
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </section>
  );
}
