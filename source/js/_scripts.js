function getUrlVars(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$(document).ready(function() {

  // Nav menu interactions
  $('#show_hide_nav').click(function() {
    $('#site_header').toggleClass('is-active');
    $('section').toggleClass('is-slid');
    $(this).toggleClass('is-active');
  });

  $('section, footer').click(function() {
    $('#site_header').removeClass('is-active');
    $('section').removeClass('is-slid');
    $('#show_hide_nav').removeClass('is-active');
  });

  $('.js-toggle-card').click(function(e) {
    e.preventDefault();
    $('.js-toggle-card').addClass('is-inactive');
    $('.landing__laptop').addClass('is-inactive');
    $(this).removeClass('is-inactive');
  });

  $('#slider-1').click(function() {
    $('#slide-1').removeClass('is-inactive');
  });
  $('#slider-2').click(function() {
    $('#slide-2').removeClass('is-inactive');
  });
  $('#slider-3').click(function() {
    $('#slide-3').removeClass('is-inactive');
  });
  $('#slider-4').click(function() {
    $('#slide-4').removeClass('is-inactive');
  });

  $(window).scroll(updateHeaderTransparency);

  function updateHeaderTransparency(){
    let opaqueTop = window.scrollY > 30;
    $('.fixed-top').toggleClass('opaque', opaqueTop);
  }
  setTimeout(updateHeaderTransparency, 300);
  //set up contact form
  // if($('#contact_form').size() > 0){
  //   $("#contact_form").validate();
  //   $("#contact_form").submit(function(e){
  //     if($(this).valid()){
  //       // get data
  //       var post_data = $(this).serializeArray();
  //       var form_url = $(this).attr("action");
  //       var form_method = $(this).attr("method");

  //       $.ajax({
  //           url: form_url,
  //           method: form_method,
  //           data: post_data,
  //           dataType: "json",
  //           success: function(res){
  //             if(res && res.success){
  //               $('.js-before-send').addClass('is-hidden');
  //               $('.js-after-send').removeClass('is-hidden');
  //             }
  //           }
  //       });
  //     }
  //     e.preventDefault(); //STOP default action
  //   });
  // }


  // grab the UTM details and put it in a cookie
  var urlVars = getUrlVars();
  var campaignRef = urlVars.utm_campaign || 'earlybird';
  document.cookie = 'utm_campaign='+campaignRef+'; expires=Mon, 31 Dec 2037 00:00:00 UTC';
});
