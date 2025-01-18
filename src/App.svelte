<script>
  import { Router, Link, Route } from "svelte-routing";
  import MoodEntry from "./components/MoodEntry.svelte";
  import MoodHistory from "./components/MoodHistory.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Add Mood</Link>
    <Link to="/history">Mood History</Link>
  </nav>

  <main>
    <Route path="/" component={MoodEntry} />
    <Route path="/history" component={MoodHistory} />
  </main>
</Router>

<style>
  nav {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    background-color: #f0f0f0;
  }

  main {
    padding: 1rem;
  }
</style>
