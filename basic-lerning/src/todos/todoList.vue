<template>
    <div>
        <ul class="todo-list">
          <todoItem v-for="thing in todoItems" :key="thing.id" :thing="thing"/>
        </ul>
    </div>
</template>

<script>
import todoItem from './todoItem.vue'
export default {
    name: 'todoList',
    components: {
      todoItem
    },
    props: [
      'todoItems',
    ]
}
</script>

<style lang="scss" scoped>
    .todo-list{
        width: 100%;
        margin: 20px 0px;
        padding: 0px;
    }
</style>