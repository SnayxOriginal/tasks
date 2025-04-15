function AgeInput(age){
    age = parseInt(prompt("Введите свой возраст"));
    console.log(age);
    return age;
}
function AgeDefine(age){
    if(age < 3)
        return 0;
    if(age <= 12)
        return 1;
    if(age <= 18)
        return 2;
    if(age <= 60)
        return 3;
    if(age > 60)
        return 4;
}
function AlertOutput(x){
    let alerts = ["Младенец","Ребенок","Подросток","Взрослый","Пожилой человек"];
    alert(alerts[x]);
    console.log(alerts[x]);
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
    let category = AgeDefine(age);
    AlertOutput(category);
}
Main();
