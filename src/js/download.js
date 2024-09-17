// download.js
function downloadPDF() {
    const link = document.createElement('a');
    link.href = './path/to/your-cv.pdf'; // Ruta al archivo PDF que deseas descargar
    link.download = 'Nicolas_Viviescas_CV.pdf'; // Nombre que se usará al descargar el archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Asignar la función al objeto window para hacerla accesible globalmente
window.downloadPDF = downloadPDF;