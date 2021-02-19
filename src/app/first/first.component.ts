import { Component } from '@angular/core';
import { of } from 'rxjs'
import { SubSink } from 'src/subsink/subsink.base'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent extends SubSink {
  constructor() { 
    super()
    this.sub = of(1).subscribe()
    this.sub = of(2).subscribe()
  }
}
