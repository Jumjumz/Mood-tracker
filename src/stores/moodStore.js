import { writable } from "svelte/store";

const API_URL = "http://localhost:3000/mood";

export const moodEntries = writable([]);

export async function fetchMoodEntries() {
  const response = await fetch(API_URL);
  const entries = await response.json();
  moodEntries.set(entries);
}

export async function createMoodEntry(entry) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
  });
  const newEntry = await response.json();
  moodEntries.update((entries) => [...entries, newEntry]);
}

export async function deleteMoodEntry(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  moodEntries.update((entries) => entries.filter((entry) => entry.id !== id));
}

// Initialize the store
fetchMoodEntries();
