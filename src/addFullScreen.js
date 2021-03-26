import createHTML from "./createHTML";
import fullOpen from "./image/fullOpen.png";
import fullClose from "./image/fullClose.png";

export default function addFullScreenButton(parent) {
    const fullScreenContainer = createHTML('div', 'fSContainer', parent);
    const fullScreenButton = createHTML('img', 'fullScreen', fullScreenContainer, fullOpen);

    fullScreenButton.addEventListener('click', openCloseFullScreen.bind(this));

    document.onfullscreenchange = (e) => {
        fullScreenButton.classList.toggle('open');
        fullScreenButton.src = fullScreenButton.src === fullOpen ? fullClose : fullOpen;
    }

    function openCloseFullScreen (e) {
        if (e.target.classList.contains('open')) {
            document.exitFullscreen();


        } else {
            document.body.requestFullscreen();

        }
    }
}