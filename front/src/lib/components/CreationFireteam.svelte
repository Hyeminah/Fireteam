<script lang="ts">
  import { goto } from "$app/navigation";
  import { writable } from "svelte/store";
  import type { fireteam } from "../../routes/fireteam/fireteam";

  export let fireteamData: fireteam = {
    title: "",
  };
  const error = writable<string | null>(null);

  function validateFireteamData(data: fireteam): string | null {
    if (!data.title || data.title.length < 10) {
      return "Title must be at least 10 characters long.";
    }
    return null;
  }

  async function submit(event: Event) {
    try {
      const response = await fetch("http://localhost:3000/creationFireteam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ${get(authToken)}",
        },
        body: JSON.stringify(fireteamData),
      });
      if (response.ok) {
        alert("Fireteam created successfully!");
        goto("/fireteam");
      } else {
        error.set(`Failed to send fireteam data: ${response.statusText}`);
        console.error("Failed to send fireteam data:", response.statusText);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      error.set(`Error sending fireteam data: ${errorMessage}`);
      console.error("Error sending fireteam data:", err);
    }
  }
</script>

<div class="form-container">
  <form on:submit={submit}>
    <label for="title">Title:</label>
    <input
      type="text"
      bind:value={fireteamData.title}
      id="title"
      required
      minlength={10}
      aria-required="true"
      aria-describedby="title-description"
    />
    <button type="submit">Create Fireteam</button>
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
