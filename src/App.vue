<template>
  <div class="min-h-screen flex flex-col">
    <hero-component />
    <ticket-form-component />
    <footer-component />
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import TicketReservationForm from './components/TicketReservationForm.vue'
import EventFooter from './components/EventFooter.vue'

export default {
  name: 'App',
  components: {
    'hero-component': Hero,
    'ticket-form-component': TicketReservationForm,
    'footer-component': EventFooter
  }
}
</script>

<style>
/* Global styles */
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>