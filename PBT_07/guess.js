let secretNumber = Math.floor(Math.random() * 100) + 1;

let guessCount = 0;
let maxGuesses = 7;
let guessedNumbers = [];

alert("Chào mừng bạn đến với game đoán số!");
alert("Máy đã chọn một số từ 1 đến 100. Bạn có 7 lần đoán.");

while (guessCount < maxGuesses) {

    let input = prompt(
        "Lần đoán thứ " + (guessCount + 1) + "/" + maxGuesses +
        "\nNhập số bạn đoán từ 1 đến 100:"
    );

    if (input === null) {
        alert("Bạn đã thoát game!");
        break;
    }

    let guess = Number(input);

    if (input.trim() === "" || isNaN(guess) || guess < 1 || guess > 100) {
        alert("Lỗi: Vui lòng nhập một số từ 1 đến 100!");
        continue;
    }

    let alreadyGuessed = false;

    for (let i = 0; i < guessedNumbers.length; i++) {
        if (guessedNumbers[i] === guess) {
            alreadyGuessed = true;
            break;
        }
    }

    if (alreadyGuessed) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    guessedNumbers.push(guess);
    guessCount++;

    if (guess === secretNumber) {
        alert("Đúng rồi! Bạn đoán đúng sau " + guessCount + " lần!");
        break;
    } else if (guess < secretNumber) {
        alert("Cao hơn!");
    } else {
        alert("Thấp hơn!");
    }
}

if (guessCount === maxGuesses) {
    alert("Bạn đã hết 7 lượt đoán. Bạn thua! Đáp án là: " + secretNumber);
}
