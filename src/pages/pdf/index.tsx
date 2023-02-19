import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `/assets/pdf-worker_2-16-105.min.js`;
// pdf.worker_2-16-105.min
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';

const PdfPage = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }: PDFDocumentProxy) {
    setNumPages(numPages);
  }

  useEffect(() => {
    console.log('pdfjs.version', pdfjs.version)
  }, [])

  return (
    <div>
      <h1>PDF</h1>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <div>
        <button type="button" onClick={() => setPageNumber(pageNumber - 1)}>
          Previous
        </button>
        <button type="button" onClick={() => setPageNumber(pageNumber + 1)}>
          Next
        </button>
      </div>
      <Document file="/assets/알파캠퍼스_활용_매뉴얼.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default PdfPage;