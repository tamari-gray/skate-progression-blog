const posts = [
	{
		title: 'How to commit to rails',
		slug: 'how-to-commit-to-rails',
		date: '29/03/2020',
		html: `
		<p> Today I attempted and landed a 50-50 on a circle rail. It was scary and I don't think i would've done it if I didnt watch the nine club <a href: "https://www.youtube.com/watch?v=A-3LUnPO5OI&t=4779s">Bastien Salabanzi</a> and <a href:"https://www.youtube.com/watch?v=Aqmjl5NxhH0"> Nyjah Huston </a> interviews the past couple days. </p>
		<p>They both shared stories of why when they go for rails, (or any scary trick) that you have to commit 100%. Any shred of doubt you have rolling up, or mid pop will only increase the chance of injury.</p>
		<p> Nyjah shared that injuries only happen when he doesnt fully commit. And Bastien told a story of watching Tom Penny only commiting 100%, even when the board wasnt fully there.
		<p>Today I never commited 100%, even the one I landed Im pretty sure i closed my eyes on the rail and got lucky. I was so worried that my body weight wouldnt be on right, my trucks would be crooked, and that everything could go wrong.Not commiting 100% was so scary i got jelly legs after landing it. Im happy i didnt get injured but i know i could have. Nyjahs and bastiens advice really sunk in after that.</p>

		<h2> How do you commit to rails? </h2>
		<p> <strong>believe</strong> that if you commit, you can land it. Empty your mind of everything else </p>

		`
	},

	// template exxample post
	// {
	// 	title: 'How to use Sapper',
	// 	slug: 'how-to-use-sapper',
	// 	html: `
	// 		<h2>Step one</h2>
	// 		<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

	// 		<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
	// 		cd my-app
	// 		npm install # or yarn!
	// 		npm run dev
	// 		</code></pre>

	// 		<h2>Step two</h2>
	// 		<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

	// 		<h2>Step three</h2>
	// 		<p>...</p>

	// 		<h2>Step four</h2>
	// 		<p>Resist overdone joke formats.</p>
	// 	`
	// }
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
