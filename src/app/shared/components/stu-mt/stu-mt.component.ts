import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from '../models/stu';

@Component({
  selector: 'app-stu-mt',
  templateUrl: './stu-mt.component.html',
  styleUrls: ['./stu-mt.component.scss']
})
export class StuMtComponent implements OnInit {
  stuArray:Array<Istd>=[]
  @ViewChild('name')
  name!: ElementRef;
  @ViewChild('lname')
  lname!: ElementRef;
  @ViewChild('email')
  email!: ElementRef;
  @ViewChild('contact')
  contact!: ElementRef;
 generateuuid(){
  // Generate a random UUID
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });

 }

  ngOnInit(): void {
  }
  onaddStu(){
    let stuobj={
      id:this.generateuuid(),
      name:this.name.nativeElement.value,
      lname:this.lname.nativeElement.value,
      email:this.email.nativeElement.value,
      contact:this.contact.nativeElement.value,
    }
    this.stuArray.push(stuobj)
    
    this.name.nativeElement.value='';
    this.lname.nativeElement.value='';
    this.email.nativeElement.value='';
    this.contact.nativeElement.value='';

    console.log("stu add succedullay",stuobj);
    
  }
}
