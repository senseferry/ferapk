var mql = window['matchMedia']('screen and (min-width: 60em)');
$(document)['ready'](function() {
    function _0xe953x2(_0xe953x3, _0xe953x4, _0xe953x5) {
        $['ajax']({
            url: '/feeds/posts/default/-/' + _0xe953x4 + '?alt=json-in-script&max-results=' + _0xe953x5,
            type: 'get',
            dataType: 'jsonp',
            success: function(_0xe953x6) {
                for (var _0xe953x7 = '', _0xe953x8 = '<div class="related">', _0xe953x9 = 0; _0xe953x9 < _0xe953x6['feed']['entry']['length']; _0xe953x9++) {
                    for (var _0xe953xa = 0; _0xe953xa < _0xe953x6['feed']['entry'][_0xe953x9]['link']['length']; _0xe953xa++) {
                        if ('alternate' == _0xe953x6['feed']['entry'][_0xe953x9]['link'][_0xe953xa]['rel']) {
                            _0xe953x7 = _0xe953x6['feed']['entry'][_0xe953x9]['link'][_0xe953xa]['href'];
                            break
                        }
                    };
                    var _0xe953xb = _0xe953x6['feed']['entry'][_0xe953x9]['title']['$t'];
                    var _0xe953xc = _0xe953x6['feed']['entry'][_0xe953x9]['content']['$t'];
                    var _0xe953xd = $('<div>')['html'](_0xe953xc);
                    if (_0xe953xc['indexOf']('https://www.youtube.com/embed/') > -1 || _0xe953xc['indexOf']('https://www.youtube.com/embed/') > -1) {
                        var _0xe953xe = _0xe953x6['feed']['entry'][_0xe953x9]['media$thumbnail']['url'],
                            _0xe953xf = _0xe953xe['replace']('/default.jpg', '/mqdefault.jpg'),
                            _0xe953x10 = _0xe953xf
                    } else {
                        if (_0xe953xc['indexOf']('<img') > -1) {
                            var _0xe953x11 = _0xe953xd['find']('img:first')['attr']('src'),
                                _0xe953x12 = _0xe953x11['replace']('s72-c', 's600');
                            var _0xe953x10 = _0xe953x12
                        } else {
                            var _0xe953x10 = 'https://4.bp.blogspot.com/-FfR2AAeeU1M/W0DY05I6t5I/AAAAAAAAAFs/ZdtUHKAQuyYI9i_yuMqPmAur1bISbzePACLcBGAs/s1600/noImage.png'
                        }
                    };
                    _0xe953x8 += '<li><div class="related-thumb"><a class="related-img" href="' + _0xe953x7 + '" style="background:url(' + _0xe953x10 + ') no-repeat center center;background-size: cover"/></div><h3 class="related-title"><a href="' + _0xe953x7 + '">' + _0xe953xb + '</a></h3></li>'
                };
                _0xe953x8 += '</div>', _0xe953x3['html'](_0xe953x8)
            }
        })
    }
    $('#related-posts')['each'](function() {
        var _0xe953x3 = $(this),
            _0xe953x4 = _0xe953x3['text'](),
            _0xe953x5 = 3;
        _0xe953x2(_0xe953x3, _0xe953x4, _0xe953x5)
    })
});
$(document)['ready'](function() {
    $('.comments')['not'](':has(.comment-form)')['addClass']('not_have_comment_form'), $('.comments:has(.comment-form)')['addClass']('has-comment-form')
});
$(window)['scroll'](function() {
    $(this)['scrollTop']() > 200 ? $('#back-to-top')['fadeIn']() : $('#back-to-top')['fadeOut']()
}), $('#back-to-top')['hide']()['click'](function() {
    return $('html, body')['animate']({
        scrollTop: 0
    }, 400), !1
})