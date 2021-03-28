<template>
  <div class="home">

      <div class="firstblock">
        <div class="purpleTextImage">
          <div class="purple__text">
            <PurpleEyeText class="PT" ></PurpleEyeText>
          </div>
          <div class="eyeimg">
            <div class="image__center">
              <img class="PL" src="../assets/eyelogo3.svg" alt="">
            </div>
          </div>
        </div>
        <navbar></navbar>
      </div>

    <div class="secondblock">
      <TwoPanel class="twoelements"></TwoPanel>
    </div>
      <div class="threeblock">


        <div class="firstSite">
          <div class="firstSite__text">
            <h1>Site for Google</h1>
            <p>Это одна из первых наших работ</p>
          </div>
          <div class="firstSite__image">
            <router-link to="/first"><ThreePanel class="image__one"></ThreePanel></router-link>
          </div>
        </div>


        <div class="secondSite">
          <div class="secondSite__image">
            <router-link to="/second"><ThreePanelTwo class="image__one"></ThreePanelTwo></router-link>
          </div>
          <div class="secondSite__text">
            <h1>Site for Yandex</h1>
            <p>Это уже наш второй проект</p>
          </div>
        </div>


        <div class="thirdSite">
          <div class="thirdSite__image">
            <router-link to="/third"><ThreePanelThree class="image__one"></ThreePanelThree></router-link>
          </div>
          <div class="thirdSite__text">
            <h1>Site for Yandex</h1>
            <p>Это уже наш второй проект</p>
          </div>
        </div>


      </div>
      <div class="fourBlock">
        <div class="onetwoPeople">
          <div class="people__one">
            <PeopleOne></PeopleOne>
          </div>
          <div class="people__two">
            <PeopleTwo></PeopleTwo>
          </div>
        </div>
      </div>

    <div class="mail">
      <Mail></Mail>
    </div>

  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 0;
}
.home {
  overflow: hidden;
}

.firstSite{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 100%;
}
.firstSite__text{
  width:30%;
  margin-left: 12%;
  position: relative;
  text-align: left;
}
.firstSite__text h1{
  font-family: Impact;
  width: 15%;
}
.firstSite__image{
  width:70%;
  position: relative;
}
.image__one{
  width: 100%;
  position: relative;
  left: -15%;
  transform: scale(0.5);
}
.secondSite{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 100%;
  margin-top: 30%;
}
.secondSite__text{
  width:30%;
  margin-left: 5%;
  position: relative;
  text-align: left;
}
.secondSite__image{
  width:70%;
  position: relative;
}
.secondSite__text h1{
  font-family: Impact;
  width: 15%;
}

.thirdSite{
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 100%;
  margin-top: 60%;
}
.thirdSite__text{
  width:30%;
  margin-left: 12%;
  position: relative;
  text-align: left;
}
.thirdSite__image{
  width:70%;
  position: relative;
}
.thirdSite__text h1{
  font-family: Impact;
  width: 15%;
}

.purpleTextImage{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  display: flex;
  overflow: hidden;

}
.purple__text{
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.PT{
  width: 100%;
  position: absolute;
  top: 30%;

  transform: translateY(-30%);

}
.eyeimg{
  display: block;
  width: 100%;
  max-width: 540px;
}

.image__center {
  position: relative;
  height: 100%;
}

.PL{
  width: 100%;
  position: absolute;
  top: 30%;
  display: block;
  transform: translateY(-30%);
}

@media (max-width: 1200px) {
  .PT{
    width: 100%;
  }
  .PL {
  }
}


.twoelements{
  height: 100vh;
}
.firstblock {
  background-color: #24253d;
  position: relative;
  background-position: center center;
  height: 100vh;
}
.secondblock{
  background-color: #7275a3;
  position: relative;
  background-position: center center;
  height: 100vh;
}
.threeblock{
  background-color: #7275a3;
  position: relative;
  background-position: center center;
  height: 200vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.fourBlock{
  position: relative;
  height: 100vh;
  background-color: #24253d;
}
.mail{
  position: relative;
  background-color: #7275a3;
  height: 100vh;
}
.onetwoPeople{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  margin-top: 10%;
}
.people__one{
  width: 50%;
  position: relative;
}
.people__two{
  width: 50%;
  position: relative;
}
@media (max-width: 700px) {
  .onetwoPeople{
    flex-direction: column;
  }
  .secondblock{
    height: 110vh;
  }
  .image__one{
    transform: scale(0.2);
  }

}
@media (max-width: 900px) {
  .onetwoPeople{
    flex-direction: column;
  }
  .people__one{
    margin-top: 10%;
  }
  .people__two{
 margin-top: 20%;
  }
}

</style>


<script>
  import Navbar from "../components/navbar";
  import TwoPanel from "@/components/twoPanel";
  import PurpleEyeText from "@/components/purpleEyeText";
  import ThreePanel from "@/components/threePanel";
  import ThreePanelTwo from "@/components/threePanelTwo";
  import ThreePanelThree from "@/components/threePanelThree";
  import PeopleOne from "@/components/peopleOne";
  import PeopleTwo from "@/components/peopleTwo";
  import Mail from "@/components/mail";

  export default {
    name: 'Home',
    components: {
      Mail,
      PeopleOne,
      ThreePanel,
      PurpleEyeText,
      TwoPanel,
      Navbar,
      ThreePanelTwo,
      ThreePanelThree,
      PeopleTwo,
    },
    mounted() {


    }
  }
</script>
