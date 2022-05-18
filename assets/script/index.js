const downarrow = document.querySelector('.down');
const modal = document.querySelector('#first')
const manageModal = document.querySelector('#second');
const accept = document.getElementById('close');
const manage = document.getElementById('manage');
const saveBtn = document.getElementById('save');
let mAge = 20;

let osCheck = document.getElementById('os');
let broswerCheck = document.getElementById('browser');
let widthCheck = document.getElementById('sWidth');
let heightCheck = document.getElementById('sHeight');

downarrow.addEventListener('click', function() {
    window.scrollBy(0, document.body.scrollHeight)
})

function getCookie(cookieName) {
    const match = document.cookie.match(new RegExp("(^| )" + encodeURIComponent(cookieName) + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : `Cookie '${cookieName}' not found`;
}

function setCookie(name, value, options = {}) {
    const opt = {
        path: '/',
        SameSite: 'Lax',
        ...options
    }
    
    let optionsStr = '';

    if(opt.expires && opt.expires instanceof Date) {
        opt.expires = opt.expires.toUTCString();
    }    

    Object.keys(opt).forEach(key => {
        optionsStr += `${key}=${opt[key]};`
    })

    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};${optionsStr}`
}

function browserName() {
    let browser = navigator.userAgent;

    if(browser.includes('Chrome')) {
        return 'Chrome';
    } else if(browser.includes('Edge')) {
        return 'Edge';
    } else if(browser.includes('Safari')) {
        return 'Safari';
    } else if(browser.includes('Opera')) {
        return 'Opera';
    } else if(browser.includes('Firefox')) {
        return 'Firefox';
    } else {
        return 'Unknown Browser';
    }
}

function operatingSystemName() {
    let os = navigator.userAgent;

    if(os.includes('Windows')) {
        return 'Windows';
    } else if (os.includes('Mac')) {
        return 'Mac';
    } else if (os.includes('Linux')) {
        return 'Linux';
    } else {return 'Unknown Operating System'}
}

if(!document.cookie) {
    setTimeout(function (){
        modal.showModal();
    }, 700);
}

accept.addEventListener('click', function() {
    setCookie('Operating System', operatingSystemName(), {'max-age':mAge});
    setCookie('Browser', browserName(), {'max-age':mAge});
    setCookie('Screen Height', screen.height, {'max-age':mAge});
    setCookie('Screen Width', screen.width, {'max-age':mAge});
    modal.close();
})

manage.addEventListener('click', function() {
    modal.close();
    manageModal.showModal();
})

saveBtn.addEventListener('click', function() {

    if(osCheck.checked){
        setCookie('Operating System', operatingSystemName(), {'max-age':mAge});
    }

    if(broswerCheck.checked){
        setCookie('Browser', browserName(), {'max-age':mAge});
    }

    if(widthCheck.checked){
        setCookie('Screen Height', screen.height, {'max-age':mAge});
    }

    if(heightCheck.checked){
        setCookie('Screen Width', screen.width, {'max-age':mAge});
    }

    if(!document.cookie) {
        setCookie('Disabled', 'disabled', {'max-age':mAge});
    }

    manageModal.close();
})

console.log(getCookie('Browser'));
console.log(getCookie('Operating System'));
console.log(getCookie('Screen Height'));
console.log(getCookie('Screen Width'));