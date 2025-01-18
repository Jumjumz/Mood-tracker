<script>
  import { createMoodEntry } from "../stores/moodStore";

  let selectedMood = "";
  let note = "";

  const moods = ["😊", "😐", "😢", "😡", "😴"];

  function handleSubmit() {
    if (selectedMood) {
      createMoodEntry({ mood: selectedMood, note, timestamp: new Date() });
      selectedMood = "";
      note = "";
    }
  }
</script>

<h2>How are you feeling?</h2>

<div class=" flex justify-around mb-4">
  {#each moods as mood}
    <button
      class:selected={selectedMood === mood}
      on:click={() => (selectedMood = mood)}
    >
      {mood}
    </button>
  {/each}
</div>

<textarea
  class=" w-full h-24 mb-4"
  bind:value={note}
  placeholder="Add a note (optional)"
></textarea>

<button
  class=" text-md cursor-pointer w-full h-10 bg-blue-300"
  on:click={handleSubmit}
  disabled={!selectedMood}>Save Mood</button
>
