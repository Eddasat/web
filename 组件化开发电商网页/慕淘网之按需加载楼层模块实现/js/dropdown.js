(function($) {
    'use strict'

    function Dropdown($elem, options) {
        this.$elem = $elem;
            this.options = options;
        this.$layer = this.$elem.find('.dropdown-layer'),
            this.activeClass = options.active + '-active';
        // this.$layer.showHide(options);
        // var self=this;
        // this.$layer.on('show shown hide hidden',function (e) {
        //     self.$elem.trigger('dropdown-'+e.type);
            // console.log(e.type);
        // });

        //this.$elem.hover(this.show, this.hide);注意this的指向问题修改如下
        // var self=this;
        // this.$elem.hover(function () {
        //     self.show();
        // }, function () {
        //     self.hide();
        // });

        // var self = this;

        // if (options.event === 'click') {
        //     this.$elem.on('click', function(e) {
        //         self.show();
        //         e.stopPropagation();
        //     });
        //     $(document).on('click', $.proxy(this.hide, this));

        // } else {
        //     this.$elem.hover($.proxy(this.show, this), $.proxy(this.hide, this));

        // }

        this._init();
    }

    Dropdown.DEFAULTS = {
        event: "hover",
        css3: true,
        js: true,
        animation: 'fade',
        delay: 0,
        active: 'dropdown'
    };
    Dropdown.prototype._init=function () {
        var self=this;
        this.$layer.showHide(this.options);       
        this.$layer.on('show shown hide hidden',function (e) {
            self.$elem.trigger('dropdown-'+e.type);
            
        });

        if (this.options.event === 'click') {
            this.$elem.on('click', function(e) {
                self.show();
                e.stopPropagation();
            });
            $(document).on('click', $.proxy(this.hide, this));

        } else {
            this.$elem.hover($.proxy(this.show, this), $.proxy(this.hide, this));

        }
    }



    // this.$elem.addClass(this.activeClass);
    //     this.$layer.showHide('show');
    Dropdown.prototype.show = function() {
        var self = this;
        if (this.options.delay) {
            this.timer = setTimeout(function() {
                _show();
            }, this.options.delay);
        } else {
            _show();
        }

        function _show() {
            self.$elem.addClass(self.activeClass);
            self.$layer.showHide('show');
        }

    }

    Dropdown.prototype.hide = function() {
        if(this.options.delay){
            clearTimeout(this.timer);

        }
        this.$elem.removeClass(this.activeClass);
        this.$layer.showHide('hide');
    }

    // var dropdown = new Dropdown();
    // var dropdown2 = new Dropdown();
    // var dropdown3 = new Dropdown();
    // dropdown.show();
    // dropdown.hide();






    // function dropdown(elem, options) {
    //     var $elem = $(elem),
    //         $layer = $elem.find('.dropdown-layer'),
    //         activeClass = $elem.data('active') + '-active';
    //     // $layer.showHide({
    //     //     css3: true,
    //     //     js: true,
    //     //     animation: 'slideUpDown'

    //     // });  //在这里传参，不方便，易于出错，应该在调用时传参。

    //     $layer.showHide(options);
    //     $elem.hover(function() {
    //         $elem.addClass(activeClass);
    //         $layer.showHide('show');
    //     }, function() {
    //         $elem.removeClass(activeClass);
    //         $layer.showHide('hide');
    //     });

    // }

    // var defaults = {
    //     css3: true,
    //     js: true,
    //     animation: 'slideUpDown'
    // };

    $.fn.extend({
        dropdown: function(option) {
            return this.each(function() {
                
                var $this=$(this),
                dropdown=$this.data('dropdown'),
                options = $.extend({}, Dropdown.DEFAULTS, $(this).data(), typeof option==='object'&&option);
                // dropdown(this, options);  
                if(!dropdown){//解决多次调用dropdown问题
                    $this.data('dropdown',dropdown=new Dropdown($this,options));

                }  

                if(typeof dropdown[option]==='function'){
                    dropdown[option]();

                }

            });

        }
    });


})(jQuery);