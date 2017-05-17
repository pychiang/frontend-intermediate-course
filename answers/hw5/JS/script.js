var clientID = '30vl9dbtf7whfh5ejeob3myp2gfuyo';
var gameName = 'League%20of%20Legends';
var gameLimit = 20;
var offset = 0;

var isLoading = false;

var $container = $('.container');


var getStreams = function() {
    isLoading = true;
    $.ajax({
        method: 'GET',
        url: 'https://api.twitch.tv/kraken/streams?client_id=' + clientID + '&game=' + gameName + '&limit=' + gameLimit + '&offset=' + offset,
        success: function (response) {
            var streams = response.streams;

            for (var i = 0; i < streams.length; i++) {
                $container.append(getViewbox(streams[i]));
            }
            offset += 10;
            isLoading = false;
        },
        error: function(err) {
            $container.append('<div class="error">Failed to Load Twitch Data.</div>');
        }
    });
}

function getViewbox(data) {
    var twitchLiveUrl = 'https://www.twitch.tv/' + data.channel.name;
    return ''+
    '<div class="viewbox">' +
        '<div class="preview">' +
            '<a href="' + twitchLiveUrl + '" target="_blank"><img src="' + data.preview.medium + '"  onload="this.style.opacity=1"></a>' +
        '</div>' +
        '<div class="bottom">' +
            '<div class="headpic">' +
                '<img src="' + data.channel.logo + '" onload="this.style.opacity=1">' +
            '</div>' +
            '<div class="intro">' +
                '<div class="channel_name">' + data.channel.status + '</div>' +
                '<div class="host_name">' + data.channel.display_name + '</div>' +
            '</div>' +
        '</div>' +
    '</div>';
}

// Load new data when getting close to the bottom
$(document).ready(function() {
    getStreams();
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            if(!isLoading) {
                getStreams();
            }
            
        }
    });
});

