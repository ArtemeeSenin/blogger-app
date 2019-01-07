document.addEventListener("DOMContentLoaded", ready);

function ready(){
    const postList = document.querySelector('#post-list');
    postList.addEventListener('click', function(e){
        if(e.target.dataset.id){
            e.preventDefault();
            fetch('/api/posts/' + e.target.dataset.id, {
                method: 'DELETE'
            })
            .then( res => res.json())
            .then( res => {
                const post = e.target.closest('.posts__post')
                postList.removeChild(post)
            })
            .catch( err => console.error(err))
        }
    })
}