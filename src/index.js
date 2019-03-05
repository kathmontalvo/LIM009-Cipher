const encodeMsg = document.getElementById("encodeMsg");
const decodeMsg = document.getElementById("decodeMsg");
const desp = document.getElementById("offsetNumber");
const copyEncode = document.getElementById("copyEncode");
const copyDecode = document.getElementById("copyDecode");


encodeMsg.addEventListener('keyup', () => {
  const cipherText = encodeMsg.value;
  const a = parseInt(desp.value);
  decodeMsg.value = cipher.encode(a, cipherText);
})

decodeMsg.addEventListener('keyup', () => {
  const cipherText = decodeMsg.value;
  const b = parseInt(desp.value)
  encodeMsg.value = cipher.decode(b, cipherText)
})

copyDecode.addEventListener("click", ()=> {
  decodeMsg.select();
  document.execCommand("copy");
  alert("Clave: "+ desp.value +". Texto copiado: " + decodeMsg.value);
})
copyEncode.addEventListener("click", ()=> {
  encodeMsg.select();
  document.execCommand("copy");
  alert("Clave: "+ desp.value +". Texto copiado: " + encodeMsg.value);
})


const blockOne = document.getElementById("blockOne")
const btn = document.getElementById("btn")
const mainSection = document.getElementById("mainSection");

btn.addEventListener("click", ()=>{
  if(blockOne.style.display==="none"){
    blockOne.style.display="block";
    btn.innerHTML="CERRAR ▲"
    mainSection.style.display="none"
  }else{
    blockOne.style.display="none";
    btn.innerHTML="MÁS INFORMACIÓN ▼"
    mainSection.style.display="block"
    instEncode.style.display="none";
    instDecode.style.display="none"
  }
})

const cifrarMsg=document.getElementById("cifrarMsg")
const descifrarMsg=document.getElementById("descifrarMsg")
const instEncode=document.getElementById("instEncode")
const instDecode=document.getElementById("instDecode")

cifrarMsg.addEventListener("click", ()=>{
  if(instEncode.style.display==="none"){
    instEncode.style.display="block";
    instDecode.style.display="none"
  }else{
    instEncode.style.display="none";
  }
})

descifrarMsg.addEventListener("click", ()=>{
  if(instDecode.style.display==="none"){
    instDecode.style.display="block";
    instEncode.style.display="none"
  }else{
    instDecode.style.display="none";
  }})