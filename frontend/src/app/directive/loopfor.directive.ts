import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Directive({
  selector: '[appLoopfor]'
})

export class LoopforDirective implements OnInit{

  @Input('appLoopforEm') numbers:number[];

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
    ){ }

  ngOnInit(): void {
    for(let number of this.numbers){
      this.container.createEmbeddedView(this.template, {$implicit:number})
    }
  }

  
}
