$(function() {
    $('#search-input').bind('keyup', function() {
        var searchText = $(this).val();
        $.get('http://api.bing.com/qsonhs.aspx?q=' + searchText, function(d) {
            var d = d.AS.Results[0].Suggests;
            var html = '';
            for (var i = 0; i < d.length; i++) {
                html += '<li>' + d[i].Txt + '</li>';
            };
            $('#search-result').html(html);
            $('#search-suggest').show().css({
                position: 'absolute',
                left: $('#search-form').offset().left - 1,
                top: $('#search-form').offset().top + $('#search-form').height(),
            });
        }, 'json');
        $(document).bind("click", function() {
            $("#search-suggest").hide();
        });
        $(document).delegate('li', 'click', function() {
            var keyword = $(this).text();
            location.href = 'http://cn.bing.com/search?q=' + keyword;
        })
    })
})