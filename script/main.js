import { data } from '../script/emoji.js';

const emojiContainer = document.getElementById('cards'); //получаем ссылку на контейнер для эмоджи


data.forEach(emoji => {
    const block = document.createElement('div'); //создаем див
    block.classList.add('block');

    const symbolSpan = document.createElement('span');
    symbolSpan.textContent = emoji.symbol;
    block.appendChild(symbolSpan); // добавляем элемент в HTML

    const titleSpan = document.createElement('span');
    titleSpan.textContent = emoji.title;
    block.appendChild(titleSpan);

    const keywordsP = document.createElement('p');
    keywordsP.textContent = emoji.keywords;
    block.appendChild(keywordsP);
   
    emojiContainer.appendChild(block);
});



const keyInput = document.getElementById('key'); // ссылка на инпут

function emojiSort() {
    const userKeyword = keyInput.value.toLowerCase(); // получение введенного от пользователя + нижний регистр
    const blocksEmoji = emojiContainer.querySelectorAll('.block'); //берем все блоки

    blocksEmoji.forEach(block => {
        const keyword = block.querySelector('p').textContent.toLowerCase(); //получение коюч слов и нижний регистр

        if (keyword.includes(userKeyword)) {
            block.style.display = 'flex'; // отображаем блок
        } else {
            block.style.display = 'none'; // скрываем
        }
    })
}

keyInput.addEventListener('input', emojiSort);