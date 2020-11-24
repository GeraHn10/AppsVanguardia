import { Component, OnInit } from '@angular/core';
import { Album } from '../models/albums';
import { allAlbums } from '../mocks/albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums? : Array<Album>;

  constructor() { }

  ngOnInit(): void {

      this.albums=allAlbums;

  }

}
