<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ToDoList />
  </div>
</template>

<script>

import ToDoList from '@/components/toDoList/index.vue'

export default {
  name: 'Home',
  components: {
    ToDoList
  }
}
</script>
