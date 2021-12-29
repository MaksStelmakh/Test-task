import * as basicLightbox from 'basiclightbox';

const button = document.querySelector(`#open-modal`);
const closeButton = document.querySelector(`#close`);

button.addEventListener(`click`, openModalFunk);
closeButton.addEventListener(`click`, closeModalFunk);

const instance = basicLightbox.create(
  `<div class="backdrop">
      <div class="modal-window">
      <form class="modal-form">
        <h2 class="modal-name">registration</h2>
        <label class="modal-lable">
          <input
            placeholder="Name"
            type="text"
            class="modal-imput"
            name="user-name"
            pattern="[a-zA-Zа-яёА-ЯЁ]+"
            title="Имя должно содержать буквы кирилицы или латиницы"
            required
          />
        </label>
        <label class="modal-lable">
          <input placeholder="Email" type="email" class="modal-imput" name="user-email" required />
        </label>
        <label class="modal-lable">
          <input
            placeholder="Telephone"
            type="tel"
            class="modal-imput"
            name="user-telephone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            title="099-000-00-00"
            minlength="2"
            required
          />
        </label>
        <button type="submit" class="button modal-button">Send</button>
      </form>
        </div>
        </div>
	`,
);

function openModalFunk() {
  closeButton.classList.remove(`visually-hidden`);
  instance.show();
}

function closeModalFunk() {
  instance.close();
  closeButton.classList.add(`visually-hidden`);
}
