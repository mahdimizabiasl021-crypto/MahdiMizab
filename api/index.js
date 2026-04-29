export const config = { runtime: "edge" };

const _0x5c2f=(function(){let _0x1=["VEFSR0VUX0RPTUFJTg==","cmVwbGFjZQ==","L1wk",""];return function(_0x2,_0x3){_0x2=_0x1[_0x2];return atob(_0x2)}})();

const _0x9a3b=((()=>{const _0x1=process.env[_0x5c2f(0)]||"";return _0x1[_0x5c2f(1)](new RegExp(atob("XC8k")),_0x5c2f(3))})());

const _0x7f11=new Set([
atob("aG9zdA=="),
atob("Y29ubmVjdGlvbg=="),
atob("a2VlcC1hbGl2ZQ=="),
atob("cHJveHktYXV0aGVudGljYXRl"),
atob("cHJveHktYXV0aG9yaXphdGlvbg=="),
atob("dGU="),
atob("dHJhaWxlcg=="),
atob("dHJhbnNmZXItZW5jb2Rpbmc="),
atob("dXBncmFkZQ=="),
atob("Zm9yd2FyZGVk"),
atob("eC1mb3J3YXJkZWQtaG9zdA=="),
atob("eC1mb3J3YXJkZWQtcHJvdG8="),
atob("eC1mb3J3YXJkZWQtcG9ydA==")
]);

function _0xdead(_0x1){return typeof _0x1==="string"&&_0x1.length>0}

function _0xbeef(){return Math.random().toString(36).slice(2)}

export default async function _0xhandler(_0xreq){

    if(!_0xdead(_0x9a3b)){
        return new Response(atob("TWlzY29uZmlndXJlZDogVEFSR0VUX0RPTUFJTiBpcyBub3Qgc2V0"),{status:500})
    }

    try{

        // junk noise
        for(let _0xj=0;_0xj<1;_0xj++){_0xbeef()}

        const _0xurl=_0xreq.url;
        const _0xidx=_0xurl.indexOf("/",8);

        const _0xtarget=_0xidx===-1
            ?_0x9a3b+"/"
            :_0x9a3b+_0xurl.slice(_0xidx);

        const _0xout=new Headers();

        let _0xip=null;

        for(const [_0xk,_0xv] of _0xreq.headers){

            if(_0x7f11.has(_0xk))continue;

            if(_0xk.startsWith(atob("eC12ZXJjZWwt")))continue;

            if(_0xk===atob("eC1yZWFsLWlw")){
                _0xip=_0xv;
                continue
            }

            if(_0xk===atob("eC1mb3J3YXJkZWQtZm9y")){
                if(!_0xip)_0xip=_0xv;
                continue
            }

            _0xout.set(_0xk,_0xv)
        }

        if(_0xip){
            _0xout.set(atob("eC1mb3J3YXJkZWQtZm9y"),_0xip)
        }

        const _0xm=_0xreq.method;

        const _0xbodyFlag=(_0xm!==atob("R0VU")&&_0xm!==atob("SEVBRA=="));

        // more junk
        (function(){return 42})();

        return await fetch(_0xtarget,{
            method:_0xm,
            headers:_0xout,
            body:_0xbodyFlag?_0xreq.body:void 0,
            duplex:atob("aGFsZg=="),
            redirect:atob("bWFudWFs")
        });

    }catch(_0xe){

        console.error(atob("cmVsYXkgZXJyb3I6"),_0xe);

        return new Response(atob("QmFkIEdhdGV3YXk6IFR1bm5lbCBGYWlsZWQ="),{status:502})
    }
}
