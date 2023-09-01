import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header className="header header--background">
    <nav className="nav nav--nojs nav--closed">
      <div className="nav-wrapper">
        <a className="nav-logo">
          <picture>
            <source media="(min-width: 1300px)" srcSet="img/logo-desktop.svg" />
            <source media="(min-width: 768px)" srcSet="img/logo-tablet.svg" />
            <img
              className="nav-logo__image"
              src="img/logo-mobile.svg"
              width={191}
              height={38}
              alt="Логотип Кэт энерджи"
            />
          </picture>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Открыть меню"
        />
      </div>
      <ul className="nav-list">
        <li className="nav-list__item nav-list__item--active">
          <NavLink to="/home" className="nav-list__link text-white">Главная</NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="/catalog" className="nav-list__link text-white">
            Каталог продукции
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="./form" className="nav-list__link text-white">
            Подбор программы
          </NavLink>
        </li>
      </ul>
    </nav>
    <section className="promo">
      <div className="container">
        <div className="promo__wrapper-desk">
          <div className="promo__wrapper">
            <h1 className="promo__header">Функциональное питание для котов</h1>
            <p className="promo__text">Занялся собой? Займись котом!</p>
          </div>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1300px)"
              srcSet="img/index-can-desktop@1x.webp 1x, img/index-can-desktop@2x.webp 2x"
            />
            <source
              type="image/webp"
              media="(min-width: 768px)"
              srcSet="img/index-can-tablet@1x.webp 1x, img/index-can-tablet@2x.webp 2x"
            />
            <source
              type="image/webp"
              srcSet="img/index-can-mobile@1x.webp 1x, img/index-can-mobile@2x.webp 2x"
            />
            <source
              media="(min-width: 1300px)"
              srcSet="img/index-can-desktop@1x.png 1x, img/index-can-desktop@2x.png 2x"
            />
            <source
              media="(min-width: 768px)"
              srcSet="img/index-can-tablet@1x.jpg 1x, img/index-can-tablet@2x.jpg 2x"
            />
            <img
              className="promo__image"
              src="img/index-can-mobile@1x.png"
              srcSet="img/index-can-mobile@2x.png 2x"
              alt="Банка питания Кэт Энерджи-Курица"
            />
          </picture>
          <a className="promo__button" href="form.html">
            Подобрать программу
          </a>
        </div>
      </div>
    </section>
  </header>
    )
}