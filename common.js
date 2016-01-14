
var last_song = '';
var last_artist = '';
self.setInterval(displaySongName, 5000);

function injectPopupDiv( current_song, current_artist ){
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
    var current_song = $( '.playerBarSong' ).text();
    var current_artist = $( '.playerBarArtist' ).text();
   
    if( isNewSong( current_song, current_artist, last_song, last_artist ) ){
        removePopup();
        if( isMusicPlaying() == true && current_song > '' && current_artist > ''){
            injectPopupDiv(current_song, current_artist);
            last_song = current_song;
            last_artist = current_artist;
        }
    }
}
function isMusicPlaying(){
    var playing = true;
    if( $('.playButton').is(":visible") ){
        playing = false;
    }
    return playing;
}
function isNewSong( current_song, current_artist, last_song, last_artist ){
    var newsong = false;
    if( current_song != last_song || current_artist != last_artist ){
        newsong = true;
    }
    return newsong;
}