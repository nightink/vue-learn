<template>
  <div class="item" v-link="{ name: 'ItemView', params: { id: index } }">
    <span class="avatar">
      <img :src="item.avatar" />
    </span>
    <h3>{{item.title}}</h3>
    <p>{{item.author}}</p>
    <p>{{item.summary}}</p>
    <div class="assist">
      <span>{{item.creatDate | formatDate}}</span>
      <span class="amount">阅读量：{{item.amount}}</span>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Item',

  props: {
    item: Object,
    index: Number
  },

  computed: {},

  filters: {
    formatDate(date) {
      if(date instanceof Date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      }
      return date;
    }
  }
}
</script>

<!-- style scope -->
<style scoped>
.item {
  border-bottom: 1px #eee solid;
  padding: 14px;
  font-size: 14px;
  color: #74726E;
}

.item h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
  color: #302C20;
}

.item p {
  margin: 5px 0;
  font-weight: bold;
}

.item .assist {
  color: #C5C4C3;
}

.item .amount {
  float: right;
}

.avatar {
  float: right;
  /*FIXME: img height + 3px, so - 3px; */
  height: 40px;
  border-radius: 2px;
  box-shadow: 0 1px 2px #ccc;
  margin: 0;
  padding: 3px;
}

.avatar img {
  width: 40px;
  height: 100%;
  border: 0;
}
</style>
