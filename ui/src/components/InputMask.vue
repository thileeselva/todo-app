<template>
  <div>
    <h3>Neue Aufgabe hinzufügen</h3>
    <input type="text" placeholder="Titel..." v-model="taskItem.title" />
    <button @click="addTask">Hinzufügen</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type TaskItem from '@/model/TaskItem'

const emit = defineEmits(['onReceiveTask'])

let nextId = 1

const taskItem = ref<TaskItem>({
  id: 0,
  title: '',
  description: '',
  isDone: false
})

function addTask() {
  if (!taskItem.value.title.trim()) return

  emit('onReceiveTask', { ...taskItem.value, id: nextId++ })
  // Felder zurücksetzen
  taskItem.value.title = ''
  taskItem.value.description = ''
  taskItem.value.isDone = false
}
</script>

<style scoped>
</style>