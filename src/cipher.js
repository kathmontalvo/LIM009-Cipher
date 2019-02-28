window.cipher = {
  encode: (offset, string, arr) => {
    for (let i = 0; i < string.length; i++) {
      const x = string[i];  
      const r = x.charCodeAt();
      if (r >= 65 && r <= 65 + 25) {
        const formulaC = String.fromCharCode((r - 65 + offset) % 26 + 65);
        arr.push(formulaC)
      } else if  (r >= 97 && r <= 97 + 25) {
      const formulaC = String.fromCharCode((r - 97 + offset) % 26 + 97);
      arr.push(formulaC)
      } else if (r == 32) {
      arr.push(" ")
      }
    } 
  },

  decode: (offset, string, arr) => {
    for (let i = 0; i < string.length; i++) {
      const y = string[i];
      const d = y.charCodeAt()
      if (d >= 65 && d <= 65 + 25) {
        const formulaD = String.fromCharCode((d + 65 - offset) % 26 + 65);
        arr.push(formulaD)
      } else if (d >= 97 && d <= 97 + 25) {
        const formulaE = String.fromCharCode((d + (97 - 65 + 1) - offset) % 26 + 97);
        arr.push(formulaE)
      } else if (d == 32) {
        arr.push(" ")
      }
    }
  }
}
