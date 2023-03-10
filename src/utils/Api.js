class Api {
	constructor({ baseUrl, headers }) {
		this._baseUrl = baseUrl;
		this._headers = headers;
	}

	// проверка на ошибки
	_checkError(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`ERROR: ${res.status}`);
	}

	getUserInfo() {
		return fetch(`${this._baseUrl}/users/me `, {
			method: "GET",
			headers: this._headers,
		}).then(this._checkError);
	}

	getCards() {
		return fetch(`${this._baseUrl}/cards`, {
			method: "GET",
			headers: this._headers,
		}).then(this._checkError);
	}

	editUserInfo(data) {
		return fetch(`${this._baseUrl}/users/me `, {
			method: "PATCH",
			headers: this._headers,
			body: JSON.stringify({
				name: data.name,
				about: data.about,
			}),
		}).then(this._checkError);
	}

	createCard(data) {
		return fetch(`${this._baseUrl}/cards`, {
			method: "POST",
			headers: this._headers,
			body: JSON.stringify({
				name: data.title,
				link: data.link,
			}),
		}).then(this._checkError);
	}

	editAvatar(data) {
		return fetch(`${this._baseUrl}/users/me/avatar`, {
			method: "PATCH",
			headers: this._headers,
			body: JSON.stringify({
				avatar: data,
			}),
		}).then(this._checkError);
	}

	deleteCard(id) {
		return fetch(`${this._baseUrl}/cards/${id}`, {
			method: "DELETE",
			headers: this._headers,
		}).then(this._checkError);
	}

	pressLikeOnCard(id) {
		return fetch(`${this._baseUrl}/cards/${id}/likes`, {
			method: "PUT",
			headers: this._headers,
		}).then(this._checkError);
	}

	deleteLike(id) {
		return fetch(`${this._baseUrl}/cards/likes/${id}`, {
			method: "DELETE",
			headers: this._headers,
		}).then(this._checkError);
	}

	changeLikeCardStatus(id, isLiked) {
		return fetch(`${this._baseUrl}/cards/likes/${id}`, {
			method: `${isLiked ? "PUT" : "DELETE"}`,
			headers: this._headers,
		}).then(this._checkError);
	}

	getPromiseAll() {
		return Promise.all([this.getUserInfo(), this.getCards()]);
	}
}

const apiConnect = new Api({
	baseUrl: "https://mesto.nomoreparties.co/v1/cohort-56",
	headers: {
		authorization: "9c9b38b2-7369-4326-aac4-9ce480f1f0cd",
		"Content-Type": "application/json",
	},
});
export default apiConnect;
