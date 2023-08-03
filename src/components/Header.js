import React from 'react';
import Logo from "../images/Logo.svg"
import HeaderNav from './HeaderNav';

export default function Header(props) {

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return(
  <header className="header">
    <img className="header__logo" src={Logo} alt="Векторный логотип" />
    {width < 1000 ? <HeaderNav isMobile={true} onOpenHeaderNav={props.onOpenHeaderNav} onCloseHeaderNav={props.onCloseHeaderNav}/> : <HeaderNav isMobile={false} />}
    <button className="button button_size_small">Sign Up</button>
  </header>
  )
}