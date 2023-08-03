
export default function HeaderMobile(props) {

  return (
   <section className="header__mobile">
     <button className="header__mobile-button" type="button" onClick={props.onOpenHeaderNav}></button>
   </section>
   )
  }