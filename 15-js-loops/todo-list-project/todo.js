let input = prompt('What would you like to do?');

const todos = ['Collect chicken eggs', 'Clean litter box'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
       console.log('****************************************'); 
       for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
       console.log('****************************************'); 
    } else if (input === 'new') {
        const newToDo = prompt('Ok, what to do next?');
        todos.push(newToDo);
        console.log(`${newToDo} was added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter the index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, ${deleted} was deleted`);
        } else {
            console.log('Invalid index.')
        }
    }
    input = prompt('What would you like to do?');
}
console.log('Program quitting...');
console.log('Program succesfully terminated');