let url = "https://614c39e0e4cc2900179eb384.mockapi.io/courses";
let userId = "";
// get
const editPage = document.querySelector('#edit-page');

const name = document.querySelector('.name');
const classStudent = document.querySelector('.classStudent');
const subject = document.querySelector('.subject');
const teacher = document.querySelector('.teacher');

function getInitUser() {
  let id;
  userId = id;
  fetch(url)
    .then(response => response.json())
    .then((user) => {
      name.value = user.name;
      classStudent.value = user.classStudent;
      subject.value = user.subject;
      teacher.value = user.teacher;
    })
    .catch(error => console.log(error))
}

if (editPage) {
  getInitUser();
}

function editClassList() {
  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userId),
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((response) => console.log('edit', response))
    .catch((error) => console.log(error))
}
// Todo : đoạn sau mai em làm tiếp nay em thấy não nó bị làm sao ý



