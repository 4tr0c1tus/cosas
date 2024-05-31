// ==UserScript==
// @name         Camwhores.tv Bypass
// @namespace    http://www.camwhores.tv/*
// @version      0.1
// @description  automatically open private videos in a new tab using the URL script by reddit user Bakolas
// @author       CodingWhileNaked
// @match        http://www.camwhores.tv/*
// @grant        none
// @require      https://greasyfork.org/scripts/31940-waitforkeyelements/code/waitForKeyElements.js?version=209282
// @downloadURL https://update.sleazyfork.org/scripts/37519/Camwhorestv%20Bypass.user.js
// @updateURL https://update.sleazyfork.org/scripts/37519/Camwhorestv%20Bypass.meta.js
// ==/UserScript==

var baseURL = "https://polar-springs-10127.herokuapp.com/process_get?inputBox=";

waitForKeyElements(".private", updatePrivateUrls);

function updatePrivateUrls(){
    $(".private").each(function(){
        var url = $(this).children('a').attr('href');
        if(url.includes(baseURL)){
           return true;
        }
        var urlEncode = encodeURIComponent($(this).children('a').attr('href'));
        $(this).children('a').attr("href",baseURL + url).attr('target','_blank');
    });
}