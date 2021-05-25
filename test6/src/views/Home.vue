<script>
// @ is an alias to /src
import Loading from '@/components/Loading'
import { onMounted, reactive, toRefs } from 'vue'
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'
// import PlaceCard from '@/components/PlaceCard'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Loading,
    // PlaceCard
  },
  setup() {
    const state = reactive({
      isLoading: true,
      data:[],
      city:[],
      town:[],
      selectCity:'請選擇行政區域',
      selectTown:'請選擇鄉鎮區',
      rows:[],
      countOfPage:10,
      currentPage:1,
      // startPage:Number,
      totalPage:Number,
      index:Number
    })

    function connectURL(url){
      if( url != ""){
        window.open(`${url}`)
      }
    }
    function changeCity(city){
      state.currentPage = 1
      let townn =[];
      state.rows = state.data.filter(function(data){
        return data.City == city
      })
      state.selectTown='請選擇鄉鎮區';
      for(let i=0; i< state.data.length ; i++){
        if(state.data[i].City == state.selectCity){
          if(townn.indexOf(state.data[i].Town) == -1){
            townn.push(state.data[i].Town)
            state.town = townn
          }
        }
      }
    }
    function changeTown(town){
      state.currentPage = 1
      state.rows = state.data.filter(function(data){
        return (data.City == state.selectCity && data.Town == town)
      })
    }

    function getData (){
      const url = './data.json'
      // http://localhost:8080/Service/OpenData/ODwsv/ODwsvTravelFood.aspx
      // https://data.coa.gov.tw/
      // http://localhost:8080/
      axios.get(url).then((res) => {
              const json = res.data
              const cityLength = res.data.length
              console.log(json)
              state.data = json
              state.isLoading = false
              state.rows = json
              
              
              state.startPage = (state.currentPage - 1) * state.countOfPage;
              state.totalPage = Math.ceil(state.rows.length / state.countOfPage)
        
              const cityy =[]
              for(let i=0; i< cityLength ; i++){
                if(cityy.indexOf(res.data[i].City) == -1){
                  cityy.push(res.data[i].City)
                  state.city = cityy
                }
              }
              //store.commit('setLoading')
              // store.dispatch('actionSetLoading', true)
            })
            .catch((error) =>{
              // store.commit('setLoading2');
              console.log(error) 
            })
    }
    onMounted(() => {getData()})
    return {
      ...toRefs(state),
      changeCity,
      changeTown,
      connectURL
      }
    }
    
}
</script>
<template>
  <div class="home">
    
    <div class="selectBox">
      <select v-model="selectCity" @change="changeCity(selectCity)">
          <option disabled hiiden>{{selectCity}}</option>
          <option v-for="cityitem in city">{{cityitem}}</option>
      </select>
      <select v-model="selectTown" @change="changeTown(selectTown)">
          <option disabled hiiden>{{selectTown}}</option>
          <option v-for="townitem in town">{{townitem}}</option>
      </select>
    </div>
    <!-- v-for="post in dataCount" -->
    <!--.slice(startPage,startPage + countOfPage) -->
    <div class="placeCard" @click="connectURL(item.Url)" v-for="(item,index) in rows.slice((currentPage - 1) * countOfPage,(currentPage - 1) * countOfPage + countOfPage)" :key="item">
      <div class="placeTag">
        <div class="blueTag">{{ item.City }}</div>
        <div class="buttonTag">{{ item.Town }}</div>
      </div>
      <!-- <img v-for="item in data" :src="item.PicURL" alt=""> -->
      <img class="placeImg" :src="item.PicURL" alt="">
      <div class="textBox">
        <h1 class="titlePlace">{{ item.Name }}</h1>
        <p class="textContent">{{item.FoodFeature}}</p>
      </div>
    </div>

    
    <transition name="fade">
      <Loading v-if="isLoading"></Loading>
    </transition>
  </div>
  <div class="pageBox">
    <div class="pageTitle">美食頁次 {{ currentPage }} / {{ Math.ceil(rows.length / countOfPage) }}</div>
    <div class="pageBtn">
      <ul>
        <li @click.prevent="currentPage -= 1" :class="{disabled : (currentPage === 1)}">
          <a href="#" :class="{disabled2 : (currentPage === 1)}">&lt&lt</a></li>
        <li v-for="page in (Math.ceil(rows.length / countOfPage))" @click.prevent="currentPage = page">
          
          <a href="#">{{page}}</a></li>
        <li @click.prevent="currentPage += 1" :class="{disabled : (currentPage === Math.ceil(rows.length / countOfPage))}">
          <a href="#" :class="{disabled2 : (currentPage === Math.ceil(rows.length / countOfPage))}">&gt&gt</a></li>
      </ul>
      <!-- <button class="pageBtnActive">1</button> -->
      <!-- <button>2</button> -->
    </div>
  </div>
  
  <div class="fixbot"></div>
