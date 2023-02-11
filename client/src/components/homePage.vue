<script></script>

<template>
  <form class="form">
  
    <form action="/signup">
      <button type="submit" class="submit" id="signup">Sign up</button>
    </form>
    <form action="/login">
      <button type="submit" class="submit" id="login">Login</button>
    </form>
    <form action="/about">
      <button type="submit" class="submit" id="about">FREE YSL</button>
    </form>
    <form action="/profile">
      <button type="submit" class="submit" id="profile">Profile</button>
    </form>
<img src="https://prod.cloud.rockstargames.com/crews/sc/9702/39673588/publish/emblem/emblem_512.png"
    width="200" class="G59">
  </form>
</template>

<style>
.form {
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  height: 500px;
  padding: 20px;
  width: 320px;
  right: 20vh;
  
}

.submit {
  background-color: #08d;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 100px;
  margin-top: 38px;
  text-align: center;
  width: 40%;
  
}
#signup {
  left: 10px;
}
#login{
  left: 155px;
  bottom: 137px;
}
#about{
  left:10px;
  bottom: 150px;
}

#profile{
  left: 155px;
  bottom: 285px;
}

.G59{
  bottom: 275px;
  left: 45px;
}
</style>
