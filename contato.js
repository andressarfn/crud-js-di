window.onload = () => {
  document.getElementById('formCadastro').addEventListener('submit', add);
};

let contacts = [];

const add = (event) => {
  event.preventDefault();
  contatos = JSON.parse(localStorage.getItem('value'));

  let contact = {
    fullName: document.getElementById('txtName').value,
    phone: document.getElementById('txtPhone').value,
    street: document.getElementById('txtStreet').value,
    zipcode: document.getElementById('txtZip').value,
    number: document.getElementById('txtNumber').value,
    city: document.getElementById('txtCity').value,
    type: document.getElementById('work').checked ? 'Work' : 'Family',
  };

  contacts.push(contact);
  localStorage.setItem('value', JSON.stringify(contacts));
  document.getElementById('formCadastro').reset();
  list();
};

const list = () => {
  if (localStorage.setItem('value', JSON.stringify(contacts)) === null) return;
  let tbody = document.getElementById('contatosCadastrados');

  tbody.innerHTML = '';
  for (i = 0; i < contacts.length; i++) {
    fullName = contacts[i].fullName;
    phone = contacts[i].phone;
    street = contacts[i].street;
    zipcode = contacts[i].zipcode;
    number = contacts[i].number;
    city = contacts[i].city;
    type = contacts[i].type;

    tbody.innerHTML +=
      '<tr class="' +
      type +
      '" id="rowContact ' +
      i +
      ' ">' +
      '<td>' +
      fullName +
      '</td>' +
      '<td>' +
      phone +
      '</td>' +
      '<td>' +
      street +
      '</td>' +
      '<td>' +
      zipcode +
      '</td>' +
      '<td>' +
      number +
      '</td>' +
      '<td>' +
      city +
      '</td>' +
      '<td>' +
      type +
      '</td>' +
      '<td><button onclick="edit(\'' +
      fullName +
      '\')">Edit</button></td>' +
      '<td><button onclick="delet(\'' +
      fullName +
      '\')">Delete</button></td>' +
      '</tr>';
  }
};
const edit = (name) => {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].fullName === name) {
      document.getElementById('txtName').value = contacts[i].fullName;
      document.getElementById('txtPhone').value = contacts[i].phone;
      let index = contacts.indexOf(contacts[i]);
      contacts.splice(index, 1);
    }
  }
};
const delet = (name) => {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].fullName === name) {
      let index = contacts.indexOf(contacts[i]);
      contacts.splice(index, 1);
      list();
    }
  }
};
