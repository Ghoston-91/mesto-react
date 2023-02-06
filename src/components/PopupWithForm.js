import React from "react";

function PopupWithForm(props) {
	const { onSubmit, name, isOpen, Close, title, children, buttonText } = props;

	return (
		<div className={`modal modal_${name} ${isOpen ? "modal_active" : ""}`}>
			<div className="modal__content modal__container">
				<button type="button" className="modal__close" onClick={Close} />
				<h3 className="modal__title">{title}</h3>
				<form className="modal__form" name={name} onSubmit={onSubmit}>
					{children}
					<button type="submit" className="modal__save">
						{buttonText || "Сохранить"}
					</button>
				</form>
			</div>
		</div>
	);
}
export default PopupWithForm;
