declare let window: Window;

export function getLocalIP(): Promise<string | undefined> {
  return new Promise((resolve, reject) => {
    // NOTE: window.RTCPeerConnection is "not a constructor" in FF22/23
    const RTCPeerConnection =
      /*window.RTCPeerConnection ||*/ window.webkitRTCPeerConnection ||
      window.mozRTCPeerConnection;

    if (!RTCPeerConnection) {
      reject('Your browser does not support this API');
    }

    const rtc = new RTCPeerConnection({iceServers: []});

    function grepSDP(sdp: string): string {
      let finalIP = '';

      sdp.split('\r\n').forEach(line => {
        if (~line.indexOf('a=candidate')) {
          var parts = line.split(' '),
            addr = parts[4],
            type = parts[7];
          if (type === 'host') {
            finalIP = addr;
          }
        } else if (~line.indexOf('c=')) {
          // http://tools.ietf.org/html/rfc4566#section-5.7
          var parts = line.split(' '),
            addr = parts[2];
          finalIP = addr;
        }
      });
      return finalIP;
    }

    if (1 || window.mozRTCPeerConnection) {
      // FF [and now Chrome!] needs a channel/stream to proceed
      rtc.createDataChannel('', {reliable: false});
    }

    rtc.onicecandidate = function (evt: any) {
      // convert the candidate to SDP so we can run it through our general parser
      // see https://twitter.com/lancestout/status/525796175425720320 for details
      if (evt.candidate) {
        const addr = grepSDP('a=' + evt.candidate.candidate);
        resolve(addr);
      }
    };
    rtc.createOffer(
      (offerDesc: any) => {
        rtc.setLocalDescription(offerDesc);
      },
      (e: any) => {
        console.warn('offer failed', e);
      }
    );
  });
}
