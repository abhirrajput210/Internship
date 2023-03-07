const addTaskForm = document.getElementById('add-task-form');
const taskTableBody = document.querySelector('#task-table tbody');

// Function to add a new task to the table
function addTaskToTable(task) {
	const row = document.createElement('tr');
	row.innerHTML = `
		<td>${task.name}</td>
		<td>${task.description}</td> 
		<td>${task.date}</td> 
		<td>${task.status}</td> 
		<td><button>Edit</button><button>Delete</button></td>`;
	taskTableBody.appendChild(row);
}

// Event listener to handle form submission
addTaskForm.addEventListener