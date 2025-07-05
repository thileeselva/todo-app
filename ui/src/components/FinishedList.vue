<template>
  <div>
    <h2>Erledigte Aufgaben</h2>

    <ul class="my-tasklist">
      <TaskItemComponent
        v-for="taskItem in finishedTaskList"
        :key="taskItem.id"
        :taskItem="taskItem"
        @toggle-done="onToggleDone(taskItem)"
        @edit="onEdit"
        @delete="onDelete(taskItem)"
      />
    </ul>

  </div>
</template>

<script setup lang="ts">
import TaskItemComponent from './TaskItemComponent.vue'
import type TaskItem from '@/model/TaskItem'

const emit = defineEmits(['toggle-done', 'edit', 'delete'])
defineProps<{ finishedTaskList: TaskItem[] }>()

function onToggleDone(taskItem: TaskItem) {
  emit('toggle-done', taskItem)
}
function onEdit(editedTask: TaskItem) {
  emit('edit', editedTask)
}
function onDelete(taskItem: TaskItem) {
  emit('delete', taskItem)
}
</script>

<style scoped>
.my-tasklist {
  list-style-type: none;
}
</style>