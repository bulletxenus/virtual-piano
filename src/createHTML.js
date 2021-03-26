
export default function createHTML(tagName, className, parent, src) {
    const element = document.createElement(tagName);

    className.split(' ').forEach(el => element.classList.add(el));
    parent.append(element);

    if (tagName === 'img' || tagName === 'audio') {
        element.src = src;
    }

    if (tagName === 'a') {
        element.href = 'src'
    }

    return element;
}