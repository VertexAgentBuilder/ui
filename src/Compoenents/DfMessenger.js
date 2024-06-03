// DfMessenger.js

import React, { useEffect } from "react";

const DfMessenger = () => {
  useEffect(() => {
    const path = window.location.pathname;
    const dfMessenger = document.querySelector('df-messenger');
    
    if (dfMessenger) {
      dfMessenger.remove();
    }
    
    const newDfMessenger = document.createElement('df-messenger');
    newDfMessenger.setAttribute('oauth-client-id', '147260466019-am2q80rp6t0l094beipkk51li55hoecn.apps.googleusercontent.com');
    newDfMessenger.setAttribute('location', 'us-central1');
    newDfMessenger.setAttribute('language-code', 'en');
    newDfMessenger.setAttribute('max-query-length', '200');
    
    if (path === '/policies') {
      newDfMessenger.setAttribute('project-id', 'local-cogency-413608');
      newDfMessenger.setAttribute('agent-id', 'fcbd9721-6187-4bac-9e48-7b86c1c835ce');
      newDfMessenger.setAttribute('chat-title', 'Policy Support');
    } else {
      newDfMessenger.setAttribute('project-id', 'agentbuilderhackathon');
      newDfMessenger.setAttribute('agent-id', '4fe83929-eb1d-465b-8a99-3b04f1852a0d');
      newDfMessenger.setAttribute('chat-title', 'Customer Care');
    }
    
    document.body.appendChild(newDfMessenger);

    return () => {
      if (newDfMessenger) {
        newDfMessenger.remove();
      }
    };
  }, []);

  return null; // DfMessenger is a side effect and doesn't render any UI
};

export default DfMessenger;
