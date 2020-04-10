<script>
  import Button, { options } from "@sveltekit/ui/Button";
</script>

<style>
  h1 {
    font-size: 2.8em;
    /* text-transform: uppercase; */
    font-weight: 500;
  }

  p {
    font-size: 1.2em;
  }

  .about {
    margin: 0.25em;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }

  a {
    text-decoration: none;
    margin-right: 1.6em;
  }
  a:hover {
    color: rgba(255, 62, 0, 0.75);
  }
  .reason {
    font-style: italic;
  }
</style>

<svelte:head>
  <title>I just wanna skate</title>
</svelte:head>

<h1>
  Sup my
  <span style="color: rgba(255, 62, 0, 0.75);">G!</span>
</h1>

<div class="about">
  <p>
    I'm Tam,
    <br />
    and I just wanna skate.
    <br />
    <span class="reason">Every, Thingle, Day.</span>
    <br />
    you wanna come?
    <br />
  </p>
  <a href="/blog" style="margin-top:1.6em">
    <Button>yeah g</Button>

  </a>
</div>
