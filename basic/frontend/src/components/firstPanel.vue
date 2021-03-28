<template>
  <div>
    <div class="firsPanel">
        <div class="sections" id="js-slideContainer">
            <section class="section">
                <div class="sectionTitle" id="title1">
                    <div class="image">
                        <img src="../assets/small.png" alt="">
                        <img src="../assets/medium.png" alt="">
                        <img src="../assets/large.png" alt="">
                    </div>
                </div>
            </section>
        </div>
    </div>
  </div>
</template>

<style scoped>
    .image img:nth-child(1) {
        width: 100px;
        height: 100px;
        position: absolute;
        right: 170px;
        top: 340px;
    }
    .image img:nth-child(2) {
        width: 6%;
        position: absolute;
        right: 170px;
        top: 330px;
    }

    .image img:nth-child(3) {
        min-width: 15%;
        width: 25%;
        position: absolute;
        right: 100px;
        top: 180px;
        z-index: 3;
    }

</style>

<script>
    import { gsap } from "gsap"
    import { Linear } from 'gsap'
    import { TweenLite } from 'gsap'
    export default {
        name: "firstPanel",
      components: {},
      mounted() {
            TweenLite.defaultEase = Linear.easeNone;
            let image = document.querySelectorAll(".image img");
            let tl = new gsap.timeline({default: {duration: 1}});

// create timeline
// this could also be created in a loop
            tl.from(image[2], {duration: 0.5, rotation: 360})
            tl.from(image[1], {duration: 0.01, opacity: 0})
            tl.from(image[0], {duration: 0.01, opacity: 0})
            tl.to(image[1], {duration: 1, yPercent: -75, xPercent: -230})
            tl.to(image[0], {duration: 1, y: -165, x: -420})

          image[2].addEventListener('click', () => {
            if (tl.reversed()) {
              tl.play();
            } else {
              tl.reverse();
            }
          })
        }
    }
</script>