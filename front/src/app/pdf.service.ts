import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  public generatePDF(elementId: string, pdfName: string): void {
    const data: any = document.getElementById(elementId);
    html2canvas(data, { useCORS: true }).then(canvas => {
      const imgWidth = 208;
      const pageHeight = 297;
      const margin = 10; // Margen superior e inferior
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      let heightLeft = canvas.height;
      let position = 0;
      let pageNumber = 0;

      while (heightLeft > 0) {
        pageNumber++;
        const canvasSection = document.createElement('canvas');
        canvasSection.width = canvas.width;
        canvasSection.height = (pageHeight * canvas.width) / imgWidth;

        const ctx = canvasSection.getContext('2d');
        if (ctx) {
          ctx.drawImage(canvas, 0, position, canvas.width, canvasSection.height, 0, 0, canvasSection.width, canvasSection.height);
        }

        const imgData = canvasSection.toDataURL('image/png');
        if (pageNumber > 1) pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, margin, imgWidth, (pageHeight - margin * 2));
        
        position += canvasSection.height;
        heightLeft -= canvasSection.height;
      }

      pdf.save(`${pdfName}.pdf`);
    });
  }
}
