<template>
  <div class="fixspace"></div>
  <div class="wrapSize">
    <div class="profileBlock">
      <div class="proText">
        <h1>Johnny Huang 黃約翰</h1>
        <table class="">
          <tr>
            <td>19 Aug 1995</td>
            <td>桃園市中壢區</td>
          </tr>
          <tr>
            <td>0975702260</td>
            <td>a4927763@gmail.com</td>
          </tr>
        </table>
        <h5 style="float:right,"> - 專注每個細節、積極、熱愛自學</h5>
      </div>
      <div class="proBlock">
        <img class="proImg" src="~@/assets/pro.png" alt="">
        <img class="proImg" src="~@/assets/pro.png" alt="">
      </div>
    </div>
    <div class="middleBlock">
      <div class="skillBlock">
        <h2 class="texCenter">Skills</h2>
        <div class="skillInsBlock">
          <div class="leftSkiBlock">
            <h3 class="colBrown">網頁前端技術</h3>
            <h4>HTML5, CSS3</h4>
            <h4>SASS,RWD</h4>
            <h4>JavaScript, JQuery</h4>
            <h4>Vue2 - 3 , CLI</h4>
            <h4>JSON, AJAX</h4>
            <h3 class="colBrown">前端工具</h3>
            <h4>GSAP</h4>
            <h3 class="colBrown">後端資料庫設計</h3>
            <h4>PHP</h4>
            <h4>MySQL</h4>
            
          </div>
          <div class="rightSkiBlock">
            <h3 class="colBrown">UI/UX介面視覺設計</h3>
            <h4>Photoshop ( 證照 )</h4>
            <h4>Illustrator ( 證照 )</h4>
            <h4>Adobe XD</h4>
            <h4>Dreamweaver</h4>
            <h3 class="colBrown">網頁行銷架構企劃</h3>
            <h4>網站規劃</h4>
            <h4>使用者介面設計</h4>
            <h4>UML系統分析</h4>
            <h4>Adobe XD</h4>
            <h4>Dreamweaver</h4>
          </div>
        </div>
        <h2 class="texCenter">Other Skills</h2>
        <div class="otherBlock">
          <h4>Premiere - 影片剪輯 </h4>
          <h4>FLstudio - 聲音編曲、母帶混音 </h4>
          <h4>Adobe Audition - 聲音錄製 </h4>
          <h4>Adobe Indesign - 手冊排版 </h4>
          <h4>電腦硬體裝修乙級 - 證照 </h4>
        </div>
      </div>
      <div class="expBlock">
        <div class="experienceBlock">
          
            <div class="ball"></div>
            <h3>進修</h3>    
            <h4 class="colGray">Nov 2020 - Apr 2021</h4>
            <h4>緯育Tibame Web API 前端班</h4>
          
            <div class="ball ballGray"></div>
            <h3>工作與經歷</h3>    
            <h4 class="colGray">2018 - 2020 澳洲打工度假</h4>
            <h4>Centre C. WireHouse、Treviso Fram、JBS</h4>
            <h4 class="colGray">2018 台灣工作經歷</h4>
            <h4>印染打樣-大鐘印染股份有限公司</h4>
        
            <div class="ball ballGray"></div>
            <h3>學歷</h3>    
            <h4 class="colGray">Sep 2014 - Jun 2017</h4>
            <h4>醒吾科技大學 - 資訊傳播系</h4>

        </div>
        <div class="insterestBlock">
          <h3>interests</h3>
          <div class="interests">
          <table class="insTable">
            <tr>
              <td><h3>自學</h3></td>
              <td><h3>旅行</h3></td>
            </tr>
            <tr>
              <td><h3>運動</h3></td>
              <td><h3>音樂</h3></td>
            </tr> 
          </table>
          </div>
        </div>
      </div>
    </div>
    
    <div class="webBlock">
      <div class="perblock">
        <div>
          <img class="logoSize" src="../assets/TSlogo.png" alt="">
          <img class="barcodeSize" src="../assets/TSscan.png" alt="">
        </div>
        <h3>視覺設計</h3>
        <h3>基本網頁排版</h3>
        <h3>RWD</h3>
        <p class="colGray">緯育網頁 
          視覺設計-第二名 
          最佳網站-第二名
        </p>
      </div>
      <div class="perblock">
        <div>
          <img class="logoSize2" src="../assets/OClogo.png" alt="">
          <img class="barcodeSize" src="../assets/OCscan.png" alt="">
        </div>
        <h3>登入出、註冊功能</h3>
        <h3>會員系統功能</h3>
        <h3>後台資料串聯</h3>
        <h3>氣象局API串聯</h3>
        <h3>SASS規劃設計</h3>
        <h3>SASS撰寫RWD</h3>
      </div>
      <div class="perblock">
        <div>
          <img class="logoSize3" src="../assets/logo.png" alt="">
          <img class="barcodeSize" src="../assets/OCscan.png" alt="">
        </div>
        <h3>Vue3/Cli</h3>
        <h3>AXIOS抓取政府API開放資料</h3>
        <h3>用 Vue3 Composition API 撰寫分頁</h3>
      </div>
    </div>

  </div>
