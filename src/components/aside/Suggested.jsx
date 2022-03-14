import SuggestedUsers from "./SuggestedUsers";

const suggestedUsers = [
  {
    username: "bad.vibes.memes",
  },
  {
    username: "chibirdart",
  },
  {
    username: "razoesparaacreditar",
  },
  {
    username: "adorable_animals",
  },
  {
    username: "smallcutecats",
  },
];

export default function Suggested() {
  return (
    <div id="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {suggestedUsers.map((suggestedUser, index) => (
        <SuggestedUsers key={index} user={suggestedUser.username} />
      ))}
    </div>
  );
}
