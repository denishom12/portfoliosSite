<template>
<div class="panel__two">
  <div id="reveal1" class="slide">
    <div class="sl1">
      <img src="../assets/medium.png" alt="" class="panel__img">
      <h1 class="panel__text">asdfds</h1>
    </div>
    <div class="sl2">
      <img src="../assets/medium.png" alt="" class="panel__img">
      <h1 class="panel__text">ASDF</h1>
    </div>
  </div>
</div>
</template>

<script>
import * as ScrollMagic from "scrollmagic";
import { gsap } from "gsap"
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
export default {
name: "twoPanel",
  mounted() {
    var controller = new ScrollMagic.Controller();
    let tl = new gsap.timeline();
    let tl2 = new gsap.timeline()
    tl.from(".sl1", {duration: 1, x: -1000})
    tl2.from(".sl2", {duration: 1, x: 1000})
    new ScrollMagic.Scene({triggerElement: ".slide", triggerHook: "0.5"})
        .setTween(tl)
        .setClassToggle("#reveal1", "visible")
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".slide", triggerHook: "0.5"})
        .setTween(tl2)
        .setClassToggle("#reveal1", "visible")
        .addTo(controller);
  }
}
</script>

<style>

.panel__two {

}

.slide{
  display: flex;
  justify-content: space-around;
  align-items: center;

}
@media (max-width: 700px) {
  .slide{
    flex-direction: column;
  }
  .panel__img{
    height: 20%;
    width: 20%;
  }

}

.sl1{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15%;
}
.sl2{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top:15%;
}
#reveal1{
  opacity: 0;
}
#reveal1.visible{
  opacity: 1;
}
.panel__img{
  height: 40%;
  width: 40%;
}

.panel__img:nth-child(1) {
}

.panel__text {
  top: 0;
  text-align: center;
}

</style>