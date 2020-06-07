# react_youtube_video_optimize_lib
Youtube video optimize on page in reactjs<br />

ReactJS component [VideoContentYT.js](https://github.com/Octanium91/react_youtube_video_optimize_lib/blob/master/src/VideoContentYT.js) can optimize youtube video content on page<br />
### `USE`
example: `<VideoContentYT src="LXb3EKWsInQ" params={{autoPlay: true}} />`<br />
<br />
props:<br />
**`src`** - source of content. Can be: youtube vide hash\code (example: `LXb3EKWsInQ`) or url on youtube video **[NOT WORKING IN IE]** (example: `https://www.youtube.com/watch?v=LXb3EKWsInQ` or `https://youtu.be/LXb3EKWsInQ` or `https://www.youtube.com/embed/LXb3EKWsInQ`)<br /> 
**`params`** - object with parameters.<br />
**Parameters detail (`params`):**   
`autoPlay` - boolean - set `true` for autoplay video after press play button   
`thumbnailQuality` - string - youtube video preview quality. Can be: `default`, `hq`, `mq`, `sd`, `maxres`<br />
`title` - string - img title<br /> 
`className` - string - custom class name
### `DEMO`
[Demo website](https://octanium91.github.io/p/optimization-video/react-demo/)<br />
Press `Optimized` for loading optimized version, press `No optimized` for loading not optimized version.
### `START DEMO`
For start demo project, clone this repository and start (do `yarn install` and `yarn start` or `npm install` and `npm start` (if you use npm))<br />
