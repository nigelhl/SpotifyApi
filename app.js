$(function() {
	$('.artist-getter').submit( function(event){
		// zero out results if previous search has run
		$('.results').html('');
		// get the value of the tags the user submitted
		var tags = $(this).find("input[name='tags']").val();
		getArtist(tags);
	});
});

// Make the request
function getArtist(tags){
  var params = {
    q: tags,
    type: 'artist'
  };
  url = 'https://api.spotify.com/v1/search';

  $.getJSON(url, params, function(data){
    showResults(data.artists.items);
  });
}

// Show result
function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.name + '</p>';
  });
  $('.search-results').html(html);
}

