import { Component } from '@angular/core';
import { SafeUrlPipe } from '@shared/pipes/safe-url.pipe';
@Component({
  selector: 'pdf-viewer',
  template: `
  <div class="rounded-md">
  <iframe
    [src]="pdfUrl | safeUrl" class="h-[80vh] w-full flex-1">
  </iframe>
  </div>
  `,
  standalone: true,
  imports: [SafeUrlPipe],
})
export class PdfViewerComponent {
  pdfUrl = 'assets/CV-Bryan-Chacaliaza.pdf'; // Cambia por la ruta a tu archivo PDF
}
