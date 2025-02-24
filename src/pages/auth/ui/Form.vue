<script setup>
  import { login, password, confirmPassword } from '../store/userData'
  import { tryLogin, tryRegister } from '../api/sendData'
  import { Button } from '@shared/ui'
  
  const props = defineProps(['isLoginForm'])
</script>

<template>
  <form class="window" method="post" @submit.prevent='props.isLoginForm ? tryLogin() : tryRegister()'>
    <div class="form__element">
      <label for="login">Логин: </label>
      <input id="login" type="text" v-model="login" maxlength="15" autocomplete="off" required>
    </div>

    <div class="form__element">
      <label for="password">Пароль: </label>
      <input id="password" type="password" v-model="password" maxlength="30" autocomplete="off">
    </div>

    <div class="form__element" v-if="!props.isLoginForm">
      <label for="confirmPassword">Повторите пароль:</label>
      <input id="confirmPassword" type="password" v-model="confirmPassword" maxlength="30" autocomplete="off">
    </div>
    
    <div class="form__element">
      <Button type="submit">Отправить</Button>
    </div>
  </form> 
</template>

<style scoped>
  form {
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 7.5rem;
    left: 50%;
    translate: -50% 0;

    width: 1000px;

    padding: 1rem;
    color: white;
  }

  .form__element {
    margin: .25rem 0;
    width: 85%;
    display: flex;
    justify-content: space-between;
  }

  form > *:last-child {
    margin: 1rem 0;
    justify-content: end;
  }

  input {
    border: none;
    border-radius: .25rem;
    font-size: .75rem;
    padding: .35rem .5rem;
    transition: var(--normal-transition);
  }

  input:focus {
    box-shadow: 0 0 .25rem black;
  }

  label {
    font-size: 1rem;
    text-align: start;
    margin-right: 1rem;
    font-weight: 700;
    text-shadow: 0 0 5px #000;
  }

  @media (max-width: 1440px) {
    form {
      width: 750px;
    }
  }

  @media (max-width: 1080px) {
    form {
      width: 650px;
    }

    .form__element {
      width: 100%;
    }
  }

  @media (max-width: 840px) {
    form {
      width: 450px;
    }
  }

  @media (max-width: 560px) {
    .form__element {
      flex-direction: column;
    }

    .form__element > * {
      margin-top: .5rem;
    }

    .form__element:last-of-type {
      align-items: baseline;
    }

    form {
      width: 300px;
    }
  }

  @media (max-width: 400px) {
    form {
      width: 250px;
    }
  }
</style>