<script>
  // your script goes here
  export let post;
</script>

<style scoped>
  .skateboard {
    width: 60vw;
    max-width: 500px;
    height: 20vh;
    margin-bottom: 6vh;
    border-radius: 500px;
    background-color: white;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .skateboard:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background-color: rgba(255, 62, 0, 0.67);
    color: white;
  }

  .content {
    padding: 5vh;
    font-size: 1.6em;
    text-align: center;
    max-width: 66%;
  }
  .date {
    display: none;
    font-size: 0.86em;
    font-weight: 300;
    margin-bottom: 5.6vh;
    padding-left: 6vw;
  }
  .skateboard:hover + .date {
    display: block;
  }
  a {
    text-decoration: none;
  }
  .main {
    display: flex;
    align-items: center;
  }

  .chips {
    position: absolute;
  }
</style>

<!-- markup (zero or more items) goes here -->

<a rel="prefetch" href="blog/{post.slug}">
  <div class="main">
    <div class="skateboard">
      <div class="content">
        {post.title}
        <br />
        <!-- <span class="date">{post.date}</span> -->
      </div>

      <div class="chips" />
    </div>
    <div class="date">{post.date}</div>
  </div>
</a>
