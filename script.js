const btnSubmit = document.querySelector(".form__container__submit")
const inputs = document.querySelectorAll(".form__container__input")
const error = document.querySelectorAll(".form__container__error")

const validateInputs = () => {
	inputs.forEach((input, index) => {
		if (input.value.length == 0) {
			input.style.outline = "2px solid #ff7a7a"
			input.placeholder = ""
			input.style.backgroundImage = "url('./images/icon-error.svg')"
			error[index].style.display = "inline-block"
		}

		if (input.value.length > 0) {
			input.style.outline = "1px solid #6055a5"
			input.style.backgroundImage = "none"
			error[index].style.display = "none"
			/* input[0].placeholder = "First Name"
			input[1].placeholder = "Last Name"
			input[2].placeholder = "Email Address"
			input[3].placeholder = "Password" */
		}
	})
}

btnSubmit.addEventListener("click", (e) => {
	e.preventDefault()
	validateInputs()
})
