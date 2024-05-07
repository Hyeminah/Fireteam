<script lang=ts>
    import Header from "../lib/components/Header.svelte";
    import Footer from "../lib/components/Footer.svelte";
    import Background from "../lib/components/Background.svelte";
</script>


<Header/>
<Background />
<main/>
<slot/>
<Footer/>

<style>
  main {
    min-height: 70vh;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    z-index: -1;
    background-color: #13181f;
    border: solid 5px red;
    
  }
</style>
