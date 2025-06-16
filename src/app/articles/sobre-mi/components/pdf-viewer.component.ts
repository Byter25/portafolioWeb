import { Component } from '@angular/core';
import { SafeUrlPipe } from '@shared/pipes/safe-url.pipe';
@Component({
  selector: 'pdf-viewer',
  template: `
  <div class="container mx-auto rounded-md w-full h-[80vh] flex-1 z-10 relative overflow-hidden">
  <iframe
    [src]="pdfUrl | safeUrl" class="w-full h-full z-0">
  </iframe>
  </div>
  `,
  standalone: true,
  imports: [SafeUrlPipe],
})
export class PdfViewerComponent {
  pdfUrl = 'CV-Bryan-Chacaliaza.pdf'; // Cambia por la ruta a tu archivo PDF
}
