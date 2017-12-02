import gifFrames from 'gif-frames';

export function isGif(gif) {
  return gif.startsWith("data:image/gif");
}

export function parseGif(gif) {
    let uint8Array = _base64ToArrayBuffer(gif);
    console.log(uint8Array);
    return gifFrames({url: uint8Array, outputType: 'canvas'}).then(e => {
      console.log(e);
      return e;
    })
}

function _base64ToArrayBuffer(base64) {
  console.log(base64);
  let idex = base64.indexOf("base64,");
  let base64Data = base64.slice(idex + 7);
  console.log(base64Data);

  var binary_string =  window.atob(base64Data);
  var len = binary_string.length;
  var bytes = new Uint8Array( len );
  for (var i = 0; i < len; i++)        {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}