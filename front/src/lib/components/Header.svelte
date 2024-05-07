<script lang="ts">
  import logo from "/src/lib/img/bungie_logo_with_shield.svg";
  import header_background from "/src/lib/img/seasonbackground_23.jpg";
 
</script>

<div class="header">
  <div class="top" />
  <img class="logo_bungie" src={logo} alt="Logo" />

  <img class="header_background" src={header_background} alt="season" />
  <nav class="menu content">
    <!-- <ul>
      <Lien ref="./authentification " text="authentification"/>
      <Lien ref="./inscription " text="sign up" />
    </ul> -->
  </nav>
</div>

<style>
  .top {
    height: auto;
    background: #12171c;
    padding: 20px;
    z-index: 1;
    margin: 0;
    
  }
  .logo_bungie {
    position: absolute;
    padding: 0% ;
    top: 1px;
    left: 1rem;
    margin-right: 2rem;
    width: 9rem;
    height: 40px;
    z-index: 1;
  }
   .header_background {
    position: relative;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%; 
 
   
  }
</style>
