// Show selected section
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Guest List Manager
function addGuest() {
    const guestName = document.getElementById("guestName").value;
    if (guestName) {
        const listItem = document.createElement("li");
        listItem.textContent = guestName;
        listItem.classList.add("guest-item");
        listItem.onclick = function() { removeGuest(this); };
        document.getElementById("guestListItems").appendChild(listItem);
        document.getElementById("guestName").value = '';
        saveToLocalStorage('guestList', document.getElementById("guestListItems").innerHTML);
    }
}

function removeGuest(item) {
    item.remove();
    saveToLocalStorage('guestList', document.getElementById("guestListItems").innerHTML);
}

// Budget Tracker
let totalBudget = 0;

function addExpense() {
    const expenseName = document.getElementById("expenseName").value;
    const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);

    if (expenseName && expenseAmount) {
        const listItem = document.createElement("li");
        listItem.textContent = `${expenseName}: $${expenseAmount}`;
        document.getElementById("budgetItems").appendChild(listItem);
        
        totalBudget += expenseAmount;
        document.getElementById("totalBudget").textContent = totalBudget;
        
        document.getElementById("expenseName").value = '';
        document.getElementById("expenseAmount").value = '';
        saveToLocalStorage('budgetItems', document.getElementById("budgetItems").innerHTML);
        saveToLocalStorage('totalBudget', totalBudget);
    }
}

// To-Do List
function addTask() {
    const taskName = document.getElementById("taskName").value;
    if (taskName) {
        const listItem = document.createElement("li");
        listItem.textContent = taskName;
        listItem.onclick = function() { this.classList.toggle("completed"); };
        document.getElementById("taskList").appendChild(listItem);
        document.getElementById("taskName").value = '';
        saveToLocalStorage('taskList', document.getElementById("taskList").innerHTML);
    }
}

// Save to localStorage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

// Load from localStorage on startup
window.onload = function() {
    document.getElementById("guestListItems").innerHTML = localStorage.getItem('guestList') || '';
    document.getElementById("budgetItems").innerHTML = localStorage.getItem('budgetItems') || '';
    document.getElementById("taskList").innerHTML = localStorage.getItem('taskList') || '';
    totalBudget = parseFloat(localStorage.getItem('totalBudget')) || 0;
    document.getElementById("totalBudget").textContent = totalBudget;
};
