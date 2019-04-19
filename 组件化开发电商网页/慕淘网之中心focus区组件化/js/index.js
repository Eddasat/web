(function ($) {


    $('.menu').on('dropdown-show', function (e) {
        loadOnce($(this), buildMenuItem);
    });

    //menu 下拉菜单设置
    $(".menu").dropdown({

        css3: true,
        js: false

    });


    //header search
    var $headerSearch = $('#header-search');
    var html = '',
        maxNum = 10;

    // 获得数据处理
    $headerSearch.on('search-getData', function (e, data) {
        var $this = $(this);
        html = createHeaderSearchLayer(data, maxNum);
        $this.search('appendLayer', html);
        // 将生成的html呈现在页面中        
        if (html) {
            $this.search('showLayer');
        } else {
            $this.search('hideLayer');

        }
    }).on('search-noData', function (e) {
        // 没获得数据处理
        $(this).search('hideLayer').search('appendLayer', '');

    }).on('click', '.search-layer-item', function () {
        // 点击每项时，提交
        $headerSearch.search('setInputVal', $(this).html());
        $headerSearch.search('submit');
    });

    $headerSearch.search({
        autocomplete: true,
        css3: false,
        js: false,
        animation: 'fade',
        getDataInterval: 0
    });

    // 获取数据，生成html
    function createHeaderSearchLayer(data, maxNum) {
        var html = '',
            dataNum = data['result'].length;

        if (dataNum === 0) {
            return '';
        }
        for (var i = 0; i < dataNum; i++) {
            if (i >= maxNum) break;
            html += '<li class="search-layer-item text-ellipsis">' + data['result'][i][0] + '</li>';
        }
        return html;

    }


    function loadOnce($elem, success) {
        var dataLoad = $elem.data('load');

        if (!dataLoad) return;

        if (!$elem.data('loaded')) {
            $elem.data('loaded', true);
            $.getJSON(dataLoad).done(function (data) {
                if (typeof success === 'function') success($elem, data);
            }).fail(function () {
                $elem.data('loaded', false);
            });
        }
    }

    function buildMenuItem($elem, data) {

        var html = "";
        if (data.length === 0) return;
        for (var i = 0; i < data.length; i++) {
            html += '<li><a href="' + data[i].url + '" target="_blank" class="menu-item">' + data[i].name + '</a></li>'
        }
        $elem.find('.dropdown-layer').html(html);

    }


})(jQuery);