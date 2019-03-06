
const infoSection = document.getElementById("about-instr")
const btn = document.getElementById("info-btn")
const mainSection = document.getElementById("main-section");

btn.addEventListener("click", ()=>{
  if(infoSection.style.display==="none"){
    infoSection.style.display="block";
    btn.innerHTML="CERRAR ▲"
    mainSection.style.display="none"
  }else{
    infoSection.style.display="none";
    btn.innerHTML="MÁS INFORMACIÓN ▼"
    mainSection.style.display="block"
    instEncode.style.display="none";
    instDecode.style.display="none"
  }
})

const encodeTitle=document.getElementById("encode-title")
const decodeTitle=document.getElementById("decode-title")
const instEncode=document.getElementById("inst-encode")
const instDecode=document.getElementById("inst-decode")

encodeTitle.addEventListener("click", ()=>{
  if(instEncode.style.display==="none"){
    instEncode.style.display="block";
    instDecode.style.display="none"
  }else{
    instEncode.style.display="none";
  }
})

decodeTitle.addEventListener("click", ()=>{
  if(instDecode.style.display==="none"){
    instDecode.style.display="block";
    instEncode.style.display="none"
  }else{
    instDecode.style.display="none";
  }})
  
const encodeMsg = document.getElementById("encode-msg");
const decodeMsg = document.getElementById("decode-msg");
const desp = document.getElementById("offset-number");
const copyEncode = document.getElementById("copy-encode");
const copyDecode = document.getElementById("copy-decode");


encodeMsg.addEventListener('keyup', () => {
  const cipherText = encodeMsg.value;
  const offset = parseInt(desp.value);
  decodeMsg.value = cipher.encode(offset, cipherText);
})

decodeMsg.addEventListener('keyup', () => {
  const cipherText = decodeMsg.value;
  const offset = parseInt(desp.value)
  encodeMsg.value = cipher.decode(offset, cipherText)
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

