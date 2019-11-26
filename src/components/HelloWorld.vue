<template>
  <div id="myprofile">
    <div class="card-body">
      <p>この自己紹介ページでは、５つのページを作成いたしました。</p>
      <p>一つ目は、学生時代です。こちらは私が中学高校大学で力を入れたことについて書かせていただきました。</p>
      <p>二つ目は将来の夢です。こちらは私の将来の夢について書かせていただきました。</p>
      <p>三つ目は私自身で思う強み、そして四つ目は弱みです。最後まで見てくださると幸いです。</p>
    </div>
    <img :src='image_src'>
      <p>名前</p>
      <h1>{{name}}</h1>
      <p>出身</p>
      <h2>{{place}}</h2>
      <p>経歴</p>
      <h3>{{keireki0}}</h3>
      <h3>{{keireki1}}</h3>
      <h3>{{keireki2}}</h3>
      <h3>{{keireki3}}</h3>
      <h3>{{keireki4}}</h3>
      <p>趣味</p>
      <h2>バスケットボール</h2>
    </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      image_src: require('../assets/nagashimadaiki.png'),
      name: '永島　大輝',
      place: '東京都狛江市',
      keireki0: '2014年　狛江狛江第四中学校卒業',
      keireki1: '2014年　私立大成高等学校入学',
      keireki2: '2017年　私立大成高等学校卒業',
      keireki3: '2017年　東京経済大学　経営学部経営学科入学',
      keireki4: '2021年　東京経済大学　経営学部経営学科卒業見込み'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
