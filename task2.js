function AgeInput(age){
    age = parseInt(prompt("Введите свой возраст"));
    console.log(age);
    return age;
}
function AgeDefine(age){
    if(age < 3) return "Младенец";
    if(age <= 12) return "Ребенок";
    if(age <= 18) return "Подросток";
    if(age <= 60) return "Взрослый";
    if(age > 60) return "Пожилой человек";
}
function AlertOutput(age){
    alert(age);
    console.log(age);
}
function AgeCheck(age){
    if (isNaN(age) || age < 0) {
        alert("Ошибка. Введите правильное число");
        return true;
    }
    else return false;
}
function Main(){
    let age = AgeInput();
    let check = AgeCheck(age);
    while (check === true){
        age = AgeInput();
        check = AgeCheck(age);
    }
    const category = AgeDefine(age);
    AlertOutput(category);
}
Main();
