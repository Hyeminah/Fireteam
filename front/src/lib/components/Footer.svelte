<script lang="ts">
  import bungie_logo_footer from "../img/bungie_logo_footer.png";
</script>

<div class="footer">
  <img class="bungie_logo_footer" src={bungie_logo_footer} alt="bungie_logo_footer" />
  <p class="copy">&copy; 2024 Bungie, Inc All rights reserved</p>
</div>

<style>
  .footer {
    position: relative;
    bottom: 0;
    width: 100%;
    z-index: 2;
    text-align: center;
    opacity: 1;
    background: #14191e;
    border: solid 5px red;
    padding: 10px 0;

}
  .copy {
    height: 20px;
    width: 250px ;
    margin-top: 22px;
    margin-right: 60px;
    color: white;
    font-size: 15px;
    font-weight: bold;
   border: solid 5px red;
    
  }
  .bungie_logo_footer {
    padding: 10px;
    z-index: 1;
    border: solid 5px red;
  }
</style>
