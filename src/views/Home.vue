<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center v-show="visible">
                <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
                <p>dfsdfsd</p>
                <p>dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf dfsdfsdddsfsdf </p>
                <v-stepper v-model="e6" vertical non-linear>
                    <v-stepper-step :complete="e6 !== 1"
                                    edit-icon="add" editable step="1">
                        Select an app
                        <small>Summarize if needed</small>
                    </v-stepper-step>

                    <v-stepper-content step="1">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                        <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>

                    <v-stepper-step :complete="e6 !== 2"
                                    edit-icon="add" editable step="2">
                        Configure analytics for this app
                    </v-stepper-step>

                    <v-stepper-content step="2">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>

                    <v-stepper-step :complete="e6 !== 3"
                                    edit-icon="add" editable step="3">
                        Select an ad format and name ad unit
                    </v-stepper-step>

                    <v-stepper-content step="3">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>

                    <v-stepper-step :complete="e6 !== 4"
                                    step="4" edit-icon="add" editable>
                        View setup instructions
                    </v-stepper-step>
                    <v-stepper-content step="4">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                        <v-btn color="primary" @click="e6 = 1">To start</v-btn>
                        <v-btn flat @click="e6 = 5">Close</v-btn>
                    </v-stepper-content>
                </v-stepper>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      visible: false,
      e6: 1,
    };
  },
  mounted() {
    this.visible = true;
  },
  beforeDestroy() {
    this.visible = true;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
