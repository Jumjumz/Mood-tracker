<script>
  import { Router, Link, Route } from "svelte-routing";
  import MoodEntry from "./components/MoodEntry.svelte";
  import MoodHistory from "./components/MoodHistory.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav class=" flex justify-around p-4 bg-[#f0f0f0]">
    <Link to="/">Add Mood</Link>
    <Link to="/history">Mood History</Link>
  </nav>

  <main class=" p-4">
    <Route path="/" component={MoodEntry} />
    <Route path="/history" component={MoodHistory} />
  </main>
</Router>
