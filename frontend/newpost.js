$('#post').click(function(){
    createNewPost();
});

$('#photo').change(function(){
    previewPhoto($('#photo').val());
});

function createNewPost(){

    var uname = $('#username').val();
    var title = $('#title').val();
    var comment = $('#comment').val();
    var photo = $('#photo').val();
    moment.locale('th');
    var newpost = {
        // POINT 8. Use jQuery to get form data and create an object for new post
        username : uname,
        title : title,
        comment : comment,
        image_url : photo,
        create_date: moment().format('LLL')
    };

    var url = 'http://localhost:8080/api/posts/newpost';
    // POINT 9. Insert data to REST API with axios

    axios.post(url, newpost)
    .then(function (response){
        window.location.href = "http://localhost:8080/";
    })
    .catch(function (error){
        console.log(error)
    });
}

function previewPhoto(src){
    $('#preview').attr('src', src);
}