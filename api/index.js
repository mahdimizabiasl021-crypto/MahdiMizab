export const config = { runtime: "edge" };

const _0x2a = (function () {
  const _0xstr = [
    "TARGET_DOMAIN",
    "replace",
    "/\\/$/",
    "",
    "host",
    "connection",
    "keep-alive",
    "proxy-authenticate",
    "proxy-authorization",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "forwarded",
    "x-forwarded-host",
    "x-forwarded-proto",
    "x-forwarded-port",
    "x-vercel-",
    "x-real-ip",
    "x-forwarded-for",
    "GET",
    "HEAD",
    "x-forwarded-for",
    "half",
    "manual",
    "relay error:",
    "Bad Gateway: Tunnel Failed",
    "Misconfigured: TARGET_DOMAIN is not set"
  ];
  return function (_0xidx) {
    return _0xstr[_0xidx];
  };
})();

const _0x7b = (function () {
  const _0xb = process.env[_0x2a(0)] || "";
  return _0xb[_0x2a(1)](/\/$/, _0x2a(3));
})();

const _0x9c = new Set([
  _0x2a(4), _0x2a(5), _0x2a(6), _0x2a(7), _0x2a(8),
  _0x2a(9), _0x2a(10), _0x2a(11), _0x2a(12), _0x2a(13),
  _0x2a(14), _0x2a(15), _0x2a(16)
]);

function _0xaa(x) {
  return typeof x === "string" && x.length > 0;
}

function _0xbb() {
  return Math.random().toString(36).slice(2);
}

export default async function _0xhandler(_0xreq) {

  if (!_0xaa(_0x7b)) {
    return new Response(_0x2a(27), { status: 500 });
  }

  try {

    // junk
    for (let _0xi = 0; _0xi < 1; _0xi++) _0xbb();

    const _0xu = _0xreq.url;
    const _0xp = _0xu.indexOf("/", 8);

    const _0xt = _0xp === -1
      ? _0x7b + "/"
      : _0x7b + _0xu.slice(_0xp);

    const _0xh = new Headers();

    let _0xip = null;

    for (const [_0xk, _0xv] of _0xreq.headers) {

      if (_0x9c.has(_0xk)) continue;

      if (_0xk.startsWith(_0x2a(17))) continue;

      if (_0xk === _0x2a(18)) {
        _0xip = _0xv;
        continue;
      }

      if (_0xk === _0x2a(19)) {
        if (!_0xip) _0xip = _0xv;
        continue;
      }

      _0xh.set(_0xk, _0xv);
    }

    if (_0xip) {
      _0xh.set(_0x2a(22), _0xip);
    }

    const _0xm = _0xreq.method;
    const _0xbh = (_0xm !== _0x2a(20) && _0xm !== _0x2a(21));

    (function () { return 1 + 1 })();

    return await fetch(_0xt, {
      method: _0xm,
      headers: _0xh,
      body: _0xbh ? _0xreq.body : undefined,
      duplex: _0x2a(23),
      redirect: _0x2a(24)
    });

  } catch (_0xe) {

    console.error(_0x2a(25), _0xe);

    return new Response(_0x2a(26), { status: 502 });
  }
}
