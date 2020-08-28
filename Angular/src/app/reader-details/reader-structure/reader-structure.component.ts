import { Component, OnInit } from '@angular/core';
import { ReaderService } from 'src/app/service/reader.service';

@Component({
  selector: 'app-reader-structure',
  templateUrl: './reader-structure.component.html',
  styles: [],
})
export class ReaderStructureComponent implements OnInit {
  constructor(public service: ReaderService) {}

  ngOnInit(): void {}
}
