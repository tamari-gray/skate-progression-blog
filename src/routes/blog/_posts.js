const posts = [
	{
		title: 'How to commit to rails',
		slug: 'how-to-commit-to-rails',
		date: '30/03/2020',
		html: `
		<p> Today I attempted and landed a 50-50 on a circle rail. It was scary and I don't think i would've done it if I didnt watch the nine club <a href="https://www.youtube.com/watch?v=A-3LUnPO5OI&t=4779s">Bastien Salabanzi</a> and <a href="https://www.youtube.com/watch?v=Aqmjl5NxhH0"> Nyjah Huston </a> interviews the past couple days. </p>
		<p>They both shared stories of why when they go for rails, (or any scary trick) that you have to commit 100%. Any shred of doubt you have rolling up, or mid pop will only increase the chance of injury.</p>
		<p> Nyjah shared that injuries only happen when he doesnt fully commit. And Bastien told a story of watching Tom Penny only commiting 100%, even when the board wasnt fully there.
		<p>Today I never commited 100%, even the one I landed Im pretty sure I closed my eyes on the rail and got lucky. I was so worried that my body weight wouldnt be on right, my trucks would be crooked, and that everything could go wrong.Not commiting 100% was so scary i got jelly legs after landing it. Im happy i didnt get injured but i know i could have. Nyjahs and bastiens advice really sunk in after that.</p>

		<h2> How do you commit to rails? </h2>
		<p> <strong>believe</strong> that if you commit, you can land it. Empty your mind of everything else </p>

		`
	},
	{
		title: 'How to be happy every skate',
		slug: 'how-to-be-happy-every-skate',
		date: '31/03/2020',
		html: `
		<p>
			Have you ever been super excited to skate all day, planning and waiting, then you get to the spot or the park and you really just don't want to skate? <br>
		</p>

		<p> 
			That happened to me today, it was a ledgendary spot too. When i got there i was so hyped, but my legs wouldnt work, and motivation quickly fled. I tried having a nap, doing a warm up routine, and tricking myself to think that im full of energy to skate. But i couldnt beat this heavy, gloomy feeling. <br>
		</p>

		<p> 
		It was the worst going to a spot, not being able to skate, and not knowing why. Im still kinda torn about it. <br>
		</p>

		<p> 
		And i wish i couldve done some more slappy grinds, they seemed fun.
		</p>

		<h2> How do you be happy every skate? </h2>
		<p> be happy with an ollie, be happy with rolling around. Cause one day, even that might not be possible.</p>
		`
	},
	{
		title: 'How to get in the zone when your not feeling it',
		slug: 'how-to-get-in-the-zone',
		date: '01/04/2020',
		html: `
		<p>
			<strong> change it up! </strong>
		</p>

		<p> 
			Today I skated a manny pad in a reserve alone and i had fun, skated heaps, and got some tricks. 
			After lunch I went and skated this footpath flatground spot. I was not feeling it at all but I was too scared to try skate anywhere else during level 3 isolation. 
			I ended up trying to skate but mostly sitting down alot.
			When I left I saw Hans and we had a 5 minute skate at this other open spot. I started having so much fun like straight away, got heaps of energy and was landing tricks. 
		</p>

		<p>
			To get in the zone you have to have fun. Its ok not to find every spot fun, you can always move on and find another :)
		</p>
		get-in-the-zone
		`
	},
	{
		title: 'How to reach new limits in skateboarding',
		slug: 'how-to-grow',
		date: '02/04/2020',
		html: `
		<p>
			<strong> Find a squad </strong>
		</p>

		<p> 
			I watched the japan 2019 world series and everyone there is on a completely different level. And they all skate together. If you skated with people who all pushed their limits to that level, you would grow at an insane amount.
		</p>

		<p> 
			you can get really far on your own. But skating with a squad will take you to new heights
		</p>


		`
	},
	{
		title: 'How to create magical coincidences',
		slug: 'how-to-create-magical-coincidences',
		date: '03/04/2020',
		html: `
		<p>
			<strong> Enjoy whats happening now, as much as you can </strong>
		</p>

		<p>
			Today I went and skated a basketball court, had a real mean solo skate. Then biked around kinda aimlessly, not eagerly searching for anything, but real happy with just biking. I ended up finding a school, seeing a mate having a mean skate sesh! It all came out of no where, i didnt expect that to happen at all.  
		</p>

		<p> 
			I think by really enjoying whatever is happening NOW, you allow greater opportunities to flow into your life. 
		</p>

		`
	},
	// template exxample post
	// {
	// 	title: 'How to use Sapper',
	// 	slug: 'how-to-use-sapper',
	// 	html: `
	// 		<h2>Step one</h2>
	// 		<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</at>:</p>

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
