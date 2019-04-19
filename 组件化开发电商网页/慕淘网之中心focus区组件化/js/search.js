// (function($) {
//     'use strict';

//     var $search = $('.search'),
//         $form = $search.find('search-form'),
//         $input = $search.find('.search-inputbox'),
//         $btn = $search.find('.search-btn'),
//         $layer = $search.find('.search-layer');

//     //验证
//      console.log($form );
//      console.log($input );
//      console.log($btn );
//     $btn.on('click', function() {

//         console.log(1);
//         if ($.trim($input.val()) === '') {
//             return false;
//         }
//     });

//     // $form.on('submit', function() {

//     //     console.log(1);
//     //     if ($.trim($input.val()) === '') {
//     //         return false;
//     //     }
//     // });

//     // 自动完成
//     $input.on('input', function() {
//         var url = 'https://suggest.taobao.com/sug?code=utf-8&_ksTS=1484204931352_18291&callback=jsonp18292&k=1&area=c2c&bucketid=6&q=' + encodeURIComponent($.trim($input.val()));

//         $.ajax({
//             url: url,
//             dataType: 'jsonp'
//         }).done(function(data) {
//             console.log(data);
//             var html = '',
//                 dataNum = data['result'].length,
//                 maxNum = 10;
//             if (dataNum === 0) {
//                 $layer.hide().html('');
//                 return;
//             }
//             for (var i = 0; i < dataNum; i++) {
//                 if (i >= maxNum) break;
//                 html += '<li class="search-layer-item text-ellipsis">' + data['result'][i][0] + '</li>';
//             }
//             $layer.html(html).show();

//         }).fail(function() {
//             $layer.hide().html('');
//         }).always(function() {
//             console.log('why always me!');
//         });
//     });

//     $layer.on('click', '.search-layer-item', function() {
//         $input.val(removeHtmlTags($(this).html()));
//         // $input.parents().submit();
//         $form.submit();
//     })

//     $input.on('focus', function() {
//         $layer.show();
//     }).on('click', function() {
//         return false;
//     });
//     $(document).on('click', function() {
//         $layer.hide();
//     })

//     function removeHtmlTags(str) {
//         return str.replace(/<(?:[^>'"]|"[^"]*"|'[^']*')*>/g, '');
//     };

// })(jQuery);


// 面向对象方式实现搜索功能

(function ($) {
    'use strict';

    var cache = {
        data: {},
        count: 0,
        addData: function (key, data) {
            if (!this.data[key]) {
                this.data[key] = data;
                this.count++;
            }
        },
        readData: function (key) {
            return this.data[key];
        },
        deleteDataByKey: function (key) {
            delete this.data[key];
            this.count--;
        },
        deleteDataByOrder: function (num) {
            var count = 0;

            for (var p in this.data) {
                if (count >= num) {
                    break;
                }
                count++;
                this.deleteDataByKey(p);
            }
        }
    };

    function Search($elem, options) {
        this.$elem = $elem;
        this.options = options;

        this.$form = this.$elem.find('.search-form');
        this.$input = this.$elem.find('.search-inputbox');
        this.$layer = this.$elem.find('.search-layer');
        this.loaded = false;
        this.$elem.on('click', '.search-btn', $.proxy(this.submit, this));
        if (this.options.autocomplete) {
            this.autocomplete();
        }

    }

    Search.DEFAULTS = {
        autocomplete: false,
        url: 'https://suggest.taobao.com/sug?code=utf-8&_ksTS=1484204931352_18291&callback=jsonp18292&k=1&area=c2c&bucketid=6&q=',
        css3: false,
        js: false,
        animation: 'fade',
        getDataInterval: 200

    };
    Search.prototype.submit = function () {
        if (this.getInputVal() === '') {
            return false;
        }
        this.$form.submit();
    };
    Search.prototype.autocomplete = function () {
        var timer = null,
            self = this;
        this.$input
            .on('input', function () {
                if (self.options.getDataInterval) {

                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        self.getData();
                    }, self.options.getDataInterval);
                } else {
                    self.getData();
                }

            })
            .on('focus', $.proxy(this.showLayer, this))
            .on('click', function () {
                return false;
            });

        this.$layer.showHide(this.options);
        $(document).on('click', $.proxy(this.hideLayer, this));
    };

    Search.prototype.getData = function () {
        var self = this;
        var inputVal = this.getInputVal();
        if (inputVal == '') return self.$elem.trigger('search-noData');
        if (cache.readData(inputVal)) return self.$elem.trigger('search-getData', [cache.readData(inputVal)]);
        if (this.jqXHR) this.jqXHR.abort();
        this.jqXHR = $.ajax({
            url: this.options.url + inputVal,
            dataType: 'jsonp'
        }).done(function (data) {
            console.log(data);
            cache.addData(inputVal, data);
            console.log(cache.data);
            console.log(cache.count);
            self.$elem.trigger('search-getData', [data]);
        }).fail(function () {
            self.$elem.trigger('search-noData');
        }).always(function () {
            self.jqXHR = null;
        });

    };
    Search.prototype.showLayer = function () {
        if (!this.loaded) return;
        // if (this.$layer.children().length === 0) return;
        this.$layer.showHide('show');
    };
    Search.prototype.hideLayer = function () {
        this.$layer.showHide('hide');
    };

    Search.prototype.getInputVal = function () {
        return $.trim(this.$input.val());
    };

    Search.prototype.setInputVal = function (val) {
        this.$input.val(removeHtmlTags(val));

        function removeHtmlTags(str) {
            return str.replace(/<(?:[^>'"]|"[^"]*"|'[^']*')*>/g, '');
        }
    };

    Search.prototype.appendLayer = function (html) {
        this.$layer.html(html);
        this.loaded = !!html;
    };


    $.fn.extend({
        search: function (option, value) {


            return this.each(function () {

                var $this = $(this),
                    search = $this.data('search'),
                    options = $.extend({}, Search.DEFAULTS, $(this).data(), typeof option === 'object' && option);

                if (!search) {
                    $this.data('search', search = new Search($this, options));

                }

                if (typeof search[option] === 'function') {
                    search[option](value);

                }

            });

        }
    });
})(jQuery);