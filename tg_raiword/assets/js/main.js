import {words} from './words.js';

const backspaceSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"><path d="M22 12C22 15.7712 22 17.6569 20.7961 18.8284C19.5921 20 17.6544 20 13.779 20H11.142C8.91458 20 7.80085 20 6.87114 19.4986C5.94144 18.9971 5.35117 18.0781 4.17061 16.24L3.48981 15.18C2.4966 13.6336 2 12.8604 2 12C2 11.1396 2.4966 10.3664 3.48981 8.82001L4.17061 7.76001C5.35117 5.92191 5.94144 5.00286 6.87114 4.50143C7.80085 4 8.91458 4 11.142 4L13.779 4C17.6544 4 19.5921 4 20.7961 5.17157C21.4673 5.82475 21.7643 6.69989 21.8957 8" stroke="var(--primary-color)" stroke-width="1.5" stroke-linecap="round"/><path d="M15.5 9.50002L10.5 14.5M10.5 9.5L15.5 14.5" stroke="var(--primary-color)" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const keyboard = [
    ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
    ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
    ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'backspace'],
];
const wordInputsClassName = 'word-inputs';
const wordInputsRowClassName = 'word-inputs-row';
const wordInputsItemClassName = 'word-inputs__item';
const wordsCounterClassName = 'words-counter';
const popupClassName = 'popup';

let word = 'пень';
const tryCount = 5;
let currentTry = 0;
let wordsInput = [];
const wordLength = 4;
let successWordsCounter = 0;

function onKeyboardLetter(letter = '') {
    const row = wordsInput[currentTry];
    const isBackspace = letter === 'backspace';
    if (Array.isArray(row)) {
        if (isBackspace) {
            if (row.length > 0) {
                row.splice(row.length - 1, 1);
            }
        } else {
            if (row.length < word.length) {
                row.push(letter);
            } else {
                row[row.length - 1] = letter;
            }
        }
    }
    keyboardDOMUpdate();
}

function checkWord() {
    const row = wordsInput[currentTry];
    const tryWord = row.join('').toString().toLowerCase().trim();

    if (tryWord === word.toLowerCase().trim()) {
        updateSuccessWordsCounter(successWordsCounter + 1);
        showWinPopup();
        generateNewWord();
        return;
    }

    if (tryWord.length !== word.length) {
        showPopup({
            title: 'Слово не полное ⚠️',
            description: 'Допишите слово',
            buttonText: 'Понял',
        });
        return;
    }

    const wordExist = words.find((w) => w.toString().toLowerCase() === tryWord);

    if (!wordExist) {
        showPopup({
            title: 'Такого слова нет в базе 😶',
            description: 'Попробуйте другое слово',
            buttonText: 'Понял',
        });
        return;
    }

    if (currentTry < (tryCount - 1)) {
        currentTry++;
    } else {
        showLosePopup();
        generateNewWord();
        return;
    }

    keyboardDOMUpdate();
}

function keyboardDOMUpdate() {
    for (let i = 0; i < tryCount; i++) {
        const fullLetters = [];
        for (let j = 0; j < word.length; j++) {
            const $row = document.getElementsByClassName(wordInputsRowClassName)[i];
            const $item = $row.getElementsByClassName(wordInputsItemClassName)[j];

            const letter = wordsInput.length >= (i + 1) ? wordsInput[i].length >= (j + 1) ? wordsInput[i][j] : '' : '';
            $item.innerText = letter;

            if (i < currentTry) {
                if (letter.toLowerCase().trim() === word[j].toLowerCase().trim()) {
                    $item.classList.add('full');
                    fullLetters.push(letter);
                }

                let otherLetters = '';
                word.split('').forEach((l) => {
                    if (!fullLetters.includes(l)) {
                        otherLetters += l;
                    } else {
                        fullLetters.splice(fullLetters.indexOf(l), 1);
                    }
                });

                if (word.includes(letter.toLowerCase().trim()) && !$item.classList.contains('full')) {
                    $item.classList.add('half');
                } else if (!$item.classList.contains('full')) {
                    $item.classList.add('empty');
                }
            }

            if (i === currentTry && (j === wordsInput[i].length || (j === word.length - 1 && wordsInput[i].length === word.length))) {
                $item.classList.add('active');
            } else {
                $item.classList.remove('active');
            }
        }
    }
}

function generateTitle() {
    const $titleColumn = document.createElement('div');

    const $title = document.createElement('h1');
    $title.className = 'title';
    $title.innerText = 'Отгадай слово!';

    const $counter = document.createElement('p');
    $counter.className = wordsCounterClassName;

    $titleColumn.appendChild($title);
    $titleColumn.appendChild($counter);

    return $titleColumn;
}

