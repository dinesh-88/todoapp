var ul = document.getElementById('todos');
var add = document.getElementById('add');

add.onclick = () => {
    addToList(ul);
};

function addToList(targetUl) {
    var inputText = document.getElementById('new-todo').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + ' ');
    var done = document.createElement('input');
    done.type = 'checkbox f';
    document.getElementById('new-todo').value = '';

    if (inputText.split(' ').join('').length === 0) {
        alert('Todos can not be empty');
        return false;
    }

    done.className = 'completed';
    done.innerHTML = '';
    done.setAttribute('onclick', 'completed(this);');

    li.appendChild(textNode);
    li.appendChild(done);

    targetUl.appendChild(li);
}


function completed(item) {
    if(!item.parentNode.classList.contains('completed')){
        item.parentNode.classList.add("completed");
    }else{
        item.parentNode.classList.remove("completed");
    }

}
