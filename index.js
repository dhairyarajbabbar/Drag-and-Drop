// const picture = document.querySelector('.picture');
const leftbox = document.getElementsByClassName('box');
const draggables = document.getElementsByClassName('dragables');

let dragged;
for(dragable of draggables){
    let prev;
    dragable.addEventListener('dragstart', (e) => {
        prev=e.target.className;
        console.log('dragstart has been triggered');
        e.target.className += ' inHand';
        dragged=e.target;
        setTimeout(() => {
            e.target.className='hide';
        }, 0);
    });
    dragable.addEventListener('dragend', (e) => {
        console.log('DragEnd has been triggered');
        e.target.className = 'prev';
    });
}


for (box of leftbox){
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });
    box.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
    })
    
    box.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
    })
    
    box.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(dragged);
        alert("moved");
    })
}






















