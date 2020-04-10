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
  import Card, { options } from "@sveltekit/ui/Card";
</script>

<style scoped>
  h1 {
    font-size: 2.4em;
    /* text-transform: uppercase; */
    font-weight: 500;
  }
  .content {
    padding: 5vh;
    margin: 1em;
    font-size: 1.6em;
  }
  .card-holder:hover {
    border-radius: 4px;
    background-color: rgba(255, 62, 0, 0.75);
    color: white;
  }
  a {
    text-decoration: none;
  }
  .date {
    font-size: 0.6em;
    font-weight: 300;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

{#each posts as post}
  <a rel="prefetch" href="blog/{post.slug}">
    <div class="card-holder">
      <Card level="3">
        <div class="content">
          {post.title}
          <br />
          <span class="date">{post.date}</span>
        </div>
      </Card>
    </div>

  </a>
{/each}
