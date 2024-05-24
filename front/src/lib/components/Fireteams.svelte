<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import type { fireteam } from '../../routes/fireteam/fireteam';
  
    const fireteams = writable<fireteam[]>([]);
    const error = writable<string | null>(null);
    const successMessage = writable<string | null>(null);

  
    // Fetch fireteams data when the component mounts
    onMount(async () => {
      try {
        const response = await fetch('http://localhost:3000/fireteam');
  
        if (response.ok) {
          const data: fireteam[] = await response.json();
          fireteams.set(data);
        } else {
          error.set(`Failed to fetch fireteams: ${response.statusText}`);
          console.error("Failed to fetch fireteams:", response.statusText);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      error.set(`Error fetching fireteams: ${errorMessage}`);
      console.error("Error fetching fireteams:", err);
    
      }
    });
    async function joinFireteam(fireteam: fireteam) {
    try {
      const response = await fetch(`http://localhost:3000/fireteam/${fireteam.id}/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playerId: Number () }), 
      });

      if (response.ok) {
        const data = await response.json();
        successMessage.set(data.message);
      } else {
        error.set(`Failed to join fireteam: ${response.statusText}`);
        console.error("Failed to join fireteam:", response.statusText);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      error.set(`Error joining fireteam: ${errorMessage}`);
      console.error("Error joining fireteam:", err);
    }
  }
  </script>
  
  {#if $error}
  <p class="error">{$error}</p>
{:else}
  <div class="fireteams-container">
      {#each $fireteams as fireteam}
          <div class="fireteam-card">
              <div class="fireteam-title">{fireteam.title}</div>
              <button on:click={() => joinFireteam(fireteam)}>Join</button>
          </div>
      {/each}
  </div>
{/if}

  
  <style>
  .fireteams-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      flex-direction: column;
      align-items: center;
      height: auto;
      width: 80%;
      
    }

    .fireteam-card {
    
        background-color: #1f2227;
        padding: 1rem;
        border-radius: 0.5rem;
    }

    .fireteam-title {
        color: white;
        margin-bottom: 0.5rem;
        font-family: "Akaya Telivigala", sans-serif;
    }

    .fireteam-card button {
        background-color: #13161b;
        font-family: "Akaya Telivigala", sans-serif;
        color: whitesmoke;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
        padding: 0.5rem 1rem;
    }

    .fireteam-card button:hover {
        background-color: #333;
    }

    .error {
        color: red;
        text-align: center;
    }

  </style>
  