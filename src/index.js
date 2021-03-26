import createHTML from "./createHTML";
import './styles/styles.sass';
import {TONE, HALF_TONE} from "./constants";
import importAll from "./imports";
import addFullScreenButton from './addFullScreen';
import addHeader from "./addHeader";


class Piano {
    constructor() {
        this.sound = importAll(require.context('./sounds', false, /\.wav$/));
        this.makeContainer();
        this.makeWhiteKeys();
        this.makeBlackKeys();
        this.addKeyTitles();
        this.makeEventListener();
        this.addKeyListener();
        addFullScreenButton(this.piano)
        this.addVolumeChanger();
        this.addCheckBox();

        this.volume = 1;
        this.currentKey = null;
        this.currentTitle = null;
    }
    TONE_LINKS = [];
    HALF_TONE_LINKS = [];
    AUDIO_TONE = [];
    AUDIO_HALF_TONE = [];
    HALF_TONE_TITLE = [];
    TONE_TITLE = []


    makeContainer = () => {
        this.piano = document.getElementById('piano');
        this.pianoContainer = createHTML('div', 'piano__container', this.piano);
        this.pianoContainer.setAttribute('draggable', 'false');
    }

    makeWhiteKeys = () => {
        for (let i = 0; i < TONE.length; i += 1) {
            const tone = createHTML('div', `tone tone__${i}`, this.pianoContainer);
            tone.id = `TONE_${i}`;
            tone.setAttribute('draggable', 'false')
            this.TONE_LINKS.push(tone);
            const audioTone = createHTML('audio', `audio-tone_${i}`, tone, TONE[i].src);
            this.AUDIO_TONE.push(audioTone);
        }
    }

    makeBlackKeys = () => {
        for (let i = 0; i < HALF_TONE.length; i += 1) {
            const halfTone = createHTML('div', `half_tone half_tone_${i}`, this.pianoContainer);
            halfTone.id = `HALF_TONE_${i}`;
            this.HALF_TONE_LINKS.push(halfTone);
            const audioHalfTone = createHTML('audio', `audio-tone_${i}`, halfTone, HALF_TONE[i].src);
            this.AUDIO_HALF_TONE.push(audioHalfTone);
        }
    }

    makeEventListener = () => {
        const elem = document.querySelector('.piano__container');
        this.pianoContainer.addEventListener('mousedown', mouseDown.bind(this));
        document.addEventListener('mouseup', mouseUp.bind(this));
        document.addEventListener('mouseover', mouseOver.bind(this));
        document.addEventListener('mouseout', mouseOut.bind(this))
        document.addEventListener('dragstart', (e) => {
            e.preventDefault()
        })
        let isDown = false;

        function mouseDown(e) {
            isDown = true;
            if (e.target.classList.contains('tone')) {
                const toneIndex = e.target.id.split('_')[1];
                const tone = this.AUDIO_TONE[toneIndex];
                this.TONE_TITLE[toneIndex].classList.add('title_pushed');
                this.currentTitle = this.TONE_TITLE[toneIndex];
                this.stopPlayAudio(tone);
                e.target.classList.add('tone_pushed');
            }
            else if (e.target.classList.contains('half_tone')) {
                const halfToneIndex = e.target.classList[1].split('_')[2]
                const halfTone = this.AUDIO_HALF_TONE[halfToneIndex];
                this.HALF_TONE_TITLE[halfToneIndex].classList.add('title_pushed');
                this.currentTitle = this.HALF_TONE_TITLE[halfToneIndex];
                this.stopPlayAudio(halfTone);
                e.target.classList.add('half_tone_pushed');
            }
        }

        function mouseUp(e) {
            isDown = false;
            try {
                if (e.target.classList.contains('tone')) {
                    e.target.classList.remove('tone_pushed');
                }
                if (e.target.classList.contains('half_tone')) {
                    e.target.classList.remove('half_tone_pushed')
                }
                this.currentTitle.classList.remove('title_pushed')
            } catch(e) {}

        }

        function mouseOver(e) {
            if (isDown) {
                if (e.target.classList.contains('tone')) {
                    const toneIndex = e.target.id.split('_')[1];
                    const tone = this.AUDIO_TONE[toneIndex];
                    this.TONE_TITLE[toneIndex].classList.add('title_pushed');
                    this.currentTitle = this.TONE_TITLE[toneIndex];
                    this.stopPlayAudio(tone)
                    e.target.classList.add('tone_pushed');
                } else if (e.target.classList.contains('half_tone')) {
                    const halfToneIndex = e.target.classList[1].split('_')[2];
                    const halfTone = this.AUDIO_HALF_TONE[halfToneIndex];
                    this.HALF_TONE_TITLE[halfToneIndex].classList.add('title_pushed');
                    this.currentTitle = this.HALF_TONE_TITLE[halfToneIndex];
                    this.stopPlayAudio(halfTone);
                    e.target.classList.add('half_tone_pushed');
                }
            }
        }

        function mouseOut(e) {
            try {
                if (e.target.classList.contains('tone')) {
                    e.target.classList.remove('tone_pushed');
                }
                if (e.target.classList.contains('half_tone')) {
                    e.target.classList.remove('half_tone_pushed');
                }
                this.currentTitle.classList.remove('title_pushed');
            } catch (err) {}
        }
    }

