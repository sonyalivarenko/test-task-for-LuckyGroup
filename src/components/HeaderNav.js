import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function HeaderNav(props) {

  const isMobile = props.isMobile;

   if (isMobile) {
   return (
    <HeaderMobile   onOpenHeaderNav={props.onOpenHeaderNav} 
                    onCloseHeaderNav={props.onCloseHeaderNav} 
                    isOpen={props.isOpen}/>
    )
   } else {
    return (
      <HeaderDesktop />
    )
   }
}