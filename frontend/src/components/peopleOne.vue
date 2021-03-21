<template>
<div class="people__imagetext">
  <div class="people__image">
    <img class="people__imageOne" src="../assets/people.jpg" alt="">
  </div>
  <div class="people__text">
    <div class="letterwrapper">
      <h1 class="letter">А</h1>
      <h1 class="letter">Л</h1>
      <h1 class="letter">Е</h1>
      <h1 class="letter">Ш</h1>
      <h1 class="letter">К</h1>
      <h1 class="letter">А</h1>
    </div>
    <div>
      <p id= "frase" class="people__textP">Много текста о тебе и блаблабла,вот так вот, крутое ноухау получается, шо я ебу алибабу</p>
    </div>
  </div>
</div>
</template>

<script>
import * as ScrollMagic from "scrollmagic";
import { gsap } from "gsap"
import { TweenMax, TimelineMax, Linear } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax, Linear);
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
export default {
  name: "peopleOne",
  mounted() {
    if (window.innerWidth > 900) {
    let controller = new ScrollMagic.Controller();
    let tl = new gsap.timeline();
    tl.from(".letter", {duration: 1, rotationY: 36, opacity: 0, yPercent:-300, stagger: 0.1, ease:"Expo.easeOut"})
    new ScrollMagic.Scene({triggerElement: ".people__imagetext", triggerHook: "0.5"})
        .setTween(tl)
        .addTo(controller);

    let tl1 = new gsap.timeline();
    tl1.from(".people__imageOne",{opacity:0, duration:1.5, x: -100})
    new ScrollMagic.Scene({triggerElement: ".people__imagetext", triggerHook: "0.5"})
        .setTween(tl1)
        .addTo(controller);

    let tl2 = new gsap.timeline();
    tl2.from("#frase",{opacity:0, duration:1, delay: 0.7,y: -100, x: 50})
    new ScrollMagic.Scene({triggerElement: ".people__imagetext", triggerHook: "0.5"})
        .setTween(tl2)
        .addTo(controller);
    }
  }
}
</script>

<style scoped>
.people__imageOne{
  text-align: center;
  width: 50%;

}
.letterwrapper {
  display: flex;
  margin-left: -45%;
}
.letter{
  font-family: Impact;
  color: #bec2ea;
  font-size: 95px;
}
.people__imagetext{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.people__image{
  display: flex;
  justify-content: center;
}
.people__textP{
  color: #bec2ea;
  font-size: 25px;
  text-align: left;
  margin-left: 30%;
  margin-top: 8%;
}
.people__text{
  margin-top: -10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media (max-width: 1300px) {
  .people__textP{
    font-size: 15px;
  }
  .letter{
    font-size: 45px;
  }
}

</style>