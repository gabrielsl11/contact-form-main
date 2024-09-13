document.querySelector('.container').addEventListener('submit', (event) => {
    event.preventDefault();
    
    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#lname').value;
    let email = document.querySelector('#email').value;

    let gEnquiry = document.querySelector('#gEnquiry');
    let sRequest = document.querySelector('#sRequest');

    let message = document.querySelector('#message').value;

    let consent = document.querySelector('#consent');

    if (fname == '') {
        document.querySelector('.fnameHidden').classList.remove('text-hidden');
        document.querySelector('#fname').classList.add('input-danger');
    } else {
        document.querySelector('.fnameHidden').classList.add('text-hidden');
        document.querySelector('#fname').classList.remove('input-danger');
    }

    if (lname == '') {
        document.querySelector('.lnameHidden').classList.remove('text-hidden');
        document.querySelector('#lname').classList.add('input-danger');
    } else {
        document.querySelector('.lnameHidden').classList.add('text-hidden');
        document.querySelector('#lname').classList.remove('input-danger');
    }

    if (email == '') {
        document.querySelector('.emailHidden').classList.remove('text-hidden');
        document.querySelector('#email').classList.add('input-danger');
    } else {
        document.querySelector('.emailHidden').classList.add('text-hidden');
        document.querySelector('#email').classList.remove('input-danger');
    }

    if ((!gEnquiry.checked) && (!sRequest.checked)) {
        document.querySelector('.queryHidden').classList.remove('text-hidden');
    } else {
        document.querySelector('.queryHidden').classList.add('text-hidden');
    }

    if (message == '') {
        document.querySelector('.messageHidden').classList.remove('text-hidden');
        document.querySelector('#message').classList.add('input-danger');
    } else {
        document.querySelector('.messageHidden').classList.add('text-hidden');
        document.querySelector('#message').classList.remove('input-danger');
    }

    if (!consent.checked) {
        document.querySelector('.consentHidden').classList.remove('text-hidden');
    } else {
        document.querySelector('.consentHidden').classList.add('text-hidden');
    }
})