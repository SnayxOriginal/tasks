function Main() {
    const questionsAndAsnwers = [
        {question: "Сколько будет 2+2*2?", answer: "6"},
        {question: "На какой планете мы живем?", answer: "Земля"},
        {question: "Какой самый большой океан в мире?", answer: "Тихий"}
    ];
    const sendAnswer = document.querySelector("#sendAnswer");
    const question = document.querySelector("#Question");
    let count = 0;
    let correct = 0;
    function GetAnswer() {
        let answerUser = inputAnswerOperand.value;
        return answerUser;
    }
    function AskQuestion(count) {
        if (count < questionsAndAsnwers.length) {
            question.innerHTML = (questionsAndAsnwers[count].question);
            console.log(questionsAndAsnwers[count].question);
        }
    }
    sendAnswer.addEventListener("click", function CheckAnswer() {
        let answerUser = GetAnswer();
        let windowConfirm = false;
        console.log(answerUser);
        if (answerUser.trim() == '') {
            windowConfirm = confirm("Вы оставили поле пустым. Хотите отправить пустой ответ?");
            if(windowConfirm == true){
                count++;
            }
            console.log(count);
        } else {
            correct = (answerUser.trim() == questionsAndAsnwers[count].answer) ? (correct + 1) : correct;
            count++;
            console.log(count);
            console.log(correct);
        }
        if (count >= questionsAndAsnwers.length) {
            sendAnswer.disabled = true;
            result.innerHTML = "Правильных ответов: " + correct + " из " + questionsAndAsnwers.length;
        }
        inputAnswerOperand.value = "";
        AskQuestion(count);
    });
}
Main();