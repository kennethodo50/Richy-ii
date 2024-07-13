document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector('.copy-button');
    const contractAddress = document.querySelector('.contract-address span').textContent;

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(contractAddress).then(() => {
            alert('Contract address copied to clipboard');
        });
    });
});