</template>
<script>
import {reactive , toRefs} from 'vue'

export default {
  name: 'About',
  setup(){
    const framework = reactive({
        type: "Frontend",
        name: "Vue",
    })
    return { ...toRefs(framework) }
  }

}
</script>
<style lang="scss">
  @mixin pcL {
      @media(max-width:1200px){
          @content;
        }
  }
  @mixin pc{
      @media(max-width:1024px){
          @content;
      }
  }
  @mixin pad{
      @media(max-width:768px){
          @content;
      }
  }
  @mixin mobileL{
      @media(max-width:576px){
          @content;
      }
  }
  @mixin mobileS{
      @media(max-width:375px){
          @content;
      }
  }
  
  .fixspace{
    height: 10px;
  }
  .wrapSize{
    max-width: 1260px;
    margin: auto;
  }
  .profileBlock{
    display: flex;
    justify-content: space-around;
    background-color: rgb(255, 255, 255);
    width: 90%;
    padding: 30px;
    margin: 0 auto 30px;
    box-shadow:1px 1px 6px rgba(0, 0, 0, 0.342);
    .proBlock{
      .proImg{
        height: 200px;
      }
    }

  }
  
  .middleBlock{
    display: flex;
    justify-content: space-around;
    .skillBlock{
      width: 40%;
      padding: 30px;
      background-color: #fff;
      box-shadow:1px 1px 6px rgba(0, 0, 0, 0.342);
      .skillInsBlock{
        display: flex;
        justify-content: space-around;
      }
      .otherBlock{
        h4{
          margin-right: 10px;
        }
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
    .expBlock{
      width: 40%;
      padding: 30px;

      // background-color: rgb(240, 240, 240);
      .experienceBlock{
        border-left: 3px solid #CCCCCC;
        padding: 0 30px;
        position: relative; 
      }
      .insterestBlock{
        .insTable{
          tr{
            td{
              padding: 0  30px;
              width: 150px;
            }
          }
        }
      }
    }
  }

  .ball{
    position: absolute;
    left: -11px;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background-color: #906F51;
  }
  .ballGray{
    background-color: #5E6570 !important;
  }
  .texCenter{
    text-align: center;
  }
  .colGray{
    color: #a1a1a1;
  }
  .colBrown {
    color: #906F51;
  }
  .webBlock{
    box-shadow:1px 1px 6px rgba(0, 0, 0, 0.342);
    width: 90%;
    margin: 30px auto 50px;
    padding: 30px;
    background-color: #fff;

    display: flex;
    justify-content: space-around;
    .perblock{
      width: 33.33%;
      display: flex;
      flex-direction: column;
      padding: 0 30px;
      .logoSize{
        width: 150px;
      }
      .logoSize2{
        width: 200px;
        // padding-bottom: 10px;
      }
      .logoSize3{
        width: 80px;
      }
    }
  }
  .barcodeSize{
    float: right;
    width: 80px;
    margin-right: 10px;
  }
</style>