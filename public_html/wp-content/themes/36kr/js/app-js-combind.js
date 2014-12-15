function externalLinks() {
	if(!document.getElementsByTagName)return ;
	var a=document.getElementsByTagName("a");
	for(var b=0;b<a.length;b++) {
		var c=a[b];
		if(c.getAttribute("href")&&(c.getAttribute("rel")=="external"||c.getAttribute("rel")=="external nofollow"||c.getAttribute("rel")=="nofollow external"))c.target="_blank"
	}
}
function getScrollY() {
	scrOfY=0;
	if(typeofwindow.pageYOffset=="number") {
		scrOfY=window.pageYOffset
	}else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)) {
		scrOfY=document.body.scrollTop
	}else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)) {
		scrOfY=document.documentElement.scrollTop
	}return scrOfY
}
jQuery(document).ready(function (a) {
	jQuery("#contact_me").submit(function () {
		var a=jQuery(this).serialize();
		$(this).attr("disabled","true");
		$(this).attr("value","提交中...");
		jQuery.ajax({
			type:"POST",url:"/wp-admin/admin-ajax.php",data:"action=contact_form&"+a,success:function (a) {
				jQuery("#node").ajaxComplete(function (b,c,d) {
					if(a=="sent") {
						jQuery(".contact #node").hide();
						jQuery("#contact_me").fadeOut("slow");
						jQuery(".success").fadeIn("slow")
					}else {
						result=a;
						jQuery("#node").html(result);
						$("#msgsend_btn").removeAttr("disabled");
						$("#msgsend_btn").attr("value","重新提交");
						jQuery("#node").fadeIn("slow")
					}
				})
			}
		});
		return false
	})
});
jQuery(document).ready(function () {
	var a=jQuery("dl.tabs");
	tabsContent=jQuery("ul.tabs-content");
	a.each(function (a) {
		var b=jQuery(this).children("dd").children("a");
		b.hover(function (a) {
			var c=jQuery(this).attr("href");
			c=c+"Tab";
			if(c.charAt(0)=="#") {
				a.preventDefault();
				b.removeClass("active");
				jQuery(this).addClass("active");
				jQuery(c).parent(".tabs-content").children("li").css({
					display:"none"
				});
				jQuery(c).css({
					display:"block"
				})
			}
		})
	});
	var b=110;
	var c=$("#main_nav").offset();
	$(window).scroll(function () {
		var a=$(window).scrollTop();
		if(a>c.top-b) {
			$("#MainMenu").addClass("fixed")
		}else {
			$("#MainMenu").removeClass("fixed")
		}
	});
	jQuery("input, textarea").placeholder();
	jQuery("#featured").orbit({
		animation:"vertical-push",animationSpeed:800,timer:true,advanceSpeed:15e3,pauseOnHover:true,startClockOnMouseOut:true,startClockOnMouseOutAfter:1e3,directionalNav:true,captions:true,captionAnimation:"none",captionAnimationSpeed:800,bullets:true,bulletThumbs:false,bulletThumbLocation:"",afterSlideChange:function () {
		}
	})
});
$(".posts").hover(function () {
	$(this).find(".jiathis_toolbox").addClass("hover")
},function () {
	var a=this;
	var b=function () {
		$(a).find(".jiathis_toolbox").removeClass("hover")
	};
	setTimeout(b,3e3)
});
jQuery(document).ready(function (a) {
	a("abbr.timeago").timeago();
	a(".comment-meta a:first").each(function () {
		var b=a(this).children(".timeago");
		if(b) {
			a(this).html(b)
		}
	})
});
$("a[href*='http://']:not([href*='"+location.hostname+"']),[href*='https://']:not([href*='"+location.hostname+"'])").attr("target","_blank");
jQuery(document).ready(function () {
	var a=$("#s_top, #s_bottom");
	a.click(function () {
		var a,b=$(this).attr("alt");
		if(b=="Top") {
			a=$("#header")
		}else if(b=="Bottom") {
			a=$("#footer")
		}else {
			return false
		}$body.animate({
			scrollTop:a.offset().top
		},1e3);
		return false
	})
});
(function (a) {
	function b() {
		var b=c(this);
		if(!isNaN(b.datetime)) {
			a(this).text(d(b.datetime))
		}return this
	}function c(b) {
		b=a(b);
		if(!b.data("timeago")) {
			b.data("timeago",{
				datetime:f.datetime(b)
			});
			var c=a.trim(b.text());
			if(c.length>0) {
				b.attr("title",c)
			}
		}return b.data("timeago")
	}function d(a) {
		return f.inWords(e(a))
	}function e(a) {
		return (new Date).getTime()-a.getTime()
	}a.timeago=function (b) {
		if(binstanceofDate) {
			return d(b)
		}else if(typeofb==="string") {
			return d(a.timeago.parse(b))
		}else {
			return d(a.timeago.datetime(b))
		}
	};
	var f=a.timeago;
	a.extend(a.timeago,{
		settings:{
			refreshMillis:6e4,allowFuture:false,strings:{
				prefixAgo:null,prefixFromNow:"从现在开始",suffixAgo:"前",suffixFromNow:null,seconds:"1 分钟",minute:"1 分钟",minutes:"%d 分钟",hour:"1 小时",hours:"%d 小时",day:"1 天",days:"%d 天",month:"1 个月",months:"%d 月",year:"1 年",years:"%d 年",numbers:[]
			}
		},inWords:function (b) {
			function c(c,e) {
				var f=a.isFunction(c)?c(e,b):c;
				var g=d.numbers&&d.numbers[e]||e;
				return f.replace(/%d/i,g)
			}var d=this.settings.strings;
			var e=d.prefixAgo;
			var f=d.suffixAgo;
			if(this.settings.allowFuture) {
				if(b<0) {
					e=d.prefixFromNow;
					f=d.suffixFromNow
				}b=Math.abs(b)
			}var g=b/1e3;
			var h=g/60;
			var i=h/60;
			var j=i/24;
			var k=j/365;
			var l=g<45&&c(d.seconds,Math.round(g))||g<90&&c(d.minute,1)||h<45&&c(d.minutes,Math.round(h))||h<90&&c(d.hour,1)||i<24&&c(d.hours,Math.round(i))||i<48&&c(d.day,1)||j<30&&c(d.days,Math.floor(j))||j<60&&c(d.month,1)||j<365&&c(d.months,Math.floor(j/30))||k<2&&c(d.year,1)||c(d.years,Math.floor(k));
			return a.trim([e,l,f].join(" "))
		},parse:function (b) {
			var c=a.trim(b);
			c=c.replace(/\.\d\d\d+/,"");
			c=c.replace(/-/,"/").replace(/-/,"/");
			c=c.replace(/T/," ").replace(/Z/," UTC");
			c=c.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");
			return new Date(c)
		},datetime:function (b) {
			var c=a(b).get(0).tagName.toLowerCase()==="time";
			var d=c?a(b).attr("datetime"):a(b).attr("title");
			return f.parse(d)
		}
	});
	a.fn.timeago=function () {
		var a=this;
		a.each(b);
		var c=f.settings;
		if(c.refreshMillis>0) {
			setInterval(function () {
				a.each(b)
			},c.refreshMillis)
		}return a
	};
	document.createElement("abbr");
	document.createElement("time")
})(jQuery);
jQuery(document).ready(function () {
	externalLinks()
});
jQuery("document").ready(function () {
	function a(a,b,c) {
		_gat._getTrackerByName()._trackEvent(b,c)
	}jQuery("a").each(function () {
		var b=jQuery(this).attr("href");
		
	})
});
(function (a) {
	a(function () {
		var b=a("#s_top");
		a(b).hide();
		a(window).scroll(function () {
			if(a(window).scrollTop()=="0") {
				a(b).fadeOut("slow")
			}else {
				a(b).fadeIn("slow")
			}
		});
		a(b).click(function () {
			a("html,body").animate({
				scrollTop:0
			},700);
			return false
		})
	})
})(jQuery);
(function (a) {
	a.fn.countDown=function (b) {
		config={
		};
		a.extend(config,b);
		diffSecs=this.setCountDown(config);
		if(config.onComplete) {
			a.data(a(this)[0],"callback",config.onComplete)
		}if(config.omitWeeks) {
			a.data(a(this)[0],"omitWeeks",config.omitWeeks)
		}a("#"+a(this).attr("id")+" .digit").html('<div class="top"></div><div class="bottom"></div>');
		a(this).doCountDown(a(this).attr("id"),diffSecs,500);
		return this
	};
	a.fn.stopCountDown=function () {
		clearTimeout(a.data(this[0],"timer"))
	};
	a.fn.startCountDown=function () {
		this.doCountDown(a(this).attr("id"),a.data(this[0],"diffSecs"),500)
	};
	a.fn.setCountDown=function (b) {
		var c=new Date;
		if(b.targetDate) {
			c=new Date(b.targetDate.month+"/"+b.targetDate.day+"/"+b.targetDate.year+" "+b.targetDate.hour+":"+b.targetDate.min+":"+b.targetDate.sec+(b.targetDate.utc?" UTC":""))
		}else if(b.targetOffset) {
			c.setFullYear(b.targetOffset.year+c.getFullYear());
			c.setMonth(b.targetOffset.month+c.getMonth());
			c.setDate(b.targetOffset.day+c.getDate());
			c.setHours(b.targetOffset.hour+c.getHours());
			c.setMinutes(b.targetOffset.min+c.getMinutes());
			c.setSeconds(b.targetOffset.sec+c.getSeconds())
		}var d=new Date;
		diffSecs=Math.floor((c.valueOf ()-d.valueOf ())/1e3);
		a.data(this[0],"diffSecs",diffSecs);
		return diffSecs
	};
	a.fn.doCountDown=function (b,c,d) {
		$this=a("#"+b);
		if(c<=0) {
			c=0;
			if(a.data($this[0],"timer")) {
				clearTimeout(a.data($this[0],"timer"))
			}
		}secs=c%60;
		mins=Math.floor(c/60)%60;
		hours=Math.floor(c/60/60)%24;
		if(a.data($this[0],"omitWeeks")==true) {
			days=Math.floor(c/60/60/24);
			weeks=Math.floor(c/60/60/24/7)
		}else {
			days=Math.floor(c/60/60/24)%7;
			weeks=Math.floor(c/60/60/24/7)
		}$this.dashChangeTo(b,"seconds_dash",secs,d?d:800);
		$this.dashChangeTo(b,"minutes_dash",mins,d?d:1200);
		$this.dashChangeTo(b,"hours_dash",hours,d?d:1200);
		$this.dashChangeTo(b,"days_dash",days,d?d:1200);
		$this.dashChangeTo(b,"weeks_dash",weeks,d?d:1200);
		a.data($this[0],"diffSecs",c);
		if(c>0) {
			e=$this;
			t=setTimeout(function () {
				e.doCountDown(b,c-1)
			},1e3);
			a.data(e[0],"timer",t)
		}else if(cb=a.data($this[0],"callback")) {
			a.data($this[0],"callback")()
		}
	};
	a.fn.dashChangeTo=function (b,c,d,e) {
		$this=a("#"+b);
		for(var f=$this.find("."+c+" .digit").length-1;f>=0;f--) {
			var g=d%10;
			d=(d-g)/10;
			$this.digitChangeTo("#"+$this.attr("id")+" ."+c+" .digit:eq("+f+")",g,e)
		}
	};
	a.fn.digitChangeTo=function (b,c,d) {
		if(!d) {
			d=800
		}if(a(b+" div.top").html()!=c+"") {
			a(b+" div.top").css({
				display:"none"
			});
			a(b+" div.top").html(c?c:"0").slideDown(d);
			a(b+" div.bottom").animate({
				height:""
			},d,function () {
				a(b+" div.bottom").html(a(b+" div.top").html());
				a(b+" div.bottom").css({
					display:"block",height:""
				});
				a(b+" div.top").hide().slideUp(10)
			})
		}
	}
})(jQuery);
(function (a) {
	a("a[data-reveal-id]").live("click",function (b) {
		b.preventDefault();
		var c=a(this).attr("data-reveal-id");
		a("#"+c).reveal(a(this).data())
	});
	a.fn.reveal=function (b) {
		var c={
			animation:"fadeAndPop",animationSpeed:300,closeOnBackgroundClick:true,dismissModalClass:"close-reveal-modal"
		};
		var b=a.extend({
		},c,b);
		return this.each(function () {
			function h() {
				g.unbind("click.modalEvent");
				a("."+b.dismissModalClass).unbind("click.modalEvent");
				if(!f) {
					l();
					if(b.animation=="fadeAndPop") {
						c.css({
							top:a(document).scrollTop()-e,opacity:0,visibility:"visible"
						});
						g.fadeIn(b.animationSpeed/2);
						c.delay(b.animationSpeed/2).animate({
							top:a(document).scrollTop()+d+"px",opacity:1
						},b.animationSpeed,k)
					}if(b.animation=="fade") {
						c.css({
							opacity:0,visibility:"visible",top:a(document).scrollTop()+d
						});
						g.fadeIn(b.animationSpeed/2);
						c.delay(b.animationSpeed/2).animate({
							opacity:1
						},b.animationSpeed,k)
					}if(b.animation=="none") {
						c.css({
							visibility:"visible",top:a(document).scrollTop()+d
						});
						g.css({
							display:"block"
						});
						k()
					}
				}c.unbind("reveal:open",h)
			}function i() {
				if(!f) {
					l();
					if(b.animation=="fadeAndPop") {
						g.delay(b.animationSpeed).fadeOut(b.animationSpeed);
						c.animate({
							top:a(document).scrollTop()-e+"px",opacity:0
						},b.animationSpeed/2,function () {
							c.css({
								top:d,opacity:1,visibility:"hidden"
							});
							k()
						})
					}if(b.animation=="fade") {
						g.delay(b.animationSpeed).fadeOut(b.animationSpeed);
						c.animate({
							opacity:0
						},b.animationSpeed,function () {
							c.css({
								opacity:1,visibility:"hidden",top:d
							});
							k()
						})
					}if(b.animation=="none") {
						c.css({
							visibility:"hidden",top:d
						});
						g.css({
							display:"none"
						})
					}
				}c.unbind("reveal:close",i)
			}function k() {
				f=false
			}function l() {
				f=true
			}var c=a(this),d=parseInt(c.css("top")),e=c.height()+d,f=false,g=a(".reveal-modal-bg");
			if(g.length==0) {
				g=a('<div class="reveal-modal-bg" />').insertAfter(c);
				g.fadeTo("fast",.8)
			}c.bind("reveal:open",h);
			c.bind("reveal:close",i);
			c.trigger("reveal:open");
			var j=a("."+b.dismissModalClass).bind("click.modalEvent",function () {
				c.trigger("reveal:close")
			});
			if(b.closeOnBackgroundClick) {
				g.css({
					cursor:"pointer"
				});
				g.bind("click.modalEvent",function () {
					c.trigger("reveal:close")
				})
			}a("body").keyup(function (a) {
				if(a.which===27) {
					c.trigger("reveal:close")
				}
			})
		})
	}
})(jQuery);
(function (a) {
	var b={
		defaults:{
			animation:"horizontal-push",animationSpeed:600,timer:true,advanceSpeed:4e3,pauseOnHover:false,startClockOnMouseOut:false,startClockOnMouseOutAfter:1e3,directionalNav:true,captions:true,captionAnimation:"fade",captionAnimationSpeed:600,bullets:false,bulletThumbs:false,bulletThumbLocation:"",afterSlideChange:a.noop,fluid:true,centerBullets:true
		},activeSlide:0,numberSlides:0,orbitWidth:null,orbitHeight:null,locked:null,timerRunning:null,degrees:0,wrapperHTML:'<div class="orbit-wrapper" />',timerHTML:'<div class="timer show-on-desktops"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>',captionHTML:'<div class="orbit-caption"></div>',directionalNavHTML:'<div class="slider-nav show-on-desktops"><span class="right">Right</span><span class="left">Left</span></div>',bulletHTML:'<ul class="orbit-bullets"></ul>',init:function (b,c) {
			var d,e=0,f=this;
			this.clickTimer=a.proxy(this.clickTimer,this);
			this.addBullet=a.proxy(this.addBullet,this);
			this.resetAndUnlock=a.proxy(this.resetAndUnlock,this);
			this.stopClock=a.proxy(this.stopClock,this);
			this.startTimerAfterMouseLeave=a.proxy(this.startTimerAfterMouseLeave,this);
			this.clearClockMouseLeaveTimer=a.proxy(this.clearClockMouseLeaveTimer,this);
			this.rotateTimer=a.proxy(this.rotateTimer,this);
			this.options=a.extend({
			},this.defaults,c);
			if(this.options.timer==="false")this.options.timer=false;
			if(this.options.captions==="false")this.options.captions=false;
			if(this.options.directionalNav==="false")this.options.directionalNav=false;
			this.$element=a(b);
			this.$wrapper=this.$element.wrap(this.wrapperHTML).parent();
			this.$slides=this.$element.children("img, a, div");
			this.$element.bind("orbit.next",function () {
				f.shift("next")
			});
			this.$element.bind("orbit.prev",function () {
				f.shift("prev")
			});
			this.$element.bind("orbit.goto",function (a,b) {
				f.shift(b)
			});
			this.$element.bind("orbit.start",function (a,b) {
				f.startClock()
			});
			this.$element.bind("orbit.stop",function (a,b) {
				f.stopClock()
			});
			d=this.$slides.filter("img");
			if(d.length===0) {
				this.loaded()
			}else {
				d.bind("imageready",function () {
					e+=1;
					if(e===d.length) {
						f.loaded()
					}
				})
			}
		},loaded:function () {
			this.$element.addClass("orbit").css({
				width:"1px",height:"1px"
			});
			this.setDimentionsFromLargestSlide();
			this.updateOptionsIfOnlyOneSlide();
			this.setupFirstSlide();
			if(this.options.timer) {
				this.setupTimer();
				this.startClock()
			}if(this.options.captions) {
				this.setupCaptions()
			}if(this.options.directionalNav) {
				this.setupDirectionalNav()
			}if(this.options.bullets) {
				this.setupBulletNav();
				this.setActiveBullet()
			}
		},currentSlide:function () {
			return this.$slides.eq(this.activeSlide)
		},setDimentionsFromLargestSlide:function () {
			var b=this,c;
			b.$element.add(b.$wrapper).width(this.$slides.first().width());
			b.$element.add(b.$wrapper).height(this.$slides.first().height());
			b.orbitWidth=this.$slides.first().width();
			b.orbitHeight=this.$slides.first().height();
			c=this.$slides.first().clone();
			this.$slides.each(function () {
				var d=a(this),e=d.width(),f=d.height();
				if(e>b.$element.width()) {
					b.$element.add(b.$wrapper).width(e);
					b.orbitWidth=b.$element.width()
				}if(f>b.$element.height()) {
					b.$element.add(b.$wrapper).height(f);
					b.orbitHeight=b.$element.height();
					c=a(this).clone()
				}b.numberSlides+=1
			});
			if(this.options.fluid) {
				if(typeofthis.options.fluid==="string") {
					c=a('<img src="http://placehold.it/'+this.options.fluid+'" />')
				}b.$element.prepend(c);
				c.addClass("fluid-placeholder");
				b.$element.add(b.$wrapper).css({
					width:"inherit"
				});
				b.$element.add(b.$wrapper).css({
					height:"inherit"
				});
				a(window).bind("resize",function () {
					b.orbitWidth=b.$element.width();
					b.orbitHeight=b.$element.height()
				})
			}
		},lock:function () {
			this.locked=true
		},unlock:function () {
			this.locked=false
		},updateOptionsIfOnlyOneSlide:function () {
			if(this.$slides.length===1) {
				this.options.directionalNav=false;
				this.options.timer=false;
				this.options.bullets=false
			}
		},setupFirstSlide:function () {
			var a=this;
			this.$slides.first().css({
				"z-index":3
			}).fadeIn(function () {
				a.$slides.css({
					display:"block"
				})
			})
		},startClock:function () {
			var a=this;
			if(!this.options.timer) {
				return false
			}if(this.$timer.is(":hidden")) {
				this.clock=setInterval(function () {
					this.$element.trigger("orbit.next")
				},this.options.advanceSpeed)
			}else {
				this.timerRunning=true;
				this.$pause.removeClass("active");
				this.clock=setInterval(this.rotateTimer,this.options.advanceSpeed/180)
			}
		},rotateTimer:function () {
			var a="rotate("+this.degrees+"deg)";
			this.degrees+=2;
			this.$rotator.css({
				"-webkit-transform":a,"-moz-transform":a,"-o-transform":a
			});
			if(this.degrees>180) {
				this.$rotator.addClass("move");
				this.$mask.addClass("move")
			}if(this.degrees>360) {
				this.$rotator.removeClass("move");
				this.$mask.removeClass("move");
				this.degrees=0;
				this.$element.trigger("orbit.next")
			}
		},stopClock:function () {
			if(!this.options.timer) {
				return false
			}else {
				this.timerRunning=false;
				clearInterval(this.clock);
				this.$pause.addClass("active")
			}
		},setupTimer:function () {
			this.$timer=a(this.timerHTML);
			this.$wrapper.append(this.$timer);
			this.$rotator=this.$timer.find(".rotator");
			this.$mask=this.$timer.find(".mask");
			this.$pause=this.$timer.find(".pause");
			this.$timer.click(this.clickTimer);
			if(this.options.startClockOnMouseOut) {
				this.$wrapper.mouseleave(this.startTimerAfterMouseLeave);
				this.$wrapper.mouseenter(this.clearClockMouseLeaveTimer)
			}if(this.options.pauseOnHover) {
				this.$wrapper.mouseenter(this.stopClock)
			}
		},startTimerAfterMouseLeave:function () {
			var a=this;
			this.outTimer=setTimeout(function () {
				if(!a.timerRunning) {
					a.startClock()
				}
			},this.options.startClockOnMouseOutAfter)
		},clearClockMouseLeaveTimer:function () {
			clearTimeout(this.outTimer)
		},clickTimer:function () {
			if(!this.timerRunning) {
				this.startClock()
			}else {
				this.stopClock()
			}
		},setupCaptions:function () {
			this.$caption=a(this.captionHTML);
			this.$wrapper.append(this.$caption);
			this.setCaption()
		},setCaption:function () {
			var b=this.currentSlide().attr("data-caption"),c;
			if(!this.options.captions) {
				return false
			}if(b) {
				c=a(b).html();
				this.$caption.attr("id",b).html(c);
				switch(this.options.captionAnimation) {
					case "none":this.$caption.show();
					break;
					case "fade":this.$caption.fadeIn(this.options.captionAnimationSpeed);
					break;
					case "slideOpen":this.$caption.slideDown(this.options.captionAnimationSpeed);
					break
				}
			}else {
				switch(this.options.captionAnimation) {
					case "none":this.$caption.hide();
					break;
					case "fade":this.$caption.fadeOut(this.options.captionAnimationSpeed);
					break;
					case "slideOpen":this.$caption.slideUp(this.options.captionAnimationSpeed);
					break
				}
			}
		},setupDirectionalNav:function () {
			var a=this;
			this.$wrapper.append(this.directionalNavHTML);
			this.$wrapper.find(".left").click(function () {
				a.stopClock();
				a.$element.trigger("orbit.prev")
			});
			this.$wrapper.find(".right").click(function () {
				a.stopClock();
				a.$element.trigger("orbit.next")
			})
		},setupBulletNav:function () {
			this.$bullets=a(this.bulletHTML);
			this.$wrapper.append(this.$bullets);
			this.$slides.each(this.addBullet);
			this.$element.addClass("with-bullets");
			if(this.options.centerBullets)this.$bullets.css("margin-left",-this.$bullets.width()/2)
		},addBullet:function (b,c) {
			var d=b+1,e=a("<li>"+d+"</li>"),f,g=this;
			if(this.options.bulletThumbs) {
				f=a(c).attr("data-thumb");
				if(f) {
					e.addClass("has-thumb").css({
						background:"url("+this.options.bulletThumbLocation+f+") no-repeat"
					});
				}
			}this.$bullets.append(e);
			e.data("index",b);
			e.hover(function () {
				g.stopClock();
				g.$element.trigger("orbit.goto",[e.data("index")])
			})
		},setActiveBullet:function () {
			if(!this.options.bullets) {
				return false
			}else {
				this.$bullets.find("li").removeClass("active").eq(this.activeSlide).addClass("active")
			}
		},resetAndUnlock:function () {
			this.$slides.eq(this.prevActiveSlide).css({
				"z-index":1
			});
			this.unlock();
			this.options.afterSlideChange.call(this,this.$slides.eq(this.prevActiveSlide),this.$slides.eq(this.activeSlide))
		},shift:function (a) {
			var b=a;
			this.prevActiveSlide=this.activeSlide;
			if(this.prevActiveSlide==b) {
				return false
			}if(this.$slides.length=="1") {
				return false
			}if(!this.locked) {
				this.lock();
				if(a=="next") {
					this.activeSlide++;
					if(this.activeSlide==this.numberSlides) {
						this.activeSlide=0
					}
				}else if(a=="prev") {
					this.activeSlide--;
					if(this.activeSlide<0) {
						this.activeSlide=this.numberSlides-1
					}
				}else {
					this.activeSlide=a;
					if(this.prevActiveSlide<this.activeSlide) {
						b="next"
					}else if(this.prevActiveSlide>this.activeSlide) {
						b="prev"
					}
				}this.setActiveBullet();
				this.$slides.eq(this.prevActiveSlide).css({
					"z-index":2
				});
				if(this.options.animation=="fade") {
					this.$slides.eq(this.activeSlide).css({
						opacity:0,"z-index":3
					}).animate({
						opacity:1
					},this.options.animationSpeed,this.resetAndUnlock)
				}if(this.options.animation=="horizontal-slide") {
					if(b=="next") {
						this.$slides.eq(this.activeSlide).css({
							left:this.orbitWidth,"z-index":3
						}).animate({
							left:0
						},this.options.animationSpeed,this.resetAndUnlock)
					}if(b=="prev") {
						this.$slides.eq(this.activeSlide).css({
							left:-this.orbitWidth,"z-index":3
						}).animate({
							left:0
						},this.options.animationSpeed,this.resetAndUnlock)
					}
				}if(this.options.animation=="vertical-slide") {
					if(b=="prev") {
						this.$slides.eq(this.activeSlide).css({
							top:this.orbitHeight,"z-index":3
						}).animate({
							top:0
						},this.options.animationSpeed,this.resetAndUnlock)
					}if(b=="next") {
						this.$slides.eq(this.activeSlide).css({
							top:-this.orbitHeight,"z-index":3
						}).animate({
							top:0
						},this.options.animationSpeed,this.resetAndUnlock)
					}
				}if(this.options.animation=="horizontal-push") {
					if(b=="next") {
						this.$slides.eq(this.activeSlide).css({
							left:this.orbitWidth,"z-index":3
						}).animate({
							left:0
						},this.options.animationSpeed,this.resetAndUnlock);
						this.$slides.eq(this.prevActiveSlide).animate({
							left:-this.orbitWidth
						},this.options.animationSpeed)
					}if(b=="prev") {
						this.$slides.eq(this.activeSlide).css({
							left:-this.orbitWidth,"z-index":3
						}).animate({
							left:0
						},this.options.animationSpeed,this.resetAndUnlock);
						this.$slides.eq(this.prevActiveSlide).animate({
							left:this.orbitWidth
						},this.options.animationSpeed)
					}
				}if(this.options.animation=="vertical-push") {
					if(b=="next") {
						this.$slides.eq(this.activeSlide).css({
							top:-this.orbitHeight,"z-index":3
						}).animate({
							top:0
						},this.options.animationSpeed,this.resetAndUnlock);
						this.$slides.eq(this.prevActiveSlide).animate({
							top:this.orbitHeight
						},this.options.animationSpeed)
					}if(b=="prev") {
						this.$slides.eq(this.activeSlide).css({
							top:this.orbitHeight,"z-index":3
						}).animate({
							top:0
						},this.options.animationSpeed,this.resetAndUnlock);
						this.$slides.eq(this.prevActiveSlide).animate({
							top:-this.orbitHeight
						},this.options.animationSpeed)
					}
				}this.setCaption()
			}
		}
	};
	a.fn.orbit=function (c) {
		return this.each(function () {
			var d=a.extend({
			},b);
			d.init(this,c)
		})
	}
})(jQuery);
(function (a) {
	function c(b,c) {
		var d=a(b);
		d.bind("load.imageready",function () {
			c.apply(b,arguments);
			d.unbind("load.imageready")
		})
	}var b={
	};
	a.event.special.imageready={
		setup:function (a,c,d) {
			b=a||b
		},add:function (d) {
			var e=a(this),f;
			if(this.nodeType===1&&this.tagName.toLowerCase()==="img"&&this.src!=="") {
				if(b.forceLoad) {
					f=e.attr("src");
					e.attr("src","");
					c(this,d.handler);
					e.attr("src",f)
				}else if(this.complete||this.readyState===4) {
					d.handler.apply(this,arguments)
				}else {
					c(this,d.handler)
				}
			}
		},teardown:function (b) {
			a(this).unbind(".imageready")
		}
	}
})(jQuery);
jQuery(document).ready(function (a) {
	function b(b) {
		a("form.custom input:"+b).each(function () {
			var c=a('<span class="custom '+b+'"></span>');
			if(a(this).next("span.custom."+b).length===0) {
				if(this.checked) {
					c.addClass("checked")
				}a(this).hide().after(c)
			}
		})
	}b("checkbox");
	b("radio");
	a("form.custom select").each(function () {
		var b=a(this),c=b.next("div.custom.dropdown"),d=b.find("option"),e=0,f;
		if(c.length===0) {
			c=a('<div class="custom dropdown"><a href="#" class="selector"></a><ul></ul></div>"');
			d.each(function () {
				f=a("<li>"+a(this).html()+"</li>");
				c.find("ul").append(f)
			});
			c.prepend('<a href="#" class="current">'+d.first().html()+"</a>");
			b.after(c);
			b.hide()
		}d.each(function (b) {
			if(this.selected) {
				c.find("li").eq(b).addClass("selected");
				c.find(".current").html(a(this).html())
			}
		});
		c.find("li").each(function () {
			c.addClass("open");
			if(a(this).outerWidth()>e) {
				e=a(this).outerWidth()
			}c.removeClass("open")
		});
		c.css("width",e+18+"px");
		c.find("ul").css("width",e+16+"px")
	})
});
(function (a) {
	function b(a) {
		var b=a.prev(),c=b[0];
		c.checked=c.checked?false:true;
		a.toggleClass("checked");
		b.trigger("change")
	}function c(b) {
		var c=b.prev(),d=c[0];
		a("input:radio[name="+c.attr("name")+"]").each(function () {
			a(this).next().removeClass("checked")
		});
		d.checked=d.checked?false:true;
		b.toggleClass("checked");
		c.trigger("change")
	}a("form.custom span.custom.checkbox").live("click",function (c) {
		c.preventDefault();
		c.stopPropagation();
		b(a(this))
	});
	a("form.custom span.custom.radio").live("click",function (b) {
		b.preventDefault();
		b.stopPropagation();
		c(a(this))
	});
	a("form.custom label").live("click",function (d) {
		var e=a("#"+a(this).attr("for")),f,g;
		if(e.length!==0) {
			if(e.attr("type")==="checkbox") {
				d.preventDefault();
				f=a(this).find("span.custom.checkbox");
				b(f)
			}else if(e.attr("type")==="radio") {
				d.preventDefault();
				g=a(this).find("span.custom.radio");
				c(g)
			}
		}
	});
	a("form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector").live("click",function (b) {
		var c=a(this),d=c.closest("div.custom.dropdown");
		b.preventDefault();
		d.toggleClass("open");
		if(d.hasClass("open")) {
			a(document).bind("click.customdropdown",function (b) {
				d.removeClass("open");
				a(document).unbind(".customdropdown")
			})
		}else {
			a(document).unbind(".customdropdown")
		}
	});
	a("form.custom div.custom.dropdown li").live("click",function (b) {
		var c=a(this),d=c.closest("div.custom.dropdown"),e=d.prev(),f=0;
		b.preventDefault();
		b.stopPropagation();
		c.closest("ul").find("li").removeClass("selected");
		c.addClass("selected");
		d.removeClass("open").find("a.current").html(c.html());
		c.closest("ul").find("li").each(function (a) {
			if(c[0]==this) {
				f=a
			}
		});
		e[0].selectedIndex=f;
		e.trigger("change")
	})
})(jQuery);
jQuery(document).ready(function (a) {
	function b(b) {
		a("form.custom input:"+b).each(function () {
			var c=a('<span class="custom '+b+'"></span>');
			if(a(this).next("span.custom."+b).length===0) {
				if(this.checked) {
					c.addClass("checked")
				}a(this).hide().after(c)
			}
		})
	}b("checkbox");
	b("radio");
	a("form.custom select").each(function () {
		var b=a(this),c=b.next("div.custom.dropdown"),d=b.find("option"),e=0,f;
		if(c.length===0) {
			c=a('<div class="custom dropdown"><a href="#" class="selector"></a><ul></ul></div>"');
			d.each(function () {
				f=a("<li>"+a(this).html()+"</li>");
				c.find("ul").append(f)
			});
			c.prepend('<a href="#" class="current">'+d.first().html()+"</a>");
			b.after(c);
			b.hide()
		}d.each(function (b) {
			if(this.selected) {
				c.find("li").eq(b).addClass("selected");
				c.find(".current").html(a(this).html())
			}
		});
		c.find("li").each(function () {
			c.addClass("open");
			if(a(this).outerWidth()>e) {
				e=a(this).outerWidth()
			}c.removeClass("open")
		});
		c.css("width",e+18+"px");
		c.find("ul").css("width",e+16+"px")
	})
});
(function (a) {
	function b(a) {
		var b=a.prev(),c=b[0];
		c.checked=c.checked?false:true;
		a.toggleClass("checked")
	}function c(b) {
		var c=b.prev(),d=c[0];
		a("input:radio[name="+c.attr("name")+"]").each(function () {
			a(this).next().removeClass("checked")
		});
		d.checked=d.checked?false:true;
		b.toggleClass("checked")
	}a("form.custom span.custom.checkbox").live("click",function (c) {
		c.preventDefault();
		c.stopPropagation();
		b(a(this))
	});
	a("form.custom span.custom.radio").live("click",function (b) {
		b.preventDefault();
		b.stopPropagation();
		c(a(this))
	});
	a("form.custom label").live("click",function (d) {
		var e=a("#"+a(this).attr("for")),f,g;
		if(e.length!==0) {
			if(e.attr("type")==="checkbox") {
				d.preventDefault();
				f=a(this).find("span.custom.checkbox");
				b(f)
			}else if(e.attr("type")==="radio") {
				d.preventDefault();
				g=a(this).find("span.custom.radio");
				c(g)
			}
		}
	});
	a("form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector").live("click",function (b) {
		var c=a(this),d=c.closest("div.custom.dropdown");
		b.preventDefault();
		d.toggleClass("open");
		if(d.hasClass("open")) {
			a(document).bind("click.customdropdown",function (b) {
				d.removeClass("open");
				a(document).unbind(".customdropdown")
			})
		}else {
			a(document).unbind(".customdropdown")
		}
	});
	a("form.custom div.custom.dropdown li").live("click",function (b) {
		var c=a(this),d=c.closest("div.custom.dropdown"),e=d.prev(),f=0;
		b.preventDefault();
		b.stopPropagation();
		c.closest("ul").find("li").removeClass("selected");
		c.addClass("selected");
		d.removeClass("open").find("a.current").html(c.html());
		c.closest("ul").find("li").each(function (a) {
			if(c[0]==this) {
				f=a
			}
		});
		e[0].selectedIndex=f
	})
})(jQuery);
(function (a,b,c) {
	function f(a) {
		var b={
		},d=/^jQuery\d+$/;
		c.each(a.attributes,function (a,c) {
			if(c.specified&&!d.test(c.name)) {
				b[c.name]=c.value
			}
		});
		return b
	}function g() {
		var a=c(this);
		if(a.val()===a.attr("placeholder")&&a.hasClass("placeholder")) {
			if(a.data("placeholder-password")) {
				a.hide().next().show().focus().attr("id",a.removeAttr("id").data("placeholder-id"))
			}else {
				a.val("").removeClass("placeholder")
			}
		}
	}function h() {
		var a,b=c(this),d=b,e=this.id;
		if(b.val()==="") {
			if(b.is(":password")) {
				if(!b.data("placeholder-textinput")) {
					try{
						a=b.clone().attr({
							type:"text"
						})
					}catch(h) {
						a=c("<input>").attr(c.extend(f(this),{
							type:"text"
						}))
					}a.removeAttr("name").data("placeholder-password",true).data("placeholder-id",e).bind("focus.placeholder",g);
					b.data("placeholder-textinput",a).data("placeholder-id",e).before(a)
				}b=b.removeAttr("id").hide().prev().attr("id",e).show()
			}b.addClass("placeholder").val(b.attr("placeholder"))
		}else {
			b.removeClass("placeholder")
		}
	}var d="placeholder" in b.createElement("input"),e="placeholder" in b.createElement("textarea");
	if(d&&e) {
		c.fn.placeholder=function () {
			return this
		};
		c.fn.placeholder.input=c.fn.placeholder.textarea=true
	}else {
		c.fn.placeholder=function () {
			return this.filter((d?"textarea":":input")+"[placeholder]").bind("focus.placeholder",g).bind("blur.placeholder",h).trigger("blur.placeholder").end()
		};
		c.fn.placeholder.input=d;
		c.fn.placeholder.textarea=e;
		c(function () {
			c("form").bind("submit.placeholder",function () {
				var a=c(".placeholder",this).each(g);
				setTimeout(function () {
					a.each(h)
				},10)
			})
		});
		c(a).bind("unload.placeholder",function () {
			c(".placeholder").val("")
		})
	}
})(this,document,jQuery);
(function (a) {
	a.fn.swipe=function (b) {
		var c={
			threshold:{
				x:30,y:10
			},swipeLeft:function () {
				alert("swiped left")
			},swipeRight:function () {
				alert("swiped right")
			}
		};
		var b=a.extend(c,b);
		if(!this)return false;
		return this.each(function () {
			function f(a) {
				d.x=a.targetTouches[0].pageX;
				d.y=a.targetTouches[0].pageY
			}function g(a) {
				a.preventDefault();
				e.x=a.targetTouches[0].pageX;
				e.y=a.targetTouches[0].pageY
			}function h(a) {
				var b=d.y-e.y;
				if(b<c.threshold.y&&b>c.threshold.y*-1) {
					changeX=d.x-e.x;
					if(changeX>c.threshold.x) {
						c.swipeLeft()
					}if(changeX<c.threshold.x*-1) {
						c.swipeRight()
					}
				}
			}function f(a) {
				d.x=a.targetTouches[0].pageX;
				d.y=a.targetTouches[0].pageY;
				e.x=d.x;
				e.y=d.y
			}function i(a) {
			}var b=a(this);
			var d={
				x:0,y:0
			};
			var e={
				x:0,y:0
			};
			this.addEventListener("touchstart",f,false);
			this.addEventListener("touchmove",g,false);
			this.addEventListener("touchend",h,false);
			this.addEventListener("touchcancel",i,false)
		})
	}
})(jQuery);
$(document).ready(function () {
	$("a[rel=weibo]").mouseenter(function () {
		var a=$(this).height();
		var b=$(this).offset().top+30;
		var c=$(this).offset().left+$(this).width()/2-$("#weibo-box").width()/2;
		$("#shareit-box").hide();
		$("#weibo-box").show();
		$("#weibo-box").css({
			top:b,left:c,"z-index":"9999"
		})
	});
	$("#weibo-box").mouseleave(function () {
		$("#weibo-box").hide();
		$("#shareit-box").hide()
	});
	$("a[rel=shareit], #shareit-box, #buttonForModal").mouseenter(function () {
		$("#weibo-box").hide()
	})
});
$(document).ready(function () {
	$("a[rel=shareit], #shareit-box").mouseenter(function () {
		var a=$(this).height();
		var b=$(this).offset().top+15;
		var c=$(this).offset().left+$(this).width()/2-$("#shareit-box").width()/2;
		var d=$(this).attr("data-title").split("|");
		var e=d[0];
		var f=encodeURIComponent(d[0]);
		var g=encodeURIComponent(d[1]);
		$("#shareit-header").height(a);
		$("#shareit-box").hide();
		$("#shareit-box").show();
		$("#shareit-box").css({
			top:b,left:c,"z-index":"9999"
		});
		$("#shareit-field").val(e);
		$("a.shareit-sm").attr("target","_blank");
		$("a[rel=shareit-mail]").attr("href","mailto:?subject="+g);
		$("a[rel=shareit-delicious]").attr("href","http://del.icio.us/post?v=4&noui&jump=close&url="+f+"&title="+g);
		$("a[rel=shareit-designfloat]").attr("href","http://www.designfloat.com/submit.php?url="+f+"&title="+g);
		$("a[rel=shareit-digg]").attr("href","http://digg.com/submit?phase=2&url="+f+"&title="+g);
		$("a[rel=shareit-stumbleupon]").attr("href","http://www.stumbleupon.com/submit?url="+f+"&title="+g);
		$("a[rel=shareit-twitter]").attr("href","http://twitter.com/home?status="+g+"%20-%20"+g)
	});
	$("#shareit-box").mouseleave(function () {
		$("#shareit-field").val("");
		$(this).hide()
	});
	$("#shareit-field").click(function () {
		$(this).select()
	})
});
jQuery(function () {
	jQuery(".bubbleInfo").each(function () {
		var a=10;
		var b=250;
		var c=100;
		var d=null;
		var e=false;
		var f=false;
		var g=jQuery(".trigger",this);
		var h=jQuery(".popup",this).css("opacity",0);
		jQuery([g.get(0),h.get(0)]).mouseover(function () {
			if(d)clearTimeout(d);
			if(e||f) {
				return
			}else {
				e=true;
				h.css({
					top:-60,left:28,display:"block"
				}).animate({
					top:"-="+a+"px",opacity:1
				},b,"swing",function () {
					e=false;
					f=true
				})
			}
		}).mouseout(function () {
			if(d)clearTimeout(d);
			d=setTimeout(function () {
				d=null;
				h.animate({
					top:"-="+a+"px",opacity:0
				},b,"swing",function () {
					f=false;
					h.css("display","none")
				})
			},c)
		})
	})
})