import SuggestedUsers from "./SuggestedUsers";

const suggestedUsers = [
  {
    img: ["./assets/img/bad.vibes.memes.svg", "bad.vibes.memes avatar"],
    userName: "bad.vibes.memes",
  },
  {
    img: ["./assets/img/chibirdart.svg", "chibirdart avatar"],
    userName: "chibirdart",
  },
  {
    img: ["./assets/img/razoesparaacreditar.svg", "razoesparaacreditar avatar"],
    userName: "razoesparaacreditar",
  },
  {
    img: ["./assets/img/adorable_animals.svg", "adorable_animals avatar"],
    userName: "adorable_animals",
  },
  {
    img: ["./assets/img/smallcutecats.svg", "smallcutecats avatar"],
    userName: "smallcutecats",
  },
];

export default function Suggested() {
  return (
    <div id="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {suggestedUsers.map((user, index) => (
        <SuggestedUsers key={index} img={user.img} userName={user.userName} />
      ))}
    </div>
  );
}
