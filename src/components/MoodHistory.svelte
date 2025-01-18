<script>
  import { moodEntries, deleteMoodEntry } from "../stores/moodStore";
</script>

<h2>Mood History</h2>

{#if $moodEntries.length === 0}
  <p>No mood entries yet.</p>
{:else}
  <ul>
    {#each $moodEntries as entry (entry._id)}
      <li>
        <span>{entry.mood}</span>
        <span>{new Date(entry.timestamp).toLocaleString()}</span>
        <p>{entry.note}</p>
        <button on:click={() => deleteMoodEntry(entry._id)}>Delete</button>
      </li>
    {/each}
  </ul>
{/if}

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  button {
    background-color: #ff4136;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
</style>
