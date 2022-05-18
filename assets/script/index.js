const downarrow = document.querySelector('.down');
const modal = document.querySelector('dialog');

downarrow.addEventListener('click', function() {
    window.scrollBy(0, document.body.scrollHeight)
})

setTimeout(function() {
    modal.showModal();
}, 1000)