<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import type { player } from "../../routes/player/player";
  import Footer from "./Footer.svelte";

  export let SignIn: player = {
    pseudo: "",
    mail: "",
    password: "",
  };

  async function submit() {
    try {
      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(SignIn),
      });

      if (response.ok) {
        console.log("authentification ok");
      } else {
        console.error("Failed to connect:", response.statusText);
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  }
</script>

<div class="form-container">
  <form on:submit={submit}>
    <label for="pseudo">Pseudo:</label>
    <input type="text" bind:value={SignIn.pseudo} id="pseudo" required />
    <label for="email">Email:</label>
    <input type="email" bind:value={SignIn.mail} id="email" required />
    <label for="password">Password:</label>
    <input
      type="password"
      bind:value={SignIn.password}
      id="password"
      required
    />
    <button type="submit">Sing in </button>
  </form>
</div>

<style>
  .form-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1f2227;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    z-index: 1;
  }

  .form-container label {
    color: white;
    display: block;
    margin-bottom: 10px;
  }

  .form-container input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .form-container button {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #13161b;
    color: whitesmoke;
    font-family: "Akaya Telivigala", sans-serif;
    border-radius: 5px;
    cursor: pointer;
  }

  .form-container button:hover {
    background-color: #333;
  }
</style>
