window.cipher = {
    encode: (offset, string) => {
        const cipherText = []

        for (let i = 0; i < string.length; i++) {
            const letter = string[i];
            const asciiLetter = letter.charCodeAt();
            if (asciiLetter >= 65 && asciiLetter <= 90 && offset >= 0) { // Cifrado para mayúscula con Offset positivo
                const encodedLetter = String.fromCharCode((asciiLetter - 65 + offset) % 26 + 65);
                cipherText.push(encodedLetter)
            } else if (asciiLetter >= 65 && asciiLetter <= 90 && offset < 0) { // Cifrado para mayúscula con Offset negativo
                const n = 385
                const encodedLetter = String.fromCharCode((asciiLetter + 65 * n + offset) % 26 + 65);
                cipherText.push(encodedLetter)
            } else if (asciiLetter >= 97 && asciiLetter <= 122 && offset >= 0) { // Cifrado para minúscula con Offset positivo
                const encodedLetter = String.fromCharCode((asciiLetter - 97 + offset) % 26 + 97);
                cipherText.push(encodedLetter)
            } else if (asciiLetter >= 97 && asciiLetter <= 122 && offset < 0) { // Cifrado para minúscula con Offset negativo
                const n = 385
                const encodedLetter = String.fromCharCode((asciiLetter + (26 * n + 7) - offset) % 26 + 97);
                cipherText.push(encodedLetter)
            } else if (asciiLetter >= 32 && asciiLetter <= 64 && offset >= 0) { // Cifrado para caracteres con Offset positivo
                const encodedLetter = String.fromCharCode((asciiLetter - 32 + offset) % 33 + 32);
                cipherText.push(encodedLetter)
            } else if (asciiLetter >= 32 && asciiLetter <= 64 && offset < 0) { // Cifrado para caracteres con Offset negativo
                let n = 303
                const encodedLetter = String.fromCharCode((asciiLetter + 32 * n + n + 1 + offset) % 33 + 32);
                cipherText.push(encodedLetter)
            } else { // Cifrado para otros caracteres
                const otherCarac = String.fromCharCode(asciiLetter)
                cipherText.push(otherCarac)
            }
        }
        const stringEncode = cipherText.join("") // Quitando las comas del cipherText
        return stringEncode
    },

    decode: (offset, string) => {
        const cipherText = []
        for (let i = 0; i < string.length; i++) {
            const y = string[i];
            const d = y.charCodeAt()
            if (d >= 65 && d <= 65 + 25 && offset >= 0) { // Descifrado para mayúsculas con offset positivo
                const n = 385
                const decodedLetter = String.fromCharCode((d + 65 * n - offset) % 26 + 65);
                cipherText.push(decodedLetter)
            } else if (d >= 65 && d <= 65 + 25 && offset < 0) { // Descifrado para mayúsculas con offset negativo
                const decodedLetter = String.fromCharCode((d - 65 - offset) % 26 + 65);
                cipherText.push(decodedLetter)
            } else if (d >= 97 && d <= 122 && offset >= 0) { // Descifrado para minúscula con offset positivo
                const n = 385
                const decodedLetter = String.fromCharCode((d + 26 * n + 7 - offset) % 26 + 97);
                cipherText.push(decodedLetter)
            } else if (d >= 97 && d <= 122 && offset < 0) { // Descifrado para minúscula con offset negativo
                const decodedLetter = String.fromCharCode((d - 97 - offset) % 26 + 97);
                cipherText.push(decodedLetter)
            } else if (d >= 32 && d <= 64 && offset >= 0) { // Cifrado para caracteres con Offset positivo
                const n = 303
                const decodedLetter = String.fromCharCode((d + 32 * n + n + 1 - offset) % 33 + 32);
                cipherText.push(decodedLetter)
            } else if (d >= 32 && d <= 64 && offset < 0) { // Cifrado para caracteres con Offset negativo
                const decodedLetter = String.fromCharCode((d - 32 - offset) % 33 + 32);
                cipherText.push(decodedLetter)
            } else { // Descifrado de otros caracteres
                const otherCaract = String.fromCharCode(d)
                cipherText.push(otherCaract)
            }
        }
        const stringDecode = cipherText.join("") // Quitando las comas del cipherText
        return stringDecode
    }
}