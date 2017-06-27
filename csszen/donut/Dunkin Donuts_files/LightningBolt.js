/* 2016-06-13 */
lbVersion = '4.0.10';
newRandom = new String(Math.random()); newRandom = newRandom.substring(2, 12);
function URLparser(str) {
    var o = URLparser.options,
		m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
		uri = {},
		i = 14;
    while (i--) uri[o.key[i]] = m[i] || "";
    uri[o.q.name] = {};
    uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
        if ($1) uri[o.q.name][$1] = $2;
    });
    return uri;
}
URLparser.options = {
    strictMode: true,
    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    q: {
        name: "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
}
function getURL () {
    try {
        window.parentIsPermitted = false;
        window.ASCurWin = window;
        try {
            for (i = 0; i <= 10; i++) {
                if ((window.ASCurWin.parent != null) && (window.ASCurWin.parent != window.ASCurWin)) {
                    var loc = window.ASCurWin.parent.location.toString();
                    var x = loc.length;
                    if (x > 0) { window.ASCurWin = window.ASCurWin.parent; window.parentIsPermitted = true; }
                    else { window.parentIsPermitted = false; break; }
                }
                else { if (i == 0) { window.parentIsPermitted = true; } break; }
            }
        }
        catch (e) { 
            window.parentIsPermitted = false; 
            if (isInDebug) { console.error('URL Error: \n Error - ' + e); } 
        }
        if (window.ASCurWin.document.referrer.length == 0) { window.ASurl = window.ASCurWin.location; }
        else {
            if (window.parentIsPermitted) { window.ASurl = window.ASCurWin.location; }
            else { window.ASurl = window.ASCurWin.document.referrer; }
        }
        //ASurl.href = ASurl.href.replace('@', "--");
        return ASurl;
    }
    catch (ex) { if (isInDebug) { console.error('URL Error: \n Error - ' + ex); } }
}
function lh_new(a, b, c) {
    tealiumURL = getURL();
    tealiumURL = (tealiumURL.href != undefined) ? tealiumURL.href : tealiumURL;
    tealiumURL = tealiumURL.replace(/@/g, '-');
    tealiumProfile = URLparser(tealiumURL).host.toLowerCase();
    if (tealiumProfile == '') { tealiumProfile = 'localhost'; }

    a = tealiumProfile;
    b = a.split(".");
    c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\./.test(a)) ? 3 : 2;
    return b.splice(b.length - c, c).join(".");
}
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; domain=" + lh_new() + "; path=/";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function updateCookie(cName, cValue, cDelim, cExpires) {
    try {
        var cOldValue = (readCookie(cName) != null) ? readCookie(cName) : '';
        var cNewValue = cOldValue;
        var cValueTerms = cValue.split(',');
        for (var i = 0; i < cValueTerms.length; i++) {
            var cOldValueTerms = cOldValue.split(cDelim); var addValue = true;
            for (var j = 0; j < cOldValueTerms.length; j++) { if (cValueTerms[i] == cOldValueTerms[j]) { addValue = false; } }
            if (addValue) { cNewValue += (cNewValue != '') ? cDelim + cValueTerms[i] : cValueTerms[i]; }
        }
        createCookie(cName, cNewValue, cExpires);
    }
    catch (e) { if (isInDebug) { console.error('Update Error \n Error - ' + e); } }
}
function eraseCookie(name) { createCookie(name, "", -1); }
function appendScript(scriptURL, scriptID) {
    try {
        newScript = document.createElement('script'); scriptElement = document.getElementsByTagName('script')[0];
        newScript.type = 'text/javascript'; newScript.id = scriptID + '_' + newRandom;
        newScript.src = scriptURL;
        scriptElement.parentNode.insertBefore(newScript, scriptElement);
        scriptElement = null; newScript = null;
        if (isInDebug) { console.info('Script Loaded from LB: ID - ' + scriptID + '\n URL - ' + scriptURL); }
    }
    catch (e) { if (isInDebug) { console.error('Script Not Loaded from LB: ID - ' + scriptID + '\n URL - ' + scriptURL + '\n Error - ' + e); } }
}
function appendIframe(iFrameURL, iFrameID) {
    try {
        pixel_iframe = document.createElement('iframe');
        pixel_iframe.setAttribute('id', iFrameID + '_' + newRandom);
        pixel_iframe.setAttribute('style', 'display:none');
        pixel_iframe.style.cssText = 'display:none';
        pixel_iframe.src = iFrameURL;
        appendElement = (typeof document.body != undefined) ? document.body : document.head;
        appendElement.appendChild(pixel_iframe);
        pixel_iframe = null;
        if (isInDebug) { console.info('iFrame Loaded from LB: ID - ' + iFrameID + '\n URL - ' + iFrameURL); }
    }
    catch (e) { if (isInDebug) { console.error('iFrame Not Loaded from LB: ID - ' + iFrameID + '\n URL - ' + iFrameURL + '\n Error - ' + e); } }
}
function loadPixel(otherURLs) {
    var otherPixels = otherURLs.split(',');
    for (var i = 0; i < otherPixels.length; i++) {
	    if ((otherPixels[i].indexOf('http') != -1) || (otherPixels[i].indexOf('//') != -1)) {
	        try {
	            var trackingPixel = new Image(1, 1); trackingPixel.src = otherPixels[i]; trackingPixel = null;
	            if (isInDebug) { console.info('Pixel Loaded from LB: \n URL - ' + otherPixels[i]); }
	        }
	        catch (e) { if (isInDebug) { console.error('Pixel Not Loaded from LB: \n URL - ' + otherPixels[i] + '\n Error - ' + e); } }
		}
		else {
			if (isInDebug) { console.error('Pixel Not Loaded from LB: \n URL - ' + otherPixels[i] + '\n Error - Invalid URL');}
		}
    }
}
function loadZAPtracker(lbAction, lbParams, redirURL) {
    lbParamsList = '';
    lbParamsLog = '';
    lbParamsCount = 1;
    if ((lbParams != '') && (lbParams != 'undefined') && (lbParams != undefined)) {
        var lbParamsTerms = lbParams.split(',');
        for (i = 0; i < lbParamsTerms.length; i++) {

            lbParamsList += '&migParam' + lbParamsCount + '=' + escape(lbParamsTerms[i]);
            lbParamsLog += '\n Param ' + lbParamsCount + ' - ' + escape(lbParamsTerms[i]);
            lbParamsCount++;
        }
    }
    lbTrackerlog = 'Action Tag Loading : \n Action - ' + lbAction + lbParamsLog;
    if (isInDebug) { console.info(lbTrackerlog); }
    trackerURL = lbProtocol + 't.mookie1.com/t/v1/event?migSource=mig&migClientId=' + migID + '&migRandom=' + newRandom + '&migAction=' + lbAction + lbParamsList + (((redirURL != undefined) && (redirURL != '')) ? ('&migUnencodedDest=' + redirURL) : '');
    loadPixel(trackerURL);
    return;
}
function ZAPlink(linkID, lbAction, otherURLs) {
    if (document.getElementById(linkID) != null) {
        var zappedLink = document.getElementById(linkID);
        try {
            if (window.addEventListener) { zappedLink.addEventListener('click', function () { loadZAPtracker(lbAction, document.getElementById(linkID).href); if (otherURLs != '') { loadPixel(otherURLs); } }, false); }
            else if (window.attachEvent) { zappedLink.attachEvent('onclick', function () { loadZAPtracker(lbAction, document.getElementById(linkID).href); if (otherURLs != '') { loadPixel(otherURLs); } }); }
            if (isInDebug) { console.info('Link Zapped: ID - ' + linkID + ', \n  HREF URL - ' + document.getElementById(linkID).href); }
        }
        catch (e) { if (isInDebug) { console.error('Link Not Zapped: ID - ' + linkID + ', \n  HREF URL - ' + document.getElementById(linkID).href + ', \n  Error - ' + e); } }
    }
    else { if (isInDebug) { console.info('Link Not Zapped: ID - ' + linkID + ' not found'); } }
}
function ZAPform(formID, lbAction, otherURLs) {
    if (document.getElementById(formID) != null) {
        zappedForm = document.getElementById(formID);
        try {
            if (window.addEventListener) { zappedForm.addEventListener('submit', function () { ZAPformTracker(lbAction, otherURLs); }, false); }
            else if (window.attachEvent) { zappedForm.attachEvent('onsubmit', function () { ZAPformTracker(lbAction, otherURLs); }); }
            if (isInDebug) { console.info('Form Zapped: ID - ' + formID + ', \n  Action URL - ' + document.getElementById(formID).action); }
        }
        catch (e) { if (isInDebug) { console.error('Form Not Zapped: ID - ' + formID + ', \n  Action URL - ' + document.getElementById(formID).action + ', \n  Error - ' + e); } }
    }
    else { if (isInDebug) { console.info('Form Not Zapped: ID - ' + formID + ' not found'); } }
}
function ZAPformTracker(lbAction, otherURLs) {
    loadZAPtracker(lbAction, '');
    if (otherURLs != '') { loadPixel(otherURLs); }
    return true;
}
function lbLoad() {
    tealium_url = lbProtocol + 'tags.tiqcdn.com/utag/xaxis/' + lh_new() + '/' + ((isInDebug) ? (((debugType != null) || (debugType != 'null')) ? debugType : 'prod') : 'prod') + '/utag.js';
    if (isTealiumLoaded) {
        try { window.tealium_lbReload(); }
        catch (e) { if (isInDebug) { console.error('Error - ' + e); } }
    }
    else {
        appendScript(tealium_url, 'tealium_controler');
        var tealiumLoaded = true;
    }
    if (isInDebug) { loadLogger(); } 
}
function loadLog() {if (isInDebug) { console.log('reload wait complete'); }}
function lbReload(pageState, tID, tV, tD) {
    lbTrans = tID || ''; lbValue = tV || ''; lbData = tD || '';
    x_newDataObject = { 'page_state': pageState };
    try { window.tealium_lbReload(x_newDataObject); }
    catch (e) { if (isInDebug) { console.error('Error - ' + e); } }
    if (isInDebug) { loadLogger(); }
    //setTimeout(loadLog(), 500);
}
window.tealium_lbReload = function( data ){
  data = data || {};
  // add iframe (using the mobile.html for the iframe)
  var d = document;
  var iframe_id = "tealium_lbReload";
  var iframe_url = "";
  var iframe = d.getElementById( iframe_id );
  var data_list = [];
  // locate current Tealium iframe in DOM
  var iframe_list = d.getElementsByTagName("iframe");
  for ( var i = 0; i < iframe_list.length; i++ ){
    var src = iframe_list[i].src;
    if ( src.indexOf("tags.tiqcdn.com") > -1 && src.indexOf("/xaxis/") > -1 ){
      iframe_url = src.substring(0, src.indexOf("mobile.html")+11);
    }
  }
  // TBD: Set default values if not found?
  data["xaxis_hash"] = data["xaxis_hash"] || (""+lbURLtealium.hash).substring(1);
  data["xaxis_domain"] = data["xaxis_domain"] || lbURLtealium.hostname;
  data["xaxis_pathname"] = data["xaxis_pathname"] || lbURLtealium.pathname;
  data["xaxis_url"] = data["xaxis_url"] || lbURLtealium.href;
  // END TBD
  //Process LB variables
  if (typeof lbTrans != "undefined" && lbTrans != "[TRANSACTION ID]") {
      data["order_id"] = lbTrans;
  }
  if (typeof lbValue != "undefined" && lbValue != "[TRANSACTION VALUE]") {
      data["order_total"] = lbValue;
      data["order_subtotal"] = lbValue;
  }
  // Set of name/value pairs in lbData: "keyname1=value_abc&keyname2=value_123&keyname3=value_abc123";
  // Converted to utag.data["lbData_MP1"]="keyname1--value_abc"
  if (typeof lbData != "undefined" && lbData != "[Attribute/Value Pairs for Custom Data]") {
      var p = lbData.split("&");
      for (var i = 0; i < p.length; i++) {
          var m = (p[i] + "").replace("=", "--");
          data["lbData_MP" + (i+1)] = encodeURIComponent(m);
      }
  }
  for ( var j in data ){
    data_list.push( j + "=" + encodeURIComponent( data[j] ) )
  }
  if ( iframe === null && iframe_url !="" ){
    iframe = d.createElement("iframe"); 
    iframe.setAttribute("style", "display:none");
    iframe.setAttribute("height", "1");
    iframe.setAttribute("width", "1");
    iframe.setAttribute("id", iframe_id );
    iframe.src = iframe_url + "?" + data_list.join("&");
    d.body.appendChild(iframe);
  } else if ( iframe_url != "" ) {
    iframe.src = iframe_url + "?" + data_list.join("&");
  }
}
function loadLogger() {
    createCookie('lbDebug', debugType, 3650);
    log_message = 'Lightning Bolt Debug Information - ' +

    '\n\n Debug Type             : ' + debugType +
	'\n Lightning Bolt Version : ' + lbVersion +
	'\n Load Type              : ' + (isInIFrame ? 'in iFrame' : 'on page') + 

    '\n\n URLs - ' + '\n ' +
    '\n Page URL               : ' + ((typeof lbURLtealium != Object) ? lbURLtealium : lbURLtealium.href) +
	'\n iFrame URL             : ' + ((lbIframeURL != '') ? lbIframeURL : 'Empty') +
	'\n lbURLmod               : ' + ((lbURLmod != '') ? lbURLmod : 'Empty') +
	'\n Referral URL           : ' + ((lbRef != '') ? lbRef : 'Empty') +

    '\n\n Targeting Values - ' + 
	'\n Data        : ' + 'Data' +

    '\n\n Referral Data - ' +
    '\n Referral Site          : ' + ((lbRef_host != '') ? lbRef_host : 'Empty') +
	'\n Action - b["refAction"]              : ' + ((refAction != '') ? refAction : 'Empty') +
	'\n Type -   b["refType"]                : ' + ((refType != '') ? refType : 'Empty') +
	'\n Engine - b["refEngine"]              : ' + ((refEngine != '') ? refEngine : 'Empty') +
	'\n Medium - b["refMedium"]              : ' + ((refMedium != '') ? refMedium : 'Empty') +
	'\n Source - b["refSource"]              : ' + ((refSource != '') ? refSource : 'Empty') +
	'\n Category - b["refContent"]           : ' + ((refContent != '') ? refContent : 'Empty') +
	'\n Term     - b["refTerm"]              : ' + ((refTerm != '') ? refTerm : 'Empty') +
	'\n Campaign - b["refCampaign"]          : ' + ((refCampaign != '') ? refCampaign : 'Empty') +
	'\n Keyword - b["refKeyword"]            : ' + ((refKeyword != '') ? refKeyword : 'Empty') + 

    '\n\n Advertiser Data - ' +
    '\n Transaction ID - b["order_id"]       : ' + ((lbTrans != '') ? lbTrans : 'Empty') +
	'\n Transaction Value - b["order_total"] : ' + ((lbValue != '') ? lbValue : 'Empty') +
	'\n Tag Data (lbData)                    : ' + ((lbData != '') ? lbData : 'Empty');
    if (lbData != '') {
        var lbDataCount = 1; var lbDataTerms = lbData.split('&');
        for (var i = 0; i < lbDataTerms.length; i++) {
            var lbDataPair = lbDataTerms[i].split('=');
            log_message += '\n b["lbData_MP' + lbDataCount + '"]               : ' + lbDataPair[0] + '--' + lbDataPair[1];
            lbDataCount++;
        }
    }
    console.info(log_message);
}
var isLBLoaded = ((typeof lbLoaded == 'undefined') || (typeof lbLoaded == undefined) || (lbLoaded != true)) ? false : true;
var isTealiumLoaded = ((typeof tealiumLoaded == 'undefined') || (typeof tealiumLoaded == undefined) || (tealiumLoaded != true)) ? false : true;
var isInIFrame = (window.location != window.parent.location) ? true : false;
lbURL = ''; lbIframeURL = ''; lbRef = ''; lbTitle = ''; lbURLtealium = ''; 
lbAccount = ((typeof lbAcct == 'undefined') || (typeof lbAcct == undefined)) ? 'LightningBolt' : lbAcct;
if ((typeof lbURLmod == 'undefined') || (typeof lbURLmod == undefined)) {
    if (typeof migURLmod != 'undefined') { lbURLmod = migURLmod; }
    else { lbURLmod = ''; }
}
if (isInIFrame) {
    lbIframeURL = document.location.href;
    lbURL = (lbURLmod != '') ? (lbURLmod + ((lbURLmod.indexOf('?') != -1) ? '&' : '?') + URLparser(document.referrer).query) : ((URLparser(lbIframeURL).queryKey.lbURL != undefined) ? URLparser(lbIframeURL).queryKey.lbURL : document.referrer);
    if (typeof lbRef == 'undefined') { lbRef = (URLparser(lbIframeURL).queryKey.lbRef != undefined) ? URLparser(lbIframeURL).queryKey.lbRef : ''; }
    if (typeof migRef == 'undefined') { lbRef = (URLparser(lbIframeURL).queryKey.migRef != undefined) ? URLparser(lbIframeURL).queryKey.migRef : ''; }
}
else {
    lbURL = (lbURLmod != '') ? (lbURLmod + ((lbURLmod.indexOf('?') != -1) ? '&' : '?') + URLparser(document.location.href).query) : document.location.href;
    lbTitle = parent.document.title;
    lbRef = parent.document.referrer;
}
lbURLtealium = getURL();
var isInDebug = false;
var debugType = null;
debugCookie = readCookie('lbDebug');
debugQuery = URLparser(lbURL).queryKey.lbDebug;
if ((((debugCookie != null) && (debugCookie != 'null')) || (debugQuery != undefined)) && (debugQuery != 'false')) {
    if ((debugCookie == 'true') || (debugCookie == 'prod')) { debugType = 'prod'; isInDebug = true; }
    else if (debugCookie == 'qa') { debugType = 'qa'; isInDebug = true; }
    else if (debugCookie == 'dev') { debugType = 'dev'; isInDebug = true; }
    if ((debugQuery == 'true') || (debugQuery == 'prod')) { debugType = 'prod'; isInDebug = true; }
    else if (debugQuery == 'qa') { debugType = 'qa'; isInDebug = true; }
    else if (debugQuery == 'dev') { debugType = 'dev'; isInDebug = true; }
}
else { eraseCookie('lbDebug'); }
var isInTest = ((typeof lbTest != 'undefined') && (lbTest == 'y')) ? true : false;
lbURL = lbURL.replace(/@/g, '-');
if (URLparser(lbURL).queryKey.lbRef != undefined) { lbRef = URLparser(lbURL).queryKey.lbRef; }
else if (URLparser(lbURL).queryKey.migRef != undefined) { lbRef = URLparser(lbURL).queryKey.migRef; }
lbRef = lbRef.replace(/@/g, '-');
lbURLEncoded = escape(lbURL); lbRefEncoded = escape(lbRef); lbTitleEncoded = escape(lbTitle);
lbProtocol = (window.location.protocol !== 'https:') ? 'http://' : 'https://';
lbHost = URLparser(lbURL).host.toLowerCase();
lbRef_host = URLparser(lbRef).host.toLowerCase();
lbPath = URLparser(lbURL).path;
lbQuery = URLparser(lbURL).query;
lbAnchor = URLparser(lbURL).anchor;
lbAnchor = lbAnchor.replace(/=/g, '--');
hostParts = lbHost.split('.');
if (hostParts[0].indexOf('www') != -1) { lbHost = lbHost.substring(hostParts[0].length + 1); }
if (lbHost.lastIndexOf('.') == (lbHost.length - 1)) { lbHost = lbHost.substring(0, (lbHost.length - 1)) }
if (lbHost == '') { lbHost = 'unknown_site'; }
if ((lbPath != '')) {
    if (lbPath != '/') {
        if (lbPath.indexOf(';') != -1) { lbPath = lbPath.substring(0, lbPath.indexOf(';')); }
        if (lbPath.indexOf('%3b') != -1) { lbPath = lbPath.substring(0, lbPath.indexOf('%3b')); }
        if (lbPath.indexOf('%3B') != -1) { lbPath = lbPath.substring(0, lbPath.indexOf('%3B')); }
    }
}
lb_url = (window.location.protocol !== 'file:') ? lbHost + lbPath : 'localhost';
if ((typeof lbValue == 'undefined') || (lbValue == 0) || (lbValue == '')) {
    if (URLparser(lbIframeURL).queryKey.lbValue != undefined) { lbValue = URLparser(lbIframeURL).queryKey.lbValue; }
    else if (typeof lbVal != 'undefined') { lbValue = lbVal; }
    else if (URLparser(lbIframeURL).queryKey.lbVal != undefined) { lbValue = URLparser(lbIframeURL).queryKey.lbVal; }
    else if (typeof migValue != 'undefined') { lbValue = migValue; }
    else if (URLparser(lbIframeURL).queryKey.migValue != undefined) { lbValue = URLparser(lbIframeURL).queryKey.migValue; }
    else { lbValue = ''}
}
if (lbValue == '[TRANSACTION VALUE]') { lbValue = ''; }
if (lbValue != '') {
    if (typeof lbValue == 'string') { lbValue = lbValue.replace(/,/g, '') }
    else { lbValue = lbValue}
}
else { lbValue = 0 }    
if (!isNaN(lbValue)) {
    lbValue = Math.round(lbValue * 100) / 100;
    lbValue = lbValue.toString();
}
lb_val_temp = lbValue.split('.');
if (lb_val_temp[1] != undefined) { if (lb_val_temp[1].length == 1) { lbValue += '0' } }
else { lbValue += '.00'; }
if (typeof lbTrans == 'undefined') {
    lbTrans = ''
    if (URLparser(lbIframeURL).queryKey.lbTrans != undefined) { lbTrans = URLparser(lbIframeURL).queryKey.lbTrans; }
    if (typeof migTrans == 'undefined') { if (URLparser(lbIframeURL).queryKey.migTrans != undefined) { lbTrans = URLparser(lbIframeURL).queryKey.migTrans; } }
    else { lbTrans = migTrans; }
}
if (lbTrans != '') { if (lbTrans == '[TRANSACTION ID]') { lbTrans = ''; } }
if (typeof lbData == 'undefined') {
    lbData = ''
    if (URLparser(lbIframeURL).queryKey.lbData != undefined) { lbData = URLparser(lbIframeURL).queryKey.lbData; }
    if (typeof migData == 'undefined') { if (URLparser(lbIframeURL).queryKey.migData != undefined) { lbData = URLparser(lbIframeURL).queryKey.migData; } }
    else { lbData = migData; }
}
if (lbData != '') { if ((lbData == '[& delimited name/value pairs]') || (lbData == '[Attribute/Value Pairs for Custom Data]')) { lbData = ''; } }
lbExtRef = ((lbRef != '') && (URLparser(lbRef).host != URLparser(lbURL).host)) ? true : false;
refMedium = '';
if (URLparser(lbURL).queryKey.lbMedium != undefined) { refMedium = URLparser(lbURL).queryKey.lbMedium; }
else if (URLparser(lbURL).queryKey.migMedium != undefined) { refMedium = URLparser(lbURL).queryKey.migMedium; }
else if (URLparser(lbURL).queryKey.utm_medium != undefined) { refMedium = URLparser(lbURL).queryKey.utm_medium; }
refMedium = refMedium.toLowerCase();
refSource = '';
if (URLparser(lbURL).queryKey.lbSource != undefined) { refSource = URLparser(lbURL).queryKey.lbSource; }
else if (URLparser(lbURL).queryKey.migSource != undefined) { refSource = URLparser(lbURL).queryKey.migSource; }
else if (URLparser(lbURL).queryKey.utm_source != undefined) { refSource = URLparser(lbURL).queryKey.utm_source; }
refSource = refSource.toLowerCase();
refContent = '';
if (URLparser(lbURL).queryKey.lbContent != undefined) { refContent = URLparser(lbURL).queryKey.lbContent; }
else if (URLparser(lbURL).queryKey.migContent != undefined) { refContent = URLparser(lbURL).queryKey.migContent; }
else if (URLparser(lbURL).queryKey.utm_content != undefined) { refContent = URLparser(lbURL).queryKey.utm_content; }
refContent = refContent.toLowerCase();
refTerm = '';
if (URLparser(lbURL).queryKey.lbTerm != undefined) { refTerm = URLparser(lbURL).queryKey.lbTerm; }
else if (URLparser(lbURL).queryKey.migTerm != undefined) { refTerm = URLparser(lbURL).queryKey.migTerm; }
else if (URLparser(lbURL).queryKey.utm_term != undefined) { refTerm = URLparser(lbURL).queryKey.utm_term; }
refTerm = refTerm.toLowerCase();
refCampaign = '';
if (URLparser(lbURL).queryKey.lbCampaign != undefined) { refCampaign = URLparser(lbURL).queryKey.lbCampaign; }
else if (URLparser(lbURL).queryKey.migCampaign != undefined) { refCampaign = URLparser(lbURL).queryKey.migCampaign; }
else if (URLparser(lbURL).queryKey.utm_campaign != undefined) { refCampaign = URLparser(lbURL).queryKey.utm_campaign; }
refCampaign = refCampaign.toLowerCase();
refKeyword = '';
if (URLparser(lbRef).queryKey.q != undefined) { refKeyword = URLparser(lbRef).queryKey.q; }
else if (URLparser(lbRef).queryKey.p != undefined) { refKeyword = URLparser(lbRef).queryKey.p; }
refKeyword = refKeyword.toLowerCase();
refType = ''; refEngine = '';
if ((refMedium == 'paid-search') || (refMedium == 'paid%2bsearch') || (refMedium == 'cpc') || (lbRef.indexOf('aclk') != -1) || (refSource.indexOf('paid') != -1) || (URLparser(lbURL).queryKey.gclid != undefined)) {
    refType = 'paid-search';
    if ((refSource.indexOf('google') != -1) || (lbRef.indexOf('aclk') != -1) || (lbRef_host.indexOf('google') != -1) || (URLparser(lbURL).queryKey.gclid != undefined)) { refEngine = 'google'; }
    else if ((refSource.indexOf('msn') != -1) || (refSource.indexOf('bing') != -1) || (refSource == 'yahoo%2fbing')) { refEngine = 'msn'; }
    else { refEngine = 'other'; }
}
else if (refMedium == 'paid-social') {
    refType = 'paid-social';
    if ((refSource == 'fb') || (lbRef_host.indexOf('facebook.') != -1)) { refEngine = 'facebook'; }
    else if ((refSource == 'twitter') || (lbRef_host.indexOf('twitter.') != -1) || (lbRef.indexOf('/t.co/') != -1)) { refEngine = 'twitter'; }
    else if ((refSource == 'youtube') || (lbRef_host.indexOf('youtube.') != -1)) { refEngine = 'youtube'; }
    else if ((refSource == 'pinterest') || (lbRef_host.indexOf('pinterest.') != -1)) { refEngine = 'pinterest'; }
    else if ((refSource == 'reddit') || (lbRef_host.indexOf('reddit.') != -1)) { refEngine = 'reddit'; }
    else if ((refSource == 'tumblr') || (lbRef_host.indexOf('tumblr.') != -1)) { refEngine = 'tumblr'; }
    else { refEngine = 'other'; }
}
else if ((refMedium == 'email') || (refMedium == 'e-mail')) { refType = 'email'; }
else if (refMedium == 'affiliate') { refType = 'affiliate'; }
else if (refMedium == 'display') { refType = 'display'; }
else if (refMedium == 'rtb') { refType = 'rtb'; }
else if (refMedium == 'video') { refType = 'video'; }
else if (lbExtRef) {
    if (lbRef_host.indexOf('google.') != -1) { refEngine = 'google'; refType = 'organic-search'; }
    else if (lbRef_host.indexOf('bing.') != -1) { refEngine = 'bing'; refType = 'organic-search'; }
    else if (lbRef_host.indexOf('yahoo.') != -1) { refEngine = 'yahoo'; refType = 'organic-search'; }
    else if (lbRef_host.indexOf('ask.') != -1) { refEngine = 'ask'; refType = 'organic-search'; }
    else if (lbRef_host.indexOf('aol.') != -1) { refEngine = 'aol'; refType = 'organic-search'; }
    else if (lbRef_host.indexOf('facebook.') != -1) { refEngine = 'facebook'; refType = 'social'; }
    else if ((lbRef_host.indexOf('twitter.') != -1) || (lbRef.indexOf('/t.co/') != -1)) { refEngine = 'twitter'; refType = 'social'; }
    else if (lbRef_host.indexOf('youtube.') != -1) { refEngine = 'youtube'; refType = 'social'; }
    else if (lbRef_host.indexOf('pinterest.') != -1) { refEngine = 'pinterest'; refType = 'social'; }
    else if (lbRef_host.indexOf('reddit.') != -1) { refEngine = 'reddit'; refType = 'social'; }
    else if (lbRef_host.indexOf('tumblr.') != -1) { refEngine = 'tumblr'; refType = 'social'; }
    else { refEngine = 'organic'; }
}
else {
    if (lbRef != '') { refEngine = ''; refType = 'internal'; }
    else { refEngine = ''; refType = 'direct'; }
}
if (refType == '') { refType = refMedium; } if (refEngine == '') { refEngine = refSource; }
refAction = refType + (((refType != '') && (refEngine != '')) ? '-' : '') + refEngine; if (refAction == '') { refAction = 'null'; }
if (!isLBLoaded) {
    try { 
        lbLoad(); 
        /*
        appendIframe('//cdn-akamai.mookie1.com/html/x71.html', 'xaxis_dm')
        */
    }
    catch (e) { if (isInDebug) { console.error('Error - ' + e); } }
    var lbLoaded = true;
}