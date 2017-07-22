const doneItems = document.querySelectorAll('.done input');
const undoneItems = document.querySelectorAll('.undone input');
const doneBlock = document.querySelector('.done');
const undoneBlock = document.querySelector('.undone');

for (let i = 0; i < doneItems.length; i ++){
    doneItems[i].addEventListener('click', addToDone);
}

for (let i = 0; i < undoneItems.length; i ++){
    undoneItems[i].addEventListener('click', addToDo);
}
function addToDone(event) {
    event.target.removeAttribute('checked');
    let currentNode = event.target.parentElement;
    currentNode.remove();
    undoneBlock.appendChild(currentNode);
    undoneBlock.lastElementChild.firstElementChild.addEventListener('click', addToDo)
}

function addToDo(event) {
    event.target.setAttribute('checked', true);
    let currentNode = event.target.parentElement;
    currentNode.remove();
    doneBlock.appendChild(currentNode);
    doneBlock.lastElementChild.firstElementChild.addEventListener('click', addToDone)
}
/**
 * Created by Alla on 7/21/2017.
 */
