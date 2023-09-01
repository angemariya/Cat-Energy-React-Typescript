export const Form = () => {
    return (
        <main>
            <div className="container">
                <h1 className="page-title page-title--catalog page-title--form">
                    Подбор программы
                </h1>
                <p className="page-descr">
                    Заполните анкету и мы подберем программу питания для вашего кота
                </p>
            </div>
            <section className="section-form">
                <form className="form" action="https://echo.htmlacademy.ru" method="post">
                    <div className="form__wrapper container-tab">
                        <fieldset className="form__fieldset form__fieldset--name">
                            <div className="form__fieldset-wrapper">
                                <label className="form__label form__label--text" htmlFor="name">
                                    Имя:*
                                </label>
                                <input
                                    className="form__control form__control--text"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Барсик"
                                    required
                                />
                            </div>
                            <div className="form__fieldset-wrapper">
                                <label className="form__label form__label--text" htmlFor="weight">
                                    Вес (кг):*
                                </label>
                                <input
                                    className="form__control form__control--text"
                                    type="text"
                                    id="weight"
                                    name="weight"
                                    placeholder="7"
                                    required
                                />
                            </div>
                            <div className="form__fieldset-wrapper">
                                <label className="form__label form__label--text" htmlFor="age">
                                    Возраст&nbsp;(лет):
                                </label>
                                <input
                                    className="form__control form__control--text"
                                    type="text"
                                    id="age"
                                    name="age"
                                    placeholder="7"
                                />
                            </div>
                        </fieldset>
                        <fieldset className="form__fieldset form__fieldset--radio">
                            <div className="form__radio-container">
                                <input
                                    className="form__control form__control--radio"
                                    type="radio"
                                    name="weight"
                                    id="weight-loss"
                                    defaultValue="weight-loss"
                                    defaultChecked
                                />
                                <label
                                    className="form__label form__label--radio"
                                    htmlFor="weight-loss"
                                    tabIndex={0}
                                >
                                    Похудение
                                </label>
                                <input
                                    className="form__control form__control--radio"
                                    type="radio"
                                    name="weight"
                                    id="weight-gain"
                                    defaultValue="weight-gain"
                                />
                                <label
                                    className="form__label form__label--radio"
                                    htmlFor="weight-gain"
                                    tabIndex={0}
                                >
                                    Набор массы
                                </label>
                                <input
                                    className="form__control form__control--radio"
                                    type="radio"
                                    name="weight"
                                    id="need-advice"
                                    defaultValue="need-advice"
                                />
                                <label
                                    className="form__label form__label--radio"
                                    htmlFor="need-advice"
                                    tabIndex={0}
                                >
                                    Не знаю (нужен ваш совет)
                                </label>
                            </div>
                        </fieldset>
                    </div>
                    <fieldset className="form__fieldset form__fieldset--contact">
                        <div className="form__green-line">
                            <div className="container container-tab">
                                <h3 className="form__title form__title--contact">
                                    Контактные данные (владельца кота)
                                </h3>
                            </div>
                        </div>
                        <div className="container container-tab">
                            <div className="form__wrapper-contact">
                                <div className="form__fieldset-container form__fieldset-container--email">
                                    <label className="form__label form__label--email" htmlFor="email">
                                        E-mail:*
                                    </label>
                                    <input
                                        className="form__control form__control--text"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="kuklachev@gmail.com"
                                        required
                                    />
                                    <svg
                                        className="form__icon-email"
                                        width={18}
                                        height={14}
                                        fill="#222222"
                                    >
                                        <use xlinkHref="#icon-mail" />
                                    </svg>
                                </div>
                                <div className="form__fieldset-container form__fieldset-container--phone">
                                    <label className="form__label form__label--phone" htmlFor="phone">
                                        Телефон:*
                                    </label>
                                    <input
                                        className="form__control form__control--text"
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="8 (960) 900-60-90"
                                        required
                                    />
                                    <svg
                                        className="form__icon-phone"
                                        width={21}
                                        height={21}
                                        fill="#222222"
                                    >
                                        <use xlinkHref="#icon-phone" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form__fieldset form__fieldset--comment">
                        <div className="form__green-line">
                            <div className="container container-tab">
                                <h3 className="form__title form__title--textarea">Комментарий</h3>
                            </div>
                        </div>
                        <div className="container container-tab">
                            <textarea
                                className="form__control form__control--textarea"
                                placeholder="Расскажите обо всех повадках кота"
                                defaultValue={""}
                            />
                        </div>
                    </fieldset>
                    <fieldset className="form__fieldset form__fieldset--extra">
                        <div className="form__green-line">
                            <div className="container container-tab">
                                <h3 className="form__title form__title--extra">Дополнительно</h3>
                            </div>
                        </div>
                        <div className="container container-tab">
                            <div className="form__checkboxs-list">
                                <div className="form__fieldset-container form__fieldset-container--checkbox">
                                    <input
                                        className="form__control form__control--checkbox"
                                        type="checkbox"
                                        id="sweetener"
                                        name="sweetener"
                                        defaultChecked
                                    />
                                    <label
                                        className="form__label form__label--checkbox"
                                        htmlFor="sweetener"
                                        tabIndex={0}
                                    >
                                        Сахарозаменитель
                                    </label>
                                </div>
                                <div className="form__fieldset-container form__fieldset-container--checkbox">
                                    <input
                                        className="form__control form__control--checkbox"
                                        type="checkbox"
                                        id="water"
                                        name="water"
                                    />
                                    <label
                                        className="form__label form__label--checkbox"
                                        htmlFor="water"
                                        tabIndex={0}
                                    >
                                        Питьевая вода
                                    </label>
                                </div>
                                <div className="form__fieldset-container form__fieldset-container--checkbox">
                                    <input
                                        className="form__control form__control--checkbox"
                                        type="checkbox"
                                        id="milk"
                                        name="milk"
                                    />
                                    <label
                                        className="form__label  form__label--checkbox"
                                        htmlFor="milk"
                                        tabIndex={0}
                                    >
                                        Молоко
                                    </label>
                                </div>
                                <div className="form__fieldset-container form__fieldset-container--checkbox">
                                    <input
                                        className="form__control form__control--checkbox"
                                        type="checkbox"
                                        id="vitamins"
                                        name="vitamins"
                                    />
                                    <label
                                        className="form__label  form__label--checkbox"
                                        htmlFor="vitamins"
                                        tabIndex={0}
                                    >
                                        Витамины
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="container-tab form__button-wrap">
                        <input
                            className="card-button card-button--form"
                            type="submit"
                            defaultValue="Отправить заявку"
                        />
                        <small className="tip tip--form">* — Обязательные поля</small>
                    </div>
                </form>
            </section>
            <section className="contact contact--form">
                <div className="container-tab contact__container">
                    <div className="contact__address contact__address--form">
                        <p className="contact__title">
                            приглашаем к&nbsp;сотрудничеству дилеров!
                        </p>
                        <p className="contact__descr">
                            ул. Большая Конюшенная, д. 19/8
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

                        aria-hidden="false"
                        tabIndex={0}
                    />
                </div>
            </section>
        </main>

    )
}