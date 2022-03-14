import Suggested from "./Suggested";
import User from "./User";
import AsideFooter from "./AsideFooter";

const userData = {
  user: "catanacomics",
  displayName: "catana",
};

export default function Aside() {
  return (
    <aside>
      <User user={userData.user} displayName={userData.displayName} />
      <Suggested />
      <AsideFooter />
    </aside>
  );
}
