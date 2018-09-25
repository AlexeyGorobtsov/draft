import './index.css';
import Helpers from './Helpers';
const h = new Helpers();

// Helpers.getAllClasses();
// Helpers.getAllId();

const c = {"remember": ".remember", "forget": ".forget", "personal-greeting": ".personal-greeting"};
const i = {"enername":"#enername","submitname":"#submitname","forgetname":"#forgetname"};

const rememberDiv = h.query(c.remember);
const forgetDiv = h.query(c.forget);
const form = h.query('form');
const nameInput = h.query(i.enername);
const submitBtn = h.query(i.submitname);
const forgetBtn = h.query(i.forgetname);

const h1 = h.query('h1');
const personalGreeting = h.query(c["personal-greeting"]);

form.addEventListener('submit', e => {
   e.preventDefault();
});

const nameDisplayCheck = () => {
    if(localStorage.getItem('name')) {
        let name = localStorage.getItem('name');
        h1.textContent = 'Welcome, ' + name;
        personalGreeting.textContent = 'Welcome to our website, ' + name  + '! We hope you have fun while you are here.';
        forgetDiv.style.display = 'block';
        rememberDiv.style.display = 'none';
    } else {
        h1.textContent = 'Welcome to our website ';
        personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
        forgetDiv.style.display = 'none';
        rememberDiv.style.display = 'block';
    }
};

forgetBtn.addEventListener('click', () => {
   localStorage.removeItem('name');
   nameDisplayCheck();
});

submitBtn.addEventListener('click', () => {
   localStorage.setItem('name', nameInput.value);
   nameDisplayCheck();
});

document.body.onload = nameDisplayCheck;
