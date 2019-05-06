import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  gridAreas: string[][] = [];
  gridRows: string[] = [];
  gridCols: string[] = [];

  ngOnInit(): void {
    this.gridRows = ['1fr', '5fr', '2.5fr'];
    this.gridCols = ['1fr', '5fr', '1fr'];
    this.gridAreas = [
      ['header', 'header', 'header'],
      ['sidebar', 'main', 'aside'],
      ['sidebar', 'footer', 'footer']
    ];
  }

}