function generateKeyboard(){
    const $keyboard = document.createElement('div');
    $keyboard.className = 'keyboard';

    keyboard.forEach((letters) => {
        const $lettersRow = document.createElement('div');
        $lettersRow.className = 'keyboard-row';

        letters.forEach((letter) => {
           const $letter = generateLetter(letter);
           $lettersRow.appendChild($letter);
        });

        $keyboard.appendChild($lettersRow);
    });

    const $submit = document.createElement('button');
    $submit.className = 'keyboard__button';
    $submit.innerText = 'Проверить слово';
    $submit.addEventListener('click', checkWord);
    $keyboard.appendChild($submit);

    return $keyboard;
}

function generateLetter(letter = '') {
    const $letter = document.createElement('button');

    const isBackspace = letter === 'backspace';
    $letter.className = 'keyboard__button';
    $letter.innerText = isBackspace ? '' : letter;
    if (isBackspace) {
        $letter.classList.add('backspace');
        const parser = new DOMParser();
        const doc = parser.parseFromString(backspaceSvg, 'text/html');
        $letter.appendChild(doc.body.firstChild);
    }
    $letter.addEventListener('click', () => onKeyboardLetter(letter));

    return $letter;
}

function generateInput() {
    const $input = document.createElement('div');
    $input.className = wordInputsItemClassName;
    return $input;
}

function generateInputs() {
    const $inputs = document.createElement('div');
    $inputs.className = wordInputsClassName;
    for (let i = 0; i < tryCount; i++) {
        const $inputRow = document.createElement('div');
        $inputRow.className = wordInputsRowClassName;
        for (let j = 0; j < word.length; j++) {
            $inputRow.appendChild(generateInput());
        }
        $inputs.appendChild($inputRow);
    }
    $inputs.firstChild.firstChild.classList.add('active');
    return $inputs;
}

function updateSuccessWordsCounter(count = 0) {
    const $counter = document.getElementsByClassName(wordsCounterClassName)[0];
    successWordsCounter = count;
    $counter.innerText = `Всего слов отгадано: ${successWordsCounter}`;
}

function showPopup({title = '', description = '', buttonText = ''}) {
    const $popup = document.createElement('div');
    const $wrapper = document.createElement('div');
    const $overlay = document.createElement('div');

    const $content = document.createElement('div');
    const $title = document.createElement('p');
    const $description = document.createElement('p');
    const $button = document.createElement('button');

    $button.addEventListener('click', closePopup);

    $content.className = 'popup-col';
    $title.className = 'popup__title';
    $description.className = 'popup__description';
    $button.className = 'popup__button';

    $title.innerText = title;
    $description.innerText = description;
    $button.innerText = buttonText;

    $content.appendChild($title);
    $content.appendChild($description);
    $content.appendChild($button);

    $overlay.addEventListener('click', closePopup);

    $popup.className = popupClassName;
    $wrapper.className = 'popup-wrapper';
    $overlay.className = 'popup__overlay';

    $wrapper.appendChild($content);
    $popup.appendChild($wrapper);
    $popup.appendChild($overlay);

    document.documentElement.appendChild($popup);
}

function closePopup() {
    const $popups = [...document.getElementsByClassName(popupClassName)];
    if ($popups.length) {
        $popups.forEach((p) => p.remove());
    }
}

function showWinPopup() {
    showPopup({
        title: 'Поздравляем! 🎉',
        description: 'Вы верно отгадали слово',
        buttonText: 'Отгадать еще',
    });
}

function showLosePopup() {
    showPopup({
        title: 'Сожалеем 😢',
        description: 'Вы не отгадали слово',
        buttonText: 'Попробовать еще',
    });
}

function generateNewWord() {
    const filteredWords = [...words].filter((e) => e.length === wordLength);
    word = filteredWords[Math.floor(Math.random() * filteredWords.length)];
    wordsInput.splice(0, wordsInput.length);
    currentTry = 0;
    for (let i = 0; i < tryCount; i++) {
        wordsInput.push([]);
    }
    keyboardDOMUpdate();
    console.log(word);
}

function mount() {

    const $app = document.getElementById('app');

    const $title = generateTitle();
    const $inputs = generateInputs();
    const $keyboard = generateKeyboard();

    $app.appendChild($title);
    $app.appendChild($inputs);
    $app.appendChild($keyboard);

    generateNewWord();
    updateSuccessWordsCounter();
}

document.addEventListener('DOMContentLoaded', mount);