let url = 'https://614c39e0e4cc2900179eb384.mockapi.io/courses';

function createClassList(data, callback) {
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}
	fetch(url, options)
		.then((response) => response.json())
		.then(callback)
		.catch((error) => {
			console.log(error)
		})
}

function handleCreateData() {
	let createBtn = document.querySelector('#addClassList');
	createBtn.addEventListener('submit', (event) => {
		event.preventDefault();

		// Validate form
		

		let name = document.querySelector('input[name="name" ]').value;
		let classStudent = document.querySelector('input[name="classStudent"]').value;
		let subject = document.querySelector('input[name="subject"]').value;
		let teacher = document.querySelector('input[name="teacher"]').value;

		let formData = {
			name: name,
			classStudent: classStudent,
			subject: subject,
			teacher: teacher
		}
		createClassList(formData);
		alert('Thêm thành công !');
	})
}

handleCreateData();
