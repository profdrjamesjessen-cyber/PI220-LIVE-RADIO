# PI220 RADIO — Application 002

## Stage 003 — Presenter Microphone Workspace

Includes the Stage 002 local playlist manager and adds a presenter microphone input test:
- Request microphone permission through the browser.
- Select an available input device.
- View a live input-level meter.
- Mute/unmute the local input track.
- Disconnect and release the microphone.

**Important:** the microphone is analyzed locally only. This stage does not transmit, record, save or broadcast microphone audio. No remote listeners can hear it. Live presenter broadcasting requires a separate streaming backend and a secure publishing connection, which will be implemented in a later stage.

Playlist audio remains stored in the current browser's IndexedDB on this device. Keep original audio files separately.

Deploy on HTTPS (GitHub Pages provides HTTPS). Microphone access requires browser permission and may be unavailable when embedded unless the PI220 parent iframe grants `allow="microphone"` and browser permissions policy permits it.

Desktop target: 1366×768. Mobile layout adapts vertically.
