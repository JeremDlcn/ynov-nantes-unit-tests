function createTODO(todo) {
    fetch('/todo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: todo, done: false })
        })
        .then(() => window.location.reload())
}

function doneTODO(event) {
    const { id } = event.target;
    fetch(`/todo/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ done: true })
        })
        .then(() => window.location.reload());
}


module.exports = {
    createTODO,
    doneTODO
}