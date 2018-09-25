import './index.css';
import Helpers from './Helpers';

const h = new Helpers();

//Helpers.getAllId();
//Helpers.getAllClasses();

const c = {"note-display": ".note-display", "new-note": ".new-note"};
const i = {"title": "#title", "body": "#body"};

const list = h.query('ul');
const titleInput = h.query(i.title);
const bodyInput = h.query(i.body);
const form = h.query('form');
const submitBtn = h.query('form button');

let db;

window.onload = () => {
    let request = window.indexedDB.open('notes', 1);
    request.onerror = () => {
        console.log('Database failed to open');
    };

    request.onsuccess = () => {
        console.log('Database open successfully');
    };

    request.onupgradeneeded = e => {
      let db = e.target.result;
      let objectStore = db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });

    };

    displayData();
};