function H() {
    const c = "cookie-consent"
      , u = document.getElementById("cookie-consent")
      , i = document.getElementById("cookie-accept")
      , o = document.getElementById("cookie-decline")
      , s = document.getElementById("cookie-close");
    function r() {
        u && (u.dataset.hidden = "false",
        u.classList.remove("translate-y-full", "opacity-0"),
        u.classList.add("translate-y-0", "opacity-100"))
    }
    function n() {
        u && (u.dataset.hidden = "true",
        u.classList.remove("translate-y-0", "opacity-100"),
        u.classList.add("translate-y-full", "opacity-0"))
    }
    function d() {
        localStorage.setItem(c, "accepted"),
        n()
    }
    function e() {
        localStorage.setItem(c, "declined"),
        n()
    }
    function a() {
        n()
    }
    localStorage.getItem(c) || r(),
    i?.addEventListener("click", d),
    o?.addEventListener("click", e),
    s?.addEventListener("click", a)
}
const j = "modulepreload"
  , F = function(c) {
    return "/" + c
}
  , $ = {}
  , C = function(u, i, o) {
    let s = Promise.resolve();
    if (i && i.length > 0) {
        let n = function(a) {
            return Promise.all(a.map(t => Promise.resolve(t).then(l => ({
                status: "fulfilled",
                value: l
            }), l => ({
                status: "rejected",
                reason: l
            }))))
        };
        document.getElementsByTagName("link");
        const d = document.querySelector("meta[property=csp-nonce]")
          , e = d?.nonce || d?.getAttribute("nonce");
        s = n(i.map(a => {
            if (a = F(a),
            a in $)
                return;
            $[a] = !0;
            const t = a.endsWith(".css")
              , l = t ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${a}"]${l}`))
                return;
            const m = document.createElement("link");
            if (m.rel = t ? "stylesheet" : j,
            t || (m.as = "script"),
            m.crossOrigin = "",
            m.href = a,
            e && m.setAttribute("nonce", e),
            document.head.appendChild(m),
            t)
                return new Promise( (f, g) => {
                    m.addEventListener("load", f),
                    m.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${a}`)))
                }
                )
        }
        ))
    }
    function r(n) {
        const d = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (d.payload = n,
        window.dispatchEvent(d),
        !d.defaultPrevented)
            throw n
    }
    return s.then(n => {
        for (const d of n || [])
            d.status === "rejected" && r(d.reason);
        return u().catch(r)
    }
    )
}
  , T = c => {
    switch (c) {
    case "web":
        return "LeaderTask.apk";
    case "android":
        return "LeaderTask.apk";
    case "ios":
        return "/platforms/ios"
    }
    return "LeaderTask.apk"
}
;
function M() {
    if (typeof navigator > "u")
        return "web";
    const c = navigator.userAgent.toLowerCase();
    return /android/.test(c) ? "android" : /iphone|ipad|ipod/.test(c) ? "ios" : "web"
}
function q(c) {
    const u = M()
      , i = T(u)
      , o = document.getElementById(c);
    if (o) {
        const s = o.querySelector("a");
        s ? s.href = i : o instanceof HTMLAnchorElement ? o.href = i : o.setAttribute("href", i)
    }
}
function G() {
    q("get-started-button")
}
function U() {
    q("get-started-button-2")
}
function Y() {
    q("thousands-get-started-button")
}
async function J() {
    const c = document.querySelector(".swiper-container");
    if (!c)
        return;
    const u = (await C(async () => {
        const {default: o} = await import("./swiper.Dghn5_q3.js").then(s => s.s);
        return {
            default: o
        }
    }
    , [])).default
      , {Autoplay: i} = await C(async () => {
        const {Autoplay: o} = await import("./swiper.Dghn5_q3.js").then(s => s.i);
        return {
            Autoplay: o
        }
    }
    , []);
    new u(c,{
        modules: [i],
        slidesPerView: 1.2,
        loop: !0,
        autoplay: {
            delay: 0,
            disableOnInteraction: !1
        },
        spaceBetween: 24,
        speed: 3e3
    })
}
function K() {
    let c = !1
      , u = "web"
      , i = 0;
    function o() {
        const t = document.getElementById("login-button")
          , l = document.getElementById("get-started-button")
          , m = T(u);
        if (t) {
            const f = t.querySelector("a");
            f && (f.href = m)
        }
        if (l) {
            const f = l.querySelector("a");
            f && (f.href = m)
        }
    }
    function s() {
        const t = document.getElementById("header");
        t && (i > 100 ? t.classList.add("shadow-md") : t.classList.remove("shadow-md"))
    }
    function r() {
        const t = document.getElementById("mobile-menu-toggle");
        t && (c ? t.classList.add("is-open") : t.classList.remove("is-open"),
        t.setAttribute("aria-expanded", c ? "true" : "false"),
        t.setAttribute("aria-label", c ? "Закрыть меню навигации" : "Открыть меню навигации"))
    }
    function n() {
        const t = document.getElementById("get-started-button");
        t && (c ? t.classList.add("hidden") : t.classList.remove("hidden"))
    }
    function d() {
        c = !c,
        n(),
        r(),
        window.dispatchEvent(new CustomEvent("toggle-mobile-menu",{
            detail: {
                isOpen: c
            }
        }))
    }
    function e(t) {
        c = t.detail.isOpen,
        n(),
        r()
    }
    function a() {
        u = M(),
        o(),
        s();
        const t = document.getElementById("mobile-menu-toggle");
        t && t.addEventListener("click", d),
        window.addEventListener("toggle-mobile-menu", e),
        typeof window < "u" && window.addEventListener("scroll", () => {
            i = window.scrollY,
            s()
        }
        )
    }
    a()
}
function X() {
    let c = !1
      , u = "web";
    function i() {
        const n = document.getElementById("mobile-menu-content")
          , d = document.getElementById("mobile-menu-overlay")
          , e = document.getElementById("mobile-menu-get-started-button");
        if (n && (c ? (n.classList.remove("-translate-y-full", "top-0", "opacity-0"),
        n.classList.add("translate-y-0", "opacity-100", "top-11.75")) : (n.classList.remove("translate-y-0", "opacity-100", "top-11.75"),
        n.classList.add("-translate-y-full", "top-0", "opacity-0"))),
        d && (c ? (d.classList.remove("opacity-0", "pointer-events-none"),
        d.classList.add("opacity-100", "pointer-events-auto")) : (d.classList.remove("opacity-100", "pointer-events-auto"),
        d.classList.add("opacity-0", "pointer-events-none"))),
        e) {
            const a = T(u)
              , t = e.querySelector("a");
            t && (t.href = a)
        }
    }
    function o(n) {
        c = n.detail.isOpen,
        i()
    }
    function s() {
        c = !1,
        i(),
        window.dispatchEvent(new CustomEvent("toggle-mobile-menu",{
            detail: {
                isOpen: !1
            }
        }))
    }
    function r() {
        u = M(),
        i();
        const n = document.getElementById("mobile-menu-overlay");
        n && n.addEventListener("click", s),
        window.addEventListener("toggle-mobile-menu", o)
    }
    setTimeout(r, 100)
}
async function R() {
    const c = document.getElementById("companies-swiper");
    if (!c)
        return;
    const {default: u} = await C(async () => {
        const {default: r} = await import("./swiper.Dghn5_q3.js").then(n => n.s);
        return {
            default: r
        }
    }
    , [])
      , {Autoplay: i} = await C(async () => {
        const {Autoplay: r} = await import("./swiper.Dghn5_q3.js").then(n => n.i);
        return {
            Autoplay: r
        }
    }
    , []);
    let o = null;
    function s() {
        o && (o.destroy(!0, !0),
        o = null);
        function r() {
            return window.innerWidth < 1024 ? 2.5 : 6
        }
        function n() {
            return window.innerWidth < 1024 ? 30 : 80
        }
        if (!c)
            return;
        const d = window.innerWidth < 1024;
        o = new u(c,{
            slidesPerView: r(),
            spaceBetween: n(),
            loop: !0,
            loopAdditionalSlides: 2,
            watchOverflow: !0,
            autoplay: {
                delay: 0,
                disableOnInteraction: !1
            },
            speed: 3e3,
            modules: [i],
            allowTouchMove: !d
        });
        let e;
        window.addEventListener("resize", () => {
            e && clearTimeout(e),
            e = setTimeout( () => {
                o && (o.destroy(!0, !0),
                o = null,
                s())
            }
            , 100)
        }
        )
    }
    s()
}
function Q() {
    function c(o, s) {
        const r = s.querySelector(".ripple-container");
        if (!r)
            return;
        const n = s.getBoundingClientRect()
          , d = r.getBoundingClientRect()
          , e = Math.max(n.width, n.height) * 2
          , a = o.clientX - d.left
          , t = o.clientY - d.top
          , l = document.createElement("div");
        l.className = "ripple-effect",
        l.style.left = a + "px",
        l.style.top = t + "px",
        l.style.width = e + "px",
        l.style.height = e + "px",
        l.style.marginLeft = -e / 2 + "px",
        l.style.marginTop = -e / 2 + "px",
        r.appendChild(l),
        setTimeout( () => {
            l.remove()
        }
        , 600)
    }
    function u() {
        const o = document.getElementById("calendar-section")
          , s = document.getElementById("calendar-title");
        if (!o || !s)
            return;
        const r = window.innerWidth < 972;
        o.getAttribute("data-show-title") === "true" || r ? s.style.display = "flex" : s.style.display = "none"
    }
    function i() {
        const o = document.querySelectorAll(".calendar-tab")
          , s = document.querySelectorAll(".calendar-image");
        function r(e) {
            o.forEach(a => {
                a.getAttribute("data-tab-value") === e ? (a.classList.remove("bg-light", "text-tertiary", "hover:bg-gray-light"),
                a.classList.add("bg-secondary", "text-gray")) : (a.classList.remove("bg-secondary", "text-gray"),
                a.classList.add("bg-light", "text-tertiary", "hover:bg-gray-light"))
            }
            ),
            s.forEach(a => {
                a.getAttribute("data-tab-value") === e ? (a.classList.remove("opacity-0"),
                a.classList.add("opacity-100")) : (a.classList.remove("opacity-100"),
                a.classList.add("opacity-0"))
            }
            )
        }
        o.forEach(e => {
            e.addEventListener("click", a => {
                const t = e.getAttribute("data-tab-value");
                r(t),
                e.querySelector(".ripple-container") && c(a, e)
            }
            )
        }
        );
        const n = document.getElementById("calendar-section");
        if (n) {
            const e = n.getAttribute("data-show-title") !== "false";
            n.setAttribute("data-show-title", e.toString())
        }
        u();
        let d;
        window.addEventListener("resize", () => {
            clearTimeout(d),
            d = setTimeout(u, 100)
        }
        )
    }
    i()
}
function Z() {
    q("always-online-button")
}
function ee() {
    function c() {
        const i = document.getElementById("platform-hero-image");
        if (!i)
            return;
        const o = window.innerWidth < 768
          , s = i.getAttribute("data-mobile")
          , r = i.getAttribute("data-desktop");
        o && s ? (i.src = s,
        i.classList.add("pl-4")) : r && (i.src = r,
        i.classList.remove("pl-4"))
    }
    function u() {
        const i = document.getElementById("platform-hero-image");
        if (i) {
            i.setAttribute("data-desktop", i.src);
            const o = i.getAttribute("data-mobile-src");
            o && i.setAttribute("data-mobile", o),
            c()
        }
        window.addEventListener("resize", c)
    }
    setTimeout(u, 100)
}
function te() {
    function c() {
        const o = document.getElementById("our-journey-continues-block")
          , s = document.getElementById("our-journey-line");
        if (o && s) {
            const r = o.getBoundingClientRect().height;
            s.style.bottom = `${r - 28}px`
        }
    }
    function u() {
        const o = M()
          , s = T(o)
          , r = document.getElementById("our-journey-get-started-button");
        if (r) {
            const d = r.querySelector("a");
            d && (d.href = s)
        }
        const n = document.getElementById("our-journey-mobile-get-started-button");
        if (n) {
            const d = n.querySelector("a");
            d && (d.href = s)
        }
    }
    function i() {
        c(),
        u(),
        window.addEventListener("resize", c)
    }
    setTimeout(i, 100)
}
function ne() {
    const c = [{
        type: "free",
        title: "Free",
        titleColor: "text-primary",
        color: "black",
        buttonText: "Try Free plan now"
    }, {
        type: "premium",
        title: "Premium",
        titleColor: "text-accent-orange",
        color: "orange",
        buttonText: "Subscribe Premium"
    }, {
        type: "business",
        title: "Business",
        titleColor: "text-accent-blue",
        color: "purple",
        buttonText: "Subscribe Business"
    }]
      , u = [{
        title: "Key features",
        features: [{
            name: "Tasks",
            free: "100",
            premium: "∞",
            business: "∞"
        }, {
            name: "Projects",
            free: "10",
            premium: "∞",
            business: "∞"
        }, {
            name: "Subprojects and subtasks",
            free: !0,
            premium: !0,
            business: !0
        }, {
            name: "Cards on boards",
            free: "100",
            premium: "∞",
            business: "∞"
        }, {
            name: "Boards",
            free: "3",
            premium: "∞",
            business: "∞"
        }, {
            name: "Calendar view for tasks",
            free: !0,
            premium: !0,
            business: !0
        }, {
            name: "Tasks from email",
            free: !1,
            premium: !0,
            business: !0
        }, {
            name: "Notifications and reminders",
            free: !0,
            premium: !0,
            business: !0
        }, {
            name: "Trash bin",
            free: !1,
            premium: !0,
            business: !0
        }, {
            name: "Calendar",
            free: !0,
            premium: !0,
            business: !0
        }]
    }, {
        title: "Task properties",
        features: [{
            name: "Labels",
            free: "3",
            premium: "∞",
            business: "∞"
        }, {
            name: "Colors",
            free: "3",
            premium: "∞",
            business: "∞"
        }, {
            name: "File attachments",
            free: !1,
            premium: !0,
            business: !0
        }, {
            name: "Task and card chat",
            free: !1,
            premium: !0,
            business: !0
        }, {
            name: "Recurring tasks",
            free: !1,
            premium: !0,
            business: !0
        }, {
            name: "Checklists",
            free: !1,
            premium: !0,
            business: !0
        }]
    }, {
        title: "Team collaboration",
        features: [{
            name: "Shared boards",
            free: !1,
            premium: !1,
            business: !0
        }, {
            name: "Shared projects",
            free: !1,
            premium: !1,
            business: !0
        }, {
            name: "Task assignments",
            free: !1,
            premium: !1,
            business: !0
        }, {
            name: "Department organization",
            free: !1,
            premium: !1,
            business: !0
        }]
    }, {
        title: "Autonomy",
        features: [{
            name: "Offline mode",
            free: !0,
            premium: !0,
            business: !0
        }, {
            name: "Updates",
            free: !0,
            premium: !0,
            business: !0
        }, {
            name: "Sync",
            free: !1,
            premium: !0,
            business: !0
        }, {
            name: "Cloud storage",
            free: !1,
            premium: !0,
            business: !0
        }]
    }];
    let i = !1
      , o = !1
      , s = 0
      , r = "right";
    const n = document.getElementById("mobile-toggle-btn")
      , d = document.getElementById("mobile-toggle-icon")
      , e = document.getElementById("mobile-content")
      , a = document.getElementById("mobile-prev-btn")
      , t = document.getElementById("mobile-next-btn")
      , l = document.getElementById("mobile-plan-title")
      , m = document.getElementById("mobile-cta-button")
      , f = document.getElementById("desktop-toggle-btn")
      , g = document.getElementById("desktop-toggle-icon")
      , p = document.getElementById("desktop-content");
    function b(B, N) {
        const v = c[N].type;
        return B[v]
    }
    function y(B, N) {
        if (!l || !m)
            return;
        const v = c[B];
        l.textContent = v.title,
        l.className = `font-bold text-[18px] leading-6 transition-all duration-100 ${v.titleColor}`,
        l.setAttribute("data-plan-index", B.toString()),
        N === "right" ? (l.classList.add("slide-right-enter"),
        setTimeout( () => {
            l?.classList.remove("slide-right-enter")
        }
        , 100)) : (l.classList.add("slide-left-enter"),
        setTimeout( () => {
            l?.classList.remove("slide-left-enter")
        }
        , 100)),
        document.querySelectorAll(".mobile-feature-value").forEach(_ => {
            const O = _.getAttribute("data-feature-name");
            if (!O)
                return;
            const D = u.find(w => w.features.some(P => P.name === O));
            if (!D)
                return;
            const V = D.features.find(w => w.name === O);
            if (!V)
                return;
            const k = b(V, B)
              , I = v.color;
            _.innerHTML = "";
            const L = document.createElement("div");
            if (L.className = "w-25 text-center flex items-center justify-center",
            L.setAttribute("data-value", JSON.stringify(k)),
            L.setAttribute("data-color", I),
            typeof k == "boolean" && k) {
                const w = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                w.setAttribute("class", `w-5 h-5 ${I === "orange" ? "text-accent-orange" : I === "purple" ? "text-accent-blue" : "text-secondary"}`);
                const P = document.createElementNS("http://www.w3.org/2000/svg", "use");
                P.setAttribute("href", "/photo/all-icons.svg#icon-check-mark"),
                w.appendChild(P),
                L.appendChild(w)
            } else if (typeof k == "boolean" && !k) {
                const w = document.createElement("span");
                w.className = `text-[14px] font-bold px-0.5 leading-5 ${I === "orange" ? "text-accent-orange" : I === "purple" ? "text-accent-blue" : "text-secondary"}`,
                w.textContent = "—",
                L.appendChild(w)
            } else {
                const w = document.createElement("span");
                w.className = `font-medium text-[16px] leading-6 ${I === "orange" ? "text-accent-orange" : I === "purple" ? "text-accent-blue" : "text-secondary"}`,
                w.textContent = String(k),
                L.appendChild(w)
            }
            _.appendChild(L)
        }
        ),
        m.innerHTML = `<a href="${v.type === "free" ? "/downloads" : v.type === "premium" ? "https://www.market.leadertask.ru/market-en" : "https://www.market.leadertask.ru/market-en?userscount=2"}" ${v.type === "free" ? "" : 'target="_blank"'} class="cursor-pointer rounded-2 py-2.5 px-2 font-semibold text-[14px] leading-5 md:text-base transition-all duration-300 inline-block text-center no-underline w-50 ${v.type === "free" ? "bg-primary text-white hover:bg-dark-hover" : v.type === "premium" ? "bg-accent-orange text-white hover:bg-accent-orange-dark" : "bg-accent-blue text-white hover:bg-accent-blue-link"}">${v.buttonText}</a>`
    }
    function h() {
        i = !i,
        e && d && (i ? (e.style.display = "block",
        setTimeout( () => {
            e.style.opacity = "1"
        }
        , 10)) : (e.style.opacity = "0",
        setTimeout( () => {
            e.style.display = "none"
        }
        , 200)),
        d.classList.toggle("rotate-180"))
    }
    function A() {
        o = !o,
        p && g && (o ? (p.style.display = "block",
        setTimeout( () => {
            p.style.opacity = "1"
        }
        , 10)) : (p.style.opacity = "0",
        setTimeout( () => {
            p.style.display = "none"
        }
        , 200)),
        g.classList.toggle("rotate-180"))
    }
    function x() {
        s < 2 && (r = "right",
        s++,
        y(s, r),
        S())
    }
    function E() {
        s > 0 && (r = "left",
        s--,
        y(s, r),
        S())
    }
    function S() {
        a && t && (s > 0 ? a.classList.remove("hidden") : a.classList.add("hidden"),
        s < 2 ? t.classList.remove("hidden") : t.classList.add("hidden"))
    }
    n && n.addEventListener("click", h),
    f && f.addEventListener("click", A),
    a && a.addEventListener("click", E),
    t && t.addEventListener("click", x),
    S()
}
function ie() {
    function c(i) {
        const o = i.dataset.accordionId;
        if (!o)
            return;
        const s = i.dataset.accordionReverse === "true"
          , r = document.getElementById(`${o}-desktop`)
          , n = document.getElementById(`${o}-image-container`);
        let d = 0;
        if (!(r && n))
            return;
        const e = t => {
            if (t === d)
                return;
            n.querySelectorAll("[data-image-index]").forEach( (m, f) => {
                m instanceof HTMLElement && (f === t ? (m.style.opacity = "1",
                m.style.pointerEvents = "auto") : (m.style.opacity = "0",
                m.style.pointerEvents = "none"))
            }
            )
        }
          , a = () => {
            window.innerWidth >= 1280 && (s ? (r.classList.add("xl:flex-row-reverse"),
            r.classList.remove("xl:flex-row")) : (r.classList.remove("xl:flex-row-reverse"),
            r.classList.add("xl:flex-row")))
        }
        ;
        r.addEventListener("accordion-toggle", t => {
            const l = t.detail.index;
            if (d === l)
                return;
            e(l),
            d = l,
            r.querySelectorAll("[data-item-index]").forEach( (f, g) => {
                if (f instanceof HTMLElement) {
                    const p = g === d;
                    f.setAttribute("data-active", p.toString()),
                    f.dispatchEvent(new CustomEvent("set-active",{
                        detail: {
                            isActive: p
                        },
                        bubbles: !1
                    }))
                }
            }
            )
        }
        ),
        a(),
        window.addEventListener("resize", a)
    }
    document.querySelectorAll("section[data-features-accordion]").forEach(i => {
        i instanceof HTMLElement && c(i)
    }
    )
}
function oe() {
    function c(i) {
        const o = i.dataset.itemId
          , s = i.dataset.accordionId
          , r = parseInt(i.dataset.index || "0", 10);
        if (!o || !s || isNaN(r))
            return;
        const n = document.getElementById(`${o}-content`)
          , d = document.getElementById(`${o}-toggle-icon-plus`)
          , e = document.getElementById(`${o}-toggle-icon-minus`)
          , a = document.getElementById(`${o}-main-icon-normal`)
          , t = document.getElementById(`${o}-main-icon-fill`);
        if (!(n && d && e && a && t))
            return;
        let l = !1;
        const m = () => {
            if (l)
                return;
            const f = document.getElementById(`${s}-desktop`);
            f && f.dispatchEvent(new CustomEvent("accordion-toggle",{
                detail: {
                    index: r
                },
                bubbles: !1
            }))
        }
        ;
        i.addEventListener("click", m),
        i.addEventListener("set-active", f => {
            const g = f.detail.isActive;
            l = !0,
            g ? (n.style.gridTemplateRows = "1fr",
            d.style.opacity = "0",
            e.style.opacity = "1",
            a.style.opacity = "0",
            t.style.opacity = "1") : (n.style.gridTemplateRows = "0fr",
            d.style.opacity = "1",
            e.style.opacity = "0",
            a.style.opacity = "1",
            t.style.opacity = "0"),
            setTimeout( () => {
                l = !1
            }
            , 300)
        }
        )
    }
    function u() {
        document.querySelectorAll("[data-item-id]").forEach(o => {
            o instanceof HTMLElement && c(o)
        }
        )
    }
    u()
}
function se() {
    const c = document.getElementById("get-started-btn");
    if (c) {
        const u = M();
        c.href = T(u)
    }
}
async function z() {
    const {default: c} = await C(async () => {
        const {default: n} = await import("./swiper.Dghn5_q3.js").then(d => d.s);
        return {
            default: n
        }
    }
    , [])
      , u = new Map;
    function i(n) {
        return {
            desktop: JSON.parse(n.getAttribute("data-desktop") || "[]"),
            mobile: JSON.parse(n.getAttribute("data-mobile") || "[]"),
            slidePerView: Number(n.getAttribute("data-slide-per-view") || "1"),
            slidePerViewMobile: Number(n.getAttribute("data-slide-per-view-mobile") || "1"),
            spaceBetween: Number(n.getAttribute("data-space-between") || "0"),
            initialSlide: Number(n.getAttribute("data-initial-slide") || "0")
        }
    }
    function o(n, d) {
        const e = n.querySelector(".swiper-wrapper");
        e && (e.innerHTML = d.map( (a, t) => `
					<div class="swiper-slide w-full h-full">
						<div class="w-full h-full flex items-center justify-center">
							<img src="${a}" alt="Slide ${t + 1}" class="w-full max-w-224 h-auto object-contain" loading="lazy" />
						</div>
					</div>
				`).join(""))
    }
    function s(n) {
        const d = u.get(n);
        d && (d.destroy(!0, !0),
        u.delete(n));
        const e = i(n)
          , a = window.innerWidth < 1024 ? e.slidePerViewMobile : e.slidePerView
          , t = window.innerWidth < 1024 && e.mobile?.length ? e.mobile : e.desktop || [];
        if (!t.length)
            return;
        const m = n.querySelector(".swiper-wrapper")?.querySelectorAll(".swiper-slide")
          , f = window.innerWidth < 1024 && e.mobile?.length && m?.length !== e.mobile.length
          , g = window.innerWidth >= 1024 && m?.length !== e.desktop?.length;
        (!m?.length || f || g) && o(n, t);
        const p = new c(n,{
            slidesPerView: a,
            spaceBetween: e.spaceBetween,
            initialSlide: e.initialSlide,
            loop: !0,
            watchOverflow: !0,
            grabCursor: !0,
            centeredSlides: !0
        });
        u.set(n, p)
    }
    function r() {
        document.querySelectorAll("[data-platforms-slider]").forEach(d => s(d))
    }
    if (r(),
    !window.__platformsSliderResizeBound) {
        let n;
        window.addEventListener("resize", () => {
            n && clearTimeout(n),
            n = setTimeout( () => {
                r()
            }
            , 150)
        }
        ),
        window.__platformsSliderResizeBound = !0
    }
}
function ae() {
    const c = document.getElementById("anchor-list")
      , u = document.getElementById("anchor-list-items");
    if (!c || !u)
        return;
    let i = []
      , o = null
      , s = !1;
    function r() {
        if (i.length === 0)
            return;
        const l = window.scrollY + 100
          , m = [];
        i.forEach(g => {
            const p = document.getElementById(g.id);
            if (!p)
                return;
            const b = window.getComputedStyle(p)
              , y = parseInt(b.scrollMarginTop) || 0
              , h = p.offsetTop - y
              , A = h + p.offsetHeight;
            m.push({
                id: g.id,
                top: h,
                bottom: A
            })
        }
        );
        let f = null;
        for (let g = m.length - 1; g >= 0; g--) {
            const p = m[g];
            if (l >= p.top) {
                f = p.id;
                break
            }
        }
        !f && m.length > 0 && (f = m[0].id),
        o !== f && (o = f,
        n())
    }
    function n() {
        i.forEach(t => {
            const l = u?.querySelector(`a[href="#${t.id}"]`);
            if (!l)
                return;
            const m = o === t.id
              , f = m ? "font-bold bg-orange-light" : ""
              , g = m ? "bg-accent-orange" : "";
            l.className = `text-primary cursor-pointer hover:bg-orange-light transition-colors duration-200 rounded-3 px-3 flex items-center gap-2.5 py-2 text-sm ${f}`.trim();
            const p = l.querySelector("i");
            p && (p.className = `w-2 h-2 rounded-full transition-colors ${g}`.trim())
        }
        )
    }
    function d(t, l) {
        l.preventDefault();
        const m = document.getElementById(t);
        m && (m.scrollIntoView({
            behavior: "smooth"
        }),
        setTimeout( () => {
            r()
        }
        , 100))
    }
    const e = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    i = Array.from(e).flatMap(t => {
        const l = t.id;
        if (!l)
            return [];
        const m = t.textContent?.trim() || "";
        return m ? [{
            id: l,
            text: m
        }] : []
    }
    ),
    u.innerHTML = "",
    i.forEach(t => {
        const l = document.createElement("li")
          , m = document.createElement("a")
          , f = document.createElement("i")
          , g = document.createElement("span");
        m.href = `#${t.id}`,
        m.className = "text-primary cursor-pointer hover:bg-orange-light transition-colors duration-200 rounded-3 px-3 flex items-center gap-2.5 py-2 text-sm",
        m.addEventListener("click", p => d(t.id, p)),
        f.className = "w-2 h-2 rounded-full transition-colors",
        g.textContent = t.text,
        m.appendChild(f),
        m.appendChild(g),
        l.appendChild(m),
        u.appendChild(l)
    }
    ),
    r();
    const a = () => {
        s || (window.requestAnimationFrame( () => {
            r(),
            s = !1
        }
        ),
        s = !0)
    }
    ;
    window.addEventListener("scroll", a, {
        passive: !0
    }),
    window.addEventListener("load", () => r())
}
function re() {
    const c = i => {
        const o = parseInt(i.getAttribute("data-page-number") || "1", 10);
        let s = parseInt(i.getAttribute("data-current-page") || "1", 10);
        const n = (i.getAttribute("data-mode") || "client") === "ssr"
          , d = 6
          , e = () => {
            const p = window.innerWidth < 768;
            return p && s >= 4 ? 2 : p ? 4 : d
        }
        ;
        let a = e();
        const t = () => {
            i.setAttribute("data-visible-pages", a.toString())
        }
          , l = () => {
            if (!n)
                return;
            a = e(),
            t();
            const p = window.innerWidth < 768;
            let b, y;
            p && s >= 4 ? (b = s,
            y = Math.min(s + a - 1, o)) : p ? (b = 1,
            y = Math.min(a, o)) : (b = Math.max(1, Math.min(s - Math.floor(a / 2), o - a + 1)),
            y = Math.min(b + a - 1, o));
            const h = b > 1
              , A = y < o;
            i.querySelectorAll("[data-page]").forEach(x => {
                const E = parseInt(x.getAttribute("data-page") || "0", 10)
                  , S = x.parentElement;
                S && (E === 1 && h || E === o && A || E >= b && E <= y ? S.style.display = "" : S.style.display = "none")
            }
            ),
            i.querySelectorAll("[data-ellipsis]").forEach(x => {
                const E = x.getAttribute("data-ellipsis");
                E === "first" ? x.style.display = h ? "" : "none" : E === "last" && (x.style.display = A ? "" : "none")
            }
            )
        }
          , m = () => {
            i.setAttribute("data-current-page", s.toString()),
            i.querySelectorAll("[data-page]").forEach(y => {
                parseInt(y.getAttribute("data-page") || "0", 10) === s ? y.classList.add("bg-accent-orange", "text-white", "hover:text-white") : y.classList.remove("bg-accent-orange", "text-white", "hover:text-white")
            }
            );
            const p = i.querySelector('[data-action="prev"]')
              , b = i.querySelector('[data-action="next"]');
            p && (p.disabled = s === 1),
            b && (b.disabled = s === o)
        }
          , f = () => {
            a = e(),
            t()
        }
        ;
        t(),
        i.style.display = "",
        n ? l() : (i.addEventListener("click", p => {
            if (!(p.target instanceof Element))
                return;
            const b = p.target.closest("[data-page]")
              , y = p.target.closest("[data-action]");
            if (b) {
                const h = parseInt(b.getAttribute("data-page") || "0", 10);
                Number.isNaN(h) || (s = h,
                f(),
                m(),
                i.dispatchEvent(new CustomEvent("pageChange",{
                    detail: {
                        page: s
                    }
                })));
                return
            }
            if (y) {
                const h = y.getAttribute("data-action");
                h === "prev" && s > 1 ? (s--,
                f(),
                m(),
                i.dispatchEvent(new CustomEvent("pageChange",{
                    detail: {
                        page: s
                    }
                }))) : h === "next" && s < o && (s++,
                f(),
                m(),
                i.dispatchEvent(new CustomEvent("pageChange",{
                    detail: {
                        page: s
                    }
                })))
            }
        }
        ),
        m());
        const g = () => {
            const p = e();
            p !== a && (a = p,
            n ? l() : (f(),
            m()))
        }
        ;
        window.addEventListener("resize", g)
    }
    ;
    document.querySelectorAll("[data-pagination]").forEach(i => c(i))
}
function le() {
    if (!document.getElementById("versions-section"))
        return;
    let u = "All";
    function i() {
        const r = document.querySelectorAll("#versions-mobile-filters .filter-btn")
          , n = document.querySelectorAll("#versions-desktop-filters .filter-btn")
          , d = document.querySelectorAll(".version-article");
        r.forEach(e => {
            const {type: a} = e.dataset;
            u === a ? e.className = "px-1.5 py-1 min-w-10 rounded-2 font-semibold text-[14px] flex items-center justify-center filter-btn bg-secondary text-white" : e.className = "px-1.5 py-1 min-w-10 rounded-2 font-semibold text-[14px] flex items-center justify-center filter-btn bg-gray-light text-tertiary"
        }
        ),
        n.forEach(e => {
            const {type: a} = e.dataset
              , t = e.querySelector(".filter-icon");
            u === a ? (e.className = "text-primary w-full cursor-pointer hover:bg-orange-light transition-colors duration-200 rounded-3 px-3 flex items-center gap-2.5 py-2 text-sm filter-btn font-bold bg-orange-light",
            t && (t.className = "w-2 h-2 rounded-full transition-colors filter-icon bg-accent-orange")) : (e.className = "text-primary w-full cursor-pointer hover:bg-orange-light transition-colors duration-200 rounded-3 px-3 flex items-center gap-2.5 py-2 text-sm filter-btn",
            t && (t.className = "w-2 h-2 rounded-full transition-colors filter-icon"))
        }
        ),
        d.forEach(e => {
            const a = e.dataset.versionType;
            u === "All" && a !== "Windows" || u === a ? e.style.display = "flex" : e.style.display = "none"
        }
        )
    }
    function o(r) {
        u = r,
        i()
    }
    document.querySelectorAll(".filter-btn").forEach(r => {
        r.addEventListener("click", () => {
            o(r.dataset.type || "All")
        }
        )
    }
    ),
    i()
}
function ce() {
    if (typeof window < "u" && typeof document < "u") {
        const u = Array.from(document.querySelectorAll("[data-breadcrumbs]"));
        if (u.length > 0) {
            const i = () => {
                const s = window.innerWidth;
                u.forEach(r => {
                    const n = r.querySelectorAll("a")
                      , d = n.length;
                    if (s < 768) {
                        const e = 60 * (d - 1)
                          , t = Math.max(s - e - 40, 0);
                        n.forEach(l => {
                            l.style.maxWidth = `${t}px`
                        }
                        )
                    } else
                        n.forEach(e => {
                            e.style.maxWidth = "none"
                        }
                        )
                }
                )
            }
              , o = () => {
                i(),
                window.addEventListener("resize", i)
            }
            ;
            document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", o, {
                once: !0
            }) : o()
        }
    }
}
function de() {
    const c = {
        android: "https://play.google.com/store/apps/details?id=com.leadertask.app",
        ios: "https://apps.apple.com/ru/app/leadertask-task-to-do-list/id6504613667",
        windows: "https://www.leadertask.com/download/leadertask.exe"
    };
    function u() {
        if (typeof navigator > "u")
            return {
                isIOS: !1,
                isAndroid: !1,
                isWindows: !1
            };
        const e = navigator.userAgent;
        return {
            isIOS: /iPad|iPhone|iPod/i.test(e),
            isAndroid: /Android/i.test(e),
            isWindows: /Windows/i.test(e)
        }
    }
    function i(e) {
        return e.isIOS ? c.ios : e.isAndroid ? c.android : (e.isWindows,
        c.windows)
    }
    function o(e) {
        const a = document.getElementById("download-button");
        if (a) {
            const t = a.querySelector("a");
            t && (t.href = i(e))
        }
    }
    function s(e) {
        const a = window.innerWidth < 768
          , t = document.getElementById("mobile-slider-ios")
          , l = document.getElementById("mobile-slider-android");
        t && l && (a ? e.isIOS ? (t.style.display = "block",
        l.style.display = "none") : (t.style.display = "none",
        l.style.display = "block") : (t.style.display = "",
        l.style.display = ""))
    }
    function r(e) {
        const a = window.innerWidth < 768
          , t = document.getElementById("mobile-device-third-ios")
          , l = document.getElementById("mobile-device-third-android");
        t && l && (a ? e.isIOS ? (t.style.display = "block",
        l.style.display = "none") : (t.style.display = "none",
        l.style.display = "block") : (t.style.display = "",
        l.style.display = ""))
    }
    function n() {
        const e = u();
        o(e),
        s(e),
        r(e)
    }
    function d() {
        const e = u();
        s(e),
        r(e)
    }
    typeof document < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
        setTimeout(n, 100)
    }
    ) : setTimeout(n, 100),
    window.addEventListener("resize", d))
}
function W() {
    typeof document > "u" || (H(),
    G(),
    U(),
    Y(),
    K(),
    X(),
    Q(),
    Z(),
    ee(),
    te(),
    ne(),
    ie(),
    oe(),
    se(),
    ae(),
    re(),
    document.getElementById("versions-section") && le(),
    ce(),
    document.getElementById("download-button") && de(),
    document.querySelector(".swiper-container") && J(),
    document.getElementById("companies-swiper") && (typeof window < "u" && "requestIdleCallback"in window ? requestIdleCallback(R, {
        timeout: 2e3
    }) : setTimeout(R, 0)),
    document.querySelectorAll("[data-platforms-slider]").length > 0 && (typeof window < "u" && "requestIdleCallback"in window ? requestIdleCallback(z, {
        timeout: 2e3
    }) : setTimeout(z, 0)))
}
typeof document < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", W) : W());
