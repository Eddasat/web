(function ($) {

    'use strict';
    //menu
    var dropdown = {};
    $('.menu')
        .on('dropdown-show', function (e) {
            dropdown.loadOnce($(this), dropdown.buildMenuItem);
        })
        .dropdown({
            css3: true,
            js: false
        });

    dropdown.buildMenuItem = function ($elem, data) {

        var html = "";
        if (data.length === 0) return;
        for (var i = 0; i < data.length; i++) {
            html += '<li><a href="' + data[i].url + '" target="_blank" class="menu-item">' + data[i].name + '</a></li>'
        }
        $elem.find('.dropdown-layer').html(html);

    };

    //cart
    $('#cart').on('dropdown-show', function () {
        dropdown.loadOnce($(this), function ($elem, data) {
            dropdown.buildCartItem($elem, data);
            dropdown.updateCart($elem, data);
        });
    }).dropdown({

        css3: true,
        js: false
    });


    dropdown.buildCartItem = function ($elem, data) {

        var html = "";
        if (data.length === 0) { // no goods
            html += '<div class="cart-nogoods"><i class="icon cart-nogoods-icon fl">&#xe600;</i><div class="cart-nogoods-text fl">购物车里还没有商品<br />赶紧去选购吧！</div></div>';
            $elem.find('.dropdown-layer').html(html);
            return;
        }

        html += '<h4 class="cart-title">最新加入的商品</h4><ul class="cart-list">';

        for (var i = 0; i < data.length; i++) {
            html += '<li class="cart-item"><a href="###" target="_blank" class="cart-item-pic fl"><img src="' + data[i].pic + '" alt="" /></a><div class="fl"><p class="cart-item-name text-ellipsis"><a href="###" target="_blank" class="link">' + data[i].name + '</a></p><p class="cart-item-price"><strong>￥' + data[i].price + ' x ' + data[i].num + '</strong></p></div><a href="javascript:;" title="删除" class="cart-item-delete link fr">X</a></li>';
        }

        html += '</ul><div class="cart-info"><span class="fl">共 <strong class="cart-total-num">0</strong> 件商品　共计<strong class="cart-total-price">￥ 0.00</strong></span><a href="###" target="_blank" class="cart-info-btn btn fr">去购物车</a></div>';

        // setTimeout(function(){
        $elem.find('.dropdown-layer').html(html);
        // },1000);
    };

    function updateCart($elem, data) {
        var $cartNum = $elem.find('.cart-num'),
            $cartTotalNum = $elem.find('.cart-total-num'),
            $cartTotalPrice = $elem.find('.cart-total-price'),
            dataNum = data.length,
            totalNum = 0,
            totalPrice = 0;

        if (dataNum === 0) { // no goods
            return;
        }

        for (var i = 0; i < dataNum; i++) {
            totalNum += +data[i].num;
            totalPrice += +data[i].num * +data[i].price;
        }

        $cartNum.html(totalNum);
        $cartTotalNum.html(totalNum);
        $cartTotalPrice.html('￥' + totalPrice);
    };


    //header search
    var search = {};
    search.$headerSearch = $('#header-search');
    search.$headerSearch.html = '';
    search.$headerSearch.maxNum = 10;

    // 获得数据处理
    search.$headerSearch.on('search-getData', function (e, data) {
        var $this = $(this);
        search.$headerSearch.html = search.$headerSearch.createHeaderSearchLayer(data, search.$headerSearch.maxNum);
        $this.search('appendLayer', search.$headerSearch.html);
        // 将生成的html呈现在页面中
        if (search.$headerSearch.html) {
            $this.search('showLayer');
        } else {
            $this.search('hideLayer');

        }
    }).on('search-noData', function (e) {
        // 没获得数据处理
        $(this).search('hideLayer').search('appendLayer', '');

    }).on('click', '.search-layer-item', function () {
        // 点击每项时，提交
        search.$headerSearch.search('setInputVal', $(this).html());
        search.$headerSearch.search('submit');
    });

    search.$headerSearch.search({
        autocomplete: true,
        css3: false,
        js: false,
        animation: 'fade',
        getDataInterval: 0
    });

    // 获取数据，生成html

    search.$headerSearch.createHeaderSearchLayer = function (data, maxNum) {
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

    };

    // focus-category

    $('#focus-category').find('.dropdown')
        .on('dropdown-show', function () {
            dropdown.loadOnce($(this), dropdown.createCategoryDetails);
        })
        .dropdown({
            css3: false,
            js: false
        });

    dropdown.createCategoryDetails = function ($elem, data) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += '<dl class="category-details cf"><dt class="category-details-title fl"><a href="###" target="_blank" class="category-details-title-link">' + data[i].title + '</a></dt><dd class="category-details-item fl">';

            for (var j = 0; j < data[i].items.length; j++) {
                html += '<a href="###" target="_blank" class="link">' + data[i].items[j] + '</a>';
            }
            html += '</dd></dl>';
        }
        // setTimeout(function () {
        $elem.find('.dropdown-layer').html(html);
        // },1000);

    };

    dropdown.loadOnce = function ($elem, success) {
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
    };


    // foucs-slider
    var slider = {};
    slider.$focusSlider = $('#focus-slider');
    slider.loadImg = function (url, imgLoaded, imgFailed) {
        var image = new Image();
        image.onerror = function () {
            if (typeof imgFailed === 'function') imgFailed(url);
        }
        image.onload = function () {
            if (typeof imgLoaded === 'function') imgLoaded(url);
        };
        image.src = url;
        // setTimeout(function() {
        //     image.src = url;
        // }, 1000);
    };

    slider.lazyLoad = function ($elem) {
        $elem.items = {};
        $elem.loadedItemNum = 0;
        $elem.totalItemNum = $elem.find('.slider-img').length;
        $elem.on('slider-show', $elem.loadItem = function (e, index, elem) {
            console.log(1);
            if ($elem.items[index] !== 'loaded') {
                $elem.trigger('slider-loadItem', [index, elem]);
            }
        });
        $elem.on('slider-loadItem', function (e, index, elem) {
            // 按需加载
            var $imgs = $(elem).find('.slider-img');
            $imgs.each(function (_, el) { // _ 相当占位，不使用该参数。
                var $img = $(el);
                slider.loadImg($img.data('src'), function (url) {
                    $img.attr('src', url);
                    $elem.items[index] = 'loaded';
                    $elem.loadedItemNum++;
                    console.log(index + ': loaded');
                    if ($elem.loadedItemNum === $elem.totalItemNum) {
                        // 全部加载完毕
                        $elem.trigger('slider-itemsLoaded');
                    }
                }, function (url) {
                    console.log('从' + url + '加载图片失败');
                    // 多加载一次
                    // 显示备用图片
                    $img.attr('src', '../img/focus-slider/placeholder.png');
                });
            });

        });

        $elem.on('slider-itemsLoaded', function (e) {
            console.log('itemsLoaded');
            // 清除事件
            $elem.off('slider-show', $elem.loadItem);
        });

    }


    slider.lazyLoad(slider.$focusSlider);
    slider.$focusSlider.slider({
        css3: true,
        js: false,
        animation: 'fade', // fade  slide
        activeIndex: 0,
        interval: 0
    });


    // todays-slider
    slider.$todaysSlider = $('#todays-slider');
    slider.lazyLoad(slider.$todaysSlider);
    slider.$todaysSlider.slider({
        css3: true,
        js: false,
        animation: 'fade', // fade  slide
        activeIndex: 0,
        interval: 0
    });


    // var $focusSlider = $('#focus-slider');
    // $focusSlider.items = {};
    // $focusSlider.loadedItemNum = 0;
    // $focusSlider.totalItemNum = $focusSlider.find('.slider-img').length;
    // $focusSlider.on('slider-show', $focusSlider.loadItem = function(e, index, elem) {
    //     console.log(1);
    //     if ($focusSlider.items[index] !== 'loaded') {
    //         $focusSlider.trigger('slider-loadItem', [index, elem]);
    //     }
    // });
    // $focusSlider.on('slider-loadItem', function(e, index, elem) {
    //         // 按需加载
    //         var $imgs = $(elem).find('.slider-img');
    //         $imgs.each(function(_, el) { // _ 相当占位，不使用该参数。
    //                 var $img = $(el);
    //                 loadImg($img.data('src'), function(url) {
    //                     $img.attr('src', url);
    //                     $focusSlider.items[index] = 'loaded';
    //                     $focusSlider.loadedItemNum++;
    //                     console.log(index + ': loaded');
    //                     if ($focusSlider.loadedItemNum === $focusSlider.totalItemNum) {
    //                         // 全部加载完毕
    //                         $focusSlider.trigger('slider-itemsLoaded');
    //                     }
    //                 }, function(url) {
    //                     console.log('从' + url + '加载图片失败');
    //                     // 多加载一次
    //                     // 显示备用图片
    //                     $img.attr('src', '../img/focus-slider/placeholder.png');
    //                 });

    //             }


    //         });

    //     $focusSlider.on('slider-itemsLoaded', function(e) {
    //         console.log('itemsLoaded');
    //         // 清除事件
    //         $focusSlider.off('slider-show', $focusSlider.loadItem);
    //     });


    //     function loadImg(url, imgLoaded, imgFailed) {
    //         var image = new Image();
    //         image.onerror = function() {
    //             if (typeof imgFailed === 'function') imgFailed(url);
    //         }
    //         image.onload = function() {
    //             if (typeof imgLoaded === 'function') imgLoaded(url);
    //         };
    //         // image.src=url;
    //         setTimeout(function() {
    //             image.src = url;
    //         }, 1000);

    //     }


    //     $focusSlider.slider({
    //         css3: true,
    //         js: false,
    //         animation: 'fade', // fade  slide
    //         activeIndex: 0,
    //         interval: 0
    //     });


    //todays-slider
    // var $todaysSlider = $('#todays-slider');
    // $todaysSlider.items = {};
    // $todaysSlider.loadedItemNum = 0;
    // $todaysSlider.totalItemNum = $todaysSlider.find('.slider-img').length;
    // $todaysSlider.on('slider-show', $todaysSlider.loadItem = function(e, index, elem) {
    //     console.log(1);
    //     if ($todaysSlider.items[index] !== 'loaded') {
    //         $todaysSlider.trigger('slider-loadItem', [index, elem]);
    //     }
    // });
    // $todaysSlider.on('slider-loadItem', function(e, index, elem) {
    //     // 按需加载
    //     var $imgs = $(elem).find('.slider-img');
    //     $imgs.each(function(_, el) { // _ 相当占位，不使用该参数。
    //         var $img = $(el);
    //         loadImg($img.data('src'), function(url) {
    //             $img.attr('src', url);
    //             $todaysSlider.items[index] = 'loaded';
    //             $todaysSlider.loadedItemNum++;
    //             console.log(index + ': loaded');
    //             if ($todaysSlider.loadedItemNum === $todaysSlider.totalItemNum) {
    //                 // 全部加载完毕
    //                 $todaysSlider.trigger('slider-itemsLoaded');
    //             }
    //         }, function(url) {
    //             console.log('从' + url + '加载图片失败');
    //             // 多加载一次
    //             // 显示备用图片
    //             $img.attr('src', '../img/focus-slider/placeholder.png');
    //         });
    //     });

    // });

    // $todaysSlider.on('slider-itemsLoaded', function(e) {
    //     console.log('itemsLoaded');
    //     // 清除事件
    //     $todaysSlider.off('slider-show', $todaysSlider.loadItem);
    // });


    // function loadImg(url, imgLoaded, imgFailed) {
    //     var image = new Image();
    //     image.onerror = function() {
    //         if (typeof imgFailed === 'function') imgFailed(url);
    //     }
    //     image.onload = function() {
    //         if (typeof imgLoaded === 'function') imgLoaded(url);
    //     };
    //     // image.src=url;
    //     setTimeout(function() {
    //         image.src = url;
    //     }, 1000);

    // }


    // $todaysSlider.slider({
    //     css3: true,
    //     js: false,
    //     animation: 'fade', // fade  slide
    //     activeIndex: 0,
    //     interval: 0
    // });

})(jQuery);