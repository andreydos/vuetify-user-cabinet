<template>
  <v-app light>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center v-show="visible">
          <h2>This is Login page</h2>
          <div>
            <v-btn color="primary"
                   @click="login">TEST LOGIN
            </v-btn>
          </div>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      visible: false,
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch('auth/logIn', this.form)
        .then(() => {
          this.$router.push({ name: 'home' });
        });
    },
  },
  mounted() {
    this.visible = true;
  },
  beforeDestroy() {
    this.visible = true;
  },
};
</script>
