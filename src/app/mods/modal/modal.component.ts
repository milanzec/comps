import { Component,OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


constructor(private element:ElementRef){
  console.log(this.element.nativeElement)
}

ngOnInit(){
document.body.appendChild(this.element.nativeElement)
}

}
