import "./assets/style.css"

import { H } from 'highlight.run';

import { createApp } from 'vue'
import App from './App.vue'

// TODO: These are placeholder values for initial testing. Feed them in from env at build-time.
H.init('0dqvlnqg', {
    environment: 'localhost',
    version: 'commit:4b99be80865532e6c88297841c47acc6647ea18a',
    networkRecording: {
        enabled: true,
        recordHeadersAndBody: true,
    },
});

createApp(App).mount('#app')
