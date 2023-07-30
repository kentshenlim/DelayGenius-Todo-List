import { nanoid } from 'nanoid';

export default class Task {
  constructor({ taskName, dueDate }) {
    this.id = nanoid();
    this.taskName = taskName.trim().replace(/ +(?= )/g, ''); // Replace consecutive spaces
    this.dueDate = dueDate;
    this.isMyDay = false;
    this.isImportant = false;
    this.isCompleted = false;
    this.categories = new Set();
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

  addCategory(category) {
    this.categories.add(category);
  }

  removeCategory(category) {
    this.categories.delete(category);
  }
}
