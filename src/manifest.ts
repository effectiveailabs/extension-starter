import { defineManifest } from '@crxjs/vite-plugin';

// Pinning `key` gives this extension a deterministic ID across every
// machine that loads it unpacked. The backend CORS allowlist is keyed
// on that ID; do not change it.
const PINNED_PUBLIC_KEY =
  'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqJer70PVYXqmGhDbmWCsEyFaJh8Vw0ic5leXiZhVCkzgFVdrs8lXvnYVnc7sH4Pyox3CxV5MZy1NUlvJWdCDh85LcHfVbnoUxt7O+ueXXxmEyLAwO7g1E0hi4iv4oFkgvpiX3i8AVzuLZdi7DXRYi4j+Xa3nA+KVSlXcQdCPBpUqeRBDx/TM9hLFhggar2bkBFrZbaBhM+U9wyW7P7nufaVkbz5l8oYFmr50WFNh4NUFIjPbUEcjOwF3RF7LzHFDFGAMbpyYgrjmHOPljvRPTvaTE3K1zIgZannbj8EfN/Iv8C+wmVPhiqLJrIo1EIDZJajoHiQ/lLeDC+dIMdPDCwIDAQAB';

export default defineManifest({
  manifest_version: 3,
  name: 'Extension Starter',
  version: '0.0.1',
  key: PINNED_PUBLIC_KEY,
  action: {
    default_title: 'Open side panel',
  },
  side_panel: {
    default_path: 'src/panel/index.html',
  },
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/content-script/index.ts'],
      run_at: 'document_idle',
    },
  ],
  permissions: ['sidePanel', 'storage', 'scripting', 'activeTab', 'tabs', 'cookies'],
  host_permissions: [
    'https://effectiveai-staging.app/*',
    'http://localhost:4000/*',
    '<all_urls>',
  ],
});
