<template>
  <li>
    <label>
    
    <div class="task-item">
        <input type="checkbox" :checked="taskItem.isDone" @change="$emit('toggle-done')" />
        <span :style="{ textDecoration: taskItem.isDone ? 'line-through' : 'none' }">{{ taskItem.title }}</span>
        <div class="description">{{ taskItem.description }}</div>

      </div>
      
    </label>
  </li>
</template>

<script setup lang="ts">
import type TaskItem from '../model/TaskItem'

defineEmits(['task-click', 'toggle-done'])

function onClick() {
    alert("Ich bin das TaskItem")
}

defineProps<{
  taskItem: TaskItem
}>()

</script>

<style scoped>
.task-item {
    background-color: gray;
    margin: 10px;
    padding: 4px;
}
</style>