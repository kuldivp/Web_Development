const fs = require('fs');
const path = 'api.json';

// Add a new task
function addTask(description) {
    let tasks = [];
    if (fs.existsSync(path)) {
        const data = fs.readFileSync(path, 'utf-8');
        tasks = JSON.parse(data);
    }

    const newTask = {
        id: tasks.length + 1,
        description: description,
        status: "todo"  
    };

    tasks.push(newTask);
    fs.writeFileSync(path, JSON.stringify(tasks, null, 2));

    console.log('New task added:', newTask);
}

// List all tasks
function listTasks() {
    if (fs.existsSync(path)) {
        const tasks = JSON.parse(fs.readFileSync(path, 'utf-8'));
        console.log('Tasks:', tasks);
    } else {
        console.log('No tasks found.');
    }
}

// List tasks by status
function listTasksByStatus(status) {
    if (fs.existsSync(path)) {
        const tasks = JSON.parse(fs.readFileSync(path, 'utf-8'));
        const filteredTasks = tasks.filter(task => task.status === status);
        console.log(`Tasks with status "${status}":`, filteredTasks);
    } else {
        console.log('No tasks found.');
    }
}

// List all tasks that are done
function listDoneTasks() {
    listTasksByStatus('done');
}

// List all tasks that are not done
function listNotDoneTasks() {
    if (fs.existsSync(path)) {
        const tasks = JSON.parse(fs.readFileSync(path, 'utf-8'));
        const filteredTasks = tasks.filter(task => task.status !== 'done');
        console.log('Tasks that are not done:', filteredTasks);
    } else {
        console.log('No tasks found.');
    }
}

// List all tasks that are in progress
function listInProgressTasks() {
    listTasksByStatus('in-progress');
}

// Update task description
function updateTask(id, newDescription) {
    const tasks = JSON.parse(fs.readFileSync(path, 'utf-8'));
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
        tasks[taskIndex].description = newDescription || tasks[taskIndex].description;
        fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
        console.log('Task updated:', tasks[taskIndex]);
    } else {
        console.log('Task not found with id:', id);
    }
}

// Mark task as done or in-progress
function markTask(id, status) {
    const tasks = JSON.parse(fs.readFileSync(path, 'utf-8'));
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
        tasks[taskIndex].status = status;
        fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
        console.log(`Task ${id} marked as ${status}.`);
    } else {
        console.log('Task not found with id:', id);
    }
}

// Delete a task
function deleteTask(id) {
    let tasks = [];
    if (fs.existsSync(path)) {
        const data = fs.readFileSync(path, 'utf-8');
        tasks = JSON.parse(data);
    }

    const updatedTasks = tasks.filter(task => task.id !== id);

    if (tasks.length === updatedTasks.length) {
        console.log(`Task with id ${id} not found.`);
    } else {
        fs.writeFileSync(path, JSON.stringify(updatedTasks, null, 2));
        console.log(`Task with id ${id} has been deleted.`);
    }
}

// Command-line input
const command = process.argv[2];
const taskDescription = process.argv[3];
const taskId = parseInt(process.argv[4]);

switch (command) {
    case 'add':
        addTask(taskDescription);
        break;
    case 'list':
        listTasks();
        break;
    case 'list-done':
        listDoneTasks();
        break;
    case 'list-not-done':
        listNotDoneTasks();
        break;
    case 'list-in-progress':
        listInProgressTasks();
        break;
    case 'update':
        updateTask(taskId, taskDescription);
        break;
    case 'mark':
        const status = process.argv[3];
        markTask(taskId, status);
        break;
    case 'delete':
        deleteTask(taskId);
        break;
    default:
        console.log('Invalid command. Use "add", "list", "update", "delete", "mark", "list-done", "list-not-done", or "list-in-progress".');
}




//------------------------------------- check --------------------------------------------------------------------------------------------------------------


/*  to test this project : all commands is given below

### Task Tracker CLI - Commands

1. **Add a new task**: `node main.js add "Task description"` - Adds a new task with status "todo".  
2. **List all tasks**: `node main.js list` - Lists all tasks.  
3. **Update a task**: `node main.js update <taskId> "New description"` - Updates the description of a specific task.  
4. **Mark a task**: `node main.js mark <taskId> <status>` - Marks a task as "done" or "in-progress".  
5. **Delete a task**: `node main.js delete <taskId>` - Deletes a task by its ID.  
6. **List done tasks**: `node main.js list-done` - Lists all tasks marked as "done".  
7. **List not done tasks**: `node main.js list-not-done` - Lists tasks that are not marked as "done".  
8. **List in-progress tasks**: `node main.js list-in-progress` - Lists all tasks marked as "in-progress".  */