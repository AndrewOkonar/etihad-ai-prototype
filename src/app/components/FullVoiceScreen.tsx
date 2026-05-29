import { useEffect, useRef, useState } from 'react';
import aiResponseAudioUrl from '../../assets/voice/ai-flight-response.m4a';
import aiStatusResponseAudioUrl from '../../assets/voice/ai-flight-status-response.m4a';
import dotFlightCardUrl from '../../assets/dot-flight-card.png';

interface FullVoiceScreenProps {
  onClose: () => void;
}

type VoiceStep = 'idle' | 'listening' | 'thinking' | 'speaking' | 'done';
type AssistantAudioKind = 'initial' | 'status';

const userVoicePrompt = 'Hey! I want to check a flight status EY63';
const userDatePrompt = 'Sunday, 19 April';
const aiVoiceResponse = 'Perfect. Flight EY63 flies from Abu Dhabi to London. Which date in April are you looking for?';
const aiStatusResponse = 'Here is the latest status for flight EY63 from London to Abu Dhabi tomorrow.';

function IconEdit() {
  return (
    <svg className="block size-[20px]" fill="none" viewBox="0 0 20 20">
      <path d="M9.375 3.125H5.792C3.95 3.125 3.125 3.95 3.125 5.792v8.416c0 1.842.825 2.667 2.667 2.667h8.416c1.842 0 2.667-.825 2.667-2.667v-3.583" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M7.292 12.708v-2.154c0-.221.087-.433.244-.59l7.119-7.119a1.667 1.667 0 0 1 2.357 0l.143.143a1.667 1.667 0 0 1 0 2.357l-7.12 7.119c-.156.157-.368.244-.589.244H7.292Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    </svg>
  );
}

