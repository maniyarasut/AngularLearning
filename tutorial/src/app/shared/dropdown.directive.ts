import { Directive, HostListener, HostBinding } from "@angular/core";


@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
 
  constructor()
  {

  }
   /*@HostBinding('class.show') isOpen = false;
  @HostListener('click') openDropdown() {
    console.log("Inside directive");
    this.isOpen = !this.isOpen;
  }*/
@HostListener('keypress') mouseover(eventData: Event)
{
  console.log("Inside mouseenter directive");
}
}