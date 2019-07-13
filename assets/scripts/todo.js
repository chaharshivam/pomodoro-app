const INPUT     = document.getElementsByClassName('todo-input')[0];
const LIST      = document.getElementsByClassName('todo-list')[0];

let todos       = [];
let currentTodo = 0;

let display = () => {
    LIST.innerHTML = todos.reduce( (s, item) => s+item, '');
    currentTodo++;
}

INPUT.addEventListener('keypress', (keypressed) => {
    
    if (keypressed.which == 13) {
        INPUT.value = INPUT.value.trim();
        if (INPUT.value.length == 0) return;

        let todo = `<li id="item-${currentTodo}" 
            class="todo-item flex-between"><span class="">${INPUT.value}</span><i id="delete-${currentTodo}" 
            class="fas fa-trash-alt"></i></li>`;
        todos.push(todo);
        INPUT.value = '';
        display();
    }
});

LIST.addEventListener('click', (e) => {
    let currentItem = e.target;

    if(currentItem.id.includes('item')) {
        if(currentItem.classList.contains('checked')) {
            currentItem.classList.remove('checked');
        } else {
            currentItem.classList.add('checked');
        }
    }

    if(currentItem.id.includes('delete')) {
        delete todos[ currentItem.id[currentItem.id.length - 1] ];
        display();
        currentTodo--;
    }
});