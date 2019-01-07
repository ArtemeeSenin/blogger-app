document.addEventListener("DOMContentLoaded", ready);

function ready() {
    const button = document.querySelector('#delete');
    button.addEventListener('click', function (e) {
        e.preventDefault();
        fetch('/api/posts/' + e.target.dataset.id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                window.location.href = '/'
            })
            .catch(err => console.error(err))
    })
}