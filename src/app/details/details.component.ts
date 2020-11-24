import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allAlbums } from '../mocks/albums';
import { Album } from '../models/albums';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  selectedAlbum : Album;

  constructor(private router :ActivatedRoute) { 

    let id=-1;

    let ing= this.router.snapshot.paramMap.get('id');

    ing==null?id=-1:id= +ing;
    this.selectedAlbum = allAlbums.filter((album:Album)=>album.id == id)[0]!;  
  }

  ngOnInit(): void {
      

  }

}
