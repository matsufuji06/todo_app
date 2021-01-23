$(function() {
  $('.js-form').on('submit', function(e) {
    e.preventDefault();
    var todo = $('.js-form__text-field').val();
    $.ajax({
      type: 'POST',
      url: '/todos',
      data: {
        todo: {
          content: todo
        }
      },
      dataType: 'json'
    })
  });
});