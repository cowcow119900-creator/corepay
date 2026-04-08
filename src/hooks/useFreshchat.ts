import { useEffect, useCallback } from 'react';

declare global {
  interface Window {
    fcWidget: any;
    fcWidgetMessengerConfig: any;
  }
}

export const useFreshchatInit = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://fw-cdn.com/16077529/7063118.js';
    script.setAttribute('chat', 'true');
    script.async = true;
    
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://fw-cdn.com/16077529/7063118.js"]');
      if (existingScript) {
        existingScript.remove();
      }
      // Freshchat usually adds its own elements to the body
      const fcWidget = document.getElementById('fc_frame');
      if (fcWidget) fcWidget.remove();
    };
  }, []);
};

export const useFreshchat = () => {
  const openChat = useCallback(() => {
    if (window.fcWidget) {
      window.fcWidget.open();
    } else {
      console.log('Freshchat widget not yet initialized');
    }
  }, []);

  return { openChat };
};
