import createHTML from "./createHTML";

export default function addHeader() {
    const title = createHTML('h1', 'header_title', document.getElementById('header'));
    title.innerText = 'Virtual piano';
}