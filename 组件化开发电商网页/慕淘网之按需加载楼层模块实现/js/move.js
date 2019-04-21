(function($) {
    'use strict';
    var transition = window.mt.transition;
    var init = function($elem) {
        this.$elem = $elem;
        this.curX = parseFloat(this.$elem.css('left'));
        this.curY = parseFloat(this.$elem.css('top'));

    }

    var to = function(x, y, callback) {
        x = (typeof x === 'number') ? x : this.curX;
        y = (typeof y === 'number') ? y : this.curY;
        if (this.curX === x && this.curY === y) return;

        this.$elem.trigger('move', [this.$elem]);
        if (typeof callback === 'function') {
            callback();
        }

        this.curX = x;
        this.curY = y;

    }

    var Silent = function($elem) {
        init.call(this, $elem); //改变this的指向，这里this指外面的this,如不使用call，this指init。
        this.$elem.removeClass('transition');


    };
    Silent.prototype.to = function(x, y) {
        var self = this;
        to.call(this, x, y, function() {

            self.$elem.css({
                left: x,
                top: y
            });
            self.$elem.trigger('moved', [self.$elem]);

        });




    };
    Silent.prototype.x = function(x) {
        // if(this.curX===x) return;
        // this.$elem.css({
        // 	left:x
        // });
        // this.curX=x;
        this.to(x);
    };
    Silent.prototype.y = function(y) {
        // if(this.curY===y) return;
        // this.$elem.css({
        // 	top:y
        // });
        // this.curY=y;
        this.to(null, y);

    };



    // css3 方式
    var Css3 = function($elem) {
        this.$elem = $elem;
        this.$elem.addClass('transition');
        this.curX = parseFloat(this.$elem.css('left'));
        this.curY = parseFloat(this.$elem.css('top'));
        this.$elem.css({
            left: this.curX,
            top: this.curY
        });

    };

    Css3.prototype.to = function(x, y) {
        var self = this;
        to.call(this, x, y, function() {


            self.$elem.off(transition.end).one(transition.end, function() {
                self.$elem.trigger('moved', [self.$elem]);
                //     self.$elem.data('status','moved');
                //     self.curX = x;
                //     self.curY = y;
            });

            self.$elem.css({
                left: x,
                top: y
            });

        });
        // x = (typeof x === 'number') ? x : this.curX;
        // y = (typeof y === 'number') ? y : this.curY;
        // if (this.curX === x && this.curY === y) return;
        // // if(this.$elem.data('status')==='moving') return;
        // // this.$elem.data('status','moving');
        // var self = this;
        // this.$elem.trigger('move', [this.$elem]);
        // this.$elem.off(transition.end).one(transition.end, function() {
        //     self.$elem.trigger('moved', [self.$elem]);
        //     //     self.$elem.data('status','moved');
        //     //     self.curX = x;
        //     //     self.curY = y;
        // });
        // // console.log(1);
        // this.$elem.css({
        //     left: x,
        //     top: y
        // });
        // this.curX = x;
        // this.curY = y;

    };
    Css3.prototype.x = function(x) {
        this.to(x);
    };
    Css3.prototype.y = function(y) {
        this.to(null, y);
    };





    // js方式
    var Js = function($elem) {
        init.call(this, $elem);
        this.$elem.removeClass('transition');


    };

    Js.prototype.to = function(x, y) {


        var self = this;
        to.call(this, x, y, function() {
            self.$elem.stop().animate({
                left: x,
                top: y
            }, function() {
                self.$elem.trigger('moved', [self.$elem]);
            });
        });
    };

    Js.prototype.x = function(x) {
        this.to(x);

    };
    Js.prototype.y = function(y) {
        this.to(null, y);

    };



    // var $box = $('#box'),
    //     $goBtn = $('#go-btn'),
    //     $backBtn = $('#back-btn'),
    //     move = new Js($box);

    // $box.on('move moved', function(e, $elem) {
    //     console.log(e.type);
    //     // console.log($elem);
    // });
    // $goBtn.on('click', function() {
    //     move.to(100, 50);
    //     // move.to(100);
    // });

    // $backBtn.on('click', function() {
    //     move.to(0, 20);
    //     // move.to(0);
    // });

	var defaults = {
			css3: false,
			js: false
		};

	var move = function ($elem, options) {
		var mode = null;

		if (options.css3 && transition.isSupport) { // css3 transition
			mode = new Css3($elem);
		} else if (options.js) { // js animation
			mode = new Js($elem);
		} else { // no animation
			mode = new Silent($elem);
		}

		return {
			to: $.proxy(mode.to, mode), //改变指针this指向mode.
			x: $.proxy(mode.x, mode),
			y: $.proxy(mode.y, mode)
		};
	};

    $.fn.extend({
        move: function (option,x,y) {
			return this.each(function () {
				var $this = $(this),
					mode = $this.data('move'),
					options = $.extend({}, defaults, typeof option === 'object' && option);

				if (!mode) { // first time
					$this.data('move', mode = move($this, options));
				}

				if (typeof mode[option] === 'function') {
					mode[option](x, y);
				}
			});
		}

    });

})(jQuery);