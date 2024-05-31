<script lang="ts">
  import logo from "/src/lib/img/bungie_logo_with_shield.svg";
  import header_background from "/src/lib/img/seasonbackground_23.jpg";
</script>

<div class="header">
  <div class="top">
    <img class="logo_bungie" src={logo} alt="Logo" />
    <nav class="menu">
      <a href="/login" class="button">Login</a>
      <a href="/register" class="button">Register</a>
      <a href="/creationFireteam" class="button">Create Fireteam</a>
      <a href="/fireteam" class="button"> Join Fireteam</a>
    </nav>
  </div>
  <img class="header_background" src={header_background} alt="season" />
</div>

<style>
  .header {
    position: relative;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Ensure buttons are on the right */
    background: #12171c;
    padding: 10px;
    z-index: 1;
    margin: 0;
  }

  .logo_bungie {
    position: relative;
    padding: 0% ;
    top: 1px;
    left: 1rem;
    margin-right: 2rem;
    width: 9rem;
    height: 40px;
  }

  .header_background {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .menu {
    display: flex;
    gap: 20px;
  }

  .button {
    padding: 10px 20px;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    font-family: "Akaya Telivigala", sans-serif;
    text-align: center;
    transition: .25s;
    cursor: pointer;
    color: #f5f5f5;
    font-size: 0.925rem;
    font-weight: 500;
    background-color: #13161b; /* Add background color */
  }

  .button:hover {
    background: rgba(183, 140, 37, 0.8);
  }
</style>
