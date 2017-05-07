var twitchUrl = 'https://api.twitch.tv/kraken/streams?client_id=30vl9dbtf7whfh5ejeob3myp2gfuyo&game=League%20of%20Legends&limit=20';

$.ajax({
    method: 'GET',
    url: twitchUrl,
    success: function(response){
        var gamelist = response.streams;

        for (var i = 0; i < gamelist.length; i++) {
            channel = gamelist[i];
            var url = 'https://www.twitch.tv/'+channel.channel.name;
            $('.container').append(
                '<div class="viewbox">'+
                    '<div class="preview">'+
                        '<a href="'+url+'" target="_blank"><img src="'+channel.preview.medium+'"></a>'+
                    '</div>'+
                    '<div class="bottom">'+
                        '<div class="headpic">'+
                            '<img src="'+channel.channel.logo+'">'+
                        '</div>'+
                        '<div class="intro">'+
                            '<div class="channel_name">'+channel.channel.status+'</div>'+
                            '<div class="host_name">'+channel.channel.display_name+'</div>'+
                        '</div>'+
                    '</div>'+
                '</div>');
        }

        $('.container').append('<div class="viewbox"></div>');
    }

});