import React from 'react';
const DataBreach = () => {
  const downloadPdf = () => {
    const pdfPath = '/DataBreachPdfDownload.pdf';
    const dummyLink = document.createElement('a');
    dummyLink.href = pdfPath;
    dummyLink.download = 'DataBreachPdfDownload.pdf';
    document.body.appendChild(dummyLink);
    dummyLink.click();
    document.body.removeChild(dummyLink);
  };
  return (
    <div className="data-breach-container">
      <div className="data-breach-container-pdf">
        <button onClick={downloadPdf}>Download PDF</button>
      </div>
      <div className="data-breach-container-questions"></div>
    </div>
  );
};

export default DataBreach;
