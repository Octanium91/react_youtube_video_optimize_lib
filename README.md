# react_youtube_video_optimize_lib
Youtube video optimize on page in reactjs

ReactJS component [VideoContentYT.js](https://github.com/Octanium91/react_youtube_video_optimize_lib/blob/master/src/VideoContentYT.js) can optimize youtube video content on page

props:
 src - source of content. Can be: youtube vide hash\code (example: LXb3EKWsInQ) or url on youtube video *[NOT WORKING IN IE]* (example: https://www.youtube.com/watch?v=LXb3EKWsInQ or https://youtu.be/LXb3EKWsInQ or https://www.youtube.com/embed/LXb3EKWsInQ)
 params - object with parameters.
     parameters detail:
     autoPlay - boolean - set 'true' for autoplay video after press play button
     thumbnailQuality - string - youtube video preview quality. Can be: default, hq, mq, sd, maxres
     title - string - img title
     className - string - custom class name

 example: <VideoContentYT src="LXb3EKWsInQ" params={{autoPlay: true, thumbnailQuality: "maxres"}} />

For start demo project, clone this repository and start (do 'yarn install' and 'yarn start')