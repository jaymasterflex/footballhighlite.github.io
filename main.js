var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://www.scorebat.com/video-api/v1/",
    "method": "GET",
}



$.ajax(settings).done(function(response) {
    console.log(response);
   // var title=response[0].competition.name;
    
  var respond = response.map(function(item){
      return `<div class="card-columns flex-cotainer">
                <div class="card vid">
                <p class="title">  ${item.competition.name}  </p>
                 ${item.videos[0].embed} 
                    <div class="card-body">
                        <p class="comp">
                        ${item.date}
                        </p>
                        <div class="livescore-card">
                        ${item.title}
                            
                        </div>
                    </div>
                </div>
            </div>`
  }
 )
    $('.work').append(respond);
});

