<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import mytable from './components/Table'
import myform from './components/Form'
import myEcharts from './components/myEcharts'
import mytabs from './components/Tabs'
import tab1 from './components/Tab1'
import tab2 from './components/Tab2'
export default {
  name: 'App',
  mounted () {
    this.$router.push('/table')
  },
  methods: {
  },
  data () {
    return {
    }
  },
  components: {
    mytable,
    myform,
    myEcharts,
    mytabs,
    tab1,
    tab2
  }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
