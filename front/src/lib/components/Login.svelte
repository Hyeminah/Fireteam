<script lang=ts>
  import { writable } from 'svelte/store';

  export const signInData = writable({
    pseudo: "",
    mail: "",
    password: "",
  });

  // store for the authentication state and token
  export const isAuthenticated = writable(false);
  export const authToken = writable('');

  
  async function submit(event: Event ) {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify($signInData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Authentication successful');
        authToken.set(data.access_token);
        isAuthenticated.set(true);
        localStorage.setItem('authToken', data.access_token); // Store token in localStorage
      } else {
        console.error('Failed to connect:', response.statusText);
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  }
</script>

<div class="form-container">
  <form on:submit={submit}>
    <label for="pseudo">Pseudo:</label>
    <input type="text" bind:value={$signInData.pseudo} id="pseudo" required />
    <label for="email">Email:</label>
    <input type="email" bind:value={$signInData.mail} id="email" required />
    <label for="password">Password:</label>
    <input type="password" bind:value={$signInData.password} id="password" required />
    <button type="submit">Login</button>
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
    z-index: 2;
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
    font-family: 'Akaya Telivigala', sans-serif;
    border-radius: 5px;
    cursor: pointer;
  }

  .form-container button:hover {
    background-color: #333;
  }
</style>
