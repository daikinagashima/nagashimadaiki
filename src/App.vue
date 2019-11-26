<template>
  <div id="app">
    <nav>
      <ul>
        <router-link tag="li" to="/" exact><a>トップ</a></router-link>
        <router-link tag="li" to="/school" ><a>学生時代</a></router-link>
        <router-link tag="li" to="/strength" ><a>強み</a></router-link>
        <router-link tag="li" to="/weakness" ><a>弱み</a></router-link>
        <router-link tag="li" to="/dream" ><a>夢</a></router-link>
      </ul>
    </nav>
    <transition><router-view/></transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      name: '永島 大輝',
      place: '東京都狛江市',
      keireki0: '2014年　狛江市立狛江第四中学校卒業 ',
      keireki1: '2014年　私立大成高等学校入学 ',
      keireki2: '2017年　私立大成高等学校卒業 ',
      keireki3: '2017年　東京経済大学　経営学部経営学科入学 ',
      keireki4: '2021年　東京経済大学　経営学部経営学科卒業見込み'
    }
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
nav {
  background-color: #4fc08d;
}
ul > li {
  display: inline-block;
  margin:0;
  padding:0;
  width:80px;
  height:40px;
  line-height:40px;
  text-align: center;
}
ul > li > a {
  display:block;
  text-decoration:none;
  color:#fff;
  transition: all .3s ease-in-out;
}
.router-link-actibe > a,
ul > li > a:hover {
  background-color: #fff;
  color: #4fc08d;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

@media (min-width: 250px) {
  .list-container:hover {
    background: orange;
  }
}
h3 {
  margin: 2px;
}
#myprofile {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}
</style>
