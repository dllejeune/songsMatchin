export class Track{
  id: number;
  title: string;
  artist:string;
  album:string;
  imageUrl:string;
  previewUrl:string;

  constructor(id, title, artist, album, imageUrl, previewUrl){
    this.id = id,
    this.title = title,
    this.album = album,
    this.artist = artist,
    this.imageUrl = imageUrl,
    this.previewUrl = previewUrl
  }
}
