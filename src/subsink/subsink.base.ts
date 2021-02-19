import { Injectable, OnDestroy } from "@angular/core"

@Injectable()
export abstract class SubSink implements OnDestroy {
  private _subs = [];
  public set sub(v : any) {
    this._subs.push(v);
  }

  ngOnDestroy(): void {
    console.log("SubSink ngOnDestroy unsubscribe subs")
    this._subs.forEach(s => s.unsubscribe && s.unsubscribe())
    this._subs = [];
  }
}