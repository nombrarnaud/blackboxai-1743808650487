export default {
  name: 'TicketReservationForm',
  data() {
    return {
      selectedTicket: 'basic',
      formData: {
        name: '',
        whatsapp: ''
      },
      errors: {},
      isSubmitting: false,
      showSuccess: false
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      
      if (!this.formData.name.trim()) {
        this.errors.name = 'Name is required'
      }
      
      if (!this.formData.whatsapp.trim()) {
        this.errors.whatsapp = 'WhatsApp number is required'
      } else if (!/^\+?[\d\s-]{10,}$/.test(this.formData.whatsapp)) {
        this.errors.whatsapp = 'Please enter a valid phone number'
      }
      
      return Object.keys(this.errors).length === 0
    },
    
    async submitReservation() {
      if (!this.validateForm()) return
      
      this.isSubmitting = true
      this.showSuccess = false
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        this.showSuccess = true
        this.formData.name = ''
        this.formData.whatsapp = ''
        this.selectedTicket = 'basic'
        
        // Scroll to success message
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          })
        }, 100)
      } catch (error) {
        console.error('Reservation failed:', error)
      } finally {
        this.isSubmitting = false
      }
    }
  },
  template: `
    <section class="py-16 px-4 max-w-4xl mx-auto w-full">
      <div class="bg-white rounded-lg shadow-xl p-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Reserve Your Tickets</h2>

        <!-- Ticket Selection Cards -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <!-- Basic Ticket -->
          <div 
            @click="selectedTicket = 'basic'"
            :class="[
              'p-6 rounded-lg border-2 cursor-pointer transition-all duration-300',
              selectedTicket === 'basic' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
            ]"
          >
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-semibold text-gray-800">Basic Ticket</h3>
              <span class="text-2xl font-bold text-blue-600">$29</span>
            </div>
            <ul class="space-y-2 mb-4">
              <li class="flex items-center text-gray-600">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Entry to BBQ event
              </li>
              <li class="flex items-center text-gray-600">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Standard seating
              </li>
              <li class="flex items-center text-gray-600">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Basic BBQ menu
              </li>
            </ul>
          </div>

          <!-- Premium Ticket -->
          <div 
            @click="selectedTicket = 'premium'"
            :class="[
              'p-6 rounded-lg border-2 cursor-pointer transition-all duration-300',
              selectedTicket === 'premium' ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300'
            ]"
          >
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-semibold text-gray-800">Premium Ticket</h3>
              <span class="text-2xl font-bold text-purple-600">$49</span>
            </div>
            <ul class="space-y-2 mb-4">
              <li class="flex items-center text-gray-600">
                <i class="fas fa-check text-green-500 mr-2"></i>
                VIP entry to BBQ event
              </li>
              <li class="flex items-center text-gray-600">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Premium seating
              </li>
              <li class="flex items-center text-gray-600">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Extended BBQ menu
              </li>
              <li class="flex items-center text-gray-600">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Complimentary drinks
              </li>
            </ul>
          </div>
        </div>

        <!-- Reservation Form -->
        <form @submit.prevent="submitReservation" class="space-y-6">
          <div>
            <label class="block text-gray-700 font-medium mb-2" for="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              :class="{'border-red-500': errors.name}"
              placeholder="Enter your full name"
            >
            <p v-if="errors.name" class="mt-1 text-red-500 text-sm">{{ errors.name }}</p>
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-2" for="whatsapp">
              WhatsApp Number
            </label>
            <input
              type="tel"
              id="whatsapp"
              v-model="formData.whatsapp"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              :class="{'border-red-500': errors.whatsapp}"
              placeholder="Enter your WhatsApp number"
            >
            <p v-if="errors.whatsapp" class="mt-1 text-red-500 text-sm">{{ errors.whatsapp }}</p>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting">Complete Reservation</span>
            <span v-else class="flex items-center justify-center">
              <i class="fas fa-spinner fa-spin mr-2"></i>
              Processing...
            </span>
          </button>
        </form>

        <!-- Success Message -->
        <div v-if="showSuccess" class="mt-6 p-4 bg-green-100 text-green-700 rounded-lg">
          <p class="flex items-center">
            <i class="fas fa-check-circle mr-2"></i>
            Reservation completed successfully! Check your WhatsApp for confirmation.
          </p>
        </div>
      </div>
    </section>
  `
}