export default class Task {
  constructor({ taskName, dueDate }) {
    this.taskName = taskName;
    this.dueDate = dueDate;
    this.isCompleted = false;
    this.isImportant = false;
    this.categories = [];
  }

  editTaskName(newName) {
    this.taskName = newName;
  }

  editDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }

  toggleIsCompleted() {
    this.isCompleted = !this.isCompleted;
  }

  toggleIsImportant() {
    this.isImportant = !this.isImportant;
  }
}
