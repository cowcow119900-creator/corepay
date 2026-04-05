import * as ChannelService from '@channel.io/channel-web-sdk-loader';
import { useEffect, useCallback } from 'react';

// This hook should be called once at the root of the app (e.g., in App.tsx)
export const useChannelTalkInit = () => {
  useEffect(() => {
    const pluginKey = import.meta.env.VITE_CHANNEL_PLUGIN_KEY;
    
    if (!pluginKey) {
      console.warn('Channel Talk Plugin Key is missing. Please add VITE_CHANNEL_PLUGIN_KEY to your environment variables.');
      return;
    }

    ChannelService.loadScript();
    ChannelService.boot({
      pluginKey: pluginKey,
    });

    return () => {
      ChannelService.shutdown();
    };
  }, []);
};

// This hook can be used in any component to trigger Channel Talk actions
export const useChannelTalk = () => {
  const showMessenger = useCallback(() => {
    ChannelService.showMessenger();
  }, []);

  const hideMessenger = useCallback(() => {
    ChannelService.hideMessenger();
  }, []);

  const openChat = useCallback((chatId?: string, message?: string) => {
    ChannelService.openChat(chatId, message);
  }, []);

  return { showMessenger, hideMessenger, openChat };
};
