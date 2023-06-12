
    const form = document.querySelector("form");
    const resultDiv = document.querySelector("#result");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      resultDiv.innerHTML = "";
      const certificateId = form.elements.certificateId.value;
      // Verify the certificate here
      if (certificateId === "UTS/INT/017/2023") {
        resultDiv.innerHTML = `
          <p>Date of Joining: 10/02/2023</p>
          <p>Name: Md. Arman</p>
          <p>College Name: Government Engineering College Nawada</p>
          <p>Work Role: Content Writing</p>
          <p>Date of Completion: 10/04/2023</p>
          <p>Certificate ID: ${certificateId}</p>
          <a href="https://usa-tech-solution.000webhostapp.com/wp-content/uploads/2023/04/certificate-of-completion-UTS-INT-017-2023.pdf" class="download-button" download="certificate_${certificateId}.pdf">Download Certificate</a>
        `;
       
      }
       else if (certificateId === "UTS/INT/029/2023") {
        resultDiv.innerHTML = `
          <p>Date of Joining: 10/02/2023</p>
          <p>Name: Ritesh Kumar</p>
          <p>College Name: Government Engineering College Nawada</p>
          <p>Work Role: Content Writing</p>
          <p>Date of Completion: 10/04/2023</p>
          <p>Certificate ID: ${certificateId}</p>
          <a href="https://usa-tech-solution.000webhostapp.com/wp-content/uploads/2023/04/certificate-of-completion-UTS-INT-029-2023.pdf"class="download-button" download="certificate_${certificateId}.pdf">Download Certificate</a>
        `;
      } 
       else if (certificateId === "UTS/INT/043/2023") {
        resultDiv.innerHTML = `
          <p>Date of Joining: 10/02/2023</p>
          <p>Name: Gautam  Kumar</p>
          <p>College Name: Government Engineering College Nawada</p>
          <p>Work Role: Content Writing</p>
          <p>Date of Completion: 10/04/2023</p>
          <p>Certificate ID: ${certificateId}</p>
          <a href="https://usa-tech-solution.000webhostapp.com/wp-content/uploads/2023/04/Certificate-of-completion-UTS-INT-043-2023.pdf"class="download-button" download="certificate_${certificateId}.pdf">Download Certificate</a>
        `;
      } 
       else if (certificateId === "UTS/INT/032/2023") {
        resultDiv.innerHTML = `
          <p>Date of Joining: 10/02/2023</p>
          <p>Name: Sharmishtha Muskan</p>
          <p>College Name: Government Engineering College Nawada</p>
          <p>Work Role: Content Writing</p>
          <p>Date of Completion: 10/04/2023</p>
          <p>Certificate ID: ${certificateId}</p>
          <a href="https://usa-tech-solution.000webhostapp.com/wp-content/uploads/2023/04/certificate-of-completion-UTS-INT-032-2023.pdf"class="download-button" download="certificate_${certificateId}.pdf">Download Certificate</a>
        `;
      } 
      //  else if (certificateId === "12344") {
      //   resultDiv.innerHTML = `
      //     <p>Date of Joining: 02/01/2022</p>
      //     <p>Name: Ritesh Kumar</p>
      //     <p>College Name: Government Engineering College Nawada</p>
      //     <p>Work Role: Backend Developer</p>
      //     <p>Date of Completion: 02/01/2023</p>
      //     <p>Certificate ID: ${certificateId}</p>
      //   `;
      // } 
      //  else if (certificateId === "12346") {
      //   resultDiv.innerHTML = `
      //     <p>Date of Joining: 02/01/2022</p>
      //     <p>Name: Gautam Kumar</p>
      //     <p>College Name: Government Engineering College Nawada</p>
      //     <p>Work Role: Backend Developer</p>
      //     <p>Date of Completion: 02/01/2023</p>
      //     <p>Certificate ID: ${certificateId}</p>
      //   `;
      // } 
      //  else if (certificateId === "12347") {
      //   resultDiv.innerHTML = `
      //     <p>Date of Joining: 02/01/2022</p>
      //     <p>Name: Aditya Kumar</p>
      //     <p>College Name: Government Engineering College Nawada</p>
      //     <p>Work Role: Backend Developer</p>
      //     <p>Date of Completion: 02/01/2023</p>
      //     <p>Certificate ID: ${certificateId}</p>
      //   `;
      // } 
      //  else if (certificateId === "12348") {
      //   resultDiv.innerHTML = `
      //     <p>Date of Joining: 02/01/2022</p>
      //     <p>Name: Aman Kumar</p>
      //     <p>College Name: Government Engineering College Nawada</p>
      //     <p>Work Role: Backend Developer</p>
      //     <p>Date of Completion: 02/01/2023</p>
      //     <p>Certificate ID: ${certificateId}</p>
      //   `;
      // } 
      //  else if (certificateId === "12349") {
      //   resultDiv.innerHTML = `
      //     <p>Date of Joining: 02/01/2022</p>
      //     <p>Name: Prince Kumar</p>
      //     <p>College Name: Government Engineering College Nawada</p>
      //     <p>Work Role: Backend Developer</p>
      //     <p>Date of Completion: 02/01/2023</p>
      //     <p>Certificate ID: ${certificateId}</p>
      //   `;
      // } 
      //  else if (certificateId === "67890") {
      //   resultDiv.innerHTML = `
      //     <p>Date of Joining: 02/01/2022</p>
      //     <p>Name: Vivek Kumar</p>
      //     <p>College Name: Government Engineering College Nawada</p>
      //     <p>Work Role: Backend Developer</p>
      //     <p>Date of Completion: 02/01/2023</p>
      //     <p>Certificate ID: ${certificateId}</p>
      //   `;
      // } 
      //  else if (certificateId === "67891") {
      //   resultDiv.innerHTML = `
      //     <p>Date of Joining: 02/01/2022</p>
      //     <p>Name: Gulshan Kumar</p>
      //     <p>College Name: Government Engineering College Nawada</p>
      //     <p>Work Role: Backend Developer</p>
      //     <p>Date of Completion: 02/01/2023</p>
      //     <p>Certificate ID: ${certificateId}</p>
      //   `;
      // } 
      //  else if (certificateId === "67892") {
      //   resultDiv.innerHTML = `
      //     <p>Date of Joining: 02/01/2022</p>
      //     <p>Name: Raj Harsh</p>
      //     <p>College Name: Government Engineering College Nawada</p>
      //     <p>Work Role: Backend Developer</p>
      //     <p>Date of Completion: 02/01/2023</p>
      //     <p>Certificate ID: ${certificateId}</p>
      //   `;
      // } 
      
      else {
        resultDiv.innerHTML = "<p>Invalid Certificate</p>";
      }
    });

    // Add the CSS for the download button
const style = document.createElement("style");
style.innerHTML = `
  .download-button {
    background-color: green;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
  }
`;
document.head.appendChild(style);
  