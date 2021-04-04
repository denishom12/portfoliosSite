<template>
<div>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <div class="footer">
    <div class="footer__pes">
      <div class="footer__name">
        <h1>Purple eye studio</h1>
      </div>
      <div class="footer__logo">
          <div class="footer__line">
            <p ></p>
          </div>
          <div >
            <img class="footer__image" src="../assets/eyelogo3.svg" alt="">
          </div>
          <div class="footer__line">
            <p ></p>
          </div>
      </div>
    </div>
    <div class="footer__contain">
      <div class="footer__group">
        <h1 class="footer__call">Позвонить</h1>
        <p>8(999)-518-79-12</p>
        <p>8(999)-518-79-12</p>
      </div>
      <div class="footer__group">
        <h1 class="footer__message">Написать нам</h1>
        <p>purpleeyestudio@hotmail.com</p>
      </div>
      <div class="footer__group">
        <h1 class="footer__about">О нас</h1>
      </div>
    </div>
    <div class="footer__linker">
      <div>
        <a href=""><img class="footer__instagram" src="../assets/logoinst.png" alt=""></a>
      </div>
      <div>
        <a href=""><img class="footer__instagram" src="../assets/logoinst.png" alt=""></a>
      </div>
    </div>
    <div class="footer__copyright">
      <div>
        <h1 class="copyright__text">© PurpleEyeStudio 2021</h1>
      </div>
      <div>
        <a class="copyright__link" href="">Copyright</a>
      </div>
      <div>
        <a class="copyright__link" href="">Политика конфиденциальности</a>
      </div>
    </div>
  </div>
</div>
</template>

<style>
.footer{
height: 70vh;
  background-color: black;
}
.footer__pes{
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
}
.footer__logo{
  display: flex;
  position: relative;
  justify-content: space-around;
  width: 56em;
  margin-top: 1%;
}
.footer__name h1{
  font-size: 6.8em;
  color: white;
}
.footer__image{
  width: 50%;
  margin-left: 25%;
}
.footer__line{
  background: #f300b4;
  width: 30%;
  height: 3px;
  margin-top: 7%;
}
.footer__group{
  color: white;
}
.footer__linker{
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
  width: 100%;
}
.footer__instagram{
  max-width:200px;
  transition: all .3s;
}

.footer__instagram:hover{
  transform: scale(1.2);
  transition: all .3s;
}
.footer__copyright{
  display: flex;
  justify-content: center;
  margin-top: 3%;
}
.copyright__text{
  font-size: 1.5em;
  color: white;
}

.copyright__link{
  font-size: 1.5em;
  color: white;
}
@media (max-width: 858px) {
  .footer__name h1{
    font-size: 4em;
  }
  .footer__logo{
    width: 32em;
  }
  .copyright__text{
    font-size: 1em;
  }
  .copyright__link{
    font-size: 1em;
  }
}
@media (max-width: 634px) {
  .footer__name h1{
    font-size: 4em;
  }
  .footer__logo{
    width: 32em;
  }
  .copyright__text{
    font-size: 1em;
  }
  .copyright__link{
    font-size: 1em;
  }
}
@media (max-width: 508px) {
  .footer__name h1{
    font-size: 3.5em;
  }
  .footer__logo{
    width: 28em;
  }
  .copyright__text{
    font-size: 0.8em;
  }
  .copyright__link{
    font-size: 0.8em;
  }
}


@media (max-width: 442px) {
  .footer__name h1{
    font-size: 3em;
  }
  .footer__logo{
    width: 25em;
  }
  .copyright__text{
    font-size: 0.7em;
  }
  .copyright__link{
    font-size: 0.7em;
  }
}
@media (max-width: 384px) {
  .footer__name h1{
    font-size: 2.5em;
  }
  .footer__logo{
    width: 20em;
  }
  .copyright__text{
    font-size: 0.6em;
  }
  .copyright__link{
    font-size: 0.6em;
  }
  .footer__instagram{
    max-width:150px;
  }
}
.footer__contain{
  display: flex;
  justify-content: center;
  margin-top: 2%;
}
</style>

<script>
export default {
name: "footer"
}
</script>

