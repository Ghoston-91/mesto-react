import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function PopupWithEditAvatar(props) {
	const avatarRef = React.useRef("");

	useEffect(() => {
		avatarRef.current.value = "";
	}, [props.isOpen]);

	function handleSubmit(e) {
		e.preventDefault();
		props.onUpdateAvatar({
			avatar: avatarRef.current.value,
		});
	}

	return (
		<PopupWithForm
			isOpen={props.isOpen}
			name="ChangeAvatar"
			title="Обновить аватар"
			buttonText="Сохранить"
			Close={props.Close}
			onSubmit={handleSubmit}
		>
			<input
				type="url"
				placeholder="Ссылка на картинку"
				name="src"
				className="modal__input modal__input_marginBottom modal__input_type_src"
				required=""
				ref={avatarRef}
			/>
			<span className="error input-error-src"></span>
		</PopupWithForm>
	);
}
export default PopupWithEditAvatar;
