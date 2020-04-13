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
      font-size: 3.2em;
    }
    p {
      font-size: 1.6em;
    }
  }

  a {
    text-decoration: none;
    margin-right: 1.6em;
    color: rgba(255, 62, 0, 0.5);
  }
  a:hover {
    color: rgba(255, 62, 0, 0.75);
  }
</style>

<svelte:head>
  <title>I just wanna skate</title>
</svelte:head>

<h1>
  Sup my G!
  <!-- <span style="color: rgba(255, 62, 0, 0.75);">G!</span> -->
</h1>

<div class="about">
  <p>
    Im Tamari,
    <br />
    I'm trying to make a living from
    <br />
    <span style="font-weight:600">skateboarding</span>
    and
    <span style="font-weight:600">making apps</span>
    <br />
  </p>
  <p>
    I hope you can learn
    <br />
    something useful
    <br />
    from
    <a href="/blog" style="margin-top:1.6em">my journey</a>
  </p>

</div>
