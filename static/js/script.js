/* jQuery for interactive design */

/* jshint esversion: 6 */
/* globals $:false */
/* Comments above tells JSHint what version of JS is being used, and secondly overrides JSHint's assumption that the 
$ symbol is an undefined variable */

/* Materialize jQuery intialisation */

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.carousel').carousel();
});

/* Navigation */
/* Need to ensure that button width stays the same when icon changes */

$("#pintButton").mouseenter(function(){
  $(this).html("<i class='fas fa-beer'></i>");
});
$("#pintButton").mouseleave(function(){
  $(this).html("Pints");
});

$("#pubButton").mouseenter(function(){
  $(this).html("<i class='fas fa-store-alt'></i>");
});
$("#pubButton").mouseleave(function(){
  $(this).html("Pubs");
});

$("#addButton").mouseenter(function(){
  $(this).html("<i class='fas fa-pen-nib'></i>");
});
$("#addButton").mouseleave(function(){
  $(this).html("Add a review");
});

$("#regButton").mouseenter(function(){
  $(this).html("<i class='fas fa-id-badge'></i>");
});
$("#regButton").mouseleave(function(){
  $(this).html("Register");
});


$("#logButton").mouseenter(function(){
  $(this).html("<i class='fas fa-sign-in-alt'></i>");
});
$("#logButton").mouseleave(function(){
  $(this).html("Log In");
});