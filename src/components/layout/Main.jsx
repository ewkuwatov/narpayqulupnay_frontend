import fon1 from '../../assets/about_products/fon-1.png'
import fon2 from '../../assets/about_products/fon-2.png'
import fon3 from '../../assets/about_products/fon-3.png'
import aromas from '../../assets/products/aromas.jpg'
import swit from '../../assets/products/swit.jpg'
import elizveta from '../../assets/products/elizaveta.jpg'

const Main = () => {
  return (
    <main>
      <div className="about_product">
        <h2>О нашем продукте</h2>
        <div className="about_product__cards">
          <div className="card">
            <img src={fon1} alt="" />

            <div className="card__item">
              <h3>
                Производство находится в <span>Нарпайском</span> районе
              </h3>
              <p>Благодаря этому наша рассада получает:</p>
              <ul>
                <li>
                  <span>Максимум южного солнца</span>
                </li>
                <li>
                  <span>Максимум питательных веществ</span>
                </li>
                <li>
                  <span>Максимум тепла и заботы</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={fon2} alt="" />
            <div className="card__item">
              <h3>
                Без использования <span>гмо</span>
              </h3>
              <p>Все сорта выведены традиционными методами селекции:</p>
              <ul>
                <li>
                  <span>Высокое качество рассады</span>
                </li>
                <li>
                  <span>Отличная приживаемость</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={fon3} alt="" />

            <div className="card__item">
              <h3>
                Лучшие сорта <span>клубники</span>
              </h3>
              <p>Рассада выращена с учетом всех современных технологий:</p>
              <ul>
                <li>
                  <span>Широкий ассортимент</span>
                </li>
                <li>
                  <span>В наличии и под заказ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="order-card">
        <div className="order-card__left">
          <h3 className="order-card__title">Оформите предзаказ</h3>
          <p className="order-card__text">
            У нас только свежий и вкусный урожай, который принесёт вам
            исключительно отменный результат.
          </p>
        </div>

        <div className="order-card__right">
          <h3 className="order-card__title">Заполните форму ниже</h3>

          <form className="order-card__form">
            <input
              type="text"
              className="order-card__input"
              placeholder="Введите ваш телефон"
            />

            <button type="submit" className="order-card__button">
              Оформить заказ
            </button>
          </form>
        </div>
      </div>
      <div className="products">
        <h2>Сорта клубники сезонные</h2>
        <div className="products_cards">
          <div className="card" style={{ backgroundImage: `url(${aromas})` }}>
            <h4>Аромас</h4>
            <button>Подробно</button>
          </div>
          <div className="card" style={{ backgroundImage: `url(${swit})` }}>
            <h4>Свит Энн</h4>
            <button>Подробно</button>
          </div>
          <div className="card" style={{ backgroundImage: `url(${elizveta})` }}>
            <h4>Елизавета II</h4>
            <button>Подробно</button>
          </div>
          <div className="card" style={{ backgroundImage: `url(${aromas})` }}>
            <h4>Аромас</h4>
            <button>Подробно</button>
          </div>
          <div className="card" style={{ backgroundImage: `url(${swit})` }}>
            <h4>Свит Энн</h4>
            <button>Подробно</button>
          </div>
          <div className="card" style={{ backgroundImage: `url(${elizveta})` }}>
            <h4>Елизавета II</h4>
            <button>Подробно</button>
          </div>
          <div className="card" style={{ backgroundImage: `url(${aromas})` }}>
            <h4>Аромас</h4>
            <button>Подробно</button>
          </div>
          <div className="card" style={{ backgroundImage: `url(${swit})` }}>
            <h4>Свит Энн</h4>
            <button>Подробно</button>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Main