    stopPlayAudio(audioTag) {
            audioTag.volume = this.volume
            audioTag.pause();
            audioTag.currentTime = 0;
            audioTag.play();
    }

    addKeyListener() {
        window.addEventListener('keydown', keyDown.bind(this));
        window.addEventListener('keyup', keyUp.bind(this));

        function keyDown(e) {
            const toneIndex = HALF_TONE.findIndex(el => el.keyCode === e.code) && TONE.findIndex(el => el.keyCode === e.code);
            if (e.shiftKey && toneIndex >= 0 && !e.repeat) {
                this.HALF_TONE_LINKS[toneIndex].classList.add('half_tone_pushed');
                this.stopPlayAudio(this.AUDIO_HALF_TONE[toneIndex]);
                this.currentKey = this.HALF_TONE_LINKS[toneIndex];
                this.HALF_TONE_TITLE[toneIndex].classList.add('title_pushed');
                this.currentTitle = this.HALF_TONE_TITLE[toneIndex];
            } else if (toneIndex >= 0 && !e.repeat) {
                this.TONE_LINKS[toneIndex].classList.add('tone_pushed');
                e.target.classList.add('tone_pushed');
                this.stopPlayAudio(this.AUDIO_TONE[toneIndex]);
                this.currentKey = this.TONE_LINKS[toneIndex];
                this.TONE_TITLE[toneIndex].classList.add('title_pushed');
                this.currentTitle = this.TONE_TITLE[toneIndex];
            }
        }

        function keyUp(e) {
            document.querySelectorAll('.half_tone_pushed').forEach(el =>
                el.classList.remove('half_tone_pushed'));

            document.querySelectorAll('.tone_pushed').forEach(el =>
                el.classList.remove('tone_pushed'));

            document.querySelectorAll('.title_pushed').forEach(el =>
                el.classList.remove('title_pushed'));
        }
    }

    addCheckBox() {
        const checkContainer = createHTML('div', 'check_container', this.piano);
        const notesTitle = createHTML('div', 'check_title', checkContainer);
        notesTitle.innerText = 'notes';
        const checkbox = createHTML('label', 'switch', checkContainer);
        const keysTitle = createHTML('div', 'check_title', checkContainer);
        keysTitle.innerText = 'letters';
        const check = createHTML('input', 'checkbox', checkbox);
        check.type = 'checkbox';
        const round = createHTML('span', 'slider round', checkbox);

        check.addEventListener('click', this.updateKeysTitle.bind(this));
    }

    updateKeysTitle(e) {
        if (e.target.checked) {
            this.TONE_TITLE.forEach((el, idx) =>
                el.innerText = TONE[idx].key);

            this.HALF_TONE_TITLE.forEach((el, idx) =>
            el.innerText = HALF_TONE[idx].key);
        } else {
            this.TONE_TITLE.forEach((el, idx) =>
                el.innerText = TONE[idx].note);

            this.HALF_TONE_TITLE.forEach((el, idx) =>
                el.innerText = HALF_TONE[idx].note);
        }
    }

    addKeyTitles() {
        const titleHalfTone = createHTML('div', 'titleHalfTone', this.piano);
        const titleTone = createHTML('div', 'titleContainer', this.piano);

            TONE.forEach((el, idx) => {
                const keyTitle = createHTML('div', `tone_Key-${idx}`,titleTone);
                keyTitle.innerText = el.note;
                this.TONE_TITLE.push(keyTitle);
            });

        HALF_TONE.forEach((el, idx) => {
            const keyTitle = createHTML('div', `half_tone_Key-${idx}`,titleHalfTone);
            keyTitle.innerText = el.note;
            this.HALF_TONE_TITLE.push(keyTitle);
        });
    }

    addVolumeChanger() {
        const volumeContainer = createHTML('div', 'volumeContainer', this.piano);
        const volumeName = createHTML('p', 'volumeName', volumeContainer);
        volumeName.innerText = 'Volume';

        const volumeValues = createHTML('div', 'volumeValues', volumeContainer);
        ['0%', '|', '|', '|', '|', '50%', '|', '|', '|', '|', '100%'].forEach(el => {
            const element = createHTML('div', 'elem', volumeValues);
            element.innerText = el;
        });

        const ranger = createHTML('input', 'volumeRanger', volumeContainer);
        ranger.type = 'range';
        ranger.min = 0;
        ranger.max = 10;

        ranger.addEventListener('click', setVolume.bind(this));

        function setVolume() {
           this.volume = ranger.value / 10;
        }
    }
}

const piano = new Piano();
addHeader();


