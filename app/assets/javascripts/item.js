$(function() {
  $('.js-form').on('submit', function(e) {
    e.preventDefault();
    var item = $('.js-form__text-field').val();
    $.ajax({
      type: 'POST',
      url: '/items',
      data: {
        item: {
          content: item
        }
      },
      dataType:'json'
    })
    .done(function(data) {
      var html = $('<li class="item">').append(data.content);
      $('items').append(html);
      $('js-form__text-field').val('');
    })
    .fall(function() {
      alert('error');
    });
  });
});