const encodeMsg = document.getElementById("encodeMsg");
const decodeMsg = document.getElementById("decodeMsg");
const desp = document.getElementById("offsetNumber");
// const btn = document.getElementById("btn");

encodeMsg.addEventListener('keyup', () => {
  const cipherText = encodeMsg.value;
  const arrDecodeMsg = []

  for (i = 0; i < cipherText.length; i++) {
    const x = cipherText[i];
    const a = parseInt(desp.value);
    cipher.encode(a, x, arrDecodeMsg) //función en cipher.js
  }
  console.log(arrDecodeMsg)
  decodeMsg.innerHTML = arrDecodeMsg.toString()
})



decodeMsg.addEventListener('keyup', () => {
  const dcipherText = decodeMsg.value;
  for (i = 0; i < dcipherText.length; i++) {
    const y = dcipherText[i];
    const b = parseInt(desp.value)
    cipher.decode(b, y)
  }
})
