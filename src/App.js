import React, { Component } from 'react';
import './App.css';

import VideoContentYT from 'react-video-content-youtube';

export default class App extends Component {

  state = {
    optimizedVersion: true
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">

          <div style={{display: "block",background: "#353a46", borderRadius: "5px", height: "auto", width: "900px", margin: "10px", paddingTop:"20px", paddingBottom: "20px", maxWidth: "100%"}}>
            {this.state.optimizedVersion &&
              <div style={{display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%"}}>
                <p style={{
                  color: "#59ff00",
                  borderStyle: "groove",
                  borderColor: "#59ff00",
                  borderRadius: "5px",
                  width: "420px",
                  maxWidth: "100%",
                  margin: "5px",
                  padding: "2px"
                }}>Optimized version</p>
              </div>
            }
            {!this.state.optimizedVersion &&
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%"}}>
              <p style={{
                color: "#ff0000",
                borderStyle: "groove",
                borderColor: "#ff0000",
                borderRadius: "5px",
                width: "420px",
                maxWidth: "100%",
                margin: "5px",
                padding: "2px"
              }}>Not optimized version</p>
            </div>
            }
            <p>YouTube video optimize ReactJS lib demo</p>
              {this.state.optimizedVersion &&
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%"}}>
                  <a href="https://octanium91.github.io/p/optimization-video/react-demo/" rel="noopener noreferrer"
                     aria-label="link to optimized version" style={{
                    background: "#67c3da",
                    color: "#191d25",
                    textDecoration: "none",
                    height: "auto",
                    borderRadius: "5px",
                    width: "200px",
                    margin: "5px",
                    padding: "5px"
                  }}>Optimized</a>
                  <a href="https://octanium91.github.io/p/optimization-video/react-demo-slow/" rel="noopener noreferrer"
                     aria-label="link to not optimized version" style={{
                    background: "rgba(255,255,255,0)",
                    color: "#67c3da",
                    borderStyle: "groove",
                    textDecoration: "none",
                    height: "auto",
                    borderRadius: "5px",
                    width: "200px",
                    margin: "5px",
                    padding: "2px"
                  }}>No optimized</a>
                </div>
              }
            {!this.state.optimizedVersion &&
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%"}}>
              <a href="https://octanium91.github.io/p/optimization-video/react-demo/" rel="noopener noreferrer"
                 aria-label="link to optimized version" style={{
                background: "rgba(255,255,255,0)",
                color: "#67c3da",
                borderStyle: "groove",
                textDecoration: "none",
                height: "auto",
                borderRadius: "5px",
                width: "200px",
                margin: "5px",
                padding: "2px"
              }}>Optimized</a>
              <a href="https://octanium91.github.io/p/optimization-video/react-demo-slow/" rel="noopener noreferrer"
                 aria-label="link to not optimized version" style={{
                background: "#67c3da",
                color: "#191d25",
                textDecoration: "none",
                height: "auto",
                borderRadius: "5px",
                width: "200px",
                margin: "5px",
                padding: "5px"
              }}>No optimized</a>
            </div>
            }
              <div style={{display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%"}}>
                <a href="https://github.com/Octanium91/react_youtube_video_optimize_lib/" rel="noopener noreferrer" aria-label="link to GitHub project page" style={{background: "#2e5966", color: "#c7d7fc", textDecoration: "none", height: "auto", borderRadius: "5px", width: "420px", margin: "5px", padding: "5px", maxWidth: "100%"}}>Source code (GitHub)</a>
              </div>
          </div>

          {this.state.optimizedVersion &&
          <div style={{display: "contents"}}>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <VideoContentYT src="LXb3EKWsInQ" params={{autoPlay: true, thumbnailQuality: "maxres"}}/>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <VideoContentYT src="oNwJb2N_I-w" params={{autoPlay: true}}/>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <VideoContentYT src="FisOoN7Ynk8" params={{autoPlay: true}}/>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <VideoContentYT src="BHACKCNDMW8" params={{autoPlay: true}}/>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <VideoContentYT src="HSsqzzuGTPo" params={{autoPlay: true}}/>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <VideoContentYT src="ftlvreFtA2A" params={{autoPlay: true}}/>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <VideoContentYT src="1nf61dNdzPc" params={{autoPlay: true}}/>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <VideoContentYT src="7KXGZAEWzn0" params={{autoPlay: true}}/>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <VideoContentYT src="E9oKEJ1pXPw" params={{autoPlay: true}}/>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <VideoContentYT src="doN4t5NKW-k" params={{autoPlay: true}}/>
            </div>
          </div>
          }

          {!this.state.optimizedVersion &&
          <div style={{display: "contents"}}>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <div style={{position: "relative", width: "100%", height: "0", paddingBottom: "56.25%"}}>
                <iframe title="video" style={{maxWidth: "100%", width: "100%", position: "absolute", left: "0"}}
                        src={"https://www.youtube.com/embed/LXb3EKWsInQ"} allow='autoplay; encrypted-media' width="100%"
                        height="100%" frameborder={0}/>
              </div>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <div style={{position: "relative", width: "100%", height: "0", paddingBottom: "56.25%"}}>
                <iframe title="video" style={{maxWidth: "100%", width: "100%", position: "absolute", left: "0"}}
                        src={"https://www.youtube.com/embed/oNwJb2N_I-w"} allow='autoplay; encrypted-media' width="100%"
                        height="100%" frameborder={0}/>
              </div>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <div style={{position: "relative", width: "100%", height: "0", paddingBottom: "56.25%"}}>
                <iframe title="video" style={{maxWidth: "100%", width: "100%", position: "absolute", left: "0"}}
                        src={"https://www.youtube.com/embed/FisOoN7Ynk8"} allow='autoplay; encrypted-media' width="100%"
                        height="100%" frameborder={0}/>
              </div>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <div style={{position: "relative", width: "100%", height: "0", paddingBottom: "56.25%"}}>
                <iframe title="video" style={{maxWidth: "100%", width: "100%", position: "absolute", left: "0"}}
                        src={"https://www.youtube.com/embed/BHACKCNDMW8"} allow='autoplay; encrypted-media' width="100%"
                        height="100%" frameborder={0}/>
              </div>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <div style={{position: "relative", width: "100%", height: "0", paddingBottom: "56.25%"}}>
                <iframe title="video" style={{maxWidth: "100%", width: "100%", position: "absolute", left: "0"}}
                        src={"https://www.youtube.com/embed/HSsqzzuGTPo"} allow='autoplay; encrypted-media' width="100%"
                        height="100%" frameborder={0}/>
              </div>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <div style={{position: "relative", width: "100%", height: "0", paddingBottom: "56.25%"}}>
                <iframe title="video" style={{maxWidth: "100%", width: "100%", position: "absolute", left: "0"}}
                        src={"https://www.youtube.com/embed/ftlvreFtA2A"} allow='autoplay; encrypted-media' width="100%"
                        height="100%" frameborder={0}/>
              </div>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <div style={{position: "relative", width: "100%", height: "0", paddingBottom: "56.25%"}}>
                <iframe title="video" style={{maxWidth: "100%", width: "100%", position: "absolute", left: "0"}}
                        src={"https://www.youtube.com/embed/1nf61dNdzPc"} allow='autoplay; encrypted-media' width="100%"
                        height="100%" frameborder={0}/>
              </div>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <div style={{position: "relative", width: "100%", height: "0", paddingBottom: "56.25%"}}>
                <iframe title="video" style={{maxWidth: "100%", width: "100%", position: "absolute", left: "0"}}
                        src={"https://www.youtube.com/embed/7KXGZAEWzn0"} allow='autoplay; encrypted-media' width="100%"
                        height="100%" frameborder={0}/>
              </div>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <div style={{position: "relative", width: "100%", height: "0", paddingBottom: "56.25%"}}>
                <iframe title="video" style={{maxWidth: "100%", width: "100%", position: "absolute", left: "0"}}
                        src={"https://www.youtube.com/embed/E9oKEJ1pXPw"} allow='autoplay; encrypted-media' width="100%"
                        height="100%" frameborder={0}/>
              </div>
            </div>
            <div style={{height: "auto", width: "900px", margin: "10px", maxWidth: "100%"}}>
              <div style={{position: "relative", width: "100%", height: "0", paddingBottom: "56.25%"}}>
                <iframe title="video" style={{maxWidth: "100%", width: "100%", position: "absolute", left: "0"}}
                        src={"https://www.youtube.com/embed/doN4t5NKW-k"} allow='autoplay; encrypted-media' width="100%"
                        height="100%" frameborder={0}/>
              </div>
            </div>
          </div>
          }

        </header>
      </div>
    );
  };
};
