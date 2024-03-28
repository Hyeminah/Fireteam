<script>
    // Import the HomePage component
    import HomePage from '../lib/components/HomePage.svelte';
    import Header from '../lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
  </script>
    
    <Header/>
    <HomePage />
    <Footer />
    <!-- Content from individual pages will be inserted here -->
    <slot></slot>


  