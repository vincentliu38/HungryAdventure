!(function (e, t) {
  typeof exports === 'object' && typeof module === 'object' ? module.exports = t(require('react')) : typeof define === 'function' && define.amd ? define(['react'], t) : typeof exports === 'object' ? exports.FacebookLogin = t(require('react')) : e.FacebookLogin = t(e.react);
}(this, e => (function (e) {
  function t(n) {
    if (o[n]) return o[n].exports;
    const i = o[n] = {
      exports: {},
      id: n,
      loaded: !1,
    };
    return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
  }
  const o = {};
  return t.m = e, t.c = o, t.p = '', t(0);
}([function (e, t, o) {
  e.exports = o(2);
}, function (e, t, o) {
  function n(e) {
    return e && e.__esModule ? e : {
      default: e,
    };
  }

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  }

  function r(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
  }

  function s(e, t) {
    if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0,
      },
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  Object.defineProperty(t, '__esModule', {
    value: !0,
  });
  let a = Object.assign || function (e) {
      for (let t = 1; t < arguments.length; t++) {
        const o = arguments[t];
        for (const n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
      }
      return e;
    },
    c = (function () {
      function e(e, t) {
        for (let o = 0; o < t.length; o++) {
          const n = t[o];
          n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      return function (t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
      };
    }()),
    l = o(6),
    p = n(l),
    u = o(4),
    f = n(u),
    d = o(3),
    y = n(d),
    b = function () {
      let e = !1;
      try {
        e = window.navigator && window.navigator.standalone || navigator.userAgent.match('CriOS') || navigator.userAgent.match(/mobile/i);
      } catch (t) {}
      return e;
    },
    h = (function (e) {
      function t() {
        let e,
          o,
          n,
          s;
        i(this, t);
        for (var c = arguments.length, l = Array(c), p = 0; p < c; p++) l[p] = arguments[p];
        return o = n = r(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l))), n.state = {
          isSdkLoaded: !1,
          isProcessing: !1,
        }, n.responseApi = function (e) {
          window.FB.api('/me', {
            fields: n.props.fields,
          }, (t) => {
            a(t, e), n.props.callback(t);
          });
        }, n.checkLoginState = function (e) {
          n.setStateIfMounted({
            isProcessing: !1,
          }), e.authResponse ? n.responseApi(e.authResponse) : n.props.callback && n.props.callback({
            status: e.status,
          });
        }, n.checkLoginAfterRefresh = function (e) {
          e.status === 'connected' ? n.checkLoginState(e) : window.FB.login(e => n.checkLoginState(e), !0);
        }, n.click = function () {
          if (n.state.isSdkLoaded && !n.state.isProcessing && !n.props.isDisabled) {
            n.setState({
              isProcessing: !0,
            });
            let e = n.props,
              t = e.scope,
              o = e.appId,
              i = e.onClick,
              r = e.reAuthenticate,
              s = e.redirectUri,
              a = e.disableMobileRedirect;
            typeof i === 'function' && i();
            const c = {
              client_id: o,
              redirect_uri: s,
              state: 'facebookdirect',
              scope: t,
            };
            r && (c.auth_type = 'reauthenticate'), n.props.isMobile && !a ? window.location.href = `//www.facebook.com/dialog/oauth?${(0, y.default)(c)}` : window.FB.login(n.checkLoginState, {
              scope: t,
              auth_type: c.auth_type,
            });
          }
        }, s = o, r(n, s);
      }
      return s(t, e), c(t, [{
        key: 'componentDidMount',
        value() {
          if (document.getElementById('facebook-jssdk')) return void this.sdkLoaded();
          this.setFbAsyncInit(), this.loadSdkAsynchronously();
          let e = document.getElementById('fb-root');
          e || (e = document.createElement('div'), e.id = 'fb-root', document.body.appendChild(e)), this._isMounted = !0;
        },
      }, {
        key: 'componentWillUnmount',
        value() {
          this._isMounted = !1;
        },
      }, {
        key: 'setStateIfMounted',
        value(e) {
          this._isMounted && this.setState(e);
        },
      }, {
        key: 'setFbAsyncInit',
        value() {
          let e = this,
            t = this.props,
            o = t.appId,
            n = t.xfbml,
            i = t.cookie,
            r = t.version,
            s = t.autoLoad;
          window.fbAsyncInit = function () {
            window.FB.init({
              version: `v${r}`,
              appId: o,
              xfbml: n,
              cookie: i,
            }), e.setStateIfMounted({
              isSdkLoaded: !0,
            }), (s || window.location.search.includes('facebookdirect')) && window.FB.getLoginStatus(e.checkLoginAfterRefresh);
          };
        },
      }, {
        key: 'sdkLoaded',
        value() {
          this.setState({
            isSdkLoaded: !0,
          });
        },
      }, {
        key: 'loadSdkAsynchronously',
        value() {
          const e = this.props.language;
          !(function (t, o, n) {
            let i = t.getElementsByTagName(o)[0],
              r = i,
              s = i;
            t.getElementById(n) || (s = t.createElement(o), s.id = n, s.src = `//connect.facebook.net/${e}/all.js`, r.parentNode.insertBefore(s, r));
          }(document, 'script', 'facebook-jssdk'));
        },
      }, {
        key: 'style',
        value() {
          const e = this.constructor.defaultProps.cssClass;
          return this.props.cssClass === e && p.default.createElement('style', {
            dangerouslySetInnerHTML: {
              __html: f.default,
            },
          });
        },
      }, {
        key: 'containerStyle',
        value() {
          const e = {
            transition: 'opacity 0.5s',
          };
          return (this.state.isProcessing || !this.state.isSdkLoaded || this.props.isDisabled) && (e.opacity = 0.6), a(e, this.props.containerStyle);
        },
      }, {
        key: 'render',
        value() {
          let e = this.props,
            t = e.cssClass,
            o = e.size,
            n = e.icon,
            i = e.textButton,
            r = e.typeButton,
            s = e.buttonStyle,
            a = typeof n === 'string';
          return p.default.createElement('span', {
            style: this.containerStyle(),
          }, a && p.default.createElement('link', {
            rel: 'stylesheet',
            href: '//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css',
          }), p.default.createElement(this.props.tag, {
            type: r,
            className: `${t} ${o}`,
            style: s,
            onClick: this.click,
          }, n && a && p.default.createElement('i', {
            className: `fa ${n}`,
          }), n && !a && n, i), this.style());
        },
      }]), t;
    }(p.default.Component));
  h.propTypes = {
    isDisabled: l.PropTypes.bool,
    callback: l.PropTypes.func.isRequired,
    appId: l.PropTypes.string.isRequired,
    xfbml: l.PropTypes.bool,
    cookie: l.PropTypes.bool,
    reAuthenticate: l.PropTypes.bool,
    scope: l.PropTypes.string,
    redirectUri: l.PropTypes.string,
    textButton: l.PropTypes.string,
    typeButton: l.PropTypes.string,
    autoLoad: l.PropTypes.bool,
    disableMobileRedirect: l.PropTypes.bool,
    isMobile: l.PropTypes.bool,
    size: l.PropTypes.string,
    fields: l.PropTypes.string,
    cssClass: l.PropTypes.string,
    version: l.PropTypes.string,
    icon: l.PropTypes.any,
    language: l.PropTypes.string,
    onClick: l.PropTypes.func,
    containerStyle: l.PropTypes.object,
    buttonStyle: l.PropTypes.object,
    tag: l.PropTypes.oneOfType([l.PropTypes.node, l.PropTypes.func]),
  }, h.defaultProps = {
    textButton: 'Login',
    typeButton: 'button',
    redirectUri: typeof window !== 'undefined' ? window.location.href : '/',
    scope: 'public_profile,email',
    xfbml: !1,
    cookie: !1,
    reAuthenticate: !1,
    size: 'metro',
    fields: 'name',
    cssClass: 'kep-login-facebook',
    version: '2.3',
    language: 'en_US',
    disableMobileRedirect: !1,
    isMobile: b(),
    tag: 'button',
  }, t.default = h;
}, function (e, t, o) {
  function n(e) {
    return e && e.__esModule ? e : {
      default: e,
    };
  }
  Object.defineProperty(t, '__esModule', {
    value: !0,
  }), t.default = void 0;
  let i = o(1),
    r = n(i);
  t.default = r.default;
}, function (e, t) {
  Object.defineProperty(t, '__esModule', {
    value: !0,
  }), t.default = function (e) {
    let t = '';
    for (const o in e) t !== '' && (t += '&'), t += `${o}=${encodeURIComponent(e[o])}`;
    return t;
  };
}, function (e, t, o) {
  t = e.exports = o(5)(), t.push([e.id, '.kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 5px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 0.5px) calc(.34435vw + 0.5px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:4px 4px 4px 4px}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}', '']), t.locals = {
    'kep-login-facebook': 'kep-login-facebook',
    small: 'small',
    medium: 'medium',
    metro: 'metro',
    fa: 'fa',
  };
}, function (e, t) {
  e.exports = function () {
    const e = [];
    return e.toString = function () {
      for (var e = [], t = 0; t < this.length; t++) {
        const o = this[t];
        o[2] ? e.push(`@media ${o[2]}{${o[1]}}`) : e.push(o[1]);
      }
      return e.join('');
    }, e.i = function (t, o) {
      typeof t === 'string' && (t = [
                    [null, t, ''],
      ]);
      for (var n = {}, i = 0; i < this.length; i++) {
        const r = this[i][0];
        typeof r === 'number' && (n[r] = !0);
      }
      for (i = 0; i < t.length; i++) {
        const s = t[i];
        typeof s[0] === 'number' && n[s[0]] || (o && !s[2] ? s[2] = o : o && (s[2] = `(${s[2]}) and (${o})`), e.push(s));
      }
    }, e;
  };
}, function (t, o) {
  t.exports = e;
}]))));
