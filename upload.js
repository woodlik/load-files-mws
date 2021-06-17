var styleString = "";
styleString += "html * { box-sizing: border-box; }",
styleString += "body { margin: 10vh 10vw; font-family: Helvetica, Arial, sans-serif; }",
styleString += "#previewImage { max-height: calc(80vh - 110px); max-width: 80vw; margin-right: auto; margin-left: auto;}",
styleString += ".buttons { height: 60px; margin-top: 20px; text-align: center; }",
styleString += ".buttons a { background-color: #333; color: #FFF; font-size: 14px; border: none; border-radius: 3px; padding: 15px 25px; text-transform: uppercase; letter-spacing: 2px; margin: 5px; text-decoration: none; }",
styleString += "#filename.file {  margin-top: 3em; margin-bottom: 2em; }",
styleString += "#filename { text-align: center; }";
var styles = document.createElement("style");
styles.innerHTML = styleString,
document.head.appendChild(styles);
var self = this || {};
try {
    !function(e, t) {
        if (new e("q=%2B").get("q") !== t || new e({
            q: t
        }).get("q") !== t || new e([["q", t]]).get("q") !== t || "q=%0A" !== new e("q=\n").toString() || "q=+%26" !== new e({
            q: " &"
        }).toString())
            throw e;
        self.URLSearchParams = e
    }(URLSearchParams, "+")
} catch (e) {
    !function(e, t, n) {
        "use strict";
        function i(e) {
            var t = s(null);
            switch (c(this, "_ungap", {
                value: t
            }),
            !0) {
            case !e:
                break;
            case "string" == typeof e:
                "?" === e.charAt(0) && (e = e.slice(1));
                for (var i = e.split("&"), l = 0, d = i.length; l < d; l++) {
                    var u = (m = i[l]).indexOf("=");
                    -1 < u ? r(t, o(m.slice(0, u)), o(m.slice(u + 1))) : m.length && r(t, o(m), "")
                }
                break;
            case n(e):
                for (l = 0,
                d = e.length; l < d; l++) {
                    var m;
                    r(t, (m = e[l])[0], m[1])
                }
                break;
            case "forEach"in e:
                e.forEach(a, t);
                break;
            default:
                for (var p in e)
                    r(t, p, e[p])
            }
        }
        function a(e, t) {
            r(this, t, e)
        }
        function r(e, t, i) {
            var a = n(i) ? i.join(",") : i;
            t in e ? e[t].push(a) : e[t] = [a]
        }
        function o(e) {
            return decodeURIComponent(e.replace(m, " "))
        }
        function l(e) {
            return encodeURIComponent(e).replace(u, d)
        }
        function d(e) {
            return p[e]
        }
        var s = e.create
          , c = e.defineProperty
          , u = /[!'\(\)~]|%20|%00/g
          , m = /\+/g
          , p = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        }
          , h = {
            append: function(e, t) {
                r(this._ungap, e, t)
            },
            delete: function(e) {
                delete this._ungap[e]
            },
            get: function(e) {
                return this.has(e) ? this._ungap[e][0] : null
            },
            getAll: function(e) {
                return this.has(e) ? this._ungap[e].slice(0) : []
            },
            has: function(e) {
                return e in this._ungap
            },
            set: function(e, n) {
                this._ungap[e] = [t(n)]
            },
            forEach: function(e, n) {
                function i(i) {
                    e.call(n, i, t(r), a)
                }
                var a = this;
                for (var r in a._ungap)
                    a._ungap[r].forEach(i, r)
            },
            toJSON: function() {
                return {}
            },
            toString: function() {
                var e = [];
                for (var t in this._ungap)
                    for (var n = l(t), i = 0, a = this._ungap[t]; i < a.length; i++)
                        e.push(n + "=" + l(a[i]));
                return e.join("&")
            }
        };
        for (var f in h)
            c(i.prototype, f, {
                configurable: !0,
                writable: !0,
                value: h[f]
            });
        self.URLSearchParams = i
    }(Object, String, Array.isArray)
}
!function(e) {
    function t(e, t) {
        var i = [];
        return e.forEach(t, i),
        n ? i[Symbol.iterator]() : {
            next: function() {
                var e = i.shift();
                return {
                    done: void 0 === e,
                    value: e
                }
            }
        }
    }
    var n = !1;
    try {
        n = !!Symbol.iterator
    } catch (t) {}
    "forEach"in e || (e.forEach = function(e, t) {
        var n = this
          , i = Object.create(null);
        this.toString().replace(/=[\s\S]*?(?:&|$)/g, "=").split("=").forEach(function(a) {
            !a.length || a in i || (i[a] = n.getAll(a)).forEach(function(i) {
                e.call(t, i, a, n)
            })
        })
    }
    ),
    "keys"in e || (e.keys = function() {
        return t(this, function(e, t) {
            this.push(t)
        })
    }
    ),
    "values"in e || (e.values = function() {
        return t(this, function(e, t) {
            this.push(e)
        })
    }
    ),
    "entries"in e || (e.entries = function() {
        return t(this, function(e, t) {
            this.push([t, e])
        })
    }
    ),
    !n || Symbol.iterator in e || (e[Symbol.iterator] = e.entries),
    "sort"in e || (e.sort = function() {
        for (var e, t, n, i = this.entries(), a = i.next(), r = a.done, o = [], l = Object.create(null); !r; )
            t = (n = a.value)[0],
            o.push(t),
            t in l || (l[t] = []),
            l[t].push(n[1]),
            r = (a = i.next()).done;
        for (o.sort(),
        e = 0; e < o.length; e++)
            this.delete(o[e]);
        for (e = 0; e < o.length; e++)
            t = o[e],
            this.append(t, l[t].shift())
    }
    ),
    function(t) {
        var n = t.defineProperty
          , i = t.getOwnPropertyDescriptor
          , a = function(t) {
            var n = t.append;
            t.append = e.append,
            URLSearchParams.call(t, t._usp.search.slice(1)),
            t.append = n
        }
          , r = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("'searchParams' accessed on an object that does not implement interface " + t.name)
        }
          , o = function(o) {
            var l, d, s = o.prototype, c = i(s, "searchParams"), u = i(s, "href"), m = i(s, "search");
            !c && m && m.set && (d = function(t) {
                function i(n, i) {
                    e.append.call(this, n, i),
                    n = this.toString(),
                    t.set.call(this._usp, n ? "?" + n : "")
                }
                function a(n) {
                    e.delete.call(this, n),
                    n = this.toString(),
                    t.set.call(this._usp, n ? "?" + n : "")
                }
                function r(n, i) {
                    e.set.call(this, n, i),
                    n = this.toString(),
                    t.set.call(this._usp, n ? "?" + n : "")
                }
                return function(e, t) {
                    return e.append = i,
                    e.delete = a,
                    e.set = r,
                    n(e, "_usp", {
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            }(m),
            l = function(e, t) {
                return n(e, "_searchParams", {
                    configurable: !0,
                    writable: !0,
                    value: d(t, e)
                }),
                t
            }
            ,
            t.defineProperties(s, {
                href: {
                    get: function() {
                        return u.get.call(this)
                    },
                    set: function(e) {
                        var t = this._searchParams;
                        u.set.call(this, e),
                        t && a(t)
                    }
                },
                search: {
                    get: function() {
                        return m.get.call(this)
                    },
                    set: function(e) {
                        var t = this._searchParams;
                        m.set.call(this, e),
                        t && a(t)
                    }
                },
                searchParams: {
                    get: function() {
                        return r(this, o),
                        this._searchParams || l(this, new URLSearchParams(this.search.slice(1)))
                    },
                    set: function(e) {
                        r(this, o),
                        l(this, e)
                    }
                }
            }))
        };
        try {
            o(HTMLAnchorElement),
            /^function|object$/.test(typeof URL) && URL.prototype && o(URL)
        } catch (o) {}
    }(Object)
}(self.URLSearchParams.prototype, Object);
var previewImage = document.createElement("img");
previewImage.id = "previewImage",
previewImage.style.display = "none",
document.body.appendChild(previewImage);
var filenameH2 = document.createElement("h2");
filenameH2.id = "filename",
filenameH2.style.display = "none",
document.body.appendChild(filenameH2);
var buttons = document.createElement("div");
buttons.className = "buttons";
var downloadFileButton = document.createElement("a");
downloadFileButton.appendChild(document.createTextNode("Download file")),
downloadFileButton.style.display = "none",
buttons.appendChild(downloadFileButton);
var downloadImageButton = document.createElement("a");
downloadImageButton.appendChild(document.createTextNode("Download image")),
downloadImageButton.style.display = "none",
buttons.appendChild(downloadImageButton);
var downloadImageWithoutModifiersButton = document.createElement("a");
downloadImageWithoutModifiersButton.appendChild(document.createTextNode("Download image without overlay")),
downloadImageWithoutModifiersButton.style.display = "none",
buttons.appendChild(downloadImageWithoutModifiersButton);
var downloadOriginalImageButton = document.createElement("a");
downloadOriginalImageButton.appendChild(document.createTextNode("Download original image")),
downloadOriginalImageButton.style.display = "none",
buttons.appendChild(downloadOriginalImageButton),
document.body.appendChild(buttons);
var urlParams = new URLSearchParams(window.location.search.replace(/&amp;/g, "&"))
  , id = urlParams.get("id")
  , uuid = urlParams.get("uu")
  , modifiers = urlParams.get("mo")
  , filename = urlParams.get("fi")
  , isImage = urlParams.get("image")
  , decodedFilename = filename > "" ? atob(filename) : "";
filenameH2.innerHTML = decodedFilename,
filenameH2.style.display = "block";
var previewImageUrl = "https://files.getuploadkit.com/" + id + "/" + uuid + "/" + modifiers + decodedFilename + "?preview=1"
  , imageUrl = "https://files.getuploadkit.com/" + id + "/" + uuid + "/" + modifiers + decodedFilename + "?dl=1"
  , imageUrlWithoutOverlay = "https://cdn.getuploadkit.com/" + uuid + "/" + modifiers.replace(/\-\/overlay\/[^\/]+\/100px100p\/center\//g, "").replace(/\-\/preview\//g, "") + "-/preview/5000x5000/-/format/jpeg/-/inline/no/" + decodedFilename
  , originalUrl = "https://files.getuploadkit.com/" + id + "/" + uuid + "/" + decodedFilename + "?dl=1"
  , originalUrlInline = "https://files.getuploadkit.com/" + id + "/" + uuid + "/" + decodedFilename;
if (decodedFilename > "" && (document.title = decodedFilename),
"true" === isImage ? (previewImage.src = previewImageUrl,
downloadImageButton.href = imageUrl,
downloadImageWithoutModifiersButton.href = imageUrlWithoutOverlay,
downloadOriginalImageButton.href = originalUrl,
previewImage.style.display = "block",
downloadImageButton.style.display = "inline-block",
modifiers > "" && -1 !== modifiers.indexOf("-/overlay/") && (downloadImageWithoutModifiersButton.style.display = "inline-block"),
modifiers > "" && (downloadOriginalImageButton.style.display = "inline-block")) : (filenameH2.className = "file",
downloadFileButton.href = originalUrl,
downloadFileButton.style.display = "inline-block"),
"86cd2c34-8edf-4401-93ef-13835c68f07a" === id) {
    var cdnOriginalUrl = "https://cdn.getuploadkit.com/" + uuid + "/"
      , altParagraph = document.createElement("p");
    altParagraph.style.textAlign = "center";
    var cdnOriginalLink = document.createElement("a");
    cdnOriginalLink.style.margin = "20px",
    cdnOriginalLink.href = cdnOriginalUrl + decodedFilename,
    cdnOriginalLink.appendChild(document.createTextNode("Download original file (alternative link)"));
    var cdnModifiersUrl;
    if (modifiers > "") {
        cdnModifiersUrl = cdnOriginalUrl + modifiers;
        var cdnModifiersLink = document.createElement("a");
        cdnModifiersLink.href = cdnModifiersUrl + decodedFilename,
        cdnModifiersLink.style.margin = "20px",
        cdnModifiersLink.appendChild(document.createTextNode("Download image (alternative link)")),
        altParagraph.appendChild(cdnModifiersLink)
    }
    altParagraph.appendChild(cdnOriginalLink),
    document.body.appendChild(altParagraph)
}
//# sourceMappingURL=uploadkit-preview.map
