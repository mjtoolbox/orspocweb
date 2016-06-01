// Browser Detection Utilities
function get_browser(){
    var N=navigator.appName, ua=navigator.userAgent, tem;
    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
    return M[0];
}
 
function get_browser_version(){
    var N=navigator.appName, ua=navigator.userAgent, tem;
    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
    return M[1];
}
 
// Broswer Cookie Utilities
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}
 
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
 
function eraseCookie(name) {
    createCookie(name,"",-1);
}
// Browser Detection Utilities
function get_browser(){
    var N=navigator.appName, ua=navigator.userAgent, tem;
    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
    return M[0];
}
 
function get_browser_version(){
    var N=navigator.appName, ua=navigator.userAgent, tem;
    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
    return M[1];
}
 
// Broswer Cookie Utilities
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}
 
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
 
function eraseCookie(name) {
    createCookie(name,"",-1);
}

function isBrowserOld() {
    var browser         = get_browser();
    var browser_version = get_browser_version();

	if ((get_browser() == "MSIE") && (get_browser_version() <= 10)) {
    	return true;
    }

    return false;
}

var MIN_LENGTH = 20;

function displayBrowserNotification() {    
    if (readCookie("browserMessageDismiss") != 1) {
        $.ajax("/content/include/cached/notifications/browser.clean.html", {
            type: "GET",
            statusCode: {
                200: function (response) {
					if (response.length >= MIN_LENGTH) {
                        $('#browser-notification').show();
                        if (response) {
                            $('.browserSupport').append('<div id="browser-message"><i class="fa fa-exclamation-circle"></i>' + response + 
                                '</div><a href="#" id="browser-message-close">Dismiss</a>').show();                
                            $('#browser-message-close').on('click', function(e) {
                                //e.preventDefault();
                                // Hide the alert message
                                $('.browserSupport').slideUp();
                                // Create cookie - emergencyMessageDismiss
                                createCookie('browserMessageDismiss', 1, 0);
                            });
                        }
                    }
                }
            }, success: function () {

            },
        });
    }
}

function displayGeneralNotification() {
    if (readCookie("generalMessageDismiss") != 1) {
        $.ajax("/content/include/cached/notifications/general.clean.html", {
            type: "GET",
            statusCode: {
                200: function (response) {
					if (response.length >= MIN_LENGTH) {
                        $('#browser-notification').show();
                        if (response) {
                            $('.generalMessage').append('<div id="browser-message"><i class="fa fa-exclamation-circle"></i>' + response + 
                                '</div><a href="#" id="general-message-close">Dismiss</a>').show();                
                            $('#general-message-close').on('click', function(e) {
                                //e.preventDefault();
                                // Hide the alert message
                                $('.generalMessage').slideUp();
                                // Create cookie - generalMessageDismiss
                                createCookie('generalMessageDismiss', 1, 0);
                            }); 
                        }
                    }
                }
            }, success: function () {

            },
        });
    }
}

function displayEmergencyNotification() {
    $.ajax("/content/include/cached/notifications/emergency.clean.html", {
        type: "GET",
        statusCode: {
            200: function (response) {
                if (response.length >= MIN_LENGTH) {
                    $('#notification-emergency').show();
                        if (response) {
                        $('.emergencyMessage').append('<div id="emergency-message"><i class="fa fa-exclamation-circle"></i>' + response + 
                            '</div>').show();
                        }
                }
            }
        }, success: function () {
          
        },
    });
}
