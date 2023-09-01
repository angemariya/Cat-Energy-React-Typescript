export const Home = () => {
    return (
        <main>
            <section className="programs container">
                <div className="program">
                    <h3 className="program__header program__header--slim">Похудение</h3>
                    <p className="program__text">
                        Ваш кот весит больше собаки и почти утратил способность лазить по
                        деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить
                        лишний вес.
                    </p>
                    <a className="program__link" href="#">
                        Каталог Slim
                    </a>
                </div>
                <div className="program">
                    <h3 className="program__header program__header--pro">Набор массы</h3>
                    <p className="program__text">
                        Заработать авторитет среди дворовых котов и&nbsp;даже собак? Серия Cat
                        Energy Pro поможет вашему коту нарастить необходимые{" "}
                        <span className="program__word-wrap"> мышцы!</span>
                    </p>
                    <a className="program__link" href="#">
                        Каталог Pro
                    </a>
                </div>
            </section>
            <section className="preferences container">
                <h2 className="preferences__header section-header">Как это работает</h2>
                <ul className="preferences__list">
                    <li className="preferences__item preferences__item--healthy">
                        <p className="preferences__text">
                            Функциональное питание содержит только полезные питательные вещества.
                        </p>
                    </li>
                    <li className="preferences__item preferences__item--powdery">
                        <p className="preferences__text">
                            Выпускается&nbsp;в&nbsp;виде&nbsp;порошка, который нужно лишь залить
                            кипятком и готово.
                        </p>
                    </li>
                    <li className="preferences__item preferences__item--dietary">
                        <p className="preferences__text">
                            Замените один-два приема обычной еды на наше функциональное питание.
                        </p>
                    </li>
                    <li className="preferences__item preferences__item--quickly">
                        <p className="preferences__text">
                            Уже через месяц наслаждайтесь изменениями к лучшему
                            вашего&nbsp;питомца!
                        </p>
                    </li>
                </ul>
            </section>
            <section className="example">
                <div className="container">
                    <div className="example__wrapper">
                        <div className="example__wrapper-sm">
                            <h2 className="example__header section-header">Живой пример</h2>
                            <p className="example__text">
                                Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на
                                Cat Energy Slim. Отличный результат без изнуряющих тренировок! При
                                этом он не менял своих привычек и{" "}
                                <span className="example__word-wrap example__word-wrap--intext">
                                    по-прежнему
                                </span>{" "}
                                спит по 16 часов в день.
                            </p>
                            <div className="example__stats">
                                <table className="example__table">
                                    <tbody className="example__table-wrap">
                                        <tr className="example__col">
                                            <td className="example__data">5 кг</td>
                                            <td className="example__data-desc">снижение веса</td>
                                        </tr>
                                        <tr className="example__col">
                                            <td className="example__data">60 дней</td>
                                            <td className="example__data-desc">затрачено времени</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="example__calculate">
                                    Затраты на питание:{" "}
                                    <span className="example__word-wrap">15 000 руб.</span>
                                </p>
                            </div>
                        </div>
                        <div className="difference">
                            <div className="difference__wrapper-img">
                                <div className="difference__before-wrapper">
                                    <picture>
                                        <source
                                            type="image/webp"
                                            media="(min-width: 1300px)"
                                            srcSet="img/before-desktop@2x.webp 2x, img/before-desktop@2x.webp 2x"
                                        />
                                        <source
                                            type="image/webp"
                                            media="(min-width: 768px)"
                                            srcSet="img/before-tablet@1x.webp 1x, img/before-tablet@2x.webp 2x"
                                        />
                                        <source
                                            type="image/webp"
                                            srcSet="img/before-mobile@1x.webp 1x, img/before-mobile@2x.webp 2x"
                                        />
                                        <source
                                            media="(min-width: 1300px)"
                                            srcSet="img/before-desktop@1x.png 1x, img/before-desktop@2x.png 2x"
                                        />
                                        <source
                                            media="(min-width: 768px)"
                                            srcSet="img/before-tablet@1x.png 1x, img/before-tablet@2x.png 2x"
                                        />
                                        <img
                                            className="difference__before-img"
                                            src="img/before-mobile@1x.png"
                                            srcSet="img/before-mobile@2x.png 2x"
                                            alt="Кот до диеты"
                                        />
                                    </picture>
                                </div>
                                <div className="difference__after-wrapper">
                                    <picture>
                                        <source
                                            type="image/webp"
                                            media="(min-width: 1300px)"
                                            srcSet="img/after-desktop@2x.webp 2x, img/after-desktop@2x.webp 2x"
                                        />
                                        <source
                                            type="image/webp"
                                            media="(min-width: 768px)"
                                            srcSet="img/after-tablet@1x.webp 1x, img/after-tablet@2x.webp 2x"
                                        />
                                        <source
                                            type="image/webp"
                                            srcSet="img/after-mobile@1x.webp 1x, img/after-mobile@2x.webp 2x"
                                        />
                                        <source
                                            media="(min-width: 1300px)"
                                            srcSet="img/after-desktop@1x.png 1x, img/after-desktop@2x.png 2x"
                                        />
                                        <source
                                            media="(min-width: 768px)"
                                            srcSet="img/after-tablet@1x.png 1x, img/after-tablet@2x.png 2x"
                                        />
                                        <img
                                            className="difference__after-img"
                                            src="img/after-mobile@1x.png"
                                            srcSet="img/after-mobile@2x.png 2x"
                                            alt="Кот после диеты"
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div className="difference__wrapper-btn">
                                <button className="difference__btn" type="button">
                                    Было
                                </button>
                                <div className="difference__range">
                                    <button className="difference__button" type="button" />
                                </div>
                                <button className="difference__btn" type="button">
                                    Стало
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact">
                <div className="contact__container">
                    <div className="contact__address">
                        <p className="contact__title">
                            приглашаем к&nbsp;сотрудничеству дилеров!
                        </p>
                        <p className="contact__descr">
                            ул. Большая Конюшенная, д. 19/8{" "}
                            <span className="contact__city">Санкт-Петербург</span>
                        </p>
                    </div>
                </div>
                <div className="map-wrapper">
                    <iframe
                        className="map-wrapper__iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.5855003714323!2d30.322739976187407!3d59.9390199034087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0KDQvtGB0YHQuNGPLCAxOTExODY!5e0!3m2!1sru!2sde!4v1586977974911!5m2!1sru!2sde"
                        width={320}
                        height={400}
                        style={{ border: 0 }}
                        aria-label="Интерактивная карта"
                        aria-hidden="false"
                        tabIndex={0}
                    />
                </div>
            </section>
        </main>

    )
}