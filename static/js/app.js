(function (e) {
    function t(t) {
        for (var o, a, l = t[0], c = t[1], d = t[2], u = 0, m = []; u < l.length; u++) (a = l[u]), Object.prototype.hasOwnProperty.call(n, a) && n[a] && m.push(n[a][0]), (n[a] = 0);
        for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
        r && r(t);
        while (m.length) m.shift()();
        return s.push.apply(s, d || []), i();
    }
    function i() {
        for (var e, t = 0; t < s.length; t++) {
            for (var i = s[t], o = !0, l = 1; l < i.length; l++) {
                var c = i[l];
                0 !== n[c] && (o = !1);
            }
            o && (s.splice(t--, 1), (e = a((a.s = i[0]))));
        }
        return e;
    }
    var o = {},
        n = { app: 0 },
        s = [];
    function a(t) {
        if (o[t]) return o[t].exports;
        var i = (o[t] = { i: t, l: !1, exports: {} });
        return e[t].call(i.exports, i, i.exports, a), (i.l = !0), i.exports;
    }
    (a.m = e),
        (a.c = o),
        (a.d = function (e, t, i) {
            a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (a.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (a.t = function (e, t) {
            if ((1 & t && (e = a(e)), 8 & t)) return e;
            if (4 & t && "object" === typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if ((a.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var o in e)
                    a.d(
                        i,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return i;
        }),
        (a.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e["default"];
                      }
                    : function () {
                          return e;
                      };
            return a.d(t, "a", t), t;
        }),
        (a.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (a.p = "/");
    var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        c = l.push.bind(l);
    (l.push = t), (l = l.slice());
    for (var d = 0; d < l.length; d++) t(l[d]);
    var r = c;
    s.push([0, "chunk-vendors"]), i();
})({
    0: function (e, t, i) {
        e.exports = i("56d7");
    },
    "0057": function (e, t, i) {
        "use strict";
        i("5909");
    },
    "0cf8": function (e, t, i) {},
    "0edc": function (e, t, i) {
        "use strict";
        i("53a0");
    },
    "136a": function (e, t, i) {},
    "1d14": function (e, t, i) {
        "use strict";
        i("54a3");
    },
    2082: function (e, t, i) {},
    "296d": function (e, t, i) {},
    "4e7e": function (e, t, i) {
        "use strict";
        i("eec8");
    },
    "4f4b": function (e, t, i) {},
    "4f84": function (e, t, i) {},
    "53a0": function (e, t, i) {},
    "54a3": function (e, t, i) {},
    "56d7": function (e, t, i) {
        "use strict";
        i.r(t);
        i("b2ad");
        var o = i("7a23");
        const n = ["id"],
            s = ["id"];
        function a(e, t, i, a, l, c) {
            return (
                Object(o["m"])(),
                Object(o["f"])(
                    o["a"],
                    null,
                    [
                        Object(o["g"])(
                            "button",
                            {
                                id: i.layerId + "-btn",
                                class: Object(o["k"])(`p-btn p-btn__layer--${i.modifier} ${i.buttonClass}`),
                                onMouseover: t[0] || (t[0] = (t) => e.$emit("mouseOverEmit", "" + i.layerId)),
                                onMouseleave: t[1] || (t[1] = (t) => e.$emit("mouseLeaveEmit", "" + i.layerId)),
                                onClick: t[2] || (t[2] = (t) => e.$emit("clickEmit", "" + i.layerId)),
                            },
                            null,
                            42,
                            n
                        ),
                        (Object(o["m"])(),
                        Object(o["d"])(o["b"], { to: "#layer_container" }, [
                            Object(o["g"])(
                                "div",
                                { class: Object(o["k"])(["p-layer", "p-layer--" + i.modifier]), id: i.layerId, ref: i.modifier },
                                [l.isActive ? Object(o["o"])(e.$slots, "default", { key: 0 }) : Object(o["e"])("", !0)],
                                10,
                                s
                            ),
                        ])),
                    ],
                    64
                )
            );
        }
        let l = {};
        var c = {
                name: "LayerBox",
                emits: ["clickEmit", "openEmit", "openedEmit", "closeEmit", "mouseOverEmit", "mouseLeaveEmit"],
                props: { layerId: { type: String, required: !0 }, buttonClass: { type: String, required: !0 }, modifier: { type: String, required: !0 }, youtubeId: { type: String, required: !1 }, url: { type: String, required: !1 } },
                data() {
                    return { isActive: !1 };
                },
                mounted() {
                    (l[this.layerId] = promokit.layer({
                        el: "#" + this.layerId,
                        buttons: `#${this.layerId}-btn`,
                        modifier: this.modifier,
                        player: (this.youtubeId || this.url) && { youtubeId: this.youtubeId, url: this.url, loop: !0, controls: !0 },
                    })),
                        l[this.layerId].on("openstart", () => {
                            (this.isActive = !0), this.$emit("openEmit", this.layerId);
                        }),
                        l[this.layerId].on("openend", () => {
                            this.$emit("openedEmit", this.layerId);
                        }),
                        l[this.layerId].on("closeend", () => {
                            (this.isActive = !1), this.$emit("closeEmit", this.layerId);
                        });
                },
                methods: {
                    openLayer() {
                        l[this.layerId].open();
                    },
                    closeLayer() {
                        l[this.layerId].close();
                    },
                },
            },
            d = i("6b0d"),
            r = i.n(d);
        const u = r()(c, [["render", a]]);
        var m = u;
        const p = ["id"],
            _ = ["data-slide-num"],
            b = ["data-slide-num"],
            h = ["data-slide-num"],
            v = Object(o["g"])("div", { class: Object(o["k"])("slide-box__slide slide-box__slide--1 slide-box__slide--now"), "data-slide-num": 1 }, null, -1),
            f = ["data-slide-num"],
            g = ["data-slide-num"],
            j = ["data-slide-num"],
            y = ["data-slide-num"],
            O = ["data-slide-num"],
            k = Object(o["g"])("div", { class: Object(o["k"])("slide-box__slide slide-box__slide--1 slide-box__slide--now"), "data-slide-num": 1 }, null, -1),
            x = ["data-slide-num"],
            S = ["data-slide-num"],
            w = ["data-slide-num"],
            E = ["data-first", "data-now"],
            C = ["data-last", "data-now"];
        function A(e, t, i, n, s, a) {
            return (
                Object(o["m"])(),
                Object(o["f"])(
                    o["a"],
                    null,
                    [
                        Object(o["g"])(
                            "div",
                            { class: "slide-box slide-box__slide-wrap", id: i.slideId.replace("#", ""), style: Object(o["l"])(a.css_var) },
                            [
                                Object(o["g"])("div", { class: "slide-box__slide-box", onClick: t[0] || (t[0] = (...e) => a.clickSlideContents && a.clickSlideContents(...e)) }, [
                                    i.highlight
                                        ? (Object(o["m"])(),
                                          Object(o["f"])(
                                              o["a"],
                                              { key: 0 },
                                              [
                                                  Object(o["g"])("div", { class: Object(o["k"])("slide-box__slide slide-box__slide--" + (Math.floor(i.amount / 2) + 1)), "data-slide-num": Math.floor(i.amount / 2) + 1 }, null, 10, _),
                                                  (Object(o["m"])(!0),
                                                  Object(o["f"])(
                                                      o["a"],
                                                      null,
                                                      Object(o["n"])(
                                                          Math.floor(i.amount / 2),
                                                          (e) => (
                                                              Object(o["m"])(),
                                                              Object(o["f"])(
                                                                  o["a"],
                                                                  { key: Math.floor(i.amount / 2) + e + 1 },
                                                                  [
                                                                      Math.floor(i.amount / 2) + e + 1 === i.amount
                                                                          ? (Object(o["m"])(),
                                                                            Object(o["f"])(
                                                                                "div",
                                                                                { key: 0, class: Object(o["k"])(`slide-box__slide slide-box__slide--${i.amount} slide-box__slide--prev`), "data-slide-num": i.amount },
                                                                                null,
                                                                                10,
                                                                                b
                                                                            ))
                                                                          : (Object(o["m"])(),
                                                                            Object(o["f"])(
                                                                                "div",
                                                                                {
                                                                                    key: 1,
                                                                                    class: Object(o["k"])("slide-box__slide slide-box__slide--" + (Math.floor(i.amount / 2) + e + 1)),
                                                                                    "data-slide-num": Math.floor(i.amount / 2) + e + 1,
                                                                                },
                                                                                null,
                                                                                10,
                                                                                h
                                                                            )),
                                                                  ],
                                                                  64
                                                              )
                                                          )
                                                      ),
                                                      128
                                                  )),
                                                  v,
                                                  (Object(o["m"])(!0),
                                                  Object(o["f"])(
                                                      o["a"],
                                                      null,
                                                      Object(o["n"])(
                                                          Math.floor(i.amount / 2),
                                                          (e) => (
                                                              Object(o["m"])(),
                                                              Object(o["f"])(
                                                                  o["a"],
                                                                  { key: e + 1 },
                                                                  [
                                                                      e + 1 === 2
                                                                          ? (Object(o["m"])(),
                                                                            Object(o["f"])(
                                                                                "div",
                                                                                { key: 0, class: Object(o["k"])(`slide-box__slide slide-box__slide--${e + 1} slide-box__slide--next`), "data-slide-num": e + 1 },
                                                                                null,
                                                                                10,
                                                                                f
                                                                            ))
                                                                          : (Object(o["m"])(), Object(o["f"])("div", { key: 1, class: Object(o["k"])("slide-box__slide slide-box__slide--" + (e + 1)), "data-slide-num": e + 1 }, null, 10, g)),
                                                                  ],
                                                                  64
                                                              )
                                                          )
                                                      ),
                                                      128
                                                  )),
                                                  Object(o["g"])("div", { class: Object(o["k"])("slide-box__slide slide-box__slide--" + (Math.floor(i.amount / 2) + 2)), "data-slide-num": Math.floor(i.amount / 2) + 2 }, null, 10, j),
                                              ],
                                              64
                                          ))
                                        : (Object(o["m"])(),
                                          Object(o["f"])(
                                              o["a"],
                                              { key: 1 },
                                              [
                                                  i.amount === i.viewCount
                                                      ? (Object(o["m"])(),
                                                        Object(o["f"])(
                                                            o["a"],
                                                            { key: 0 },
                                                            [
                                                                Object(o["g"])("div", { class: Object(o["k"])(`slide-box__slide slide-box__slide--${i.amount} slide-box__slide--now`), "data-slide-num": i.amount }, null, 10, y),
                                                                (Object(o["m"])(!0),
                                                                Object(o["f"])(
                                                                    o["a"],
                                                                    null,
                                                                    Object(o["n"])(
                                                                        i.amount,
                                                                        (e) => (
                                                                            Object(o["m"])(),
                                                                            Object(o["f"])("div", { key: e, class: Object(o["k"])(`slide-box__slide slide-box__slide--${e} slide-box__slide--now`), "data-slide-num": e }, null, 10, O)
                                                                        )
                                                                    ),
                                                                    128
                                                                )),
                                                                k,
                                                            ],
                                                            64
                                                        ))
                                                      : (Object(o["m"])(),
                                                        Object(o["f"])(
                                                            o["a"],
                                                            { key: 1 },
                                                            [
                                                                Object(o["g"])("div", { class: Object(o["k"])(`slide-box__slide slide-box__slide--${i.amount} slide-box__slide--now`), "data-slide-num": i.amount }, null, 10, x),
                                                                (Object(o["m"])(!0),
                                                                Object(o["f"])(
                                                                    o["a"],
                                                                    null,
                                                                    Object(o["n"])(
                                                                        i.amount - 1,
                                                                        (e) => (
                                                                            Object(o["m"])(),
                                                                            Object(o["f"])("div", { key: e - 1, class: Object(o["k"])(`slide-box__slide slide-box__slide--${e} slide-box__slide--now`), "data-slide-num": e }, null, 10, S)
                                                                        )
                                                                    ),
                                                                    128
                                                                )),
                                                                i.amount === i.viewCount + 1
                                                                    ? (Object(o["m"])(),
                                                                      Object(o["f"])("div", { key: 0, class: Object(o["k"])(`slide-box__slide slide-box__slide--${i.amount} slide-box__slide--now`), "data-slide-num": i.amount }, null, 10, w))
                                                                    : Object(o["e"])("", !0),
                                                            ],
                                                            64
                                                        )),
                                              ],
                                              64
                                          )),
                                ]),
                            ],
                            12,
                            p
                        ),
                        Object(o["g"])(
                            "button",
                            { class: "slide-box__slide-btn--allow slide-box__slide-btn--prev", "data-first": s.isFirst, "data-now": s.prev_num, onClick: t[1] || (t[1] = (...e) => a.clickPrev && a.clickPrev(...e)) },
                            null,
                            8,
                            E
                        ),
                        Object(o["g"])(
                            "button",
                            { class: "slide-box__slide-btn--allow slide-box__slide-btn--next", "data-last": s.isLast, "data-now": s.next_num, onClick: t[2] || (t[2] = (...e) => a.clickNext && a.clickNext(...e)) },
                            null,
                            8,
                            C
                        ),
                    ],
                    64
                )
            );
        }
        let I = !1;
        var N = {
            name: "InfinitySlide",
            emits: ["nextStartEmit", "prevStartEmit", "nextEndEmit", "prevEndEmit"],
            props: {
                slideId: { type: String, required: !0 },
                amount: { type: Number, required: !0 },
                viewCount: { type: Number, required: !0 },
                width: { type: Number, required: !0 },
                height: { type: Number, required: !0 },
                widthSmall: { type: Number },
                heightSmall: { type: Number },
                margin: { type: Number, required: !0 },
                transition: { type: Number, required: !0 },
                staticPath: { type: String },
                imgPatternName: { type: String },
                infinity: { type: Boolean, default: !1 },
                highlight: { type: Boolean, default: !0 },
            },
            data() {
                return { prev_num: 1, next_num: this.viewCount, isFirst: "true", isLast: "false", defaultWidth: this.width, defaultHeight: this.height };
            },
            computed: {
                css_var() {
                    return {
                        "--view": this.viewCount,
                        "--width": this.width + "px",
                        "--height": this.height + "px",
                        "--widthSmall": this.computedSmallWidth + "px",
                        "--heightSmall": this.computedSmallHeight + "px",
                        "--margin": this.margin + "px",
                        "--transition": this.transition + "s",
                    };
                },
                computedSmallWidth() {
                    return this.widthSmall || this.defaultWidth;
                },
                computedSmallHeight() {
                    return this.heightSmall || this.defaultHeight;
                },
            },
            methods: {
                async clickSlideContents(e) {
                    if (!1 === this.highlight) return;
                    let t = e.target.dataset.slideNum;
                    if (t) {
                        let t = 0,
                            i = Math.floor(this.amount / 2),
                            o = [...document.querySelectorAll(this.slideId + " .slide-box__slide")];
                        if ((o.shift(), o.pop(), (t = o.indexOf(e.target)), t < i)) while (t !== i) await this.clickPrev("", Boolean(t !== i - 1)), t++;
                        else if (t > i) while (t !== i) await this.clickNext("", Boolean(t !== i + 1)), t--;
                    }
                },
                slideThrottling(e, t) {
                    return (
                        !I &&
                        ((I = !0),
                        setTimeout(() => {
                            let i = document.querySelector(this.slideId + " .slide-box__slide--now"),
                                o = document.querySelector(this.slideId + " .slide-box__slide--next"),
                                n = document.querySelector(this.slideId + " .slide-box__slide--prev");
                            "next" === e
                                ? t || this.$emit("nextEndEmit", { now: i.dataset.slideNum, next: o && o.dataset.slideNum, prev: n && n.dataset.slideNum })
                                : t || this.$emit("prevEndEmit", { now: i.dataset.slideNum, next: o && o.dataset.slideNum, prev: n && n.dataset.slideNum }),
                                (I = !1);
                        }, 1e3 * this.transition),
                        !0)
                    );
                },
                clickPrev(e, t) {
                    var i;
                    if (!this.slideThrottling("prev", t)) return;
                    let o = document.querySelector(this.slideId + " .slide-box__slide-box"),
                        n = document.querySelectorAll(this.slideId + " .slide-box__slide"),
                        s = document.querySelector(this.slideId + " .slide-box__slide--now"),
                        a = document.querySelector(this.slideId + " .slide-box__slide--prev"),
                        l = document.querySelector(this.slideId + " .slide-box__slide--next");
                    if (this.infinity || this.highlight || !n[0].classList.contains("slide-box__slide--" + this.amount)) {
                        if (
                            ((this.prev_num = this.prev_num - 1),
                            (this.next_num = this.next_num - 1),
                            1 === this.prev_num ? (this.isFirst = "true") : (this.isFirst = "false"),
                            this.next_num == this.amount + 1 ? (this.isLast = "true") : (this.isLast = "false"),
                            o.insertBefore(n[this.amount + (this.infinity || this.highlight ? 1 : -1)], o.firstChild),
                            this.highlight &&
                                (s.previousElementSibling.classList.add("slide-box__slide--now"),
                                s.classList.remove("slide-box__slide--now"),
                                l.previousElementSibling.classList.add("slide-box__slide--next"),
                                l.classList.remove("slide-box__slide--next"),
                                a.previousElementSibling.classList.add("slide-box__slide--prev"),
                                a.classList.remove("slide-box__slide--prev")),
                            this.amount === this.viewCount && this.infinity)
                        ) {
                            let e = o.firstChild.nextElementSibling.dataset.slideNum - 1;
                            (e = 0 === e ? this.amount : e),
                                (o.firstChild.dataset.slideNum = e),
                                (o.firstChild.classList = `slide-box__slide slide-box__slide--${e} ${this.highlight ? "" : "slide-box__slide--now"}`),
                                (o.firstChild.style.backgroundImage = `url('${promokit.store("assetsPath")}${this.staticPath}/${this.imgPatternName}-${e}.png')`);
                        }
                        return (
                            t ||
                                this.$emit("prevStartEmit", {
                                    now: null === (i = s.previousElementSibling) || void 0 === i || null === (i = i.dataset) || void 0 === i ? void 0 : i.slideNum,
                                    next: l && l.previousElementSibling.dataset.slideNum,
                                    prev: a && a.previousElementSibling.dataset.slideNum,
                                }),
                            new Promise((e) => setTimeout(e, 1e3 * this.transition))
                        );
                    }
                },
                clickNext(e, t) {
                    var i;
                    if (!this.slideThrottling("next", t)) return;
                    let o = document.querySelector(this.slideId + " .slide-box__slide-box"),
                        n = document.querySelectorAll(this.slideId + " .slide-box__slide"),
                        s = document.querySelector(this.slideId + " .slide-box__slide--now"),
                        a = document.querySelector(this.slideId + " .slide-box__slide--prev"),
                        l = document.querySelector(this.slideId + " .slide-box__slide--next");
                    if (this.infinity || this.highlight || !n[this.viewCount].classList.contains("slide-box__slide--" + this.amount)) {
                        if (
                            ((this.prev_num = this.prev_num + 1),
                            (this.next_num = this.next_num + 1),
                            1 === this.prev_num ? (this.isFirst = "true") : (this.isFirst = "false"),
                            this.next_num == this.amount - 1 ? (this.isLast = "true") : (this.isLast = "false"),
                            o.insertBefore(n[0], o.lastChild.nextSibling),
                            this.highlight &&
                                (s.nextElementSibling.classList.add("slide-box__slide--now"), s.classList.remove("slide-box__slide--now"), a.classList.remove("slide-box__slide--prev"), l.classList.remove("slide-box__slide--next")),
                            this.amount === this.viewCount && this.infinity)
                        ) {
                            let e = 1 * o.lastChild.previousElementSibling.dataset.slideNum + 1;
                            (e = e === this.amount + 1 ? 1 : e),
                                (o.lastChild.dataset.slideNum = e),
                                (o.lastChild.classList = `slide-box__slide slide-box__slide--${e} ${this.highlight ? "" : "slide-box__slide--now"}`),
                                (o.lastChild.style.backgroundImage = `url('${promokit.store("assetsPath")}${this.staticPath}/${this.imgPatternName}-${e}.png')`);
                        }
                        return (
                            t ||
                                this.$emit("nextStartEmit", {
                                    now: null === (i = s.nextElementSibling) || void 0 === i || null === (i = i.dataset) || void 0 === i ? void 0 : i.slideNum,
                                    next: l && l.nextElementSibling.dataset.slideNum,
                                    prev: a && a.nextElementSibling.dataset.slideNum,
                                }),
                            setTimeout(() => {
                                this.highlight && (l.nextElementSibling.classList.add("slide-box__slide--next"), a.nextElementSibling.classList.add("slide-box__slide--prev"));
                            }, 200),
                            new Promise((e) => setTimeout(e, 1e3 * this.transition))
                        );
                    }
                },
            },
            mounted() {
                let e = document.querySelectorAll(this.slideId + " .slide-box__slide");
                [...e].forEach((e) => {
                    (e.style.backgroundImage = `url('${promokit.store("assetsPath")}${this.staticPath}/${this.imgPatternName}-${e.dataset.slideNum}.png')`), (e.style.backgroundSize = "cover");
                });
            },
        };
        i("fd83");
        const L = r()(N, [["render", A]]);
        var P = L;
        const V = { class: "promokit-cloak" };
        function $(e, t, i, n, s, a) {
            const l = Object(o["p"])("the-main"),
                p = Object(o["p"])("the-section1"),
                u = Object(o["p"])("the-section2"),
                h = Object(o["p"])("the-section3"),
                f = Object(o["p"])("the-section4"),
                g = Object(o["p"])("the-section5"),
                m = Object(o["p"])("the-section6");
            return (
                Object(o["m"])(),
                Object(o["f"])("div", V, [
                    Object(o["j"])(l),
                    Object(o["j"])(p),
                    Object(o["j"])(u),
                    Object(o["j"])(h),
                    Object(o["j"])(f),
                    Object(o["j"])(g),
                    Object(o["j"])(m),
                ])
            );
        }
        const q = { id: "main", class: "main" },
            T = Object(o["g"])("div", { class: "main__title" }, null, -1),
            M = Object(o["g"])("div", { class: "main__date" }, null, -1),
            B = Object(o["g"])("div", { class: "main__dimmed" }, null, -1);
        function z(e, t, i, n, s, a) {
            return Object(o["m"])(), Object(o["f"])("div", q, [T, M, 
                Object(o["g"])("button", { class: "main__btn--detail", onClick: e[1] || (e[1] = (...e) => a.scrollToSecondPage && a.scrollToSecondPage(...e)) }), B
            ]);
        }
        var F = i("cffa");
        let H, G;
        var J = {
            name: "main",
            mounted() {
                (G = F["a"]
                    .timeline({ paused: !0 })
                    .addLabel("start")
                    .from(".main__title", { duration: 0.7, opacity: 0, ease: "power4.easeIn" }, "start+=.3")
                    .from(".main__date", { opacity: 0, ease: "power4.out", duration: 3.5 }, "start+=1.7")
                    .from(".main__btn--detail", { opacity: 0, ease: "power4.out", duration: 3.5 }, "start+=1.7"));
            },
            methods: {
                scrollToSecondPage() {
                    promokitPage.to("#section-1");
                },
            },
            promokitComponent: {
                id: "#main",
                name: "main",
                backgroundVideo: "https://download.plaync.com.tw/L2/film/202404/projectEVA_main_bg_pc.mp4",
                enterStart() {
                    G.play();
                },
                leaveEnd() {},
                enterAnimation() {},
            },
        };
        i("f5ab");
        const X = r()(J, [["render", z]]);
        var Y = X;
        const Fe = { id: "section-1", class: "section1" },
            He = Object(o["g"])("div", { class: "section1__frame" }, null, -1),
            Ge = Object(o["g"])("div", { class: "section1__title" }, null, -1),
            Je = Object(o["g"])("div", { class: "section1__contents" }, null, -1),
            Xe = [He, Ge, Je];
        function Ye(e, t, i, n, s, a) {
            return Object(o["m"])(), Object(o["f"])("div", Fe, Xe);
        }
        let Ke;
        var Re = {
            name: "sub1",
            mounted() {
                Ke = F["a"]
                    .timeline({ paused: !0 })
                    .addLabel("start", "+=0.6")
                    .from(".section1__title", { opacity: 0, ease: "power1.in", duration: 1 }, "start-=.1")
                    .from(".section1__contents", { opacity: 0, y: 30, ease: "power1.out", duration: 1 }, ">-=.3");
            },
            methods: {},
            promokitComponent: {
                id: "#section-1",
                name: "sub1",
                backgroundVideo: "https://download.plaync.com.tw/L2/film/202404/projectEVA_06_highelf.mp4",
                enterStart() {
                    Ke.play(0);
                },
                leaveEnd() {},
                enterAnimation() {},
            },
        };
        i("1d14");
        const De = r()(Re, [["render", Ye]]);
        var oe = De;
        //var Ue = De;
        const Qe = { id: "section-2", class: "section2" },
            Ze = Object(o["g"])("div", { class: "section2__frame" }, null, -1),
            et = Object(o["g"])("div", { class: "section2__title" }, null, -1),
            tt = Object(o["g"])("div", { class: "section2__contents" }, null, -1),
            it = Object(o["g"])("div", { class: "section2__video", id: "sec2_video" }, null, -1),
            ot = [Ze, et, tt, it];
        function nt(e, t, i, n, s, a) {
            return Object(o["m"])(), Object(o["f"])("div", Qe, ot);
        }
        let st, at;
        var lt = {
            name: "sub2",
            mounted() {
                (at = promokit.youtube({ el: "#sec2_video", youtubeId: "W0na8Vi8iL0", controls: !0 })),
                    (st = F["a"]
                        .timeline({ paused: !0 })
                        .addLabel("start", "+=0.6")
                        .from(".section2__title", { opacity: 0, ease: "power1.in", duration: 1 }, "start-=.1")
                        .from(".section2__contents", { opacity: 0, y: 30, ease: "power1.out", duration: 1 }, ">-=.3")
                        .from(".section2__video", { opacity: 0, ease: "power1.out", duration: 1 }, ">-=.7"));
            },
            methods: {},
            promokitComponent: {
                id: "#section-2",
                name: "sub2",
                backgroundVideo: "https://download.plaync.com.tw/L2/film/202404/projectEVA_2nd_SpiritWizard.mp4",
                enterStart() {
                    at || at.seek(0), st.play(0);
                },
                leaveEnd() {
                    at.stop();
                },
                enterAnimation() {},
            },
        };
        i("8b70");
        const ct = r()(lt, [["render", nt]]);
        var dt = ct;
        const St = { id: "section-3", class: "section3" },
            wt = Object(o["g"])("div", { class: "section3__frame" }, null, -1),
            Et = Object(o["g"])("div", { class: "section3__title" }, null, -1),
            Ct = Object(o["g"])("div", { class: "section3__contents" }, null, -1),
            At = Object(o["g"])("div", { class: "section3__video", id: "sec3_video" }, null, -1),
            It = [wt, Et, Ct, At];
        function Nt(e, t, i, n, s, a) {
            return Object(o["m"])(), Object(o["f"])("div", St, It);
        }
        let Lt, Pt;
        var Vt = {
            name: "sub3",
            mounted() {
                (Pt = promokit.youtube({ el: "#sec3_video", youtubeId: "riKnObIDoc4", controls: !0 })),
                    (Lt = F["a"]
                        .timeline({ paused: !0 })
                        .addLabel("start", "+=0.6")
                        .from(".section3__title", { opacity: 0, ease: "power1.in", duration: 1 }, "start-=.1")
                        .from(".section3__contents", { opacity: 0, y: 30, ease: "power1.out", duration: 1 }, ">-=.3")
                        .from(".section3__video", { opacity: 0, ease: "power1.out", duration: 1 }, ">-=.7"));
            },
            methods: {},
            promokitComponent: {
                id: "#section-3",
                name: "sub3",
                backgroundVideo: "https://download.plaync.com.tw/L2/film/202404/projectEVA_2nd_SacredTemplar.mp4",
                enterStart() {
                    Pt || Pt.seek(0), Lt.play(0);
                },
                leaveEnd() {
                    Pt.stop();
                },
                enterAnimation() {},
            },
        };
        i("9bc6");
        const kt = r()(Vt, [["render", Nt]]);
        var qt = kt;
        const Qt = { id: "section-4", class: "section4" },
            Zt = Object(o["g"])("div", { class: "section4__title" }, null, -1),
            ei = Object(o["g"])("div", { class: "section4__char" }, null, -1),
            ti = Object(o["g"])("div", { class: "section4__item" }, null, -1),
            ii = [Zt, ei, ti];
        function oi(e, t, i, n, s, a) {
            return Object(o["m"])(), Object(o["f"])("div", Qt, ii);
        }
        let ni;
        var ai = {
            name: "sub4",
            mounted() {
                (ni = F["a"]
                    .timeline({ paused: !0 })
                    .addLabel("start", "+=0.6")
                    .from(".section4__title", { opacity: 0, ease: "power1.in", duration: 1 }, "start-=.1")
                    .from(".section4__char", { opacity: 0, ease: "power1.out", duration: 1.5 }, ">-=.3")
                    .from(".section4__item", { opacity: 0, y: -15, ease: "power1.out", duration: 1 }, ">-=1"));
            },
            methods: {},
            promokitComponent: {
                id: "#section-4",
                name: "sub4",
                enterStart() {
                    ni.play(0);
                },
                leaveEnd() {},
                enterAnimation() {},
            },
        };
        i("f8ee");
        const li = r()(ai, [["render", oi]]);
        var ci = li;
        const di = { id: "section-5", class: "section5" },
            ri = Object(o["h"])(
                '<div class="section5__tab" id="sec5_tab"><div class="section5__contents section5__contents--1"><div class="section5__bg section5__bg--1" id="sec5_bg_1"></div><div class="section5__dimmed"></div><div class="section5__title section5__title--1"></div></div><div class="section5__contents section5__contents--2"><div class="section5__bg section5__bg--2" id="sec5_bg_2"></div><div class="section5__dimmed"></div><div class="section5__title section5__title--2"></div></div><div class="section5__contents section5__contents--3"><div class="section5__bg section5__bg--3" id="sec5_bg_3"></div><div class="section5__dimmed"></div><div class="section5__title section5__title--3"></div></div></div>',
                1
            ),
            ui = [ri];
        function mi(e, t, i, n, s, a) {
            return Object(o["m"])(), Object(o["f"])("div", di, ui);
        }
        let pi,
            si,
            bi = {};
        var hi = {
            name: "sub5",
            mounted() {
                (bi["0"] = promokit.video({ el: "#sec5_bg_1", url: "https://download.plaync.com.tw/L2/film/202404/projectEVA_world_water_village.mp4", preload: !0, mute: !0, loop: !0 })),
                    (bi["1"] = promokit.video({ el: "#sec5_bg_2", url: "https://download.plaync.com.tw/L2/film/202404/projectEVA_place_of_light.mp4", preload: !0, mute: !0, loop: !0 })),
                    (bi["2"] = promokit.video({ el: "#sec5_bg_3", url: "https://download.plaync.com.tw/L2/film/202404/projectEVA_place_of_shadow.mp4", preload: !0, mute: !0, loop: !0 })),
                    (si = promokit.tab({ el: "#sec5_tab", fade: !0, initAutoplay: !0, autoplayVideo: { 0: bi["0"], 1: bi["1"], 2: bi["2"] } })),
                    (pi = F["a"]
                        .timeline({ paused: !0 })
                        .addLabel("start", "+=0.6")
                        .from(".section5__title", { opacity: 0, ease: "power1.in", duration: 1 }, "start-=.1")
                        .from(".promokit-tab__link-list", { opacity: 0, ease: "power1.out", duration: 1 }, ">-=.3"));
            },
            methods: {},
            promokitComponent: {
                id: "#section-5",
                name: "sub5",
                enterStart() {
                    si.to(0), pi.play(0);
                },
                leaveEnd() {},
                enterAnimation() {},
            },
        };
        i("8d1c");
        const vi = r()(hi, [["render", mi]]);
        var fi = vi;

        const Le = { id: "section-6", class: "section6" },
            Pe = Object(o["g"])("div", { class: "section6__title" }, null, -1),
            Ve = Object(o["g"])("div", { class: "section6__contents" }, null, -1),
            Me = Object(o["g"])("div", { class: "section6__text" }, null, -1);
        function qe(e, t, i, n, s, a) {
            return Object(o["m"])(), Object(o["f"])("div", Le, [Pe, Ve, Me, Object(o["g"])("a", { class: "section6__button section6__button--1", target: "_blank", href: "/event/lineage2/240424_return/page2.aspx" }), Object(o["g"])("a", { class: "section6__button section6__button--2", target: "_blank", href: "/event/lineage2/240424_return/page1.aspx" })]);
        }
        let Te;
        var Be = {
            name: "sub6",
            mounted() {
                (Te = F["a"]
                    .timeline({ paused: !0 })
                    .addLabel("start", "+=0.6")
                    .from(".section6__title", { opacity: 0, ease: "power1.in", duration: 1 }, "start-=.1")
                    .from(".section6__contents", { opacity: 0, y: 30, ease: "power1.out", duration: 1 }, ">-=.3")
                    .from(".section6__text", { opacity: 0, ease: "power1.out", duration: 1 }, ">-=.5")
                    .from(".section6__button", { opacity: 0, ease: "power1.out", duration: 1 }, ">-=.5"));
            },
            methods: {},
            promokitComponent: {
                id: "#section-6",
                name: "sub6",
                enterStart() {
                    Te.play(0);
                },
                leaveEnd() {},
                enterAnimation() {},
            },
        };
        i("0edc");
        const We = r()(Be, [["render", qe]]);
        var ze = We;
        const AAA = {
            name: "新手&回歸豪華支援", linkUrl: "/event/lineage2/240424_return/event.aspx", linkBlank: true
        };
        const BBB = {
            name: "紅色天秤櫻之祝福", linkUrl: "/lineage2/event/240424_merchant/event.aspx", linkBlank: true
        };
        const CCC = {
            name: "G軍團出動", linkUrl: "/lineage2/classic/event/240424_legion/event.aspx", linkBlank: true
        };
        const DDD = {
            name: "水神殿討伐戰", linkUrl: "/lineage2/classic/event/240424_water/event.aspx", linkBlank: true
        };
        let Mi, Bi;
        var Wi = {
            name: "App",
            components: {
                "the-main": Y,
                "the-section1": oe,
                "the-section2": dt,
                "the-section3": qt,
                "the-section4": ci,
                "the-section5": fi,
                "the-section6": ze,
            },
            mounted() {
                promokit.page({
                    el: "#container",
                    type: "fullpage-fade",
                    game: "lineage2",
                    parallax: !0,
                    cnb: !1,
                    menu: !0,
                    hashChange: !0,
                    headerButton: { cookie: !1, home: !0, event: !1, update: !1, sns: !0, theme: "black" },
                    components: [
                        Y.promokitComponent,
                        oe.promokitComponent,
                        dt.promokitComponent,
                        qt.promokitComponent,
                        ci.promokitComponent,
                        fi.promokitComponent,
                        ze.promokitComponent,
                    ],
                    footer: { fixed: !0 },
                    changestart: ({ prev: e, to: t }) => {
                        -1 !== e && 1 === t && Mi.play();
                    },
                }),
                    promokit.router({
                        routes: [
                            { to: "#main", name: "main" },
                            {
                                to: "#section-1",
                                name: "sub1",
                                sub: [
                                    { to: "#section-2", name: "sub2" },
                                    { to: "#section-3", name: "sub3" },
                                ],
                            },
                            { to: "#section-4", name: "sub4" },
                            { to: "#section-5", name: "sub5" },
                            { to: "#section-6", name: "sub6" },
                            AAA,
                            BBB,
                            CCC,
                            DDD,
                        ],
                    }),
                    promokit.preload({
                        complete: () => {
                            (Bi = promokit.transition({ sequence: { path: "https://image.tw.ncsoft.com/lineage2/classic/preview/eva/L2_projectEVA_transition_20f/out/EVAtransition_out_", fps: 20, frame: 36, ext: "png" } })),
                                (Mi = promokit.transition({
                                    sequence: { path: "https://image.tw.ncsoft.com/lineage2/classic/preview/eva/L2_projectEVA_transition_20f/in/EVAtransition_in_", fps: 20, frame: 36, ext: "png" },
                                    ended: () => {
                                        Bi.play();
                                    },
                                }));
                            jQuery('#container').append(
                                '<div class="header-button-area">\
                                    <a href="/lineage2/classic/" data-trace="天堂II亞丁伺服器" class="btn-logo">天堂II亞丁伺服器</a>\
                                </div>\
                                    <div id="footer">\
                                    <div class="copyright">\
                                        <ul class="copyright-studio">\
                                            <li class="grade-desc">\
                                                <p>本遊戲情節涉及性、暴力、恐怖。<br>注意使用時間，避免沉迷於遊戲，可能影響身心健康。<br>本遊戲部分內容或服務需另行支付其他費用。</p>\
                                            </li>\
                                            <li class="grade-icon"></li>\
                                        </ul>\
                                        <p class="copyright-company">\
                                            <span class="copyright-logo"><a href="https://tw.ncsoft.com/">NCSOFT</a></span>\
                                            Copyright Ⓒ NCSOFT Corporation.<br>Licensed to NC Taiwan Co., Ltd. All Rights Reserved.\
                                        </p>\
                                    </div>\
                                </div>');
                            var homeGo = setInterval(function () {
                                if (jQuery('.promokit-header-button a').hasClass('promokit-header-button__item--more-home')) {
                                    jQuery("a.promokit-header-button__item--more-home").attr("href", "/lineage2/classic/");
                                    clearInterval(homeGo);
                                }
                            }, 1000);
                        }
                    });
            },
        };
        i("93d6");
        const zi = r()(Wi, [["render", $]]);
        var Fi = zi;
        const Hi = Object(o["c"])(Fi);
        Hi.component("layer-button", m), Hi.component("infinity-slide", P), (Hi.config.globalProperties.$publicPath = i.p), Hi.mount("#container");
    },
    "56f5": function (e, t, i) {},
    5909: function (e, t, i) {},
    "76ce": function (e, t, i) {
        "use strict";
        i("136a");
    },
    "7ce3": function (e, t, i) {},
    "8b70": function (e, t, i) {
        "use strict";
        i("db71");
    },
    "8d1c": function (e, t, i) {
        "use strict";
        i("0cf8");
    },
    "93d6": function (e, t, i) {
        "use strict";
        i("d71b");
    },
    "9bc6": function (e, t, i) {
        "use strict";
        i("e336");
    },
    a3d8: function (e, t, i) {},
    b2ad: function (e, t, i) {
        (i.p = ""), promokit.store("assetsPath", i.p);
    },
    bcdd: function (e, t, i) {
        "use strict";
        i("a3d8");
    },
    c126: function (e, t, i) {
        "use strict";
        i("4f84");
    },
    c485: function (e, t, i) {
        "use strict";
        i("4f4b");
    },
    d476: function (e, t, i) {
        "use strict";
        i("7ce3");
    },
    d71b: function (e, t, i) {},
    d97e: function (e, t, i) {
        "use strict";
        i("ed19");
    },
    db71: function (e, t, i) {},
    e336: function (e, t, i) {},
    ed19: function (e, t, i) {},
    eec8: function (e, t, i) {},
    f5ab: function (e, t, i) {
        "use strict";
        i("296d");
    },
    f8ee: function (e, t, i) {
        "use strict";
        i("2082");
    },
    fd83: function (e, t, i) {
        "use strict";
        i("56f5");
    },
});
