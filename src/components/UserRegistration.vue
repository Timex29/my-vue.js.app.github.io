<!-- filename: User-Registration.vue -->
<!-- ✓ GOOD -->
<template>
  <div class="login">
    <div class="box">
      <span class="borderLine"></span>
      <form @submit.prevent="submit">
        <h2>Sign in</h2>
        <div class="inputBox">
          <input type="text" required v-model="form.username" />
          <span class="fas fa-user" style="font-size: 0.8rem"> Username</span>
          <i></i>
        </div>

        <div class="inputBox">
          <input type="password" v-model="form.password" required id="myInput" />

          <span class="bi bi-lock-fill" style="font-size: 0.9rem" for="password"> Password</span>
          <i></i>
        </div>        <div></div>
        <div class="links">
          <a href="#">Forgot Password?</a>
          <a> <input type="checkbox" onclick="myFunction()" /> Show/Hide </a>
        </div>
        <button type="submit" class="loginbox">Login</button>
      </form>
    </div>
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.login {
  margin-top: 40px;
}
</style>

<!--this is a scirpt tag-->
<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async submit() {
      this.$emit('submit', this.form)
    }
  }
}
</script>
