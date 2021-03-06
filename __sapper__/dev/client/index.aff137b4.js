import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.ab96901b.js';

/* src/routes/index.svelte generated by Svelte v3.20.1 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let div;
	let p;
	let t3;
	let br;
	let t4;
	let span;
	let t5;
	let t6;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Skate progression");
			t2 = space();
			div = element("div");
			p = element("p");
			t3 = text("Im Tamari Gray-kaiwahia. ");
			br = element("br");
			t4 = text(" Grew up in NZ. Been skating 11 years, and recently\n    realised\n    ");
			span = element("span");
			t5 = text("i can have fun and skate everyday,");
			t6 = text("\n    here's how and why im doing that.");
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
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			p = claim_element(div_nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "Im Tamari Gray-kaiwahia. ");
			br = claim_element(p_nodes, "BR", {});
			t4 = claim_text(p_nodes, " Grew up in NZ. Been skating 11 years, and recently\n    realised\n    ");
			span = claim_element(p_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t5 = claim_text(span_nodes, "i can have fun and skate everyday,");
			span_nodes.forEach(detach_dev);
			t6 = claim_text(p_nodes, "\n    here's how and why im doing that.");
			p_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "skate progression";
			attr_dev(h1, "class", "svelte-wqcx8q");
			add_location(h1, file, 27, 0, 322);
			add_location(br, file, 31, 29, 405);
			attr_dev(span, "class", "svelte-wqcx8q");
			add_location(span, file, 33, 4, 478);
			add_location(p, file, 30, 2, 372);
			attr_dev(div, "class", "about svelte-wqcx8q");
			add_location(div, file, 29, 0, 350);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, p);
			append_dev(p, t3);
			append_dev(p, br);
			append_dev(p, t4);
			append_dev(p, span);
			append_dev(span, t5);
			append_dev(p, t6);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYWZmMTM3YjQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
