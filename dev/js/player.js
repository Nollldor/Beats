let player;
const playerContainer = $('.player');

let eventsInit = () => {
    $(".player__start").click(e => {
        e.preventDefault();

        if (playerContainer.hasClass("paused")) {
            //playerContainer.removeClass("paused");
            player.pauseVideo();
        }else {
            //playerContainer.addClass("paused");
            player.playVideo();
        }
    });

    $(".player__playback").click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;

        
        $(".player__playback-button").css({
            left: `${newButtonPositionPercent}%`
        })

        player.seekTo(newPlaybackPositionSec);
    });

    //volume
    $(".player__volume").click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        
        if(newButtonPositionPercent <= 100 && newButtonPositionPercent >= 0 ){
            $(".player__volume-button").css({
                left: `${newButtonPositionPercent}%`
            });
            
            player.setVolume(newButtonPositionPercent);
        }
    });
    //end volume

    $(".player__splash").click(e => {
        player.playVideo();
    });
};

const formatTime = timeSec => {
    const roundTime = Math.round(timeSec);

    const minutes = addZero(Math.floor(roundTime /60));
    const seconds = addZero(roundTime - minutes * 60);

    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    return `${minutes} : ${seconds}`;
}

const onPlayerReady = () => {
    let interval; 
    const durationSec = player.getDuration();

    $(".player__duration-estimated").text(formatTime(durationSec));

    if (typeof interval != 'undefined') {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        const comletedSec = player.getCurrentTime();
        const completedPercent = (comletedSec / durationSec) * 100;

        $(".player__playback-button").css({
            left: `${completedPercent}%`
        });
        $(".player__duration-completed").text(formatTime(comletedSec));
    }, 1000);
};

const onPlayerStateChange = event => {
/*
-1 (?????????????????????????????? ?????????? ???? ????????????)
0 (?????????????????????????????? ?????????? ??????????????????)
1 (??????????????????????????????)
2 (??????????)
3 (??????????????????????)
5 (?????????? ???????????? ??????????????).
*/
    switch (event.data) {
        case 1:
            playerContainer.addClass("active");
            playerContainer.addClass("paused");
            break;  

        case 2:
            playerContainer.removeClass("active");
            playerContainer.removeClass("paused");
            break;
    }
}

const isTablet = window.matchMedia("(max-width: 768px)").matches;
const isMobile = window.matchMedia("(max-width: 480px)").matches;

if(isMobile){
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('yt-player', {
            height: '233', //352
            width: '394', //594
            videoId: '1_f3RcyYdfA',
            playerVars: {
                'playsinline': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },
            playerVars: {
                controls: 0,
                disablekb: 0,
                showinfo: 0,
                rel: 0,
                autoplay: 0,
                modestbranding: 0,
                iv_load_policy: 3,
            }
        });
    } 
}else if(isTablet){
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('yt-player', {
            height: '352',
            width: '594',
            videoId: '1_f3RcyYdfA',
            playerVars: {
                'playsinline': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },
            playerVars: {
                controls: 0,
                disablekb: 0,
                showinfo: 0,
                rel: 0,
                autoplay: 0,
                modestbranding: 0,
                iv_load_policy: 3,
            }
        });
    } 
}else{
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('yt-player', {
            height: '392',
            width: '662',
            videoId: '1_f3RcyYdfA',
            playerVars: {
                'playsinline': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },
            playerVars: {
                controls: 0,
                disablekb: 0,
                showinfo: 0,
                rel: 0,
                autoplay: 0,
                modestbranding: 0,
                iv_load_policy: 3,
            }
        });
    } 
}

eventsInit();

(function() {
    
})()