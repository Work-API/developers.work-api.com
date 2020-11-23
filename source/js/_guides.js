function setupTertiaryContents() {
  let tertiaryNavUl = $('.tertiary-navigation > .navigation-inner--sticky ul.nav-content');
  if (tertiaryNavUl.length === 0) return;

  $('.guide h3, .guide h4, .guide h5').toArray().forEach(function(elem) {
    let label = elem.innerHTML;
    tertiaryNavUl.append('<li class="level-'+elem.tagName.toLowerCase()+'">'+label+'</li>');
  });

  if (tertiaryNavUl.children().length == 0) {
    tertiaryNavUl.parent().parent().remove();
  }
}

function setupTertiaryHighlights() {
  let tertiaryNavUl = $('.tertiary-navigation > .navigation-inner--sticky ul.nav-content');
  if (tertiaryNavUl.length === 0) return;

  new ActiveMenuLink('.tertiary-navigation ul', {
    headerHeight: 120,
    scrollOffset: -200,
    itemTag: 'li'
  });
}

$(document).ready(function() {
  setupTertiaryContents();
  setupTertiaryHighlights();
});
