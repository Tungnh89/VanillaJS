// function Validator(formData) {
// 	let formRules = {};
// 	let validatorRules = {
// 		required: function(value) {
// 			return value ? undefined : 'Vui lòng nhập thông tin !';

// 		}
// 	}

// 	// lấy ra form element trong DOM theo 'formData'
// 	let formElement = document.querySelector(formData);
	
// 	// Chỉ xử lí khi có element trong DOM
// 	if (formElement) {
// 		let inputs = formElement.querySelectorAll('[name][rules]');
// 		for (let input of inputs) {
// 			formRules[input.name] = input.getAttribute('rules');
// 		}
// 	}
// }

