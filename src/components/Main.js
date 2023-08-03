import React from 'react';
import Girl from "../images/girl.png"

export default function Main() {

  const symbols = "!@#$%^&*()";
  const [error, setError] = React.useState("");

  function handleChangeForm(e) {
    setError('')
    for (let i = 0; i < symbols.length; i++) {
      if (e.target.value.includes(symbols[i])) {
        setError("Введены недопустимые символы")
      }
    }
  }

  return(
    <main className="content">
    <div className="content__text" id="mobile_top_up">
      <h1 className="content__title">Now Buy Your<br /> PIN or  
        <span className="content__title_color_orange"> Top Up<br /></span>
         With Bank Transfer</h1>
      <p className="content__subtitle">We Make international calling simple, relible, and cheap basedon your unique calling behavior.</p>
      <button className="button button_size_big">Get Started</button>
      <form className="form" name="serch-form">
        <button className="form__button" type="submit"></button>
        <input className="form__input" type="text" name="search-input" placeholder="Where do you want to call?" minLength="4" maxLength="12" onChange={handleChangeForm} />
        <span className="">{error}</span>
      </form>
    </div>
    <div className="images">
      <img className="images__img" src={Girl} alt="Девушка с телефоном" />
      <div className="images__img_ellipse_green"></div>
      <div className="images__img_ellipse_no-color"></div>
      <img className="images__flag_position_one images__flag" src={require("../images/flag1.png")} alt="Изображение флага 1" />
      <img className="images__flag images__flag_position_two" src={require("../images/flag2.png")} alt="Изображение флага 2" />
      <img className="images__flag images__flag_position_three" src={require("../images/flag3.png")} alt="Изображение флага 3" />
      <img className="images__flag images__flag_position_four" src={require("../images/flag4.png")} alt="Изображение флага 4" />
      <img className="images__flag images__flag_position_five" src={require("../images/flag1.png")} alt="Изображение флага 5" />
    </div>
  </main>
  )
}