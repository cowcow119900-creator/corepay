/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CHANNEL_PLUGIN_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
