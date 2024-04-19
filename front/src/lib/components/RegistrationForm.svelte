<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import type { player } from "../../routes/player/player";

  export let inputData: player = {
    mail: "",
    pseudo: "",
    password: "",
  };

  async function submit() {
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      if (response.ok) {
        console.log("Data sent successfully");
      } else {
        console.error("Failed to send data:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }
</script>


  <div class="form-container">
    <form on:submit={submit}>
      <label for="pseudo">Pseudo:</label >
      <input type="text" bind:value={inputData.pseudo} id="pseudo" required />
      <label for="email">Email:</label>
      <input type="email" bind:value={inputData.mail} id="email" required />
      <label for="password">Password:</label>
      <input
        type="password"
        bind:value={inputData.password}
        id="password"
        required
      />
      <input
        type="confirm password"
        bind:value={inputData.password}
        id="confirm password"
        required
      />
      <button type="submit">Register</button>
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
