const obj = {
    inputString: '',
    wordStartTime: '',
    wordEndTime: '',
    spaceBarPressed: false,
    charactersPerMinute: 0,
    wordsPerMinute: 0,
    averageSpeed: 0,
    speedHistory: [],
    levelStart: '',
    levelFinish: '',
    totalCharacters: 0,
    numberOfErrors: 0,
    percentOfErrors: 0,
}

const inputTracking = (state=obj, action) => {

    switch (action.type) {

        case 'INPUT':

            let copyState = {...state};

            // визначаємо keyCode клавіші, яка була натиснута останньою:
            const charCode = action.lastKey.charCodeAt();
            
            if (charCode !== 32) {
            // якщо остання клавіша НЕ Є ПРОБІЛОМ:
            console.log('натиснули клавішу ', action.lastKey, charCode);


                if (charCode === 65 || charCode === 67) {
                // якщо остання клавіша - це ALT чи CONTROL:
                console.log('натиснули спецсимвол');
                    
                    // текст в інпуті не змінюється 
                    copyState.inputString = copyState.inputString.slice();

                } else {
                // якщо остання клавіша - це ЛІТЕРА / ЦИФРА:
                console.log ('натиснули клавішу ', action.lastKey)

                    // відображаємо текст в інпуті
                    copyState.inputString += action.lastKey;

                    // засікаємо час старту нового слова
                    copyState.wordStartTime = state.wordStartTime ? state.wordStartTime : Number(Date.now());
                    copyState.levelStart = state.levelStart ? state.levelStart : Number(Date.now());

                    // знімаємо прапорець пробіла
                    copyState.spaceBarPressed = true ? false : copyState.spaceBarPressed;

                }

            } else {
            // якщо остання клавіша - це ПРОБІЛ:

                if (copyState.spaceBarPressed) {
                // якщо пробіл натиснули ВДРУГЕ:
                console.log('пробіл натиснули вдруге');
                
                    // текст в інпуті не змінюється 
                    copyState.inputString = copyState.inputString.slice();
                
                    //wordStartTime не чіпаємо

                } else {      
                // якщо пробіл натиснули ВПЕРШЕ:
                console.log('пробіл');
                    
                    // відображаємо в інпуті текст
                    copyState.inputString += action.lastKey;

                    // ставимо прапорець, що був натиснутий пробіл
                    copyState.spaceBarPressed = true;

                    // визначаємо останнє слово в рядку
                    const wordsArr = copyState.inputString.split(' ');
                    const lastWordIdx = wordsArr.length-1;
                    const lastWord = wordsArr[lastWordIdx-1];

                    // визначаємо момент, коли натиснули пробіл, та розраховуємо швидкість друку (у літерах на хвилину)
                    copyState.wordEndTime = Number(Date.now());
                    copyState.levelFinish = Number(Date.now());
                    const wordDuration = (copyState.wordEndTime - copyState.wordStartTime)/1000;
                    const wordCharacters = lastWord.length-1;
                    const charactersPerMinute = Math.floor(wordCharacters * 60 / wordDuration);

                    // записуємо значення швидкості у charactersPerMinute (для спідометра) 
                    copyState.charactersPerMinute = charactersPerMinute;

                    // також додаємо значення швидкості в масив зі статистикою та розраховуємо середню швидкість
                    copyState.speedHistory = copyState.speedHistory ? [...copyState.speedHistory, Number(charactersPerMinute)] : [Number(charactersPerMinute)];
                    copyState.averageSpeed = Math.round((copyState.speedHistory.reduce((acc,el)=>acc+el, 0)) / copyState.speedHistory.length);

                    // встановлюємо нульові значення для обчислення швидкості наступного слова
                    copyState.wordStartTime = '';
                    copyState.wordEndTime = '';

                } 
            }

            // розрахунок кількості слів на хвилину
            const levelDuration = (copyState.levelFinish - copyState.levelStart) / 1000;
            const totalWords = copyState.speedHistory.length;
            copyState.wordsPerMinute = Math.floor(totalWords * 60 / levelDuration);

            // розрахунок точності друку
            copyState.totalCharacters = Number(action.pecherskiyArr.length);
            copyState.numberOfErrors = action.pecherskiyArr.filter(el=>!el.isCorrect).length;
            copyState.percentOfErrors = Math.round(copyState.numberOfErrors * 100 / copyState.totalCharacters) + '%';

            return copyState;

        default: 
            return state;
    
    };
};

export default inputTracking;