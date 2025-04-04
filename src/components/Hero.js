export default {
  name: 'Hero',
  template: `
    <header class="relative h-[600px] flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1105325/bbq-meet-eating-diner-1105325.jpeg"
          alt="Barbecue Event" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
          Summer BBQ Fest 2024
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 mb-8">
          Join us for an unforgettable evening of mouthwatering barbecue, live music, and great company. 
          Experience the finest selection of grilled meats, craft beverages, and summer vibes.
        </p>
        <div class="space-y-4">
          <p class="text-lg text-gray-300">
            <i class="fas fa-calendar-alt mr-2"></i>
            Saturday, July 15th, 2024
          </p>
          <p class="text-lg text-gray-300">
            <i class="fas fa-clock mr-2"></i>
            4:00 PM - 10:00 PM
          </p>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i class="fas fa-chevron-down text-white text-2xl"></i>
      </div>
    </header>
  `
}