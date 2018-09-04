import { Directive, OnInit, ElementRef } from "../../../node_modules/@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef:ElementRef){

    }
    ngOnInit(){
        this.elementRef.nativeElement.style.color="red";
    }
}