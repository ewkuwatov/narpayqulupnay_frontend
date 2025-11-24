import logo from '../../assets/4_NARPAY-QULUPNAY_EMBLEM.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <ul className="navbar__menu">
          <li className="navbar__item">Саженцы клубники</li>
          <li className="navbar__item">О нас </li>
        </ul>
      </div>

      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="navbar__right">
        <ul className="navbar__info">
          <li className="navbar__item">Доставка</li>
          <li className="navbar__item">Связаться с нами</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
