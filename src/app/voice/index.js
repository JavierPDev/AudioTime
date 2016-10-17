import VoiceService from './voice.service';

export default function voice(appModule) {
  appModule.service('voiceService', VoiceService);
}

