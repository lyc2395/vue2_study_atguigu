<template>
    <div>
        <ul class="todo-list">
        <transition-group
        name="animate__animated animate__bounce"
        enter-active-class="animate__fadeInLeftBig"
        leave-active-class="animate__fadeOutRightBig"
        appear
        >
          <todoItem v-for="thing in todoItems" :key="thing.id" :thing="thing"/>
        </transition-group>
        </ul>
    </div>
</template>

<script>
import 'animate.css'
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