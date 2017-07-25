const doneItems = document.querySelectorAll('.done input');
const undoneItems = document.querySelectorAll('.undone input');
const doneBlock = document.querySelector('.done');
const undoneBlock = document.querySelector('.undone');

for (let i = 0; i < doneItems.length; i ++){
    doneItems[i].addEventListener('change', addToDo);
}

for (let i = 0; i < undoneItems.length; i ++){
    undoneItems[i].addEventListener('change', addToDone);
}
function addToDo(event) {
    console.log('done');
   // event.target.removeAttribute('checked');
    let currentNode = event.target.parentElement;
    currentNode.remove();
    undoneBlock.appendChild(currentNode);
    undoneBlock.lastElementChild.firstElementChild.addEventListener('change', addToDone)
}

function addToDone(event) {
    //event.target.setAttribute('checked', true);
    let currentNode = event.target.parentElement;
    currentNode.remove();
    doneBlock.appendChild(currentNode);
    doneBlock.lastElementChild.firstElementChild.addEventListener('change', addToDo)
}
/**
 * Created by Alla on 7/21/2017.
 */
