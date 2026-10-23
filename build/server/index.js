import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps } from "react-router";
import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { StrictMode, isValidElement, useEffect, useId, useMemo, useState } from "react";
import e from "classnames";
import { FaBars, FaRegStar, FaStar } from "react-icons/fa";
import { CookieManager } from "react-cookie-manager";
import "@react-router/dev/routes";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/.pnpm/@react-router+dev@8.4.0_rea_1f2dc153cfd645ef6962f54c19e86db0/node_modules/@react-router/dev/dist/config/defaults/entry.server.web.tsx
var entry_server_web_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, routerContext, _loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	let shellRendered = false;
	let userAgent = request.headers.get("user-agent");
	const body = await renderToReadableStream(/* @__PURE__ */ jsx(ServerRouter, {
		context: routerContext,
		url: request.url
	}), {
		signal: AbortSignal.timeout(6e3),
		onError(error) {
			responseStatusCode = 500;
			if (shellRendered) console.error(error);
		}
	});
	shellRendered = true;
	if (userAgent && isbot(userAgent) || routerContext.isSpaMode) await body.allReady;
	responseHeaders.set("Content-Type", "text/html");
	return new Response(body, {
		headers: responseHeaders,
		status: responseStatusCode
	});
}
//#endregion
//#region ../../packages/neja-digital-react-ui/dist/index.js
var c = (e) => `--${e}`;
var l = (e) => {
	let { njSize: t, njTextSize: n, njVariant: r, njRaised: i, njRounded: a, njBorder: o } = e;
	return [
		t ? `size-${t}` : "",
		n ? `text-${n}` : "",
		r ? `variant-${r}` : "",
		i ? `raised-${i}` : "",
		a && a !== "none" ? `rounded-${a}` : "",
		o && o !== "none" ? `border-${o}` : ""
	];
};
var u = (e, t, n) => ({
	[e]: t ? `var(--${t})` : "transparent",
	...n
});
var d = "nj-button";
function f(t) {
	let { children: r, className: i, style: a, njSize: o, njTextSize: s, njVariant: c, njRounded: f, njBorder: p, njColor: m, ...h } = t;
	return /* @__PURE__ */ jsx("button", {
		className: e(d, i, l({
			njSize: o,
			njTextSize: s,
			njVariant: c,
			njRounded: f,
			njBorder: p
		})),
		style: u("--button-color", m, a),
		...h,
		children: r
	});
}
var p = "nj-card";
function m(t) {
	if ("children" in t) return /* @__PURE__ */ jsxs("article", {
		className: e(p, t.className),
		children: [t.njImgData && /* @__PURE__ */ jsx("div", {
			className: "nj-card__image-wrapper",
			children: /* @__PURE__ */ jsx("img", {
				className: "nj-card__image",
				...t.njImgData
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "nj-card__content",
			children: t.children
		})]
	});
	let { className: i, njImgData: a, njTitle: o, njText: s, njContent: c, njCtaButtons: d, njSize: f, njVariant: m, njRaised: h, njRounded: g, njBorder: _, njColor: v } = t, y = e(p, i, l({
		njSize: f,
		njVariant: m,
		njRaised: h,
		njRounded: g,
		njBorder: _
	})), b = u("--card-color", v), x = () => /* @__PURE__ */ jsx("h3", {
		className: "nj-card__title",
		children: o
	}), S = () => /* @__PURE__ */ jsx("p", {
		className: "nj-card__text",
		children: s
	}), C = () => /* @__PURE__ */ jsx("div", {
		className: "nj-card__cta-buttons",
		children: d
	});
	return /* @__PURE__ */ jsxs("article", {
		className: y,
		style: b,
		children: [a && /* @__PURE__ */ jsx("div", {
			className: "nj-card__image-wrapper",
			children: /* @__PURE__ */ jsx("img", {
				className: "nj-card__image",
				...a
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "nj-card__content",
			children: [
				o && x(),
				s && S(),
				c && c,
				d && C()
			]
		})]
	});
}
var h = "nj-input";
function g(t) {
	let { className: i, id: o, style: s, njSize: c, njTextSize: d, njVariant: f, njRounded: p, njBorder: m, njColor: g, njLabel: _, ...v } = t, y = useId(), b = o ?? y, x = e(h, i, l({
		njSize: c,
		njTextSize: d,
		njVariant: f,
		njRounded: p,
		njBorder: m
	}));
	return /* @__PURE__ */ jsxs("div", {
		className: "nj-input-wrapper",
		children: [_ && /* @__PURE__ */ jsx("label", {
			className: `${b}-label`,
			htmlFor: b,
			children: _
		}), /* @__PURE__ */ jsx("input", {
			id: b,
			className: x,
			style: u("--input-color", g, s),
			...v
		})]
	});
}
var _ = "nj-navbar";
function v(t) {
	let { children: r, className: i, njBorder: a, njRounded: o, njSize: s, njTextSize: c, ...u } = t;
	return /* @__PURE__ */ jsx("nav", {
		className: e(_, i, l({
			njSize: s,
			njTextSize: c,
			njRounded: o,
			njBorder: a
		})),
		...u,
		children: r
	});
}
var x = 5;
function S(e) {
	let { njAuthor: i, njReview: a, njRating: c, ...l } = e, u = Math.min(Math.max(Math.round(c), 0), x);
	return /* @__PURE__ */ jsx(m, {
		className: "testimonial-item",
		njTitle: i,
		njContent: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
			className: "testimonial-item__rating",
			children: [Array.from({ length: u }, (e, t) => /* @__PURE__ */ jsx(FaStar, {}, `filled-${t}`)), Array.from({ length: x - u }, (e, t) => /* @__PURE__ */ jsx(FaRegStar, {}, `empty-${t}`))]
		}), /* @__PURE__ */ jsx("p", {
			className: "testimonial-item__review",
			children: a
		})] }),
		...l
	});
}
var C = "nj-textarea";
function w(t) {
	let { className: i, style: o, njSize: s, njTextSize: c, njVariant: d, njRounded: f, njBorder: p, njColor: m, njResize: h, njLabel: g, id: _, ...v } = t, y = useId(), b = _ ?? y, x = h && h !== "both" ? `resize-${h}` : "", S = e(C, i, l({
		njSize: s,
		njTextSize: c,
		njVariant: d,
		njRounded: f,
		njBorder: p
	}), x);
	return /* @__PURE__ */ jsxs("div", {
		className: "nj-textarea-wrapper",
		children: [g && /* @__PURE__ */ jsx("label", {
			className: `${b}-label`,
			htmlFor: b,
			children: g
		}), /* @__PURE__ */ jsx("textarea", {
			id: b,
			className: S,
			style: u("--textarea-color", m, o),
			...v
		})]
	});
}
var T = [
	"title",
	"address",
	"email",
	"phone"
];
var E = [
	"title",
	"weekdays",
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
	"sunday"
];
var D = (e, t) => typeof e != "object" || !e || Array.isArray(e) || isValidElement(e) ? !1 : t.some((t) => t in e);
var O = (e) => D(e, T);
var k = (e) => D(e, E);
var A = "nj-contact-details";
var j = (e) => e.charAt(0).toUpperCase().concat(e.slice(1));
function M(t) {
	if ("children" in t) return /* @__PURE__ */ jsx("section", {
		className: e(A, t.className),
		children: t.children
	});
	let { className: i, njInfo: a, njOpeningHours: o } = t, s = e(A, i), c = (e, t) => e[t] ? t === "title" ? /* @__PURE__ */ jsx("h3", { children: e.title }, t) : /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsxs("strong", { children: [j(t), ": "] }), /* @__PURE__ */ jsx("span", { children: e[t] })] }, t) : null, l = (e, t) => {
		let i = e[t];
		return i ? t === "title" ? /* @__PURE__ */ jsx("h3", { children: e.title }, t) : /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsxs("strong", { children: [j(t), ": "] }), /* @__PURE__ */ jsxs("span", { children: [
			i.start,
			" - ",
			i.end
		] })] }, t) : null;
	};
	return /* @__PURE__ */ jsxs("section", {
		className: s,
		children: [/* @__PURE__ */ jsx("div", {
			className: "contact__address",
			children: O(a) ? Object.keys(a).map((e) => c(a, e)) : a
		}), /* @__PURE__ */ jsx("div", {
			className: "contact__hours",
			children: k(o) ? Object.keys(o).map((e) => l(o, e)) : o
		})]
	});
}
var N = "nj-featured";
function P(i) {
	if ("children" in i) return /* @__PURE__ */ jsx("section", {
		className: e(N, i.className),
		children: /* @__PURE__ */ jsx(Fragment, { children: i.children })
	});
	let { className: a, njTitle: o, njFeaturedItems: s, njCtaButtons: c } = i, l = s ? s.map((e, t) => /* @__PURE__ */ jsx(m, { ...e }, `${t}-${e.njTitle}`)) : [];
	return /* @__PURE__ */ jsxs("section", {
		className: e(N, a),
		children: [
			/* @__PURE__ */ jsx("h2", {
				className: "nj-featured__title",
				children: o
			}),
			/* @__PURE__ */ jsx("div", {
				className: "nj-featured__items",
				children: l
			}),
			/* @__PURE__ */ jsx("div", {
				className: "nj-featured__cta-buttons",
				children: c
			})
		]
	});
}
var F = "nj-full-section";
function I(t) {
	let { className: r, id: i, njBackground: a } = t;
	return /* @__PURE__ */ jsx("div", {
		id: i,
		className: e(F, r),
		style: { "--section-background-color": a ? `var(--${a})` : "transparent" },
		children: t.children
	});
}
var L = "nj-hero";
var R = "nj-hero__overlay";
function z(t) {
	if ("children" in t) return /* @__PURE__ */ jsx("section", {
		className: e(L, t.className),
		children: /* @__PURE__ */ jsx("div", {
			className: "nj-hero__content",
			children: t.children
		})
	});
	let { className: i, njBackgroundImages: a, njContentPos: o, njOverlay: s, njBlur: c, njHeadline: l, njSubheadline: u, njSupporting: d, njCtaButtons: f } = t, p = {};
	a && Object.keys(a).forEach((e) => {
		p[`--${e}`] = `url(${a[e]})`;
	});
	let m = {
		...p,
		"--overlay-opacity": `${Math.abs(s || 0)}`,
		"--content-blur": `blur(${c || 0}px)`
	}, h = o ? `position-${o}` : "position-center", g = s ? s > 0 ? "overlay-light" : "overlay-dark" : "", _ = e(L, i, h), v = e(R, g);
	return /* @__PURE__ */ jsxs("section", {
		className: _,
		style: m,
		children: [s ? /* @__PURE__ */ jsx("div", { className: v }) : null, /* @__PURE__ */ jsxs("div", {
			className: "nj-hero__content",
			children: [
				l && /* @__PURE__ */ jsx("h2", {
					className: "nj-hero__headline",
					children: l
				}),
				u && /* @__PURE__ */ jsx("h3", {
					className: "nj-hero__subheadline",
					children: u
				}),
				f && /* @__PURE__ */ jsx("div", {
					className: "nj-hero__cta-buttons",
					children: f
				}),
				d && /* @__PURE__ */ jsx("p", {
					className: "nj-hero__supporting",
					children: d
				})
			]
		})]
	});
}
var B = "nj-image-section";
function V(t) {
	if ("children" in t) return /* @__PURE__ */ jsx("section", {
		className: e(B, t.className),
		children: t.children
	});
	let { className: i, njImgData: a, njImgPos: o, njTitle: s, njContent: c } = t;
	return /* @__PURE__ */ jsxs("section", {
		className: e(B, i, o ? `image-${o}` : ""),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "nj-image-section__text",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "nj-image-section__title",
				children: s
			}), /* @__PURE__ */ jsx("div", {
				className: "nj-image-section__description",
				children: c
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "nj-image-section__image",
			children: /* @__PURE__ */ jsx("img", { ...a })
		})]
	});
}
var H = "nj-text-section";
function U(t) {
	if ("children" in t) return /* @__PURE__ */ jsx("section", {
		className: e(H, t.className),
		children: t.children
	});
	let { className: i, njTitle: a, njSubtitle: o, njContent: s, njHighlights: c, njCtaButtons: l, njDirection: u, njCtaButtonsPos: d } = t;
	return /* @__PURE__ */ jsxs("section", {
		className: e(H, i, u ? `direction-${u}` : ""),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "nj-text-section__first",
			children: [
				/* @__PURE__ */ jsx("h2", {
					className: "nj-text-section__title",
					children: a
				}),
				o && /* @__PURE__ */ jsx("h3", {
					className: "nj-text-section__subtitle",
					children: o
				}),
				/* @__PURE__ */ jsx("div", {
					className: "nj-text-section__content",
					children: s
				}),
				l && d === "first" && /* @__PURE__ */ jsx("div", {
					className: "nj-text-section__cta-buttons",
					children: l
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "nj-text-section__second",
			children: [c && /* @__PURE__ */ jsx("div", {
				className: "nj-text-section__highlights",
				children: c
			}), l && d === "second" && /* @__PURE__ */ jsx("div", {
				className: "nj-text-section__cta-buttons",
				children: l
			})]
		})]
	});
}
function W({ children: e, theme: t }) {
	let r = {};
	return t && t.colors && Object.keys(t.colors).forEach((e) => {
		r[c(e)] = t.colors[e];
	}), /* @__PURE__ */ jsx("div", {
		className: "theme-provider style-wrapper",
		style: r,
		children: e
	});
}
function G({ children: e, theme: t }) {
	return /* @__PURE__ */ jsx(W, {
		theme: t,
		children: e
	});
}
//#endregion
//#region src/config/theme.ts
var theme = { colors: {
	primary: "#6F4E37",
	secondary: "#C89F7A",
	accent: "#D97757",
	background: "#F5F1EC",
	surface: "#FFF",
	"text-primary": "#2B1D14",
	"text-secondary": "#6B5B52",
	divider: "#E6D8CC",
	success: "#4F8A5B",
	warning: "#D9A441",
	error: "#B84A4A"
} };
//#endregion
//#region src/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	Layout: () => Layout,
	default: () => root_default
});
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "UTF-8" }),
			/* @__PURE__ */ jsx("link", {
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			}),
			/* @__PURE__ */ jsx("link", {
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap",
				rel: "stylesheet"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1.0"
			}),
			/* @__PURE__ */ jsx("title", { children: "coffee-shop-1" }),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(CookieManager, { children: /* @__PURE__ */ jsx(G, {
		theme,
		children: /* @__PURE__ */ jsx(Outlet, {})
	}) }) });
});
//#endregion
//#region src/types/routes.ts
var NJCustomRouteType = {
	ROUTE: 1,
	INDEX: 2,
	LAYOUT: 3,
	PREFIX: 4
};
//#endregion
//#region src/config/routes.ts
var routes$1 = [{
	path: "",
	component: "layouts/default/Layout.tsx",
	type: NJCustomRouteType.LAYOUT,
	children: [{
		path: "/",
		component: "pages/Homepage.tsx",
		type: NJCustomRouteType.INDEX,
		navbar: {
			label: "Home",
			show: true
		}
	}, {
		path: "/about",
		component: "pages/About.tsx",
		type: NJCustomRouteType.ROUTE,
		navbar: {
			label: "About",
			show: true
		}
	}]
}];
//#endregion
//#region src/helpers/routes-helper.ts
/**
* Converts the custom routes to the routes used by the navbar.
*
* @param routes Routes to convert
* @param parentPath Path of the ancestors, used to build each route's url
* @param parentUrl Url of the closest ancestor shown in the navbar, if any
*/
var convertToNavbarRoutes = (routes, parentPath = "", parentUrl) => {
	return routes.flatMap((route) => {
		const path = route.type === NJCustomRouteType.INDEX ? parentPath : `${parentPath}/${route.path}`.replace(/\/+/g, "/");
		const childrenParentUrl = route.navbar ? path || "/" : parentUrl;
		const children = route.children ? convertToNavbarRoutes(route.children, path, childrenParentUrl) : [];
		if (route.type === NJCustomRouteType.LAYOUT || route.type === NJCustomRouteType.PREFIX) return children;
		if (!route.navbar) return children;
		return [{
			label: route.navbar.label,
			show: route.navbar.show,
			url: path || "/",
			parentUrl,
			...children.length > 0 ? { children } : {}
		}];
	});
};
/**
* Creates a flat array of routes we have to show in the navbar. Removes children property.
* The link between parent-child is kept through parent.url and child.parentUrl properties.
* 
* @param routes 
* @returns Flat array of routes to display
*/
var flattenVisibleRoutes = (routes) => {
	return routes.flatMap((route) => {
		const { children, ...routeWithoutChildren } = route;
		return [...route.show ? [routeWithoutChildren] : [], ...flattenVisibleRoutes(children ?? [])];
	});
};
//#endregion
//#region src/hooks/useViewportSize.ts
function getViewportSize() {
	const { innerWidth, innerHeight } = window;
	return {
		width: innerWidth,
		height: innerHeight
	};
}
function useViewportSize() {
	const [viewportSize, setViewportSize] = useState({
		width: 0,
		height: 0
	});
	useEffect(() => {
		const handleResize = () => setViewportSize(getViewportSize());
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return viewportSize;
}
var visibleRoutes = flattenVisibleRoutes(convertToNavbarRoutes(routes$1));
function Header() {
	const visibleRoutesJsx = visibleRoutes.map((route) => /* @__PURE__ */ jsx(Link, {
		to: route.url,
		"data-parent-url": route.parentUrl ?? void 0,
		className: "nj-navbar__link",
		children: route.label
	}, route.url));
	const { width } = useViewportSize();
	const routesJsx = useMemo(() => {
		return width < 768;
	}, [width]) ? /* @__PURE__ */ jsx(f, { children: /* @__PURE__ */ jsx(FaBars, {}) }) : visibleRoutesJsx;
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx(v, { children: routesJsx }) }) });
}
//#endregion
//#region src/layouts/default/Layout.tsx
var Layout_exports = /* @__PURE__ */ __exportAll({ default: () => Layout_default });
var Layout_default = UNSAFE_withComponentProps(function DefaultLayout() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(Outlet, {})] });
});
//#endregion
//#region src/assets/static/images/about-image-34-mobile.webp
var about_image_34_mobile_default = "/assets/about-image-34-mobile-BJ44fCXj.webp";
//#endregion
//#region src/assets/static/images/about-image-34-tablet.webp
var about_image_34_tablet_default = "/assets/about-image-34-tablet--mR9CHya.webp";
//#endregion
//#region src/components/homepage/AboutSection.tsx
function AboutSection() {
	const imgData = {
		srcSet: `${`${about_image_34_mobile_default} 460w`}, ${`${about_image_34_tablet_default} 600w`}`,
		sizes: "(width >= 600px) 600px, 460px",
		src: about_image_34_mobile_default,
		alt: "Barista pouring fresh coffee at the counter of our coffee shop"
	};
	return /* @__PURE__ */ jsx(I, {
		njBackground: "surface",
		children: /* @__PURE__ */ jsx(V, {
			className: "content-wrapper",
			njImgPos: "right",
			njImgData: imgData,
			njTitle: "More than just coffee",
			njContent: /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("p", { children: "We believe great coffee starts long before it reaches your cup. From carefully selected beans and responsible sourcing to precise roasting and brewing, every step matters. Our goal is not only to serve exceptional coffee, but to create an experience people look forward to returning to." }),
				/* @__PURE__ */ jsx("p", { children: "We work with trusted producers and small farms that share our commitment to quality and sustainability. Each coffee is chosen  for its unique character, allowing us to offer flavors that are approachable, balanced and memorable. By roasting in small batches, we maintain consistency while preserving the qualities that make each origin special" }),
				/* @__PURE__ */ jsx("p", { children: "Everything we do is guided by a straightforward philosophy: use quality ingredients, pay attention to the details and create a space where people feel at home." })
			] })
		})
	});
}
//#endregion
//#region src/components/contact/ContactForm.tsx
function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const sendMessage = (e) => {
		e.preventDefault();
		console.log(name, email, message);
		setName("");
		setEmail("");
		setMessage("");
	};
	return /* @__PURE__ */ jsxs("section", {
		className: "contact__form-wrapper",
		children: [/* @__PURE__ */ jsx("h3", {
			className: "contact__form-title",
			children: "Shoot us a message"
		}), /* @__PURE__ */ jsxs("form", {
			className: "contact__form",
			children: [
				/* @__PURE__ */ jsx(g, {
					type: "text",
					njLabel: "First Name",
					value: name,
					onChange: (e) => setName(e.target.value),
					njRounded: "tight",
					njBorder: "thin",
					njSize: "compact",
					id: "name"
				}),
				/* @__PURE__ */ jsx(g, {
					type: "email",
					njLabel: "Your Email",
					value: email,
					onChange: (e) => setEmail(e.target.value),
					njRounded: "tight",
					njBorder: "thin",
					njSize: "compact",
					id: "email"
				}),
				/* @__PURE__ */ jsx(w, {
					njLabel: "Your message",
					value: message,
					onChange: (e) => setMessage(e.target.value),
					njRounded: "tight",
					njBorder: "thin",
					njSize: "compact",
					rows: 5,
					id: "message",
					njResize: "vertical"
				}),
				/* @__PURE__ */ jsx(f, {
					type: "submit",
					njVariant: "solid",
					njColor: "secondary",
					njRounded: "tight",
					onClick: sendMessage,
					children: "Submit"
				})
			]
		})]
	});
}
//#endregion
//#region src/components/homepage/ContactSection.tsx
function ContactSection() {
	return /* @__PURE__ */ jsx(I, {
		njBackground: "background",
		children: /* @__PURE__ */ jsxs(U, {
			className: "content-wrapper contact-section",
			children: [
				/* @__PURE__ */ jsx("h2", {
					className: "contact__title section__title",
					children: "Come visit us"
				}),
				/* @__PURE__ */ jsx("section", {
					className: "contact__map",
					children: /* @__PURE__ */ jsx("iframe", {
						src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24388.003289740103!2d17.247569096470347!3d63.16716200224437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4664d685e720899d%3A0x9529f31de9c0e69b!2sSollefte%C3%A5%2C%20Sweden!5e1!3m2!1sen!2sro!4v1782726815041!5m2!1sen!2sro",
						title: "Map showing the location of the coffee shop",
						loading: "lazy"
					})
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "contact__info",
					children: [/* @__PURE__ */ jsx(M, {
						className: "contact__details",
						njInfo: /* @__PURE__ */ jsxs(Fragment, { children: [
							/* @__PURE__ */ jsx("h3", { children: "Our address" }),
							/* @__PURE__ */ jsxs("p", { children: [
								/* @__PURE__ */ jsx("strong", { children: "Address:" }),
								" ",
								/* @__PURE__ */ jsx("span", { children: "Lorem ipsum something somewhere" })
							] }),
							/* @__PURE__ */ jsxs("p", { children: [
								/* @__PURE__ */ jsx("strong", { children: "Email:" }),
								" ",
								/* @__PURE__ */ jsx("span", { children: "contact@coffee.shop" })
							] }),
							/* @__PURE__ */ jsxs("p", { children: [
								/* @__PURE__ */ jsx("strong", { children: "Phone:" }),
								" ",
								/* @__PURE__ */ jsx("span", { children: "+(01) 234 456 789" })
							] })
						] }),
						njOpeningHours: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("h3", { children: "Opening hours" }), /* @__PURE__ */ jsxs("ul", { children: [
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Mon - Fri" }), ": 08:00 - 16:00"] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Sat" }), ": 10:00 - 18:00"] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Sun" }), ": Closed"] })
						] })] })
					}), /* @__PURE__ */ jsx(ContactForm, {})]
				})
			]
		})
	});
}
//#endregion
//#region src/assets/static/images/highlights.webp
var highlights_default = "/assets/highlights-CN6Txhq_.webp";
//#endregion
//#region src/components/homepage/ExperienceSection.tsx
function ExperienceSection() {
	const contentJsx = /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("p", { children: "Designed for focus and comfort. Natural light and minimal design create an environment where you can work, meet, or simply take a break without rush. But you don't have to take our word for it. Just come and visit us when you are around. We are daring to bet that your first coffee at our place won't also be the last." }),
		/* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean." }),
		/* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id." })
	] });
	const highlightsJsx = /* @__PURE__ */ jsx(m, {
		njTitle: "Highlights",
		njContent: /* @__PURE__ */ jsxs("ul", {
			className: "highlights-list",
			children: [
				/* @__PURE__ */ jsx("li", { children: "High-speed Wi-Fi" }),
				/* @__PURE__ */ jsx("li", { children: "Power outlets at most seats" }),
				/* @__PURE__ */ jsx("li", { children: "Low-volume ambient music" }),
				/* @__PURE__ */ jsx("li", { children: "Some of the best coffee in town" })
			]
		}),
		njImgData: {
			src: highlights_default,
			alt: "coffee shop best features"
		},
		njRounded: "medium",
		njRaised: "medium",
		njColor: "surface"
	});
	const goToTestimonials = () => {
		document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ jsx(I, { children: /* @__PURE__ */ jsx(U, {
		className: "content-wrapper experience-section",
		njTitle: "The Experience",
		njContent: contentJsx,
		njHighlights: highlightsJsx,
		njCtaButtons: /* @__PURE__ */ jsx(f, {
			njVariant: "solid",
			njColor: "primary",
			njRounded: "tight",
			onClick: goToTestimonials,
			children: "Check what others have said"
		}),
		njDirection: "reverse",
		njCtaButtonsPos: "first"
	}) });
}
//#endregion
//#region src/assets/static/images/featured-espresso-43.webp
var featured_espresso_43_default = "/assets/featured-espresso-43-CbLNJJ3v.webp";
//#endregion
//#region src/assets/static/images/featured-flatwhite-43.webp
var featured_flatwhite_43_default = "/assets/featured-flatwhite-43-BEGDFPBl.webp";
//#endregion
//#region src/assets/static/images/featured-coldbrew-43.webp
var featured_coldbrew_43_default = "/assets/featured-coldbrew-43-BD3VWJOh.webp";
//#endregion
//#region src/components/homepage/FeaturedSection.tsx
function NJFeaturedSection() {
	return /* @__PURE__ */ jsx(I, { children: /* @__PURE__ */ jsx(P, {
		className: "content-wrapper",
		njTitle: "Check some of our finest drinks",
		njFeaturedItems: [
			{
				njTitle: "Espresso",
				njText: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex.",
				njImgData: {
					src: featured_espresso_43_default,
					alt: "coffee shop signature espresso"
				},
				njRounded: "medium",
				njRaised: "medium",
				njColor: "surface",
				njSize: "large"
			},
			{
				njTitle: "Flat White",
				njText: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex.",
				njImgData: {
					src: featured_flatwhite_43_default,
					alt: "coffee shop flat white"
				},
				njRounded: "medium",
				njRaised: "emphasized",
				njColor: "surface",
				njSize: "large"
			},
			{
				njTitle: "Cold brew",
				njText: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex.",
				njImgData: {
					src: featured_coldbrew_43_default,
					alt: "coffee shop cold brew"
				},
				njRounded: "medium",
				njRaised: "medium",
				njColor: "surface",
				njSize: "large"
			}
		],
		njCtaButtons: /* @__PURE__ */ jsx(f, {
			njVariant: "solid",
			njColor: "primary",
			njRounded: "tight",
			children: "See our full menu"
		})
	}) });
}
//#endregion
//#region src/assets/static/images/hero-image-2-mobile.webp
var hero_image_2_mobile_default = "/assets/hero-image-2-mobile-Dec3fM3u.webp";
//#endregion
//#region src/assets/static/images/hero-image-2-tablet.webp
var hero_image_2_tablet_default = "/assets/hero-image-2-tablet-BIACPnUD.webp";
//#endregion
//#region src/assets/static/images/hero-image-2-tablet-2.webp
var hero_image_2_tablet_2_default = "/assets/hero-image-2-tablet-2-BSAv_2gj.webp";
//#endregion
//#region src/assets/static/images/hero-image-2-desktop.webp
var hero_image_2_desktop_default = "/assets/hero-image-2-desktop-CAxMSD5Y.webp";
//#endregion
//#region src/components/homepage/HeroSection.tsx
function HeroSection() {
	return /* @__PURE__ */ jsx(z, {
		njBackgroundImages: {
			mobileBg: hero_image_2_mobile_default,
			tabletBg: hero_image_2_tablet_default,
			tabletHBg: hero_image_2_tablet_2_default,
			desktopBg: hero_image_2_desktop_default
		},
		njOverlay: -.1,
		njBlur: 8,
		njHeadline: "Coffee made for slow moments in a fast world",
		njSubheadline: "Small-batch roasted beans, thoughtfully sourced, and brewed for clarity, comfort and focus",
		njSupporting: "A modern neighborhood coffee shop focused on quality, consistency, and calm space",
		njCtaButtons: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(f, {
			njVariant: "solid",
			njColor: "secondary",
			njRounded: "tight",
			children: "Explore menu"
		}), /* @__PURE__ */ jsx(f, {
			njVariant: "solid",
			njColor: "primary",
			njRounded: "tight",
			children: "Book a table"
		})] })
	});
}
//#endregion
//#region src/components/homepage/TestimonialsSection.tsx
function TestimonialsSection() {
	const testimonialsJsx = [
		{
			njAuthor: "Johan",
			njReview: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex.",
			njRating: 5
		},
		{
			njAuthor: "Mark D",
			njReview: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex.",
			njRating: 5
		},
		{
			njAuthor: "Emma",
			njReview: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex.",
			njRating: 5
		}
	].map((review) => /* @__PURE__ */ jsx(S, { ...review }, review.njAuthor));
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(I, {
		id: "testimonials",
		njBackground: "surface",
		children: /* @__PURE__ */ jsxs(U, {
			className: "content-wrapper testimonials-section",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "testimonials__title section__title",
				children: "Our customers' thoughts"
			}), /* @__PURE__ */ jsx("div", {
				className: "testimonials__wrapper",
				children: testimonialsJsx
			})]
		})
	}) });
}
//#endregion
//#region src/pages/Homepage.tsx
var Homepage_exports = /* @__PURE__ */ __exportAll({ default: () => Homepage_default });
var Homepage_default = UNSAFE_withComponentProps(function Homepage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(HeroSection, {}), /* @__PURE__ */ jsxs("main", {
		className: "main-content",
		children: [
			/* @__PURE__ */ jsx(NJFeaturedSection, {}),
			/* @__PURE__ */ jsx(AboutSection, {}),
			/* @__PURE__ */ jsx(ExperienceSection, {}),
			/* @__PURE__ */ jsx(TestimonialsSection, {}),
			/* @__PURE__ */ jsx(ContactSection, {})
		]
	})] });
});
//#endregion
//#region src/pages/About.tsx
var About_exports = /* @__PURE__ */ __exportAll({ default: () => About_default });
var About_default = UNSAFE_withComponentProps(function AboutPage() {
	return /* @__PURE__ */ jsx(Fragment, { children: "about page" });
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-Cb3Hnw1E.js",
		"imports": [
			"/assets/jsx-runtime-DgBUxj-v.js",
			"/assets/react-dom-_qX4Vyo8.js",
			"/assets/errorBoundaries-BKtiOtMI.js"
		],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/root-CNim-pHv.js",
			"imports": [
				"/assets/jsx-runtime-DgBUxj-v.js",
				"/assets/react-dom-_qX4Vyo8.js",
				"/assets/errorBoundaries-BKtiOtMI.js",
				"/assets/lib-BZ_EUsZE.js",
				"/assets/compiler-runtime-kfCTVkw9.js",
				"/assets/dist-CSxy3VML.js"
			],
			"css": ["/assets/root-Dvl4qZYZ.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"layouts/default/Layout": {
			"id": "layouts/default/Layout",
			"parentId": "root",
			"path": void 0,
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Layout-fY6GmUb_.js",
			"imports": [
				"/assets/jsx-runtime-DgBUxj-v.js",
				"/assets/lib-BZ_EUsZE.js",
				"/assets/compiler-runtime-kfCTVkw9.js",
				"/assets/dist-CSxy3VML.js",
				"/assets/errorBoundaries-BKtiOtMI.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Homepage": {
			"id": "pages/Homepage",
			"parentId": "layouts/default/Layout",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Homepage-XocVER_v.js",
			"imports": [
				"/assets/jsx-runtime-DgBUxj-v.js",
				"/assets/compiler-runtime-kfCTVkw9.js",
				"/assets/dist-CSxy3VML.js"
			],
			"css": ["/assets/Homepage-BXdbl4Zm.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/About": {
			"id": "pages/About",
			"parentId": "layouts/default/Layout",
			"path": "/about",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/About-CAZsj3j8.js",
			"imports": ["/assets/jsx-runtime-DgBUxj-v.js", "/assets/compiler-runtime-kfCTVkw9.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-aac4421b.js",
	"version": "aac4421b",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_web_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"layouts/default/Layout": {
		id: "layouts/default/Layout",
		parentId: "root",
		path: void 0,
		index: void 0,
		caseSensitive: void 0,
		module: Layout_exports
	},
	"pages/Homepage": {
		id: "pages/Homepage",
		parentId: "layouts/default/Layout",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: Homepage_exports
	},
	"pages/About": {
		id: "pages/About",
		parentId: "layouts/default/Layout",
		path: "/about",
		index: void 0,
		caseSensitive: void 0,
		module: About_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
