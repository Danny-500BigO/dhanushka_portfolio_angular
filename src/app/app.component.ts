import { Component, NgZone, OnInit, ViewChild, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxExtendedPdfViewerComponent, NgxExtendedPdfViewerModule, NgxExtendedPdfViewerService, PDFDocumentProxy } from 'ngx-extended-pdf-viewer'; 
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';


import {ReactiveFormsModule,FormBuilder, Validators} from '@angular/forms'
import { CommonModule } from '@angular/common';

import { PrimeNG } from 'primeng/config';


@Component({
    selector: 'app-root',
    imports: [NgxExtendedPdfViewerModule, ReactiveFormsModule, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'DhanushkaPortfolio';
  align = 'left';
  // pdf document
  pdfSrc = 'assets/pdf/Dhanushka_Prabath.pdf';
  pdfDoc?: PDFDocumentProxy;
  pdfDownloaded: any;
  @ViewChild('pdfViewer') pdfViewer!: NgxExtendedPdfViewerComponent;


  constructor(private ngZone: NgZone,private ngxService: NgxExtendedPdfViewerService, 
    private formBuilder:FormBuilder,private primeng: PrimeNG){

  }

  public sendMessageForm:any;

  ngOnInit(){
    this.primeng.ripple.set(true);
    this.LoadMessageForm();
  }

  //download the resume
  downloadCV(){
    window.open(this.pdfSrc);
  }

  //initilize the form
  LoadMessageForm(){
    this.sendMessageForm = this.formBuilder.group({
        nameControl:([]),
        emailControl:(['', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
   ])]),
        commentControl:[]
    })
  }

  sendMessageButton(){
   
    emailjs
      .send('service_s3mywkk', 'template_b1wnx0q', {...this.sendMessageForm.value} ,{
        publicKey: '6URA-uGSEnqNMWygR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          this.sendMessageForm.reset();
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }

}
