
//funcao envia comentario para db
$('.btn_audioText').on('click', function(event) {
  // event.preventDefault();
  let data = $('.audio_text').val();
  let json = JSON.stringify({ comentario: data })
  if (!data) {
    console.log('comentario vazio');
    return false;
  }else {
    $.ajax({
      url: '/save',
      method: 'POST',
      contentType: 'application/json',
      data: json,
      success: function(res) {
        window.location.reload()
      },
      error: function() {
        console.log('error');
      }
    })
  }
});

/* GET audio on click*/
$('.play').on('click', function(event) {
   let text = $(this).parent().siblings('.comment').text()
   let json = JSON.stringify({ texto: text })
   console.log('json', json);
    $.ajax({
      url: '/play',
      method: 'POST',
      contentType: 'application/json',
      data: json,
      success: function(res) {
        console.log('deu certo', res);
      },
      error: function() {
        console.log('error');
      }
    })
});
