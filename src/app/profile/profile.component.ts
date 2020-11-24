import { Component, OnInit } from '@angular/core';
import { boughtAlbums } from '../mocks/albums';
import { Album } from '../models/albums';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  albums?:Array<Album>;

  ngOnInit(): void {
    this.albums= boughtAlbums;
  }

}
