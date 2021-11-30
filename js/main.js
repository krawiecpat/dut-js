let paragraph = document.getElementById('paragraph');
let dodaj = document.getElementById('dodaj');
let usun = document.getElementById('usun');
dodaj.onclick = function () {
    paragraph.textContent = ('tekst dodano');
};
usun.onclick = function () {
    paragraph.textContent = ('tekst');
};