import { Track } from "./models/tracks.model";
import { Playlist } from "./models/playlist.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiPlayerService {
  constructor(private http: HttpClient) {}

  private API: string = "http://localhost:5050";
  private API_Tracklist: string;
  private tracks: Track[] = [];

  getTracks() {
    return this.getPlaylists()
      .then(this.extractPlayLists.bind(this))
      .then(this.fetchTracks.bind(this))
      .then(this.extractTracks.bind(this));
  }

  private fetchTracks(id) {
    return this.http.get("http://localhost:5050/tracks/" + id)
           .toPromise()
           .then( (res:any) => res.data )
  }

  private getPlaylists() {
    return this.http.get(this.API + "/playlists")
      .toPromise()
      .then( (res:any) => res.data )
      .then( playlists => playlists.filter( pl => pl.nb_tracks > 10 ))
  }

  private extractPlayLists(playlists: any) {
    const idx = Math.floor(Math.random() * (playlists.length  + 1));
    return playlists[idx].id;
  }

  private extractTracks( tracks ) {
    return tracks.filter(t => t.preview  !='' ).map(
      ({ id, title, artist, album, preview }: any) =>
        new Track(id, title, artist.name, album.title, album.cover_big, preview)
    );
  }
}
