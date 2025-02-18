<script setup>
  import { login, password } from '../store/userData'
  import { tryLogin } from '../api/sendData'
  import Warn from './Warn.vue';
</script>

<template>
  <div class="local-root">
    <Warn />

    <form method="post" @submit.prevent='tryLogin'>
      <div class="form__element">
        <label for="login">Логин: </label>
        <input id="login" type="text" v-model="login" maxlength="30">
      </div>

      <div class="form__element">
        <label for="password">Пароль: </label>
        <input id="password" type="text" v-model="password" maxlength="30">
      </div>
      
      <div class="form__element">
        <input type="submit" value="Отправить">
      </div>
    </form>
  </div>
</template>

<style scoped>
  form {    
    padding: 1rem;
    color: white;
    position: absolute;
    top: 2rem;
    left: 50%;
    translate: -50% 0;
    width: 1000px;
    height: 500px;
    background: darkslateblue;
    border-radius: 1rem;
  }

  input {
    outline: none;
    font-size: .75rem;
    padding: .25rem .5rem;
  }

  label {
    margin-right: 1rem;
  }
</style>