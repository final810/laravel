$(window).on("load",function(){function n(){var n=null;return window&&window.analytics&&(n=window.analytics.user().anonymousId()),n}function e(e){var a=$($(e)[0]),i=a.find(".email").val(),t=a.data("js-event-location"),d=n();$.post(hostUrl.trim()+"form_submit",{email:i,location:t,anonymous_id:d}).done(function(){a.find(".contact-check").removeClass("hidden"),a.find(".cta").attr("disabled",!0)}).fail(function(){a.find(".text").removeClass("hidden"),a.find(".loader").addClass("hidden"),a.find(".contact-check").addClass("hidden")}).always(function(){a.find(".loader").addClass("hidden")})}$.validator.addMethod("regex",function(n,e,a){return this.optional(e)||n.match("string"==typeof a?new RegExp(a):a)}),$(".js-contact-form").each(function(){var n=$(this);n.validate(),n.find("input.email").rules("add",{required:!0,regex:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,messages:{email:'<svg width="16" height="16"><defs><path id="warning_a" d="M8.25 8.75a.25.25 0 0 1-.5 0L7 3.25a1 1 0 0 1 2 0l-.75 5.5zm-.25 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7.712-.78L9.714.972c-.776-1.295-2.652-1.295-3.428 0l-5.998 10C-.512 12.304.448 14 2.002 14h11.996c1.554 0 2.514-1.696 1.714-3.03z"/></defs><use fill="#f84f4f" xlink:href="#warning_a" fill-rule="evenodd" transform="translate(0 1)"/></svg>',required:'<svg width="16" height="16"><defs><path id="warning_a" d="M8.25 8.75a.25.25 0 0 1-.5 0L7 3.25a1 1 0 0 1 2 0l-.75 5.5zm-.25 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7.712-.78L9.714.972c-.776-1.295-2.652-1.295-3.428 0l-5.998 10C-.512 12.304.448 14 2.002 14h11.996c1.554 0 2.514-1.696 1.714-3.03z"/></defs><use fill="#f84f4f" xlink:href="#warning_a" fill-rule="evenodd" transform="translate(0 1)"/></svg>',regex:'<svg width="16" height="16"><defs><path id="warning_a" d="M8.25 8.75a.25.25 0 0 1-.5 0L7 3.25a1 1 0 0 1 2 0l-.75 5.5zm-.25 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7.712-.78L9.714.972c-.776-1.295-2.652-1.295-3.428 0l-5.998 10C-.512 12.304.448 14 2.002 14h11.996c1.554 0 2.514-1.696 1.714-3.03z"/></defs><use fill="#f84f4f" xlink:href="#warning_a" fill-rule="evenodd" transform="translate(0 1)"/></svg>'}})}),$(".js-contact-form").on("submit",function(){var n=$(this);return n.valid()&&(n.find(".text").addClass("hidden"),n.find(".loader").removeClass("hidden"),e(n)),!1})});var enableScroll=function(n){document.querySelectorAll(n).forEach(function(n){n.addEventListener("click",function(n){n.preventDefault();var e=n.target.hash.substr(1);document.getElementById(e)&&document.getElementById(e).scrollIntoView({behavior:"smooth"})},!1)})};$(window).on("load",function(){enableScroll('a[href^="#"]')});