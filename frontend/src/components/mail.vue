<template>
<div>
  <section id="contact">
    <div class="container">
      <div class="headInfo">
        <div class="head">
          <p class="title">Свяжитесь с нами <br>для сотрудничества</p>
          <p class="line"></p>
          <p class="subtitle">
            Воспользуйтесь формой ниже, или отправьте письмо по нашему адресу<br>
            <span class="ourMail">
              PurpleEyeStudio@gmail.com
            </span>
          </p>
        </div>
      </div>
      <div class="cont">
        <form class="contactForm" action="#">
          <input placeholder="<Имя>" name="name" type="text" required>
          <input placeholder="<Email>" name="email" type="text" required>
          <textarea placeholder="<Сообщение>" name="message" type="text"></textarea>
          <input class="button" id="submit" type="submit" value="Отправить">
        </form>
      </div>
    </div>
  </section>

</div>
</template>

<script>
export default {
name: "footer"
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.title{
  font-family: Impact;
  font-size: 42px;
  color: #24253d;
}
.subtitle{
  font-family: Impact;
  font-size: 20px;
  color: #24253d;
}
.line{
  background: #f300b4;
  width: 200px;
  height: 2px;
  margin: 1rem 0;
}

.contactForm{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  box-sizing: border-box;
}
.contactForm input[type="text"],input[type="email"], textarea{
  border-bottom: 2px solid #24253d;
  background: transparent;
  color: #24253d;
  font-size: 1.8rem;
  box-shadow: none;
  outline: none;
}
input{
  border: none;
  padding: 1rem;
  font-family: 'Overlock', Arial, Helvetica, sans-serif;
  width: 100%;
  height: 40%;

}
.contactForm input[type="text"]:hover,input[type="email"]:hover, textarea:hover{
  border-bottom: 2px solid #f300b4;
  background: transparent;
  color: #24253d;
  font-size: 1.8rem;
  box-shadow: none;
  outline: none;
}
textarea{
  border: none;
  padding: 1rem;
  font-family: 'Overlock', Arial, Helvetica, sans-serif;
  width: 100%;
  height: 40%;
  overflow: auto;
}
input[type="submit"]{
  background: #f300b4;
  color: #24253d;
  margin-top: 1rem;
  width: auto;
  float: right;
}
input::-moz-placeholder { color: #24253d; }
input::-webkit-input-placeholder { color: #24253d; }
textarea::-moz-placeholder { color: #24253d; }
textarea::-webkit-input-placeholder { color: #24253d; }
</style>