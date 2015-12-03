<template>
  <div>
    <h1>Hello Vue.js</h1>
    <input v-model="newTodo" v-on:keyup.enter="addTodo">
    <ul>
      <li v-for="todo in todos">
        <span>{{ todo.text }}</span>
        <button v-on:click="removeTodo($index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Todo',

  data() {
    return {
      newTodo: '',
      todos: [
        { text: 'Add some todos' }
      ]
    };
  },

  methods: {
    addTodo() {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text })
        this.newTodo = ''
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  }
};
</script>