</template>
<style lang="scss" scoped>
  .disabled{
    background-color: rgb(240, 239, 239) !important;
    box-shadow: none !important;
    pointer-events: none;
    cursor: default;
  }
  .disabled2{
    color: rgb(197, 197, 197) !important;

  }
  .selectBox{
    margin-left: 8.5%;
    select{
      option{
        background:#fff;
      }
      &:focus{
        border: 1px solid rgb(58, 137, 201);
      }
      &:hover{
        border: 1px solid rgb(58, 137, 201);
      }
      &:first-child{
        margin-right: 15px;
      }
      height: 40px;
      width: 200px;
      padding: 10px;
      background-color: rgb(240, 239, 239);
      border: 1px solid rgb(155, 155, 155);
    }
  }
  .home{
    padding: 30px;
  }
  .fade-enter,.fade-leave-active {
    opacity: 0;
  }
  .fade-enter-active,.fade-leave-active {
    transition: opacity 0.5s;
  }
  .placeImg{
    transition: all 0.4s;
    width: 300px;
    // height: 100%;
  }
  .textBox{
    .textContent{
      overflow:hidden; 
      text-overflow:ellipsis;
      display:-webkit-box; 
      -webkit-box-orient:vertical;
      -webkit-line-clamp:4; 
    }
    .titlePlace{
      overflow:hidden; 
      text-overflow:ellipsis;
      display:-webkit-box; 
      -webkit-box-orient:vertical;
      -webkit-line-clamp:2; 
      
    }
    margin-left: 30px;
    text-align: left;
  }
  .placeCard{
    position: relative;
    padding: 20px;
    margin: 20px auto;
    display: flex;
    background-color: #fff;
    box-shadow:1px 1px 6px rgba(0, 0, 0, 0.342);
    width: 80%;
    height: 215px;
    &:hover{
      cursor: pointer;
      .placeImg{
        transition: all 0.4s;
        transform: scale(1.05);
      }
      .titlePlace{
        color:rgb(1, 174, 204)
      }
    }
    .placeTag{
      .blueTag{
        background-color:rgb(1, 174, 204);
        padding: 5PX 10px;
        color: white;
      }
      .buttonTag{
        font-weight: bold;
        font-size: 18px;
        padding: 10px;
        padding-right: 0;
        margin: auto;
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr;
      }
      position: absolute;
      top: 0;
      left: -68px;
    }
    
  }
  .pageBox{
    width: 80%;
    margin: 0px auto 50px;
    display: flex;
    justify-content:space-between;
    flex-direction: column;
    text-align: center;
    .pageTitle{
      line-height: 50px;
      font-weight: bold;
      font-size: 22px;
    }
    .pageBtn{
      ul{
        list-style: none;
        display: flex;
        justify-content: center;
        li{
          &:hover{
            background-color: #01aecc;
            a{
            color: #fff;
            }
          }
          a{ 
            display: table;
            margin: auto;
            text-decoration:none;
            color: black;
            font-size: 18px;
            line-height: 30px;
          }
          box-shadow:1px 1px 6px rgba(0, 0, 0, 0.342);
          background-color: rgb(219, 219, 219);
          border: none;
          width: 30px;
          height: 30px;
          margin: 10px;
          font-size: 18px;
        }
        
      }
    }
  }
  .pageBtnActive{
    background-color: rgb(1, 174, 204) !important;
    color: #fff;
  }
  .fixbot{
    height:50px;
  }
</style>