const downarrow = document.querySelector('.down');
const modal = document.querySelector('dialog');
const accept = document.getElementById('close')
const manage = document.getElementById('manage')

downarrow.addEventListener('click', function() {
    window.scrollBy(0, document.body.scrollHeight)
})

setTimeout(function() {
    modal.showModal();
}, 1000)

accept.addEventListener('click', function() {
    modal.close();
})