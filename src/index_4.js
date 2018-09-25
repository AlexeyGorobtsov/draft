import './index.css';
import Helpers from './Helpers';
import './sw';

const h = new Helpers();

window.onload = () => {
    const section = h.query('section');
    const videos = [
        {'name': 'crystal'},
        {'name': 'elf'},
        // {'name': 'frog'},
        // {'name': 'monster'},
        // {'name': 'pig'},
        // {'name': 'rabbit'}
    ];

    let db;

    const displayVideo = (mp4Blob, webmBlob, title) => {
        let mp4URL = URL.createObjectURL(mp4Blob);
        let webmURL = URL.createObjectURL(webmBlob);
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        h2.textContent = title;
        let video = document.createElement('video');
        video.controls = true;
        let source1 = document.createElement('source');
        source1.src = mp4URL;
        source1.type = 'video/mp4';
        let source2 = document.createElement('source');
        source2.src = webmURL;
        source2.type = webmURL;

        section.appendChild(article);
        article.appendChild(h2);
        article.appendChild(video);
        video.appendChild(source1);
        video.appendChild(source2);
    };

    let request = window.indexedDB.open('videos', 1);
    request.onerror = () => {
        console.log('Database failed to open');
    };

    request.onsuccess = () => {
        console.log('Database opened successfully');
        db = request.result;
        init();
    };

    request.onupgradeneeded = e => {
        let db = e.target.result;
        let objectStore = db.createObjectStore('videos', {keyPath: name});
        objectStore.createIndex('mp4', 'mp4', {unique: false});
        objectStore.createIndex('webm', 'webm', {unique: false});
        console.log('Database setup complete');
    };

    if ('serviceWorder' in navigator) {
        navigator.serviceWorker
            .register('./sw.js').then(() => console.log('Service Worker Registered'));
    }

    const fetchVideoFromNetwork = (video) => {
        console.log('fetching videos from network');
        let mp4Blob = fetch('./videos/' + video.name + '.mp4').then(response =>
            response.blob()
        );
        let webmBlob = fetch('./videos/' + video.name  + '.webm').then(response => response.blob())
        Promise.all([mp4Blob, webmBlob]).then(function (values) {
            displayVideo(values[0], values[1], video.name);
        });
    };

    const storeVideo = (mp4Blob, webmBlob, name) => {
        let objectStore = db.transaction(['videos'], 'readwrite').objectStore('videos');
        let record = {
            mp4: mp4Blob,
            webm: webmBlob,
            name: name
        };

        let request = objectStore.add(record);
        request.onsuccess = () => {
            console.log('Record addition attemp finished');
        };

        request.onerror = () => {
            console.log(request.onerror);
        }
    };

    const init = () => {
        videos.forEach(item => {
            let objectStore = db.transaction('videos').objectStore('videos');
            let request = objectStore.get(item.name);
            request.onsuccess = () => {
                if (request.result) {
                    console.log('taking videos from IDB');
                    displayVideo(request.result.mp4, request.result.webm, request.result.name);
                } else {
                    fetchVideoFromNetwork(item);
                }
            }
        })
    }

};