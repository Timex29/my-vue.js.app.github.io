<template>
  <v-responsive class="d-flex align-center justify-center fill-heigth fluid">
    <v-sheet class="mx-auto py-5" width="400" sm="8" md="4">
      <v-card class="mx-auto py-5" max-width="400">
        <div class="box">
          <v-form v-model="form" @submit.prevent="onSubmit">
            <v-card-title><h2>Sign in</h2></v-card-title>
            <!--v-text-field-username-->
            <div class="inputBox">
              <v-text-field
                v-model="Name"
                :readonly="loading"
                :rules="[required]"
                label="Username"
                variant="outlined"
                clearable
                prepend-inner-icon="mdi-account-outline"
              ></v-text-field>
              <i></i>
            </div>

            <br />

            <div class="inputBox">
              <!--v-text-field-password-->
              <div class="input">
                <v-text-field
                  v-model="PassWord"
                  :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="visible ? 'text' : 'password'"
                  :readonly="loading"
                  :rules="[required]"
                  label="Password"
                  variant="outlined"
                  clearable
                  prepend-inner-icon="mdi-lock-outline"
                  @click:append-inner="visible = !visible"
                ></v-text-field>
                <i></i>
              </div>
            </div>

            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between links"
            >
              <a
                class="text-caption text-decoration-none text-blue"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Forgot login password?</a
              >
            </div>

            <br />

            <!--btn-submit-->
            <v-btn
              class="mb-4"
              :disabled="!form"
              :loading="loading"
              block
              color="success"
              size="large"
              type="submit"
              variant="elevated"

              data-type="submit"
            >
              Login
            </v-btn>
          </v-form>
        </div>
      </v-card>
    </v-sheet>
  </v-responsive>
</template>

<script>
export default {
  data: () => ({
    form: false,
    Name: null,
    PassWord: null,
    loading: false,
    visible: false
  }),

  methods: {
    onSubmit() {
      if (!this.form) return

      this.loading = true

      setTimeout(() => (this.loading = false), 1000)
    },
    required(v) {
      return !!v || 'Field is required'
    }
  }
}
</script>
