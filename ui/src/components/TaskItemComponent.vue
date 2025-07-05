<template>
  <li class="task-item">
    <input
      type="checkbox"
      :checked="taskItem.isDone"
      @change="$emit('toggle-done', taskItem)"
    />

    <span
      v-if="!editing"
      :style="{ textDecoration: taskItem.isDone ? 'line-through' : 'none' }"
    >
      {{ taskItem.title }}
    </span>
    
    <input
      v-else
      v-model="editTitle"
      @keyup.enter="saveEdit"
      @blur="saveEdit"
    />

    <button @click="startEdit" v-if="!editing">✏️</button>
    <button @click="saveEdit" v-if="editing">💾</button>
    <button @click="onDelete">🗑️</button>
  </li>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type TaskItem from '@/model/TaskItem'

const props = defineProps<{ taskItem: TaskItem }>()
const emit = defineEmits(['toggle-done', 'edit', 'delete'])

const editing = ref(false)
const editTitle = ref(props.taskItem.title)

// Synchronisiere editTitle, wenn das TaskItem von außen geändert wird
watch(() => props.taskItem.title, (newTitle) => {
  if (!editing.value) editTitle.value = newTitle
})

function startEdit() {
  editing.value = true
  editTitle.value = props.taskItem.title
}
function saveEdit() {
  emit('edit', { ...props.taskItem, title: editTitle.value })
  editing.value = false
}
function onDelete() {
  emit('delete', props.taskItem)
}
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f3f3f3;
  border-radius: 4px;
  padding: 0.7rem 1rem;
  margin-bottom: 0.7rem;
}
.task-item input[type="checkbox"] {
  margin-right: 0.5rem;
}
.task-item input[type="text"] {
  flex: 1;
}
</style>