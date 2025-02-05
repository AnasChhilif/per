<script>
  import { goto } from '$app/navigation';

  function handleGetStarted() {
    goto('/to-do');
  }
</script>

<main class="flex flex-col items-center justify-center min-h-screen p-4">
  <h1 
    data-testid="home-title"
    class="text-4xl font-bold mb-8 text-center"
  >
    Welcome to Todo App
  </h1>
  <button 
    data-testid="get-started-button"
    on:click={handleGetStarted}
    class="px-6 py-3 text-lg bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
  >
    Get Started
  </button>
</main>