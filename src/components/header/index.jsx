import { Icons } from "./Icons";
import { IconsMobile } from "./IconsMobile";
import { Logo } from "./Logo";
import { LogoInstagram } from "./LogoInstagram";
import { LogoMobile } from "./LogoMobile";
import { Seachbar } from "./Seachbar";

export function HeaderContainer() {
  return (
    <div className="container">
      <Logo />
      <LogoMobile />
      <LogoInstagram />
      <Seachbar />
      <Icons />
      <IconsMobile />
    </div>
  );
}
