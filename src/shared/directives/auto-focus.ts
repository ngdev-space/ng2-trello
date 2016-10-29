import { Directive, Renderer, ElementRef } from '@angular/core';
 
@Directive({
    selector: '[autofocus]' // Attribute selector
})
export class AutoFocus {
    constructor(
        private renderer: Renderer,
    	private elementRef: ElementRef
    ) {}

    ngAfterViewInit() {
        const element = this.elementRef.nativeElement;
        this.renderer.invokeElementMethod(element, 'focus');
    }
}