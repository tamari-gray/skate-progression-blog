import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.738cefc7.js';

/* src/routes/index.svelte generated by Svelte v3.20.1 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let p0;
	let t3;
	let span;
	let t4;
	let t5;
	let t6;
	let p1;
	let t7;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Skate progression");
			t2 = space();
			p0 = element("p");
			t3 = text("Im Tamari Gray-kaiwahia. Grew up in NZ. Been skating 11 years, and recently\n  realised\n  ");
			span = element("span");
			t4 = text("i can have fun and skate everyday,");
			t5 = text("\n\there's how and why im doing that");
			t6 = space();
			p1 = element("p");
			t7 = text("I want to skate as much as i can and get crazy good. I want to do tricks no\n  one has ever seen before, and really carve my own way of skateboarding. I'm\n  learning so much everyday, and this blog is where I'm gonna share what I\n  learn. From trick tips to diet and stretching, everytime I decide to change\n  something to benefit my skating/ life ill post it and share why i chose that.\n  I hope you can find something usefull here :)");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-swex5w\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Skate progression");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Im Tamari Gray-kaiwahia. Grew up in NZ. Been skating 11 years, and recently\n  realised\n  ");
			span = claim_element(p0_nodes, "SPAN", {});
			var span_nodes = children(span);
			t4 = claim_text(span_nodes, "i can have fun and skate everyday,");
			span_nodes.forEach(detach_dev);
			t5 = claim_text(p0_nodes, "\n\there's how and why im doing that");
			p0_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t7 = claim_text(p1_nodes, "I want to skate as much as i can and get crazy good. I want to do tricks no\n  one has ever seen before, and really carve my own way of skateboarding. I'm\n  learning so much everyday, and this blog is where I'm gonna share what I\n  learn. From trick tips to diet and stretching, everytime I decide to change\n  something to benefit my skating/ life ill post it and share why i chose that.\n  I hope you can find something usefull here :)");
			p1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "skate progression";
			attr_dev(h1, "class", "svelte-1dxtrwq");
			add_location(h1, file, 18, 0, 241);
			add_location(span, file, 23, 2, 364);
			add_location(p0, file, 20, 0, 269);
			add_location(p1, file, 27, 0, 452);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t3);
			append_dev(p0, span);
			append_dev(span, t4);
			append_dev(p0, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t7);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(p1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTE1ZGQ5MGYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=