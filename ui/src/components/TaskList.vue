<template>
    <div>
        <h1>Meine Aufgaben</h1>

        <ul class="my-tasklist">

            <TaskItemComponent
                v-for="(taskItem, id) in taskList"
                :key="id"
                :taskItem="taskItem"
            />

        </ul>

        <button @click="onClick">Hinzufügen</button>

    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue';
import TaskItemComponent from './TaskItemComponent.vue';
import type TaskItem from '@/model/TaskItem';

// const taskItemOne: TaskItem = {title: "Aufgabe 1", description: "Mach die Aufgabe weiter", isDone: false};
// const taskItemDeux: TaskItem = {title: "Aufgabe 2", description: "Yallah mach endlich mal", isDone: false};

const taskList: TaskItem[] = [];

onBeforeMount(() => {
    // taskList.push(taskItemOne);
    // taskList.push(taskItemDeux);
})

function onClick() {
    // Füge das TaskItem aus der Eingabemaske der Liste hinzu
    // taskList.push();
}

</script>

<style scoped>
.my-tasklist {
  list-style-type: none;
}
</style>