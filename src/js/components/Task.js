import { nanoid } from 'nanoid';

export default class Task {
  constructor({
    id, taskName, dueDate, isMyDay, isImportant, isCompleted, ...rest
  }) {
    this.id = id || nanoid();
    this.taskName = taskName || taskName.trim().replace(/ +(?= )/g, ''); // Replace consecutive spaces
    this.dueDate = dueDate || dueDate;
    this.isMyDay = isMyDay || false;
    this.isImportant = isImportant || false;
    this.isCompleted = isCompleted || false;
    const remKeys = Object.keys(rest);
    for (let i = 0; i < remKeys.length; i += 1) this[remKeys[i]] = true; // For list identifier
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
