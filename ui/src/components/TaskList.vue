<template>
    <div>
        <h1>Meine Aufgaben</h1>

        <ul class="my-tasklist">
            <TaskItem 
            name="Task 1" 
            :isDone="false" 
            description="Testaufgabe"
            @task-click="onClick">
            </TaskItem>

            <TaskItem 
            name="Task 2" 
            :isDone="true" 
            description="Abgeschlossene Aufgabe"
            @task-click="onClick">
            </TaskItem>

            <TaskItem 
            name="Task 3" 
            :isDone="false" 
            description="Noch nicht fertig"
            @task-click="onClick">
            </TaskItem>
        </ul>

    </div>
</template>

<script setup lang="ts">
import TaskItem from './TaskItem.vue';

function onClick(payload: { name: string; description: string }) {
    alert(`Ich bin die TaskList - Name: ${payload.name}, Beschreibung: ${payload.description}`);
}

</script>

<style scoped>
.my-tasklist {
  list-style-type: none;
}
</style>