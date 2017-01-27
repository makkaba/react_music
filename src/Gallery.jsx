import React, { Component } from 'react';
import './App.css';

export default class Gallery extends Component {
  playAudio(previewUrl) {
    let audio = new Audio(previewUrl)
    audio.play()
  }
  render() {
    console.log('gallery props', this.props);
    const { tracks } = this.props;
    return (
      <div>
      {tracks.map((track, key) => {
        const trackImg = track.album.images[0].url;
        return (
          <div 
            key={key}
            className="track"
            onClick={()=> this.playAudio(track.preview_url)}
          >
            <img
              src={trackImg}
              className="track-img"
              alt="track"
            /> 
          <p className="track-text">
            {track.name}
          </p>
          </div>
        );
        
      })}
      </div>
    );
  }
}