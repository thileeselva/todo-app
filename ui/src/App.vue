<script setup lang="ts">
import { ref } from 'vue'
import TaskList from './components/TaskList.vue'
import FinishedList from './components/FinishedList.vue'
import InputMask from './components/InputMask.vue'
import type TaskItem from './model/TaskItem'

const taskList = ref<TaskItem[]>([])

function onReceiveTask(taskItem: TaskItem) {
  taskList.value = [...taskList.value, taskItem]
}

function onToggleDone(taskItem: TaskItem) {
  const idx = taskList.value.findIndex(t => t.id === taskItem.id)
  if (idx !== -1) {
    taskList.value[idx].isDone = !taskList.value[idx].isDone
    taskList.value = [...taskList.value]
  }
}

function onEdit(editedTask: TaskItem) {
  const idx = taskList.value.findIndex(t => t.id === editedTask.id)
  if (idx !== -1) {
    taskList.value[idx] = { ...taskList.value[idx], ...editedTask }
    taskList.value = [...taskList.value]
  }
}

function onDelete(taskItem: TaskItem) {
  taskList.value = taskList.value.filter(t => t.id !== taskItem.id)
}
</script>

<template>
  <InputMask @onReceiveTask="onReceiveTask" />
  <TaskList
    :task-list="taskList.filter(t => !t.isDone)"
    @toggle-done="onToggleDone"
    @edit="onEdit"
    @delete="onDelete"
  />
  <FinishedList
    :finished-task-list="taskList.filter(t => t.isDone)"
    @toggle-done="onToggleDone"
    @edit="onEdit"
    @delete="onDelete"
  />
</template>

<style>
body {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #f7f7f7;
  margin: 0;
  padding: 0;
}

header {
  background: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  margin-bottom: 2rem;
}

main {
  max-width: 500px;
  margin: 2rem auto; /* auto zentriert horizontal */
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 2rem;
  display: block;
}

h1, h2 {
  font-weight: 600;
  color: #222;
  margin-bottom: 1rem;
}

input[type="text"] {
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background: #fafafa;
  transition: border 0.2s;
}

input[type="text"]:focus {
  border: 1.5px solid #888;
  outline: none;
}

button {
  background: #222;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #444;
}

ul.my-tasklist {
  list-style: none;
  padding: 0;
  margin: 0;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f3f3f3;
  border-radius: 4px;
  padding: 0.7rem 1rem;
  margin-bottom: 0.7rem;
  transition: background 0.2s;
}

.task-item input[type="checkbox"] {
  margin-right: 1rem;
}

.task-item .description {
  color: #666;
  font-size: 0.95rem;
  margin-left: 1rem;
  flex: 1;
}

.task-item span {
  flex: 2;
  font-size: 1.05rem;
}

@media (max-width: 600px) {
  main {
    padding: 1rem;
    margin: 1rem;
  }
}
</style>


