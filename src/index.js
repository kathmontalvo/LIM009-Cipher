const infoSection = document.getElementById("about-instr")
const btn = document.getElementById("info-btn")
const mainSection = document.getElementById("main-section");

btn.addEventListener("click", () => {
    if (infoSection.classList.contains("hide")) {
        infoSection.classList.remove("hide")
        mainSection.classList.add("hide");
        btn.innerHTML = "CERRAR ▲"
    } else {
        mainSection.classList.remove("hide");
        infoSection.classList.add("hide")
        instEncode.classList.add("hide")
        instDecode.classList.add("hide")
        btn.innerHTML = "MÁS INFORMACIÓN ▲"
    }
})

const encodeTitle = document.getElementById("encode-title")
const decodeTitle = document.getElementById("decode-title")
const instEncode = document.getElementById("inst-encode")
const instDecode = document.getElementById("inst-decode")

encodeTitle.addEventListener("click", () => {
    if (instEncode.classList.contains("hide")) {
        instEncode.classList.remove("hide");
        instDecode.classList.add("hide")
    } else {
        instEncode.classList.add("hide")
    }
})

decodeTitle.addEventListener("click", () => {
    if (instDecode.classList.contains("hide")) {
        instDecode.classList.remove("hide");
        instEncode.classList.add("hide")
    } else {
        instDecode.classList.add("hide");
    }
})

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

copyDecode.addEventListener("click", () => {
    decodeMsg.select();
    document.execCommand("copy");
    alert("Clave: " + desp.value + ". Texto copiado: " + decodeMsg.value);
})
copyEncode.addEventListener("click", () => {
    encodeMsg.select();
    document.execCommand("copy");
    alert("Clave: " + desp.value + ". Texto copiado: " + encodeMsg.value);
})