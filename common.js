
var last_song, last_artist = '';
self.setInterval(displaySongName, 5000);


function injectPopupDiv(current_song, current_artist) {
    
    var html = '';
    html += '<div id="mr_song_overlay" style="background-color: black; color: white; font-family: monospace"><br /><br /><br /><br /><br /><br /><br />';
    html += '<center><div style="font-size: 6em" id="mr_song_name">' +current_song + '</div>' ;
    html += '<div style="font-size: 5em">by:</div>';
    html += '<div style="font-size: 6em" id="mr_song_artist">' +current_artist + '</div></center></div>';
    $('body').before(html);
}
function removePopup(){
    $('#mr_song_overlay').remove();
}
function displaySongName() {
  // If the letter 'g' is found in the tab's URL...
   var current_song, current_artist = '';
   console.log('running');
   current_song = $('.playerBarSong').text();
   current_artist = $('.playerBarArtist').text();
   
    if(isNewSong(current_song, current_artist, last_song, last_artist)) {
        removePopup();
        //display the pop up
        if(isMusicPlaying() == true && current_song > '' && current_artist > '') {
            
            console.log('NEW SONG!!!');
            console.log(current_song+' BY: '+current_artist);
            
            injectPopupDiv(current_song, current_artist);
            
            //refresh the last_song data
            last_song = current_song;
            last_artist = current_artist;
        }
    }
}
function isMusicPlaying() {
    if($('.playButton').is(":visible")) {
        return false;
    }
    else{
        return true;
    }
}
function isNewSong(current_song, current_artist, last_song, last_artist){
    if(current_song != last_song || current_artist != last_artist)
        return true;
    else
        return false;
}
