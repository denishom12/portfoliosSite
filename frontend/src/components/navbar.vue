<template>
    <div class="header__title">
        <div class="header__title-center">
          <div class="header__link-first">
            <router-link class="tx" to="/"><a id="one" class="nav-link active" aria-current="page" href="#">Здесь наше название</a></router-link>
          </div>
          <div class="header__link-second">
            <router-link class="tx" to="/"><a id="two"  class="nav-link active" aria-current="page" href="#">Что</a></router-link>
          </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'
import { Linear } from 'gsap'
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
    export default {
        name: "navbar",
      mounted() {
        let text = document.getElementById("one");
        let tl = new gsap.timeline({repeat:-1, yoyo:false, repeatDelay:0, onCompleteParams:["test1", "test2"]});

        tl.to(text, 0.8, {text:{value:"Здесь наше < html >", padSpace:true,  ease:Linear.easeNone},delay:2});
        tl.to(text, 0.8, {text:{value:"Сайты под ключ", padSpace:true, ease:Linear.easeNone},delay:2});
        tl.to(text, 0.8, {text:{value:"Высокий уровень работы", padSpace:true, ease:Linear.easeNone},delay:2});
        tl.to(text, 0.8, {text:{value:"Здесь наше название", padSpace:true, ease:Linear.easeNone},delay:2});

        let text2 = document.getElementById("two");
        let tl2 = new gsap.timeline({repeat:-1, yoyo:false, repeatDelay:0, onCompleteParams:["test1", "test2"]});

        tl2.to(text2, 0.8, {text:{value:"Чт№", padSpace:true,  ease:Linear.easeNone},delay:2});
        tl2.to(text2, 0.8, {text:{value:"Ч№#", padSpace:true, ease:Linear.easeNone},delay:2});
        tl2.to(text2, 0.8, {text:{value:"@то", padSpace:true, ease:Linear.easeNone},delay:2});
        tl2.to(text2, 0.8, {text:{value:"@т#", padSpace:true, ease:Linear.easeNone},delay:2});
      }
    }
</script>

<style scoped>
    .header__title {
        z-index: 2;
    }
    .header__link-first{
      margin-top: 2%;
    }
    .header__link-second{
      margin-top: 2%;
    }
    .header__title-center {
      min-width: 60%;
      width: 80%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      position: relative;
    }

    .tx{
        font-size: 35px;
        text-decoration: none;
    }
    .tx a{
        color: #ce33eb;
        transition: 0.5s;
        text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
        font-family: Impact;

    }
    .tx a:hover{
        color: #7275a3;
        transform: scale(1.3);
        transition: 0.5s;
        text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
    }

    @media (max-width: 700px) {
      .tx{
        font-size: 25px;
      }
      .tx a:hover {
        transform: none;
      }
    }

</style>