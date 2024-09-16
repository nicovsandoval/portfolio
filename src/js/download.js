// download.js
function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/nicolas-viviescas-cv.pdf';
    link.download = 'nicolas-viviescas-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
