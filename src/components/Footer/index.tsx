export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <a className="logo-text" href="#" aria-label="На главную страницу">
                        <svg width={131} height={35}>
                            <use xlinkHref="#icon-logo-footer" />
                        </svg>
                    </a>
                    <ul className="social-links">
                        <li className="social-links__item">
                            <a
                                className="social-links__link social-links__link--vk"
                                href="#"
                                aria-label="Вконтакте"
                            >
                                <svg
                                    className="social-links__svg social-links__svg--vk"
                                    fill="#666666"
                                    width={22}
                                    height={12}
                                >
                                    <use xlinkHref="#icon-vk" />
                                </svg>
                            </a>
                        </li>
                        <li className="social-links__item">
                            <a
                                className="social-links__link social-links__link--insta"
                                href="#"
                                aria-label="Инстаграм"
                            >
                                <svg
                                    className="social-links__svg social-links__svg--insta"
                                    fill="#666666"
                                    width={17}
                                    height={17}
                                >
                                    <use xlinkHref="#icon-insta" />
                                </svg>
                            </a>
                        </li>
                        <li className="social-links__item">
                            <a
                                className="social-links__link social-links__link--fb"
                                href="#"
                                aria-label="Фейсбук"
                            >
                                <svg
                                    className="social-links__svg social-links__svg--fb"
                                    fill="#666666"
                                    width={10}
                                    height={19}
                                >
                                    <use xlinkHref="#icon-fb" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <a
                            className="copyright__logo"
                            href="https://htmlacademy.ru/intensive/adaptive"
                            aria-label="На страницу HTML Academy"
                        >
                            <span className="copyright__text">HTML Academy</span>
                            <svg className="copyright__img" width={27} height={34} fill="#666666">
                                <use xlinkHref="#icon-htmlacademy" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}