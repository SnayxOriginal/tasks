function AgeInput(age){
    age = parseInt(inputAgeOperand.value);
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
    result.innerHTML = age;
    console.log(age);
}
function AgeCheck(age){
    if (isNaN(age) || age < 0) {
        inputAgeOperand.value = '';
        inputAgeOperand.placeholder = 0;
        return true;
    }
    else return false;
}
inputAgeOperand.oninput = function Main(){
    let age = AgeInput();
    let check = AgeCheck(age);
    while (check === true){
        age = 0;
        check = AgeCheck(age);
    }
    const category = AgeDefine(age);
    AlertOutput(category);
}