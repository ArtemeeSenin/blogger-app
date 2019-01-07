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

        const errorFields = checkValidity(payload);
        if(errorFields){

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
                    window.location.href = `/posts/${data._id}`;

                })
        }
    })
}