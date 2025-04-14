function AgeInput(age){
    age = parseInt(prompt("Введите свой возраст"));
    console.log(age);
    return age;
}
function AgeOutput(age){
    if (age < 3) {
        alert("Младенец");
        console.log("Младенец");
    } else {
        if (age <= 12) {
            alert("Ребёнок");
            console.log("Ребёнок");
        } else if (age <= 18) {
            alert("Подросток");
            console.log("Подросток");
        } else {
            if (age > 60) {
                alert("Пожилой человек");
                console.log("Пожилой человек");
            } else
                alert("Взрослый");
                console.log("Взрослый");
                }
            }
}
function AgeCheck(age){
    if (isNaN(age) || age < 0) {
        alert("Ошибка. Введите правильное число");
        age = AgeInput(age);
        AgeCheck(age);
    }
}
function Main(){
    let age = AgeInput();
    AgeCheck(age);
    AgeOutput(age);
}
Main();