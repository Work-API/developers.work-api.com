$(document).ready(function() {
  let $tertiaryNavUl = $('.tertiary-navigation > .navigation-inner--sticky ul.nav-content');

  $('.guide h3, .guide h4, .guide h5').toArray().forEach(function(elem) {
    let label = elem.innerHTML;
    $tertiaryNavUl.append('<li class="level-'+elem.tagName.toLowerCase()+'">'+label+'</li>');
  });

  if ($tertiaryNavUl.children().length == 0) {
    $tertiaryNavUl.parent().parent().remove();
  }
});
