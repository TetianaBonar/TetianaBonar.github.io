$(function() {
  $('google_search').on('click', getAjax);

  window.googleCallback = function(data) {

  };
      function getAjax(e) {
        e.preventDefault();
        $.ajax({
          url: 'http://ajax.googleapis.com/ajax/services/search/web',
          method: 'GET',
          dataType: 'jsonp',
          data: {
            key: 'ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg',
            q: $('.search-input').val(),
            callback: googleCallback
          },
                     success: function(data) {
                       var ul = document.createElement("ul");
                        $.each(data.ResultSet.Result, function(i, val) {
                          var li = document.createElement("li");
                          var inner = '<a href="' + val.Url + '" title="' + val.Url + '" target="_blank">' + val.Title + "</a>";
                          if (val.Summary != "" && val.Summary != "undefined") {
                            inner += " - " + val.Summary;
                        }
                           li.innerHTML = inner;
                           ul.appendChild(li);
                         });
                         $('body').html(ul);
                       },
                           error: function() {
                             alert("Page not found");
                         }
            });
       };
  });
  // $.ajax({
  //   url: 'http://ajax.googleapis.com/ajax/services/search/web',
  //            dataType: 'jsonp',
