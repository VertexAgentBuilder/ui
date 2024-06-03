import React from 'react';
import './PoliciesPage.css'; // Import your CSS file for styling

const Policies = () => {
  return (
    <div className="policies-container">
      <div className="policies-section">
        <h2>User Agreements You Agreed To</h2>
        <ul className="pdf-list">
          <li>
            <object data="/pdfs/poco_useragr.pdf" type="application/pdf" width="100%" height="500px">
              <p>PDF cannot be displayed. You can download it <a href="/path/to/user-agreement-1.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </object>
          </li>
          
          {/* Add more PDFs as needed */}
        </ul>
      </div>
      <div className="policies-section">
        <h2>Privacy Policies You Are Subject To</h2>
        <ul className="pdf-list">
          <li>
            <object data="/pdfs/poco_privacy.pdf" type="application/pdf" width="100%" height="500px">
              <p>PDF cannot be displayed. You can download it <a href="/path/to/privacy-policy-1.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </object>
          </li>
          <li>
            <object data="/path/to/privacy-policy-2.pdf" type="application/pdf" width="100%" height="500px">
              <p>PDF cannot be displayed. You can download it <a href="/path/to/privacy-policy-2.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </object>
          </li>
          {/* Add more PDFs as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Policies;
