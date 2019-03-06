window.cipher = {
  encode: (offset, string) => {
    const arr = []

    for (let i = 0; i < string.length; i++) {
      const x = string[i];
      const r = x.charCodeAt();
      if (r >= 65 && r <= 90 && offset >= 0) { // Cifrado para mayúscula con Offset positivo
        const formulaC = String.fromCharCode((r - 65 + offset) % 26 + 65);
        arr.push(formulaC)
      } else if (r >= 65 && r <= 90 && offset < 0) { // Cifrado para mayúscula con Offset negativo
        const formulaC = String.fromCharCode((r + 65 + offset) % 26 + 65);
        arr.push(formulaC)
      } else if (r >= 97 && r <= 122 && offset >= 0) { // Cifrado para minúscula con Offset positivo
        const formulaC = String.fromCharCode((r - 97 + offset) % 26 + 97);
        arr.push(formulaC)
      } else if (r >= 97 && r <= 122 && offset < 0) { // Cifrado para minúscula con Offset negativo
        const formulaC = String.fromCharCode((r + (97 - 65 + 1) + offset) % 26 + 97);
        arr.push(formulaC)
      } else if (r >= 48 && r <= 57 && offset >= 0) { // Cifrado para número con Offset positivo
        const formulaC = String.fromCharCode((r - 48 + offset) % 10 + 48);
        arr.push(formulaC)
      } else if (r >= 48 && r <= 57 && offset < 0) { // Cifrado para número con Offset negativo
        const formulaC = String.fromCharCode((r + 57 + 5 + offset) % 10 + 48);
        arr.push(formulaC)
      } else{ // Cifrado para caracteres
        const abc = String.fromCharCode(r)
        arr.push(abc)
      }
    }
    const stringDecode = arr.join("") // Quitando las comas al array
    return stringDecode
  },

  decode: (offset, string) => {
    const arr = []
    for (let i = 0; i < string.length; i++) {
      const y = string[i];
      const d = y.charCodeAt()
      if (d >= 65 && d <= 65 + 25 && offset >= 0) { // Descifrado para mayúsculas con offset positivo
        const formulaD = String.fromCharCode((d + 65 - offset) % 26 + 65);
        arr.push(formulaD)
      } else if (d >= 65 && d <= 65 + 25 && offset < 0) { // Descifrado para mayúsculas con offset positivo
        const formulaD = String.fromCharCode((d - 65 - offset) % 26 + 65);
        arr.push(formulaD)
      } else if (d >= 97 && d <= 97 + 25 && offset >= 0) {  // Descifrado para minúscula con offset positivo
        const formulaE = String.fromCharCode((d + (97 - 65 + 1) - offset) % 26 + 97);
        arr.push(formulaE)
      } else if (d >= 97 && d <= 97 + 25 && offset < 0) {  // Descifrado para minúscula con offset negativo
        const formulaE = String.fromCharCode((d - 97 - offset) % 26 + 97);
        arr.push(formulaE)
      } else if (d >= 48 && d <= 57 && offset >= 0) { // Descifrado para números con offset positivo
        const formulaD = String.fromCharCode((d + 57 + 5 - offset) % 10 + 48);
        arr.push(formulaD)
      } else if (d >= 48 && d <= 57 && offset < 0) { // Descifrado para números con offset negativo
        const formulaD = String.fromCharCode((d - 48 - offset) % 10 + 48);
        arr.push(formulaD)
      } else { // Descifrado de caractéres
        const abc = String.fromCharCode(d)
        arr.push(abc)
      }
    }
    const stringDecode = arr.join("") // Quitando las comas del array
    return stringDecode
  }
}
