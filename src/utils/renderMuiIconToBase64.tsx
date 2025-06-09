import React from 'react';
import html2canvas from 'html2canvas';
import ReactDOM from 'react-dom/client';


export const renderMuiIconToBase64 = (icon: React.ReactElement): Promise<string> => {
  return new Promise((resolve) => {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    container.style.zIndex = '-1';
    document.body.appendChild(container);

    const root = ReactDOM.createRoot(container);
    root.render(icon);

    // Wait briefly for render to complete before snapshot
    setTimeout(async () => {
      const canvas = await html2canvas(container);
      const base64 = canvas.toDataURL('image/png');
      root.unmount();
      container.remove();
      resolve(base64);
    }, 100); // Give React a short time to render
  });
};