function IconPanel() {
  return (
    <svg className="block size-[20px]" fill="none" viewBox="0 0 20 20">
      <path d="M6.875 3.125v13.75" stroke="currentColor" strokeWidth="1.25" />
      <path d="M12.708 8.125 10.833 10l1.875 1.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3.125" y="3.125" width="13.75" height="13.75" rx="1.667" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function IconClose({ size = 20 }: { size?: number }) {
  return (
    <svg className="block" style={{ width: size, height: size }} fill="none" viewBox="0 0 20 20">
      <path d="M3.958 3.958 16.042 16.042M16.042 3.958 3.958 16.042" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16">
      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconMic() {
  return (
    <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16">
      <path d="M8 10.5a2.833 2.833 0 0 0 2.833-2.833v-3A2.833 2.833 0 0 0 8 1.833a2.833 2.833 0 0 0-2.833 2.834v3A2.833 2.833 0 0 0 8 10.5ZM12.583 9.667A4.99 4.99 0 0 1 8 12.667m0 0a4.99 4.99 0 0 1-4.583-3M8 12.667v1.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconVoiceHigh() {
  return (
    <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16">
      <path d="M3.5 6.5v3M6.5 4.5v7M9.5 6v4M12.5 3.5v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function VoiceFlightCard({ visible }: { visible: boolean }) {
  return (
    <div className="voice-flight-card" data-visible={visible ? 'true' : 'false'}>
      <img alt="Flight EY18 details from Abu Dhabi to London" src={dotFlightCardUrl} />
    </div>
  );
}

function RoundButton({
  children,
  onClick,
  variant = 'soft',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'soft' | 'plain' | 'dark';
}) {
  const variantClass = {
    soft: 'bg-[#ebebea] text-[#1d1c1b] hover:bg-[#dddcdc]',
    plain: 'bg-transparent text-[#1d1c1b] hover:bg-[#f3f3f2]',
    dark: 'bg-[#1d1c1b] text-white hover:bg-[#3d3c3b]',
  }[variant];

  return (
    <button onClick={onClick} className={`${variantClass} content-stretch flex items-center justify-center p-[10px] relative rounded-[99px] size-[40px] transition-colors`}>
      {children}
    </button>
  );
}

export default function FullVoiceScreen({ onClose }: FullVoiceScreenProps) {
  const [voiceStep, setVoiceStep] = useState<VoiceStep>('idle');
  const [userTranscript, setUserTranscript] = useState(userVoicePrompt);
  const [userPromptState, setUserPromptState] = useState<'hidden' | 'visible' | 'leaving'>('hidden');
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [showFlightCard, setShowFlightCard] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentAudioKindRef = useRef<AssistantAudioKind>('initial');
  const timersRef = useRef<number[]>([]);

  const queueTimer = (callback: () => void, delay: number) => {
    const timer = window.setTimeout(callback, delay);
    timersRef.current.push(timer);
    return timer;
  };

  const clearVoiceTimers = () => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  };

  const startSecondUserTurn = () => {
    queueTimer(() => {
      setUserTranscript(userDatePrompt);
      setUserPromptState('hidden');
      setVoiceStep('listening');
    }, 620);

    queueTimer(() => {
      setUserPromptState('visible');
    }, 1180);

    queueTimer(() => {
      setUserPromptState('leaving');
    }, 2350);

    queueTimer(() => {
      setVoiceStep('thinking');
    }, 2700);

    queueTimer(() => {
      speakAssistantResponse(aiStatusResponseAudioUrl, 'status');
    }, 3300);
  };

  const speakAssistantResponseFallback = (kind: AssistantAudioKind) => {
    if (!('speechSynthesis' in window)) {
      setIsAiSpeaking(true);
      const fallbackTimer = window.setTimeout(() => {
        setIsAiSpeaking(false);
        setVoiceStep('done');
        if (kind === 'initial') {
          startSecondUserTurn();
        } else {
          setShowFlightCard(true);
        }
      }, kind === 'initial' ? 5200 : 4300);
      timersRef.current.push(fallbackTimer);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(kind === 'initial' ? aiVoiceResponse : aiStatusResponse);
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find((voice) => voice.lang.startsWith('en') && /female|samantha|victoria|google uk english female/i.test(voice.name))
      || voices.find((voice) => voice.lang.startsWith('en'))
      || voices[0];

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.lang = preferredVoice?.lang || 'en-US';
    utterance.rate = 0.94;
    utterance.pitch = 1.02;
    utterance.volume = 1;
    utterance.onstart = () => {
      setVoiceStep('speaking');
      setIsAiSpeaking(true);
    };
    utterance.onend = () => {
      setIsAiSpeaking(false);
      setVoiceStep('done');
      if (kind === 'initial') {
        startSecondUserTurn();
      } else {
        setShowFlightCard(true);
      }
    };
    utterance.onerror = () => {
      setIsAiSpeaking(false);
      setVoiceStep('done');
    };

    window.speechSynthesis.speak(utterance);
  };

  const speakAssistantResponse = (src = aiResponseAudioUrl, kind: AssistantAudioKind = 'initial') => {
    const audio = audioRef.current;

    if (!audio) {
      speakAssistantResponseFallback(kind);
      return;
    }

    currentAudioKindRef.current = kind;
    window.speechSynthesis?.cancel();
    audio.pause();
    audio.src = src;
    audio.currentTime = 0;
    setVoiceStep('speaking');

    audio.play().catch(() => {
      speakAssistantResponseFallback(kind);
    });
  };

  useEffect(() => {
    const startTimer = window.setTimeout(() => {
      setVoiceStep('listening');
      setUserTranscript(userVoicePrompt);
      setUserPromptState('hidden');
      setShowFlightCard(false);
    }, 680);

    const heardTimer = window.setTimeout(() => {
      setUserPromptState('visible');
    }, 1450);

    const hideUserPromptTimer = window.setTimeout(() => {
      setUserPromptState('leaving');
    }, 2550);

    const thinkingTimer = window.setTimeout(() => {
      setVoiceStep('thinking');
    }, 2850);

    const speakingTimer = window.setTimeout(() => {
      speakAssistantResponse();
    }, 3700);

    timersRef.current = [startTimer, heardTimer, hideUserPromptTimer, thinkingTimer, speakingTimer];

    const loadVoices = () => window.speechSynthesis?.getVoices();
    window.speechSynthesis?.addEventListener?.('voiceschanged', loadVoices);

    return () => {
      clearVoiceTimers();
      audioRef.current?.pause();
      window.speechSynthesis?.cancel();
      window.speechSynthesis?.removeEventListener?.('voiceschanged', loadVoices);
    };
  }, []);

  const handleClose = () => {
    clearVoiceTimers();
    audioRef.current?.pause();
    window.speechSynthesis?.cancel();
    setIsAiSpeaking(false);
    onClose();
  };

  return (
    <div className="full-voice-root bg-[#2b3a45] content-stretch flex flex-col items-start overflow-hidden relative size-full" data-speaking={isAiSpeaking ? 'true' : 'false'}>
      <audio
        ref={audioRef}
        preload="auto"
        onPlay={() => {
          setVoiceStep('speaking');
          setIsAiSpeaking(true);
          if (currentAudioKindRef.current === 'status') {
            queueTimer(() => setShowFlightCard(true), 780);
          }
        }}
        onEnded={() => {
          setIsAiSpeaking(false);
          setVoiceStep('done');
          if (currentAudioKindRef.current === 'initial') {
            startSecondUserTurn();
          } else {
            setShowFlightCard(true);
          }
        }}
        onPause={() => {
          if (audioRef.current?.ended) {
            return;
          }
          setIsAiSpeaking(false);
        }}
      />
      <div className="voice-header content-stretch flex items-center justify-between px-[16px] py-[24px] relative shrink-0 w-full z-10">
        <button className="relative shrink-0 size-[20px]"><IconEdit /></button>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <button className="relative shrink-0 size-[20px]"><IconPanel /></button>
          <button onClick={handleClose} className="relative shrink-0 size-[20px]"><IconClose /></button>
        </div>
      </div>

      <div className="voice-dialogue relative z-10 flex w-full flex-[1_0_0] flex-col justify-end px-[24px] pb-[160px]">
        <div className="flex flex-col gap-[18px]">
          <div className="voice-user-line" data-state={userPromptState}>
            <p>{userTranscript}</p>
          </div>
          <VoiceFlightCard visible={showFlightCard} />
        </div>
      </div>

      <div className="voice-aura" aria-hidden="true">
        <div className="voice-aura-band voice-aura-band-one" />
        <div className="voice-aura-band voice-aura-band-two" />
        <div className="voice-aura-band voice-aura-band-three" />
        <div className="voice-aura-core" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex min-h-px w-full flex-col justify-end px-[16px] py-[24px]">
        <div className="voice-toolbar bg-white border border-[#e8e8e8] border-solid relative rounded-[32px] shadow-[0px_4px_8px_rgba(0,0,0,0.05)] shrink-0 w-full">
          <div className="voice-toolbar-prompt [word-break:break-word] absolute left-[20px] top-[20px] font-['Etihad_Altis:Text',sans-serif] leading-[1.5] text-[#646363] text-[15px]">
            How can I help you today?
          </div>
          <div className="voice-toolbar-content">
            <div className="voice-plus absolute bottom-[7px] left-[8px]">
              <RoundButton><IconPlus /></RoundButton>
            </div>
            <div className="voice-mic absolute bottom-[7px] right-[55px]">
              <RoundButton variant="plain"><IconMic /></RoundButton>
            </div>
            <div className="voice-close absolute bottom-[7px] right-[7px]">
              <RoundButton onClick={handleClose} variant="dark">
                <span className="voice-icon-from absolute">
                  <IconVoiceHigh />
                </span>
                <span className="voice-icon-to absolute">
                  <IconClose size={16} />
                </span>
              </RoundButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
