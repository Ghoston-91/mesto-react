import React from "react";

function Main(){
  return (
    <>
      <section class="profile section">
        <div class="profile__avatar"></div>

        <div class="profile__info">
          <div class="profile__group-title">
            <h1 class="profile__name"></h1>
            <button aria-label="profile-edit" type="button" class="profile__edit" data-modal-button="modal-1"></button>
          </div>
          <p class="profile__job"></p>
        </div>

        <button aria-label="add-foto" type="button" class="add-foto" data-modal-button="modal-2"></button>
      </section>
      

      <section class="cards section">
        <ul class="cards__list">
        </ul>
      </section>
    </>
  )
}
export default Main;