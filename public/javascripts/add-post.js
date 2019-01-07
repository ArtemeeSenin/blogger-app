document.addEventListener("DOMContentLoaded", ready);
function checkValidity(payload){
    return Object.keys(payload).filter(el => payload[el] == false)
}
function ready() {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const payload = {
            title: form.title.value,
            content: form.content.value,
            categories: [...form.categories.selectedOptions].map( option => option.value)
        }
        form.submit.setAttribute('disabled', 'disabled');
        const errorFields = checkValidity(payload);
        if(errorFields.length){
            Object.keys(payload).map( field => {
                errorFields.includes(field) ?
                    form[field].classList.add('error') :
                    form[field].classList.remove('error')
            })
            form.submit.removeAttribute('disabled');
            return;
        } else {
            const data = JSON.stringify(payload);
            fetch('/api/posts', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: data
            })
                .then( res => res.json())
                .then( data => {
                    form.submit.removeAttribute('disabled');
                    window.location.href = `/posts/${data._id}`;
                    return;
                })
        }
    })
}