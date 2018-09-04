import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { MockNgModuleResolver } from '../../../node_modules/@angular/compiler/testing';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
@HostBinding('style.color') color:string;
@Input() defaultcolor:string='black';
@Input() highlightcolor:string='brown';
  constructor(private elRef: ElementRef, private renderer: Renderer2) { 

  }

  ngOnInit() {
    this.color=this.defaultcolor;
    //this.renderer.setStyle(this.elRef.nativeElement,'color','brown');
  }
  @HostListener('mouseenter') mouseover(){
    //this.renderer.setStyle(this.elRef.nativeElement,'color','brown');
    this.color=this.highlightcolor;
  }
  @HostListener('mouseleave') mouseleave(){
    //this.renderer.setStyle(this.elRef.nativeElement,'color','black');
    this.color=this.defaultcolor;
  }
}
