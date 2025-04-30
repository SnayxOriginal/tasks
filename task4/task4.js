class CreateTaskAndColumn{
    Inputs = {
        texts: '',
    }
    constructor(){
        this.buttonPressed()
    }
    createTask(){
        const inputTask = document.querySelector('#inputTask');
        const box = document.querySelector('.draggable');
        const divContainer = document.createElement('div');

        this.Inputs.texts =  inputTask.value;
        divContainer.className = "draggable";
        divContainer.draggable = true;
        divContainer.innerHTML = this.Inputs.texts;
        if (this.Inputs.texts.length === 0){
            alert("Название не может быть пустым");
            return;
        }
        box.after(divContainer);
        inputTask.value = '';
    }
    createColumn() {
        const inputColumn = document.querySelector('#inputColumn');
        const divContainer = document.createElement('div');
        const main = document.querySelector('#container-last');

        this.Inputs.texts = inputColumn.value;
        divContainer.className = "container";
        divContainer.innerHTML = this.Inputs.texts;
        if (this.Inputs.texts.length === 0) {
            alert("Название не может быть пустым");
            return;
        }
        main.after(divContainer);
        inputColumn.value = '';
    }
    buttonPressed(){
        document.querySelector("#createTask").addEventListener("pointerup",() => this.createTask());
        document.querySelector("#createColumn").addEventListener("pointerup",() => this.createColumn());
    }
}
class DragAndDrop {
    stateClasses = {
        isDragging: 'dragging',
    }
    initialState = {
        isDragging: false,
        currentDraggingElement: null,
    }
    constructor() {
        this.state = { ...this.initialState }
        this.bindEvents()
    }
    resetState(){
        if (!this.state.currentDraggingElement) {
            return;
        }
        this.state.currentDraggingElement.classList.remove(this.stateClasses.isDragging);
        this.state = { ...this.initialState};
    }
    onDragStart(event) {
        const isDraggable = event.target.matches(".draggable");
        if (!isDraggable) {
            return;
        }
        event.target.classList.add(this.stateClasses.isDragging);
        this.state = {
            isDragging: true,
            currentDraggingElement: event.target,
        }
    }
    onDragEnd(event) {
        if(!this.state.isDragging) return;
        this.resetState(event);
    }
    getDragAfterElement(event,container) {
        const draggableElements = container.getElementsByClassName('draggable');
        const quantity = draggableElements.length;
        let count = 0;
        while (count < quantity) {
            const element = draggableElements[count];
            const coords = element.getBoundingClientRect();
            const y = event.pageY;
            const offset = y - coords.top - coords.height /2;
            count++;
            if (offset < 0) {
                return element;
            }
        }
    }
    getDragContainerPosition(containers,event){
        const quantity = containers.length;
        let count = 0;
        while (count < quantity) {
            const element = containers[count];
            const coords = element.getBoundingClientRect();
            const x = event.pageX;
            count++;
            if (coords.left <= x && coords.right >= x) {
                return element;
            }
        }
    }
    onDragOver(event) {
        event.preventDefault();
        const containers = document.querySelectorAll('.container');
        const draggable = document.querySelector('.dragging');
        const containerDragOver = this.getDragContainerPosition(containers,event);
        const beforeElement = this.getDragAfterElement(event,containerDragOver);
        if (beforeElement !== undefined) { containerDragOver.insertBefore(draggable, beforeElement);
        } else containerDragOver.appendChild(draggable);
    }
    bindEvents() {
            document.addEventListener('dragstart', (event) => this.onDragStart(event));
            document.addEventListener('dragend', (event) => this.onDragEnd(event));
            document.addEventListener('dragover', (event) => this.onDragOver(event));
    }
}
new CreateTaskAndColumn();
new DragAndDrop();



