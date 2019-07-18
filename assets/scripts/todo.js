const INPUT     = document.querySelector('.todo-input');
const LIST      = document.querySelector('.todo-list');

let todos       = [];
let currentTodo = 0;

let newTodo = (content) => {
    let li = document.createElement('li');
    let del = document.createElement('i');
    
    li.classList.add('todo-item', 'flex-between');

    del.classList.add('fas', 'fa-trash-alt');

    li.innerHTML = `<span>${content}</span>`;
    li.appendChild(del);

    return li;
}

let display = () => {
    LIST.appendChild(todos[currentTodo]);
    currentTodo++;
}

INPUT.addEventListener('keypress', (keypressed) => {
    
    if (keypressed.which == 13) {
        INPUT.value = INPUT.value.trim();
        if (INPUT.value.length == 0) return;

        let todo = newTodo( INPUT.value );
        todos.push(todo);
        INPUT.value = '';
        display();
    }
});

LIST.addEventListener('click', (e) => {
    if(e.path[0].localName == 'i') {
        LIST.removeChild( e.path[1] );
    }
});

LIST.addEventListener('dblclick', (e) => {
    if(e.path[0].localName == 'span') {
        let update = document.createElement('input');
        update.value = e.path[0].textContent;
        update.classList.add('todo-input');
        
        e.path[1].innerHTML = '';
        e.path[1].appendChild(update);
       
    }

    if(e.path[0].localName == 'li') {
        e.path[0].classList.add('checked');
    }
});

LIST.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        let updateLi = newTodo(e.target.value);
        e.path[1].outerHTML = '';
        LIST.appendChild(updateLi);
    }
});