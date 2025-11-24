import logoFooter from '../../assets/2_NARPAY-QULUPNAY_V_LOGO.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logoFooter} alt="Footer Logo" />
      </div>

      <div className="footer__block">
        <span className="footer__title">Адрес:</span>
        <p className="footer__text">Нарпайский район, Самаркандская область</p>
      </div>

      <div className="footer__block">
        <span className="footer__title">Режим работы:</span>
        <p className="footer__text">Пн - Вс 8:00 - 20:00</p>
      </div>

      <div className="footer__contacts">
        <div className="footer__block">
          <span className="footer__title">Отдел продаж:</span>
          <p className="footer__text">+998 99 123 45 67</p>
        </div>

        <div className="footer__block">
          <span className="footer__title">Почта:</span>
          <p className="footer__text">narpayqulupnay@gmail.uz</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
