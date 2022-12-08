window.onload = () => {
    document.querySelectorAll(".key:not(.act)").forEach(e => {
        e.onclick = () => { onKeyPress(e) }
    })
    window.addEventListener('keyup', (e) => {
        if (isValid(e)) {
            const char = '#' + e.key.toUpperCase();
            onKeyPress(document.querySelector(char));
        }
    })
}

const onKeyPress = (e) => {
    const firstEmpty = getFirstEmpty();
    lastFilled = firstEmpty;
    firstEmpty.classList.toggle("focused");
    firstEmpty.innerText = e.innerText;
    firstEmpty.classList.toggle("tbd")
    getFirstEmpty().classList.toggle("focused");
}
 
const getFirstEmpty = () => {
    return document.querySelector(".tile:not(.tbd)");
}

const isValid = (e) => {
    if (e.key.length == 1) {
        const keyCode = e.key.charCodeAt(0);
        if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
            return true
        }
    }
}

const back = () => {
    const filled = document.querySelectorAll('.tbd');
    const toDelete = filled[filled.length - 1];
    toDelete.innerText = '';
    toDelete.classList.toggle('.tbd')
    getFirstEmpty().classList.toggle('focused');
}