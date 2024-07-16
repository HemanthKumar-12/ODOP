const firebaseConfig = {
  apiKey: "AIzaSyAE3lblkXBl1mx5SLb0NHaojkKZNBIJhbg",
  authDomain: "odop-ad774.firebaseapp.com",
  databaseURL: "https://odop-ad774-default-rtdb.firebaseio.com",
  projectId: "odop-ad774",
  storageBucket: "odop-ad774.appspot.com",
  messagingSenderId: "222222956025",
  appId: "1:222222956025:web:5f4ab546cdfc5566e17928"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const messagesRef = database.ref('contact-messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('emailid').value;
  const mobileNumber = document.getElementById('Mobilenumber').value;
  const CompanyName = document.getElementById('CompanyName').value;
  const ProdctName = document.getElementById('ProdctName').value;
  const address = document.getElementById('Address').value;
  const ProdectDetial = document.getElementById('ProdectDetial').value;
  const message = document.getElementById('msgContent').value;

  const newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    mobileNumber: mobileNumber,
    CompanyName: CompanyName,
    ProdctName: ProdctName,
    address: address,
    ProdectDetial: ProdectDetial,
    message: message
  });

  document.querySelector('.alert').style.display = 'block';

  document.getElementById('contactForm').reset();
}
