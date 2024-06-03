document.getElementById('reloadButton').addEventListener('click', () => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Reloading...';

    chrome.runtime.sendMessage({ action: 'reload' }, (response) => {
        if (response && response.success) {
            messageElement.textContent = 'Reloaded successfully!';
        } else {
            messageElement.textContent = 'Failed to reload.';
        }
    });
});
