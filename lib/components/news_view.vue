<template>
  <div>
    <!-- item list -->
    <item
      v-for="item in items"
      :item="item"
      :index="$index"
      track-by="creatDate">
    </item>
  </div>
</template>

<script>
import Item from './item.vue';
import mockItems from '../mock_items';

export default {

  name: 'NewView',

  components: {
    Item
  },

  data() {
    return {
      items: mockItems
    };
  },

  methods: {}
};
</script>
