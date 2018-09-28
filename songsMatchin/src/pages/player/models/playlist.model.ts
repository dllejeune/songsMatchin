import { Track } from "./tracks.model";

export class Playlist {
  id: number;
  nb_tracks: number;
  tracklist: Track[];

  constructor(id, nb_tracks, tracklist){
    this.id = id;
    this.nb_tracks = nb_tracks;
    this.tracklist = tracklist;
  }
}
