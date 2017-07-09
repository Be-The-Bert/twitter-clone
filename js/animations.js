$(document).ready(function() {
   


    $('.tweet-compose').on('click', function() {
        $('#tweet-controls').show();
        $(this).css('height', '5em');
        $(this).keyup(function() {
            var maxLength = 140;
            var currentLength = $(this).val().length;
            var counterLength = maxLength - currentLength;
            $('#char-count').text(counterLength);
            if (counterLength <= 10) {
                $('#char-count').css('color', 'red');
            } else {
                $('#char-count').css('color', '#999');
            }
            if (counterLength < 0) {
                $('#tweet-submit').prop('disabled', true);
            } else {
                $('#tweet-submit').prop('disabled', false);
            }
        });
    });
     $('#tweet-submit').on('click', function() { 
        var temp = $('.tweet:first-of-type').clone();
        // temp.find('.avatar').prop('src', 'img/damenleeturks.jpg');
        // temp.find('.fullname').html('A Different Name');
        // temp.find('.username').html('@myUsername');
        // temp.find('.tweet-text').html(tweetCompose.val());
        $("#stream").prepend(temp);
     });
    




















});