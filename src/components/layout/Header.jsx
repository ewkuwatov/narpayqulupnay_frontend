import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='header'>
      <Navbar />
      <div className="header__info">
        <div className="header__item">
          <h1>
            <span>Narpay</span>
            <span>Qulupnay</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            asperiores dolorem repudiandae dolor, distinctio expedita?
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Header
