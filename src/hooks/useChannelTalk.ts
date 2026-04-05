import * as ChannelService from '@channel.io/channel-web-sdk-loader';
import { useEffect, useCallback } from 'react';

export const useChannelTalkInit = () => {
  useEffect(() => {
    const pluginKey = import.meta.env.VITE_CHANNEL_PLUGIN_KEY;

    console.log('Channel plugin key exists:', !!pluginKey);
    console.log('Channel plugin key value:', pluginKey);

    if (!pluginKey) {
      console.warn('Channel Talk Plugin Key is missing. Please add VITE_CHANNEL_PLUGIN_KEY to your environment variables.');
      return;
    }

    ChannelService.loadScript();

    ChannelService.boot(
      {
        pluginKey,
      },
      (error: unknown, user: unknown) => {
        if (error) {
          console.error('Channel Talk boot failed:', error);
          return;
        }
        console.log('Channel Talk boot success:', user);
      }
    );

    return () => {
      ChannelService.shutdown();
    };
  }, []);
};

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
