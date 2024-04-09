<script lang="ts">
    import type { player } from "../../routes/player/player";
  

  let inputData: player = {
    email: "",
    pseudo:"",
    password: ""
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

<form>
  <button on:click={submit}>Send Data</button>
  <label for="pseudo">Pseudo:</label>
  <input type="text" bind:value={inputData.pseudo} id="pseudo" required />
  <label for="email">Email:</label>
  <input type="email" bind:value={inputData.email} id="email" required />
  <label for="password">Password:</label>
  <input type="password" bind:value={inputData.password} id="password" required />
  <button type="submit">Register</button>
</form>
