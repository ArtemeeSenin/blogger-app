document.addEventListener("DOMContentLoaded", ready);

function ready() {
    const button = document.querySelector('#delete');
    button.addEventListener('click', function (e) {
        console.log(e, e.target);
        e.preventDefault();
        fetch('/api/posts/' + e.target.dataset.id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)

                window.location.href = '/'
            })
            .catch(err => console.error(err))
    })
}