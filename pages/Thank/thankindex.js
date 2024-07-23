document.addEventListener("DOMContentLoaded", function() {
   
  document.querySelector('.clearlogbtn').addEventListener('click', function() {
       
      var pdfUrl = "/pages/Thank/certificate.pdf";  
      var link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "certificate.pdf";  
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
});
