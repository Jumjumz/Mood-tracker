<script>
  import { moodEntries, deleteMoodEntry } from "../stores/moodStore";
</script>

<h2>Mood History</h2>

{#if $moodEntries.length === 0}
  <p>No mood entries yet.</p>
{:else}
  <ul class=" list-none p-0">
    {#each $moodEntries as entry (entry._id)}
      <li class=" border-2 p-4 mb-4">
        <span>{entry.mood}</span>
        <span>{new Date(entry.timestamp).toLocaleString()}</span>
        <p>{entry.note}</p>
        <button
          class="bg-[#ff4136] text-white border-0 cursor-pointer p-2 rounded-md"
          on:click={() => deleteMoodEntry(entry._id)}>Delete</button
        >
      </li>
    {/each}
  </ul>
{/if}
