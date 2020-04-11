<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
  let reversePostsArr = [...posts].reverse();
  import Card, { options } from "@sveltekit/ui/Card";
  import Skatedeck from "../../components/Skatedeck.svelte";
</script>

<style scoped>
  h1 {
    font-size: 2.8em;
    font-weight: 500;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

{#each reversePostsArr as post}
  <Skatedeck {post} />
{/each}
