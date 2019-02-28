const encodeMsg = document.getElementById("encodeMsg");
const decodeMsg = document.getElementById("decodeMsg");
const desp = document.getElementById("offsetNumber");

encodeMsg.addEventListener('keyup', ()=>{
  const cipherText = encodeMsg.value;
  const a = parseInt(desp.value);
  decodeMsg.value = cipher.encode(a, cipherText);
})

decodeMsg.addEventListener('keyup', () => {
  const cipherText = decodeMsg.value;
  const b = parseInt(desp.value)
  encodeMsg.value = cipher.decode(b, cipherText)
})
