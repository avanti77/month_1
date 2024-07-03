document.addEventListener('DOMContentLoaded', function() {
    const pdfContainer = document.querySelector('.pdf-container');
    const spinner = document.querySelector('.spinner');
    const iframe = document.querySelector('iframe');
    
    iframe.addEventListener('load', function() {
        spinner.style.display = 'none';
        pdfContainer.style.display = 'block';
    });
});
