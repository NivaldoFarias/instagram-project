import UserStory from "./UserStory";

const usersStories = [
  {
    user: "9gag",
  },
  {
    user: "meowed",
  },
  {
    user: "barked",
  },
  {
    user: "nathanwpylestrangeplanet",
  },
  {
    user: "wawawicomics",
  },
  {
    user: "respondeai",
  },
  {
    user: "filomoderna",
  },
  {
    user: "memeriagourmet",
  },
];

export default function Stories() {
  return (
    <section id="stories-container">
      {usersStories.map((story, index) => (
        <UserStory key={index} user={story.user} />
      ))}
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </section>
  );
}
