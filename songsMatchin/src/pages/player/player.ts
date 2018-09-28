import { ApiPlayerService } from "./api-player-service";
import { Component } from "@angular/core";
import { HomePage } from "./../home/home";
import { NavController, NavParams } from "ionic-angular";
import { Track } from "./models/tracks.model";

@Component({
  selector: "page-player",
  templateUrl: "player.html"
})
export class PlayerPage {
  public titleLeft: number = 20;
  public tracks;
  public currentTrack: any = {};
  public currentTrackNumber: number = 3;
  swicthing = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private playerService: ApiPlayerService
  ) {
    this.playerService.getTracks()
                      .then(elt => this.tracks = elt)
                      .then(elt => this.updateCurrentTrack());
  }

  updateCurrentTrack() {
    this.currentTrack = this.tracks[this.currentTrackNumber];
    console.log(this.currentTrack.previewUrl);
  }

  nextTrack(){
    this.swicthing = true;
    this.currentTrackNumber ++;
    this.updateCurrentTrack();

    setTimeout( ()=> this.swicthing = false, 300)
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PlayerPage");
  }

  like() {
    this.nextTrack();
  }

  superLike() {
    this.nextTrack();

    console.log("Super Like !");
  }

  disLike() {
    this.nextTrack();

    console.log("Dislike !");
  }

  goBack() {
    this.navCtrl.setRoot(HomePage);
  }
}
