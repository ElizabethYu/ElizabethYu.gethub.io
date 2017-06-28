document.getElementById('go').onclick = function() {
    var inputText = $('#text-input').val();
    var thugifiedText = inputText + ", bruh";
    document.getElementById('output').innerHTML = thugifiedText;
};

 