function AskQuestion(){
    let questions = [
        "Сколько будет 2+2*2?",
        "На какой планете мы живем?",
        "Какой самый большой океан в мире?"
    ];
    let correctAnswers = [
        "6",
        "Земля",
        "Тихий"
    ]
    let x = 0;
    let answer = [];
    let correct = 0;
    while (x < 3) {
        answer[x] = prompt(questions[x]);
        while (answer[x].trim() == '') {
            alert("Ошибка. Введите ответ");
            answer[x] = prompt(questions[x]);
        }
        correct = (answer[x].trim() == correctAnswers[x]) ? (correct+1) : correct;
        x++;
    }
    alert("Ваше количество правильных ответов: " + correct);
}

AskQuestion();

