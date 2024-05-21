<script lang="ts">
    import type { fireteam } from "../../routes/fireteam/fireteam";

    export let fireteamData: fireteam = {
      title: "",
    };
  
    async function submit(event: Event) {
      try {
        const response = await fetch("http://localhost:3000/creationFireteam", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ${get(authToken)}'
          },
          body: JSON.stringify(fireteamData),
        });
  
        if (response.ok) {
          console.log("Fireteam data sent successfully");
        } else {
          console.error("Failed to send fireteam data:", response.statusText);
        }
      } catch (error) {
        console.error("Error sending fireteam data:", error);
      }
    }
  </script>
  
  <div class="form-container">
    <form on:submit={submit}>
      <label for="title">Title:</label>
      <input type="text" bind:value={fireteamData.title} id="title" required minlength="{10}"/>
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