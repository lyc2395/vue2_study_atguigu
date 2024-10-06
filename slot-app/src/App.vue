<template>
  <div id="app">
    <category title="游戏">
      <template slot-scope="receivedData" slot="footer">
        <div>
          <ul>
            <li v-for="(item, index) in receivedData.games" :key="index">{{item}}</li>
          </ul>
        </div>
      </template>
    </category>

    <br><br>


    <category title="游戏有序列表">
      <template  slot="footer" slot-scope="receivedData">
        <div>
          <ol>
            <li v-for="(item, index) in receivedData.games" :key="index">{{item}}</li>
          </ol>
        </div>
      </template>
    </category>
  </div>
</template>

<script>
import category from './components/category.vue';
export default {
  name: 'App',
  components: {
    category
  }
}
</script>

