const encodeMsg = document.getElementById("encodeMsg");
const decodeMsg = document.getElementById("decodeMsg");
const desp = document.getElementById("offsetNumber");

encodeMsg.addEventListener('keyup', ()=>{
  const cipherText = encodeMsg.value;
  const arrDecodeMsg = []
  const a = parseInt(desp.value);
  cipher.encode(a, cipherText, arrDecodeMsg) //función encode en cipher.js
  const stringDecode = arrDecodeMsg.toString() // convirtiendo el array a string
  const newString = stringDecode.replace(/,/g, ""); // quitando las comas del string
  decodeMsg.value = newString;
})


decodeMsg.addEventListener('keyup', () => {
  const cipherText = decodeMsg.value;
  const arrEncodeMsg = []
  const b = parseInt(desp.value)
  cipher.decode(b, cipherText, arrEncodeMsg); //función decode en cipher.js
  const stringEncode = arrEncodeMsg.toString() // convirtiendo el array a string
  const newStringD = stringEncode.replace(/,/g, "") // quitando las comas del string
  encodeMsg.value = newStringD
})
