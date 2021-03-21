<template>
  <div class="people__imagetextTwo">
    <div class="people__imageTwo">
      <img class="people__imageTwo" src="../assets/people2.jpg" alt="">
    </div>
    <div class="people__textTwo">
      <div class="letterwrapperTwo">
        <h1 class="letterTwo">Д</h1>
        <h1 class="letterTwo">Е</h1>
        <h1 class="letterTwo">Н</h1>
        <h1 class="letterTwo">И</h1>
        <h1 class="letterTwo">С</h1>
        <h1 class="letterTwo">К</h1>
        <h1 class="letterTwo">А</h1>
      </div>
      <div>
        <p id= "fraseTwo" class="people__textPTwo">Много текста о тебе и блаблабла,вот так вот, крутое ноухау получается, шо я ебу алибабу</p>
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
    tl.from(".letterTwo", {duration: 1, rotationY: 36, opacity: 0, yPercent:-300, stagger: 0.1, ease:"Expo.easeOut"})
    new ScrollMagic.Scene({triggerElement: ".people__imagetextTwo", triggerHook: "0.5"})
        .setTween(tl)
        .addTo(controller);

    let tl1 = new gsap.timeline();
    tl1.from(".people__imageTwo",{opacity:0, delay: 0.2, duration:1.5, x: -100})
    new ScrollMagic.Scene({triggerElement: ".people__imagetextTwo", triggerHook: "0.5"})
        .setTween(tl1)
        .addTo(controller);

    let tl2 = new gsap.timeline();
    tl2.from("#fraseTwo",{opacity:0, duration:1, delay: .9,y: -100, x: 50})
    new ScrollMagic.Scene({triggerElement: ".people__imagetextTwo", triggerHook: "0.5"})
        .setTween(tl2)
        .addTo(controller);
    }
  }
}
</script>

<style scoped>
.people__imageTwo{
  text-align: center;
  width: 72%;
}
.letterwrapperTwo {
  display: flex;
  margin-left: -45%;
}
.letterTwo{
  font-family: Impact;
  color: #bec2ea;
  font-size: 95px;
}
.people__imagetextTwo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.people__imageTwo{
  display: flex;
  justify-content: center;
}

.people__textPTwo{
  color: #bec2ea;
  font-size: 25px;
  text-align: left;
  margin-left: 30%;
  margin-top: 8%;

}
.people__textTwo{
  margin-top: -10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
@media (max-width: 1300px) {
  .people__textPTwo{
    font-size: 15px;
  }
  .letterTwo{
    font-size: 45px;
  }
}


</style>