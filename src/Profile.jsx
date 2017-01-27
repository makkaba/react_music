import React, { Component } from 'react';
import './App.css';

export default class Profile extends Component {
  render() {
    console.log('this.props', this.props);
    let artist = {name: '', followers: {total: ''}, images: [{url: ''}], genres: []};
    artist = this.props.artist !== null ? this.props.artist : artist;
    if(this.props.artist !== null) {
      artist = this.props.artist;
    }
    
    return (
      <div className="profile">
        <img
          alt="Profile"
          className="profile-img"
          src={artist.images[0].url}
        />
        <div>{artist.name}</div>
        <div>{artist.followers.total}</div>
        <div>
          {
            artist.genres.map((genre, index )=> {
              genre = genre !== artist.genres[artist.genres.length-1] ? ` ${genre},` : ` & ${genre}`;
              return (
                <span key={index}>{genre}</span>
              )
            })
          }
        </div>
      </div>
    )
  }
}