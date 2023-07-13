const { remote } = require('electron');
const axios = require('axios');

const url = 'http://127.0.0.1:3000/getFavoriterList';

setTimeout(()=>{
    initEvents();
})
axios.get(url)
  .then(response => {
    loadFavoriterList(response.data);
  })
  .catch(error => {
    console.error(error);
  });


  function loadFavoriterList(list) {
    let html = '';
    for(let item of list) {
        html += `<span class="favorite" data-title="${item}"><span class="favorite-title">${item}</span></span>`;
    }
    document.getElementById('favorites_list').innerHTML = html;
   
  }

  function initEvents(){
    
    $('#favorites_list').on('.favorites-list', function() {
        $('#audio_player').attr('src', 'http://127.0.0.1:3000/readMusic?${title}');
    });


  }
