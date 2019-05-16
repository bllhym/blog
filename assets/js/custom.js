$(function () { 
    $('#search .btn-search').on('click', function () { 
        var keyword = $.trim($('#search .keyword'.val()));
        $('#search .btn-search').val(keyword + ' site:bllhym.github.io/blog');
        $('#search').submit();
    })
})