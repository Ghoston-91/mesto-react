import '../index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <div class="modal modalProfile" id="modal-1" data-modal> 
        <div class="modal__content modal__container">
          <button aria-label="modal-close" type="button" class="modal__close" data-modal-close></button>
          <h3 class="modal__title">Редактировать профиль</h3>
          <form name="modal__form" class="modal__form modalFormProfile" novalidate>
            <input type="text" placeholder="Введите ваше имя" name="name" class="modal__input modal__input_type_name" minlength="2" maxlength="40" required />
            <span class="error input-error-name"></span>
            <input type="text" placeholder="Введите вашу профессию" name="job" class="modal__input modal__input_type_job" minlength="2" maxlength="200" required/>
            <span class="error input-error-job"></span>
            <button type="submit" class="modal__save">Сохранить</button>
          </form>

        </div>
      </div>

      <div class="modal modalAddFoto" id="modal-2" data-modal> 
        <div class="modal__content modal__container">
          <button aria-label="modal-close" type="button" class="modal__close" data-modal-close></button>
          <h3 class="modal__title">Новое место</h3>
          <form name="modal__form" class="modal__form modalFormAddFoto" novalidate>
            <input type="text" placeholder="Название" name="foto" class="modal__input modal__input_type_foto" minlength="2" maxlength="30" required/>
            <span class="error input-error-foto"></span>
            <input type="url" placeholder="Ссылка на картинку" name="src" class="modal__input modal__input_type_src" required/>
            <span class="error input-error-src"></span>
            <button type="submit" class="modal__save">Создать</button>
          </form>
        </div>
      </div>

      <div class="modal modal_show-image">
        <div class="modal__content-image modal__container">
          <button aria-label="modal-close" type="button" class="modal__close modal__close_image" data-modal-close></button>
          <img alt="" class="modal__image-full"/>
          <h3 class="modal__text-full"></h3>
        </div>
      </div>

      <div class="modal modal_confirm-delete"> 
        <div class="modal__content modal__container">
          <button aria-label="modal-close" type="button" class="modal__close" data-modal-close></button>
          <h3 class="modal__title">Вы уверены?</h3>
          <form name="modal__form" class="modal__form modal__form_confirm-delete" novalidate>
            <button type="submit" class="modal__save">Да</button>
          </form>
        </div>
      </div>

      <div class="modal modalChangeAvatar" >
        <div class="modal__content modal__container">
          <button aria-label="modal-close" type="button" class="modal__close" data-modal-close></button>
          <h3 class="modal__title">Обновить аватар</h3>
          <form name="modal__form" class="modal__form modalFormChangeAvatar" novalidate>
            <input type="url" placeholder="Ссылка на картинку" name="src" class="modal__input modal__input_marginBottom modal__input_type_src" required/>
            <span class="error input-error-src"></span>
            <button type="submit" class="modal__save">Сохранить</button>
          </form>
        </div>
      </div>

      <template id="template">
        <ul class="element">
          <li class="card">
            <button aria-label="card-delete" type="button" class="card__delete"></button>
            <img alt="" class="card__img"/>
                <div class="card__down">
                  <h2 class="card__title"></h2>
                  <p class="card__like-count"></p>
                  <button aria-label="card-like" type="button" class="card__like"></button>
                </div>
          </li>
        </ul>
      </template>
    </div>
  );
}

export default App;
