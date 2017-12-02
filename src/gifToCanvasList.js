import gifFrames from 'gif-frames';

export function isGif(gif) {
  return gif.startsWith("data:image/gif");
}

export function parseGif(gif) {
    let uint8Array = convertDataURIToBinary(gif);
    console.log(uint8Array);
    return gifFrames({url: uint8Array, frames: 'all', outputType: 'canvas'}).then(e => {
      console.log(e.toString());
      return e;
    })
}

var BASE64_MARKER = ';base64,';

function convertDataURIToBinary(dataURI) {
  var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for(let i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}