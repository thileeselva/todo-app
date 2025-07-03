<template>
  <li>
    <label>
    
    <div class="task-item">
        <input type="checkbox" :checked="isDone" @change="$emit('toggle-done')" />
        <span :style="{ textDecoration: isDone ? 'line-through' : 'none' }">{{ name }}</span>
        <div class="description">{{ description }}</div>
        <button @click="$emit('task-click', { name, description })">Add</button>
    </div>

    </label>
  </li>
</template>

<script setup lang="ts">

const emit = defineEmits(['task-click', 'toggle-done'])

function onClick() {
    alert("Ich bin das TaskItem");
}

defineProps<{
  name: string
  isDone: boolean
  description: string
}>()

// defineEmits(['toggle-done', 'onClick'])
</script>

<style scoped>
.task-item {
    background-color: gray;
    margin: 10px;
    padding: 4px;
}
</style>