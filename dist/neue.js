!function(){var e,n,t;!function(i){function o(e,n){return y.call(e,n)}function s(e,n){var t,i,o,s,a,r,l,c,u,d,f,m=n&&n.split("/"),p=w.map,h=p&&p["*"]||{};if(e&&"."===e.charAt(0))if(n){for(m=m.slice(0,m.length-1),e=e.split("/"),a=e.length-1,w.nodeIdCompat&&j.test(e[a])&&(e[a]=e[a].replace(j,"")),e=m.concat(e),u=0;u<e.length;u+=1)if(f=e[u],"."===f)e.splice(u,1),u-=1;else if(".."===f){if(1===u&&(".."===e[2]||".."===e[0]))break;u>0&&(e.splice(u-1,2),u-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((m||h)&&p){for(t=e.split("/"),u=t.length;u>0;u-=1){if(i=t.slice(0,u).join("/"),m)for(d=m.length;d>0;d-=1)if(o=p[m.slice(0,d).join("/")],o&&(o=o[i])){s=o,r=u;break}if(s)break;!l&&h&&h[i]&&(l=h[i],c=u)}!s&&l&&(s=l,r=c),s&&(t.splice(0,r,s),e=t.join("/"))}return e}function a(e,n){return function(){return m.apply(i,k.call(arguments,0).concat([e,n]))}}function r(e){return function(n){return s(n,e)}}function l(e){return function(n){v[e]=n}}function c(e){if(o(g,e)){var n=g[e];delete g[e],b[e]=!0,f.apply(i,n)}if(!o(v,e)&&!o(b,e))throw new Error("No "+e);return v[e]}function u(e){var n,t=e?e.indexOf("!"):-1;return t>-1&&(n=e.substring(0,t),e=e.substring(t+1,e.length)),[n,e]}function d(e){return function(){return w&&w.config&&w.config[e]||{}}}var f,m,p,h,v={},g={},w={},b={},y=Object.prototype.hasOwnProperty,k=[].slice,j=/\.js$/;p=function(e,n){var t,i=u(e),o=i[0];return e=i[1],o&&(o=s(o,n),t=c(o)),o?e=t&&t.normalize?t.normalize(e,r(n)):s(e,n):(e=s(e,n),i=u(e),o=i[0],e=i[1],o&&(t=c(o))),{f:o?o+"!"+e:e,n:e,pr:o,p:t}},h={require:function(e){return a(e)},exports:function(e){var n=v[e];return"undefined"!=typeof n?n:v[e]={}},module:function(e){return{id:e,uri:"",exports:v[e],config:d(e)}}},f=function(e,n,t,s){var r,u,d,f,m,w,y=[],k=typeof t;if(s=s||e,"undefined"===k||"function"===k){for(n=!n.length&&t.length?["require","exports","module"]:n,m=0;m<n.length;m+=1)if(f=p(n[m],s),u=f.f,"require"===u)y[m]=h.require(e);else if("exports"===u)y[m]=h.exports(e),w=!0;else if("module"===u)r=y[m]=h.module(e);else if(o(v,u)||o(g,u)||o(b,u))y[m]=c(u);else{if(!f.p)throw new Error(e+" missing "+u);f.p.load(f.n,a(s,!0),l(u),{}),y[m]=v[u]}d=t?t.apply(v[e],y):void 0,e&&(r&&r.exports!==i&&r.exports!==v[e]?v[e]=r.exports:d===i&&w||(v[e]=d))}else e&&(v[e]=t)},e=n=m=function(e,n,t,o,s){if("string"==typeof e)return h[e]?h[e](n):c(p(e,n).f);if(!e.splice){if(w=e,w.deps&&m(w.deps,w.callback),!n)return;n.splice?(e=n,n=t,t=null):e=i}return n=n||function(){},"function"==typeof t&&(t=o,o=s),o?f(i,e,n,t):setTimeout(function(){f(i,e,n,t)},4),m},m.config=function(e){return m(e)},e._defined=v,t=function(e,n,t){n.splice||(t=n,n=[]),o(v,e)||o(g,e)||(g[e]=[e,n,t])},t.amd={jQuery:!0}}(),t("../bower_components/almond/almond",function(){}),t("neue/carousel",[],function(){var e=window.jQuery;e(function(){function n(){0===o?o=s:o--}function t(){o===s?o=0:o++}function i(i){e("#slide"+o).removeClass("visible"),"prev"===i?n():t(),e("#slide"+o).addClass("visible")}e("#slide0").addClass("visible");var o=0,s=e(".slide").length-1,a=e("#prev, #next");a.click(function(){i(e(this).attr("id"))})})}),t("neue/events",[],function(){var e={},n=-1,t=function(n,t){return e[n]?(setTimeout(function(){for(var i=e[n],o=i?i.length:0;o--;)i[o].func(n,t)},0),!0):!1},i=function(t,i){e[t]||(e[t]=[]);var o=(++n).toString();return e[t].push({token:o,func:i}),o},o=function(n){for(var t in e)if(e[t])for(var i=0,o=e[t].length;o>i;i++)if(e[t][i].token===n)return e[t].splice(i,1),n;return!1};return{publish:t,subscribe:i,unsubscribe:o}}),t("neue/jump-scroll",[],function(){var e=window.jQuery;e(function(){e(".js-jump-scroll").on("click",function(n){n.preventDefault();var t=e(this).attr("href");e("html,body").animate({scrollTop:e(n.target.hash).offset().top},"slow",function(){window.location.hash=t})})})}),t("neue/menu",[],function(){var e=window.jQuery;e(function(){e(".js-toggle-mobile-menu").on("click",function(){e(".chrome--nav").toggleClass("is-visible")}),e(".js-footer-col").addClass("is-collapsed"),e(".js-footer-col h4").on("click",function(){window.matchMedia("screen and (max-width: 768px)").matches&&e(this).closest(".js-footer-col").toggleClass("is-collapsed")})})}),t("neue/messages",[],function(){var e=window.jQuery,n='<a href="#" class="js-close-message message-close-button white">×</a>',t=function(t,i){t.append(n),t.on("click",".js-close-message",function(n){n.preventDefault(),e(this).parent(".messages").slideUp(),i&&"function"==typeof i&&i()})};return e(function(){t(e(".messages"))}),{attachCloseButton:t}}),t("neue/modal",["require","./events"],function(e){var n=window.jQuery,t=window.Modernizr,i=e("./events"),o=n(document),s=n(".chrome"),a=null,r=n("<a href='#' class='js-close-modal js-modal-generated modal-close-button -alt'>skip</a>"),l=n("<a href='#' class='js-close-modal js-modal-generated modal-close-button'>&#215;</a>"),c=null,u=!1,d=function(){return null!==c},f=function(e,t,i){switch(t){case"skip":e.prepend(r),r.on("click",function(e){e.preventDefault(),n(i).submit()}),u=!1;break;case"false":case"0":u=!1;break;default:e.prepend(l),u=!0}},m=function(e,n){n=n||{},n.animated="boolean"==typeof n.animated?n.animated:!0,n.closeButton="undefined"!=typeof n.closeButton?n.closeButton:e.attr("data-modal-close"),n.skipForm="undefined"!=typeof n.skipForm?n.skipForm:e.attr("data-modal-skip-form");var r="-"+o.scrollTop()+"px";f(e,n.closeButton,n.skipForm),d()?(c.hide(),e.show()):(s.css("top",r),s.addClass("modal-open"),a.css("display","block"),n.animated&&t.cssanimations&&a.addClass("animated-open"),e.css("display","block")),setTimeout(function(){o.scrollTop(0)},50),i.publish("Modal:Open",e),c=e},p=function(e){a.css("display","none"),a.removeClass("animated-close"),c.css("display","none"),c.find(".js-modal-generated").remove(),s.removeClass("modal-open"),s.css("top",""),o.scrollTop(e),c=null},h=function(e){e=e||{},e.animated="undefined"!=typeof e.animated?e.animated:!0;var n=-1*parseInt(s.css("top"));e.animated&&t.cssanimations?(a.addClass("animated-close"),a.one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){p(n)})):p(n),window.location.hash==="#"+c.attr("id")&&(window.location.hash="/"),i.publish("Modal:Close",c)},v=function(e){e.preventDefault();var t=n(this).data("modal-href");m(n(t))},g=function(e){e.target===this&&(n(this).hasClass("js-close-modal")||u)&&(e.preventDefault(),h())};return o.ready(function(){var e=n("body");a=n("<div class='modal-container'></div>"),e.append(a),n("[data-modal]").each(function(){n(this).appendTo(a),n(this).attr("hidden",!0)});var t=window.location.hash;t&&"#/"!==t&&n(t)&&"undefined"!=typeof n(t).data("modal")&&m(n(t)),e.on("click","[data-modal-href]",v),e.on("click",".modal-container",g),e.on("click",".js-close-modal",g)}),{isOpen:d,open:m,close:h}}),t("neue/scroll-indicator",[],function(){function e(){o=[],i(".js-scroll-indicator").each(function(e,t){n(i(t))})}function n(e){var n=i(e.attr("href"));if(n.length){var s=n.offset().top,a={$el:e,targetOffset:s};o.push(a)}t()}function t(){i.each(o,function(e,n){var t=i(window).scrollTop()+n.$el.height();return t>n.targetOffset?(i(".js-scroll-indicator").removeClass("is-active"),void n.$el.addClass("is-active")):void 0})}var i=window.jQuery,o=[];i(function(){e(),i(window).on("scroll",t),i(window).on("resize",e)})}),t("neue/sticky",[],function(){function e(){o=[],i(".js-sticky").each(function(e,t){n(t)})}function n(e){var n=i(e).offset().top,s={$el:i(e),offset:n};o.push(s),t()}function t(){i.each(o,function(e,n){i(window).scrollTop()>n.offset?n.$el.addClass("is-stuck"):n.$el.removeClass("is-stuck")})}var i=window.jQuery,o=[];i(function(){e(),i(window).on("scroll",t),i(window).on("resize",e)})}),t("neue/validation",["require","./events"],function(e){var n=window.jQuery,t=e("./events"),i=[],o=function(e){e.each(function(){var e=n(this);s(n("label[for='"+e.attr("id")+"']")),e.on("blur",function(n){n.preventDefault(),a(e)})})},s=function(e){if(0===e.find(".inner-label").length){var t=n("<div class='inner-label'></div>");t.append("<div class='label'>"+e.html()+"</div>"),t.append("<div class='message'></div>"),e.html(t)}},a=function(e,t,o){t="undefined"!=typeof t?t:!1,o="undefined"!=typeof o?o:function(e,n){c(e,n)};var s=e.data("validate"),r=e.data("validate-trigger");if(r&&a(n(r)),!i[s])return void console.error("A validation with the name "+s+" has not been registered.");if(f(e)){var l=e.val();if(t||""!==l)if("match"===s){var u=n(e.data("validate-match")).val();i[s].fn(l,u,function(n){o(e,n)})}else i[s].fn(l,function(n){o(e,n)})}else if("match"===s){var d=n(e.data("validate-match"));i[s].fn(e,d,function(n){o(e,n)})}else i[s].fn(e,function(n){o(e,n)})},r=function(e,n){if(i[e])throw"A validation function with that name has already been registered";i[e]=n},l=function(e,n){var t={fn:n};r(e,t)},c=function(e,i){var o=n("label[for='"+e.attr("id")+"']"),s=o.find(".message");return e.removeClass("success error warning shake"),s.removeClass("success error warning"),i.success===!0?(e.addClass("success"),s.addClass("success")):(e.addClass("error"),s.addClass("error"),f(e)&&e.addClass("shake"),t.publish("Validation:InlineError",o.attr("for"))),i.message&&s.text(i.message),i.suggestion&&(s.html("Did you mean "+i.suggestion.full+"? <a href='#' data-suggestion='"+i.suggestion.full+"'class='js-mailcheck-fix'>Fix it!</a>"),t.publish("Validation:Suggestion",i.suggestion.domain)),o.addClass("show-message"),n(".js-mailcheck-fix").on("click",function(e){e.preventDefault();var i=n("#"+n(this).closest("label").attr("for"));i.val(n(this).data("suggestion")),i.trigger("blur"),t.publish("Validation:SuggestionUsed",n(this).text())}),e.on("focus",function(){e.removeClass("warning error success shake"),o.removeClass("show-message")}),i.success},u=function(e){var n=e.find(":submit");n.attr("disabled",!0),"BUTTON"===n.prop("tagName")&&n.addClass("loading")},d=function(e){var n=e.find(":submit");n.attr("disabled",!1),n.removeClass("loading disabled")},f=function(e){var n=e.prop("tagName");return"INPUT"===n||"SELECT"===n||"TEXTAREA"===n};return n("body").on("submit","form",function(e,i){var o=n(this),s=o.find("[data-validate]").filter("[data-validate-required]");if(u(o),0===s.length)return!0;if(i===!0)return!0;e.preventDefault();var r=0,l=0,f=!1;return s.each(function(){a(n(this),!0,function(e,i){r++,c(e,i),i.success&&l++,f||i.success!==!1||(f=!0,n("html,body").animate({scrollTop:e.offset().top-32},200)),r===s.length&&(l===s.length?(t.publish("Validation:Submitted",n(this).attr("id")),o.trigger("submit",!0)):(t.publish("Validation:SubmitError",n(this).attr("id")),d(o)))})}),!1}),l("match",function(e,n,t){return t(e===n&&""!==e?{success:!0,message:"Looks good!"}:{success:!1,message:"That doesn't match."})}),n(function(){o(n("body").find("[data-validate]"))}),{prepareFields:o,registerValidation:r,registerValidationFunction:l,validateField:a,showValidationMessage:c,Validations:i}}),t("neue/main",["require","./carousel","./events","./jump-scroll","./menu","./messages","./modal","./scroll-indicator","./sticky","./validation"],function(e){return window.NEUE={Carousel:e("./carousel"),Events:e("./events"),JumpScroll:e("./jump-scroll"),Menu:e("./menu"),Messages:e("./messages"),Modal:e("./modal"),ScrollIndicator:e("./scroll-indicator"),Sticky:e("./sticky"),Validation:e("./validation")},window.NEUE}),n(["neue/main"])}();
//# sourceMappingURL=neue.js.map