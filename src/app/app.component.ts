import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxExtendedPdfViewerComponent, NgxExtendedPdfViewerModule, NgxExtendedPdfViewerService, PDFDocumentProxy } from 'ngx-extended-pdf-viewer'; 
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxExtendedPdfViewerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'DhanushkaPortfolio';
  align = 'left';
  // pdf document
  pdfSrc = '../assets/pdf/Dhanushka_Prabath.pdf';
  pdfDoc?: PDFDocumentProxy;
  pdfDownloaded: any;
  @ViewChild('pdfViewer') pdfViewer!: NgxExtendedPdfViewerComponent;

  constructor(private ngZone: NgZone,private ngxService: NgxExtendedPdfViewerService){

  }

  ngOnInit(){
    
  }

  //download the resume
  downloadCV(){
    window.open(this.pdfSrc);
  }

  sendMessageButton(){
    // const btn = document.getElementById('button');

    // document.getElementById('form')
    //  .addEventListener('submit', function(event) {
    //    event.preventDefault();
    
    //    btn.value = 'Sending...';
    
    //    const serviceID = 'default_service';
    //    const templateID = 'template_iumbuew';
    
    //    emailjs.sendForm(serviceID, templateID, this)
    //     .then(() => {
    //       btn.value = 'Send Email';
    //       alert('Sent!');
    //     }, (err) => {
    //       btn.value = 'Send Email';
    //       alert(JSON.stringify(err));
    //     });
    // });
  }


  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
