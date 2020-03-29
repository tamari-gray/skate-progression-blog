import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.aef027ee.js';

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
	let br0;
	let t4;
	let br1;
	let t5;
	let br2;
	let t6;
	let br3;
	let t7;
	let span;
	let t8;
	let t9;
	let br4;
	let t10;
	let br5;
	let t11;
	let a;
	let t12;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Skate progression");
			t2 = space();
			div = element("div");
			p = element("p");
			t3 = text("Im Tamari Gray-kaiwahia.\n    ");
			br0 = element("br");
			t4 = text("\n    Grew up in NZ.\n    ");
			br1 = element("br");
			t5 = text("\n    Been skating 11 years.\n    ");
			br2 = element("br");
			t6 = text("\n    and only recently realised.\n    ");
			br3 = element("br");
			t7 = space();
			span = element("span");
			t8 = text("I can have fun and skate every single day");
			t9 = space();
			br4 = element("br");
			t10 = text("\n    If you've held yourself back from just doing what you love,\n    ");
			br5 = element("br");
			t11 = text("\n    you will find something usefull\n    ");
			a = element("a");
			t12 = text("here!");
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
			t3 = claim_text(p_nodes, "Im Tamari Gray-kaiwahia.\n    ");
			br0 = claim_element(p_nodes, "BR", {});
			t4 = claim_text(p_nodes, "\n    Grew up in NZ.\n    ");
			br1 = claim_element(p_nodes, "BR", {});
			t5 = claim_text(p_nodes, "\n    Been skating 11 years.\n    ");
			br2 = claim_element(p_nodes, "BR", {});
			t6 = claim_text(p_nodes, "\n    and only recently realised.\n    ");
			br3 = claim_element(p_nodes, "BR", {});
			t7 = claim_space(p_nodes);
			span = claim_element(p_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t8 = claim_text(span_nodes, "I can have fun and skate every single day");
			span_nodes.forEach(detach_dev);
			t9 = claim_space(p_nodes);
			br4 = claim_element(p_nodes, "BR", {});
			t10 = claim_text(p_nodes, "\n    If you've held yourself back from just doing what you love,\n    ");
			br5 = claim_element(p_nodes, "BR", {});
			t11 = claim_text(p_nodes, "\n    you will find something usefull\n    ");
			a = claim_element(p_nodes, "A", { href: true });
			var a_nodes = children(a);
			t12 = claim_text(a_nodes, "here!");
			a_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "skate progression";
			attr_dev(h1, "class", "svelte-16b2td5");
			add_location(h1, file, 26, 0, 314);
			add_location(br0, file, 31, 4, 401);
			add_location(br1, file, 33, 4, 431);
			add_location(br2, file, 35, 4, 469);
			add_location(br3, file, 37, 4, 512);
			attr_dev(span, "class", "svelte-16b2td5");
			add_location(span, file, 38, 4, 523);
			add_location(br4, file, 39, 4, 582);
			add_location(br5, file, 41, 4, 657);
			attr_dev(a, "href", "/blog");
			add_location(a, file, 43, 4, 704);
			add_location(p, file, 29, 2, 364);
			attr_dev(div, "class", "about svelte-16b2td5");
			add_location(div, file, 28, 0, 342);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, p);
			append_dev(p, t3);
			append_dev(p, br0);
			append_dev(p, t4);
			append_dev(p, br1);
			append_dev(p, t5);
			append_dev(p, br2);
			append_dev(p, t6);
			append_dev(p, br3);
			append_dev(p, t7);
			append_dev(p, span);
			append_dev(span, t8);
			append_dev(p, t9);
			append_dev(p, br4);
			append_dev(p, t10);
			append_dev(p, br5);
			append_dev(p, t11);
			append_dev(p, a);
			append_dev(a, t12);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNGI4MDU1NDAuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
