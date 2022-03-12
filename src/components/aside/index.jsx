import Suggested from "./Suggested";
import User from "./User";
import AsideFooter from "./AsideFooter";

export default function Aside() {
  return (
    <aside>
      <User />
      <Suggested />
      <AsideFooter />
    </aside>
  );
}
