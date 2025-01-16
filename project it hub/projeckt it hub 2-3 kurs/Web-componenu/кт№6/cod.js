// task-list.js
class TaskList extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(
        document.getElementById('task-list-template').content.cloneNode(true)
      );
  
      this.tasksContainer = this.shadowRoot.getElementById('tasks-container');
      this.taskForm = this.shadowRoot.getElementById('task-form');
      this.newTaskInput = this.shadowRoot.getElementById('new-task');
      this.addTaskButton = this.shadowRoot.getElementById('add-task');
  
      this.tasks = [];
  
      this.addTaskButton.addEventListener('click', () => this.addTask());
      this.tasksContainer.addEventListener('click', (event) =>
        this.handleTaskAction(event)
      );
    }
  
    addTask() {
      const taskText = this.newTaskInput.value.trim();
      if (taskText !== '') {
        const newTask = { text: taskText, done: false };
        this.tasks.push(newTask);
        this.renderTasks();
        this.newTaskInput.value = '';
        this.dispatchChangeEvent(); // Отправляем событие об изменении задач
      }
    }
  
    handleTaskAction(event) {
      const target = event.target;
      if (target.tagName === 'LI') {
        const taskIndex = target.dataset.index;
        if (event.ctrlKey) {
          // Ctrl + Click to remove task
          this.tasks.splice(taskIndex, 1);
        } else {
          // Click to toggle task completion
          this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
        }
        this.renderTasks();
        this.dispatchChangeEvent(); // Отправляем событие об изменении задач
      }
    }
  
    dispatchChangeEvent() {
      // Создаем и отправляем событие об изменении задач
      const event = new Event('tasksChanged', { bubbles: true });
      this.dispatchEvent(event);
    }
  
    renderTasks() {
      // Используем фрагмент для оптимизации
      const fragment = document.createDocumentFragment();
      this.tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.text;
        taskItem.dataset.index = index;
        if (task.done) {
          taskItem.classList.add('done');
        }
        fragment.appendChild(taskItem);
      });
  
      // Очищаем и добавляем фрагмент
      this.tasksContainer.innerHTML = '';
      this.tasksContainer.appendChild(fragment);
    }
  
    connectedCallback() {
      this.renderTasks();
      this.dispatchChangeEvent(); // Отправляем событие об изменении задач при инициализации
    }
  }
  
  customElements.define('task-list', TaskList);
  