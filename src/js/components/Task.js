import { nanoid } from 'nanoid';

export default class Task {
  constructor({ taskName, dueDate }) {
    this.id = nanoid();
    this.taskName = taskName.trim().replace(/ +(?= )/g, ''); // Replace consecutive spaces
    this.dueDate = dueDate;
    this.isMyDay = false;
    this.isImportant = false;
    this.isCompleted = false;
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
