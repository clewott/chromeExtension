$(document).ready(function() {

  $.ajax({

    url: 'http://www.reddit.com/r/funny.json',
    method: 'GET',
    success:(function (data) {
      var reddit_pictures ='<ol>'
      for(var i = 1; i < 6; i++) {


        reddit_pictures += '<li><a href="' + data.data.children[i].data.url + '"><img src="' + data.data.children[i].data.thumbnail + '">'+ data.data.children[i].data.title + '</li>';

        }

        reddit_pictures += '</ol>';

        $('.list').html(reddit_pictures);


      console.log(data.data.children[i].data.thumbnail);
    }


  )



});

});
