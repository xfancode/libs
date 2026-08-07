// avlet.js by xFaN
const avlet = (function() {
    const darkColors = ["#4f378b","#2c5a2c","#8b2c2c","#2c5f6e","#6e4c2c","#5c2c6e","#2c6e5c","#6e2c4c","#3a6e2c","#6e5c2c"];
    function hashString(str) {let hash = 0; for (let i = 0; i < str.length; i++) {hash = ((hash << 5) - hash) + str.charCodeAt(i); hash |= 0; } return Math.abs(hash); }
    function getColorFromText(text) {return darkColors[hashString(text) % darkColors.length]; }
    function getFirstLetter(text) {if (!text || text.trim() === "") return "?"; return text.trim().charAt(0).toUpperCase(); }
    function getImage(text, size = 64) {const letter = getFirstLetter(text); const bgColor = getColorFromText(text);
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = bgColor;
    ctx.fill();
    ctx.fillStyle = "#eaddff";
    ctx.font = `${size * 0.5}px 'Segoe UI', 'Inter', sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(letter, size / 2, size / 2);
    return canvas.toDataURL("image/png"); }
    return { getImage }; })();