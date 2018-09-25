import './Three.js';
import './index.css';
import videoFile from './videos/sintel-short.mp4';
import helpers from './Helpers';
import img from './img/metal003.png';

const webGl = {
    init: function () {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);
        camera.position.z = 5;
        let render = new THREE.WebGLRenderer();
        render.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(render.domElement);

        const light = new THREE.AmbientLight('rgb(255, 255, 255)');
        scene.add(light);
        const spotLight = new THREE.SpotLight('rgb(255, 255, 255)');
        spotLight.position.set(100, 1000, 1000);
        spotLight.castShadow = true;
        scene.add(spotLight);


        let cube;
        const draw = () => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            render.render(scene, camera);
            requestAnimationFrame(draw);
        };

        let loader = new THREE.TextureLoader();
        loader.load('./img/metal003.png', function (texture) {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(2, 2);

            const geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
            const material = new THREE.MeshLambertMaterial({map: texture, shading: THREE.FlatShading});
            cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            draw();
        });

    }
};
// webGl.init();
const h = new helpers();

const videoObj = {
    init: function () {
        //h.getAllClasses();
        const o = {
            "player": ".player",
            "controls": ".controls",
            "play": ".play",
            "stop": ".stop",
            "timer": ".timer",
            "rwd": ".rwd",
            "fwd": ".fwd"
        };
        const source = document.createElement('source');
        source.src = videoFile;
        const media = h.query('video');
        console.log(media)
        const p = document.createElement('p')
        media.appendChild(p);
        const controls = h.query('.controls');
        const play = h.query('.play');
        const stop = h.query(o.stop);
        const rwd = h.query(o.rwd);
        const fwd = h.query(o.fwd);
        const timerWrapper = h.query(o.timer);
        const timer = h.query(`${o.timer} span`);
        const timerBar = h.query(`${o.timer} div`);
        media.removeAttribute('controls');
        controls.style.visibility = 'visible';

        const playPauseMedia = () => {
            if (media.paused) {
                play.setAttribute('data-icon', 'u');
                media.play();
            } else {
                play.setAttribute('data-icon', 'P');
                media.pause();
            }

            rwd.classList.remove('active');
            fwd.classList.remove('active');
            clearInterval(intervalRwd);
            clearInterval(intervalFwd);
        };

        const stopMedia = () => {
            media.pause();
            media.currentTime = 0;
            play.setAttribute('data-icon', 'P');
            rwd.classList.remove('active');
            fwd.classList.remove('active');
            clearInterval(intervalRwd);
            clearInterval(intervalFwd);
        };

        stop.addEventListener('click', stopMedia);
        media.addEventListener('ended', stopMedia);
        play.addEventListener('click', playPauseMedia);

        let intervalFwd;
        let intervalRwd;

        const windBackward = () => {
            if (media.currentTime <= 3) {
                rwd.classList.remove('active');
                clearInterval(intervalRwd);
                stopMedia();
            } else {
                media.currentTime -= 3;
            }
        };

        const windForward = () => {
            if (media.currentTime >= media.duration - 3) {
                fwd.classList.remove('active');
                clearInterval(intervalFwd);
                stopMedia();
            } else {
                media.currentTime += 3;
            }
        };

        const mediaBackward = () => {
            clearInterval(intervalFwd);
            fwd.classList.remove('active');

            if (rwd.classList.contains('active')) {
                rwd.classList.remove('active');
                clearInterval(intervalRwd);
                media.play();
            } else {
                rwd.classList.add('active');
                media.pause();
                intervalRwd = setInterval(windBackward, 200);
            }
        };

        const mediaForward = () => {
            clearInterval(intervalRwd);
            rwd.classList.remove('active');

            if (fwd.classList.contains('active')) {
                fwd.classList.remove('active');
                clearInterval(intervalFwd);
                media.play();
            } else {
                fwd.classList.add('active');
                media.pause();
                intervalFwd = setInterval(windForward, 200);
            }
        };

        rwd.addEventListener('click', mediaBackward);
        fwd.addEventListener('click', mediaForward);

        const setTime = () => {
            const minutes = Math.floor(media.currentTime / 60);
            const seconds = Math.floor(media.currentTime - minutes * 60);
            let minuteValue;
            let secondValue;

            if (minutes < 10) {
                minuteValue = '0' + minutes;
            } else {
                minuteValue = minutes;
            }

            if (seconds < 10) {
                secondValue = '0' + seconds;
            } else {
                secondValue = seconds;
            }

            const mediaTime =minuteValue + ':' + secondValue;
            timer.textContent = mediaTime;
            const barLength = timerWrapper.clientWidth * (media.currentTime/media.duration);
            timerBar.style.width = barLength + 'px';
        };

        media.addEventListener('timeupdate', setTime);

    }
};

videoObj.init();

