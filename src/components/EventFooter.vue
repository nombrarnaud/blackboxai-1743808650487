<template>
  <footer class="bg-gray-900 text-white mt-auto">
    <!-- Contact Section -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Contact Information -->
        <div class="space-y-6">
          <h3 class="text-2xl font-bold mb-6">Contact Us</h3>
          <div class="space-y-4">
            <div class="flex items-center">
              <i class="fas fa-phone text-blue-400 text-xl w-8"></i>
              <a href="tel:+1234567890" class="hover:text-blue-400 transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            <div class="flex items-center">
              <i class="fas fa-envelope text-blue-400 text-xl w-8"></i>
              <a href="mailto:info@bbqevent.com" class="hover:text-blue-400 transition-colors">
                info@bbqevent.com
              </a>
            </div>
            <div class="flex items-center">
              <i class="fas fa-map-marker-alt text-blue-400 text-xl w-8"></i>
              <span>2333 avenue Chapdelaine</span>
            </div>
          </div>

          <!-- Social Media Links -->
          <div class="pt-6">
            <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-2xl hover:text-blue-400 transition-colors">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#" class="text-2xl hover:text-blue-400 transition-colors">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="text-2xl hover:text-blue-400 transition-colors">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="text-2xl hover:text-blue-400 transition-colors">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Google Maps -->
        <div class="h-[300px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.8654953278457!2d-71.2754557!3d46.8140983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb897d1106c7e15%3A0x98c6bf58a3f4c497!2s2333%20Ave%20Chapdelaine%2C%20Quebec%20City%2C%20QC!5e0!3m2!1sen!2sca!4v1635959123456!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="bg-gray-800 py-4">
      <div class="max-w-7xl mx-auto px-4 text-center text-gray-400">
        <p>&copy; {{ currentYear }} BBQ Event. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'EventFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>