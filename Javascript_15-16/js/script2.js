
$('.google_search').on('click', searching());

function searching(){
    var result = $('#result');
    result.html('');
    }

window.pixabayCallback = function(data) {

    };

$.ajax({
        url: 'https://pixabay.com/api/',
        data: {
            key: '2752016-4fdc55509940bb2ec126f7894',
            q: name,
            callback: pixabayCallback(),
        },
        method: 'GET',
        dataType: 'jsonp',
        error: function(){
            alert('Error');
        },
        success: function(data){
            var hits = data.hits;
            for (var i = 0; i < hits.length; i++) {
                var url = hits[i].userImageURL;
                result.append(url);
            }

        },
    });
