<script lang="ts">
  import logo from "/src/lib/img/bungie_logo_with_shield.svg";
  import header_background from "/src/lib/img/seasonbackground_23.jpg";
  
  var titles = document.querySelectorAll('.title');
  titles.forEach(function(title) {
    title.textContent = 'New Page Title';
  });

</script>

<div class="header">
  <div class="top" />
  <img class="logo_bungie" src={logo} alt="Logo" />

  <img class="header_background" src={header_background} alt="season" />

  <h1 class="title" id="pageTitle" > Default Title </h1>
  
</div>

<style>
  .top {
    top: 20px;
    overflow: hidden;
    left: 0;
    height: auto;
    background: #12171c;
    padding: 15px;
    border: solid 5px red;
  }

  .header_background {
    object-fit: cover;
    position: relative;
    margin: 0;
    max-width: 1664px;
    top: 0;
    left: 0;
    width: 100%; /* Ensure image covers the entire width */
    height: 75%; /* Ensure image covers the entire height */

  }

  .logo_bungie {
    object-fit: cover;
    position: absolute;
    top: 1px;
    left: 2rem;
    border: solid 5px red;
    display: block;
    width: 20%;
    height: auto;
  }

  .title {
    position: absolute;
    color: whitesmoke;
    font-family: "Akaya Telivigala", sans-serif;
    top: 8rem;
    left: 2rem;
    letter-spacing: -2px;
  }
  
  @media (min-width: 500px) and (max-width: 930px) {
    .title {
      top: 5rem;
    }

    .top {
    }
  }
</style>
