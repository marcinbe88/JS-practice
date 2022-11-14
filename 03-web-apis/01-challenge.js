const answerNumber = Math.ceil(Math.random() * 10);
// console.log(answerNumber);

function checkAnswerNumber() {
  for (let i = 1; i <= 3; i++) {
    console.log(`To Twoja ${[i]} z 3 szans`);
    const guessNumber = window.prompt("Napisz liczbę między 1, a 10");
    console.log(`Podałeś liczbę: ${guessNumber}`);
    console.log("Myślę...");
    if (guessNumber < answerNumber) {
      console.log("Pudło!");
      console.warn("Za mała liczba!");
    } else if (guessNumber > answerNumber) {
      console.log("Pudło!");
      console.warn("Za duża liczba!");
    } else if (guessNumber == answerNumber) {
      console.log("Wygrana, dobra liczba!");
      break;
    }
  }
}

checkAnswerNumber();
