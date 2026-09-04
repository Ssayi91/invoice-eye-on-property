document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('click', () => {
        window.print();
    });
});