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
  console.log(posts);

  let reversePostsArr = [...posts].reverse();
  console.log(reversePostsArr);
  import Card, { options } from "@sveltekit/ui/Card";
  import Skatedeck from "../../components/Skatedeck.svelte";
</script>

<style scoped>
  h1 {
    font-size: 2.8em;
    /* text-transform: uppercase; */
    font-weight: 500;
  }

  /* .card-holder:hover {
    border-radius: 4px;
    background-color: rgba(255, 62, 0, 0.75);
    color: white;
  } */
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

{#each reversePostsArr as post}
  <Skatedeck {post} />
{/each}
