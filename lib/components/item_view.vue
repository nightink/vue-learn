<template>
  <div class="article" v-show="article">
    <h3>{{article.title}}</h3>
    <p>{{article.author}}</p>
    <p>{{article.summary}}</p>
    <div>
      <img :src="article.avatar" />
    </div>
    <p>{{article.content}}</p>
  </div>
</template>

<script>
import mockItems from '../mock_items';

export default {

  name: 'ItemView',

  data() {
    return {
      article: {},
    };
  },

  route: {
    data({ to }) {
      const itemId = +to.params.id;
      return {
        article: mockItems[itemId]
      };
    }
  }
}
</script>

<style>
.article {
  padding-left: 20px;
  padding-right: 20px;
}

.article img {
  width: 100%;
}
</style>
