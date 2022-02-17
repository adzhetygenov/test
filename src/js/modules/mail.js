export function init() {

	const form = document.getElementById('modal-form');

	form.addEventListener('submit', sendMail);

	async function sendMail(e) {
		e.preventDefault();

		let formData = new FormData(form);
		let isFormValid = validate(form);

		if ( isFormValid === true ) {

			let res = await fetch('misc/mail.php', {
				method: 'POST',
				body: formData
			});
	
			if(res.ok) {
				const modal = document.querySelector('.modal');
				
				modal.setAttribute('aria-hidden', true);
				setTimeout(function() {
					modal.classList.remove('is-open');
				}, 300);

			} else {
				alert("Ошибка");
			}
		} else {
			alert('Заполните все поля!');
		}		
	}

	function validate(form) {
		const inputs = document.querySelectorAll('.js-validate');

		let isValid = false;
		let errors = 0;

		for ( let i = 0; i < inputs.length; i++ ) {
			let input = inputs[i];
			input.classList.remove('v_error');

			if ( !input.value ) {
				input.classList.add('v_error');
				errors++;
			}
		}

		errors == 0 ? isValid = true : isValid = false;

		return isValid;
	}
}