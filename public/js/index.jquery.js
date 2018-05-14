$('.btn').click((e) => {
    e.preventDefault();
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'https://full-stack-js.herokuapp.com/api/v1/todos'
    })
    .done(addTodo)
    .fail(error)
});

function addTodo(data) {
    console.log(data);
}

function error() {
    window.alert('Ooops!! there was a problem');
}