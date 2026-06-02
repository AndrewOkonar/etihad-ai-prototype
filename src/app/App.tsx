import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ConversationScreen from './components/ConversationScreen';
import ThinkingScreen from './components/ThinkingScreen';
import InputScreen from './components/InputScreen';
import FullVoiceScreen from './components/FullVoiceScreen';
import etihadBeyondBordersLogo from '../assets/etihad-beyond-borders-logo.png';
import sidebarIconEdit from '../assets/sidebar-icon-edit.svg';
import sidebarIconHistory from '../assets/sidebar-icon-history.svg';
import sidebarUserAvatar from '../assets/sidebar-user-avatar.png';
import menuHelpIcon from '../assets/menu-help.svg';
import menuLogOutIcon from '../assets/menu-log-out.svg';
import menuPersonalizationIcon from '../assets/menu-personalization.svg';
import menuProfileIcon from '../assets/menu-profile.svg';
import menuSettingsIcon from '../assets/menu-settings.svg';

type AppState = 'welcome' | 'thinking' | 'conversation' | 'input';
type FullVoicePhase = 'preopen' | 'open' | 'closing';
type Message = { type: 'user' | 'assistant'; content: string; imageUrl?: string; kind?: 'seat-selection' };

export default function App() {
  const [state, setState] = useState<AppState>('welcome');
  const [conversation, setConversation] = useState<Message[]>([]);
  const [isFullVoiceMounted, setIsFullVoiceMounted] = useState(false);
  const [fullVoicePhase, setFullVoicePhase] = useState<FullVoicePhase>('preopen');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openFullVoice = () => {
    setFullVoicePhase('preopen');
    setIsFullVoiceMounted(true);
    window.setTimeout(() => setFullVoicePhase('open'), 90);
  };

  const closeFullVoice = () => {
    setFullVoicePhase('closing');
    window.setTimeout(() => {
      setIsFullVoiceMounted(false);
      setFullVoicePhase('preopen');
    }, 760);
  };

  const baggageResponse = 'You can bring these baggage options on your trip:';
  const seatSelectionPrompt = 'Happy to help you choose your seats. Please send your booking reference and last name in the message box below, for example: 6X8KQ2 Haddad.';

  const isSeatSelectionIntent = (text: string) => {
    const lowerText = text.toLowerCase();
    return lowerText.includes('seat') && (
      lowerText.includes('select')
      || lowerText.includes('choose')
      || lowerText.includes('pick')
      || lowerText.includes('reserve')
    );
  };

  const isSeatBookingDetails = (text: string) => {
    const hasPnr = /\b(?=[A-Z0-9]{6}\b)(?=[A-Z0-9]*\d)[A-Z0-9]{6}\b/i.test(text);
    const hasLastName = text.toLowerCase().includes('haddad');
    return hasPnr && hasLastName;
  };

  const isPossibleSeatBookingReply = (text: string) => {
    return /\b(?=[A-Z0-9]{6}\b)(?=[A-Z0-9]*\d)[A-Z0-9]{6}\b/i.test(text) || text.toLowerCase().includes('haddad');
  };

  const handleSuggestionClick = (suggestion: string, imageUrl?: string) => {
    const lowerSuggestion = suggestion.toLowerCase();
    const userMessage = lowerSuggestion.includes('flight') && lowerSuggestion.includes('status')
      ? 'Hey! I want to check a flight status EY63'
      : suggestion;

    setConversation([{ type: 'user', content: userMessage, imageUrl }]);
    setState('thinking');

    setTimeout(() => {
      // Add assistant response based on the suggestion
      if (lowerSuggestion.includes('flight') && lowerSuggestion.includes('status')) {
        setConversation(prev => [...prev, {
          type: 'assistant',
          content: 'Perfect! Flight EY63 flies from Abu Dhabi to London. Which date in April are you looking for?'
        }]);
      } else if (isSeatSelectionIntent(suggestion)) {
        setConversation(prev => [...prev, {
          type: 'assistant',
          content: seatSelectionPrompt,
          kind: 'seat-selection'
        }]);
      } else if (lowerSuggestion.includes('baggage') && imageUrl) {
        setConversation(prev => [...prev, {
          type: 'assistant',
          content: baggageResponse
        }]);
      } else if (lowerSuggestion.includes('baggage')) {
        setConversation(prev => [...prev, {
          type: 'assistant',
          content: baggageResponse
        }]);
      } else if (lowerSuggestion.includes('discover')) {
        setConversation(prev => [...prev, {
          type: 'assistant',
          content: 'Sometimes the best trips are the ones you weren’t planning. Here are a few destinations that might be worth adding to your bucket list.'
        }]);
      } else {
        setConversation(prev => [...prev, {
          type: 'assistant',
          content: 'I can help you find and book the perfect flight. To start, share your location or tell me which city you’re flying from.'
        }]);
      }
      setState('conversation');
    }, 2500);
  };

  const handleDateSelect = (date: string) => {
    setConversation(prev => [...prev, { type: 'user', content: date }]);
    setState('conversation');

    setTimeout(() => {
      setConversation(prev => [...prev, {
        type: 'assistant',
        content: `Here’s the latest status for flight EY63 from London to Abu Dhabi tomorrow:`
      }]);
      setState('conversation');
    }, 650);
  };

  const handleNewChat = () => {
    setState('welcome');
    setConversation([]);
  };

  const handleShareLocation = () => {
    setConversation(prev => [...prev, { type: 'user', content: 'London EC3N 4AB, United Kingdom' }]);

    window.setTimeout(() => {
      setConversation(prev => [...prev, {
        type: 'assistant',
        content: 'Not sure where to go? These destinations are trending among travelers like you.'
      }]);
    }, 650);
  };

  const handleInputSubmit = (text: string, imageUrl?: string) => {
    const shouldShowDeepThinking = conversation.length === 0 || Boolean(imageUrl);
    const isWaitingForSeatBookingDetails = conversation.some((msg) => msg.kind === 'seat-selection');

    setConversation(prev => [...prev, { type: 'user', content: text, imageUrl }]);
    setState(shouldShowDeepThinking ? 'thinking' : 'conversation');
    const responseDelay = imageUrl ? 2500 : shouldShowDeepThinking ? 1500 : 650;

    setTimeout(() => {
      // Generate contextual response based on input
      let response = '';
      const lowerText = text.toLowerCase();

      if (isWaitingForSeatBookingDetails && (isSeatBookingDetails(text) || isPossibleSeatBookingReply(text))) {
        setState('conversation');
        return;
      } else if (isSeatSelectionIntent(text)) {
        setConversation(prev => [...prev, {
          type: 'assistant',
          content: seatSelectionPrompt,
          kind: 'seat-selection'
        }]);
        setState('conversation');
        return;
      } else if (lowerText.includes('flight') && (lowerText.includes('status') || lowerText.includes('check'))) {
        response = 'I can help you check your flight status. Please provide your flight number or booking reference.';
      } else if (lowerText.includes('book') || lowerText.includes('booking')) {
        response = 'I\'d be happy to help you with your booking. Where would you like to fly from and to? And what are your preferred travel dates?';
      } else if ((lowerText.includes('baggage') || lowerText.includes('luggage')) && imageUrl) {
        response = baggageResponse;
      } else if (lowerText.includes('baggage') || lowerText.includes('luggage')) {
        response = baggageResponse;
      } else if (lowerText.includes('cancel') || lowerText.includes('refund')) {
        response = 'I can assist you with cancellations and refunds. Please provide your booking reference and I\'ll check the available options for you.';
      } else if (lowerText.match(/ey\s*\d+/i)) {
        response = `I found flight ${text.match(/ey\s*\d+/i)?.[0].toUpperCase()}. Which date would you like to check?`;
      } else {
        response = 'I\'m here to help! Could you provide more details about what you\'re looking for? I can assist with flight bookings, status checks, baggage information, and more.';
      }

      setConversation(prev => [...prev, {
        type: 'assistant',
        content: response
      }]);
      setState('conversation');
    }, responseDelay);
  };

  return (
    <div className="flex min-h-full w-full items-center justify-center bg-[#f8f7f7]">
      <div className={`relative flex h-[932px] ${isSidebarOpen ? 'w-[945px] border' : 'w-[430px] border-t border-r border-b'} max-w-full overflow-hidden border-[#e3e3e3] transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}>
        {isSidebarOpen && <Sidebar />}
        <div className={`${isSidebarOpen ? 'w-[690px]' : 'w-[430px]'} relative h-full shrink-0 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}>
          {state === 'welcome' && (
            <WelcomeScreen
              isWideLayout={isSidebarOpen}
              onSidebarToggle={() => setIsSidebarOpen((open) => !open)}
              onSuggestionClick={handleSuggestionClick}
              onFullVoice={openFullVoice}
            />
          )}
          {state === 'thinking' && (
            <ThinkingScreen
              conversation={conversation}
              isWideLayout={isSidebarOpen}
              onSidebarToggle={() => setIsSidebarOpen((open) => !open)}
              onFullVoice={openFullVoice}
            />
          )}
          {state === 'conversation' && (
            <ConversationScreen
              conversation={conversation}
              isWideLayout={isSidebarOpen}
              onDateSelect={handleDateSelect}
              onShareLocation={handleShareLocation}
              onNewChat={handleNewChat}
              onSidebarToggle={() => setIsSidebarOpen((open) => !open)}
              onInputSubmit={handleInputSubmit}
              onFullVoice={openFullVoice}
            />
          )}
          {state === 'input' && (
            <InputScreen onSubmit={handleInputSubmit} />
          )}
          {isFullVoiceMounted && (
            <div
              className="voice-screen-shell absolute inset-0 z-20"
              data-state={fullVoicePhase}
            >
              <FullVoiceScreen onClose={closeFullVoice} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMemoryModalOpen, setIsMemoryModalOpen] = useState(false);
  const chatHistory = [
    'Flight status for EY63',
    'Baggage allowance check',
    'Book London to Abu Dhabi',
    'Discover weekend trips',
    'Seat upgrade options',
    'Lounge access in AUH',
  ];

  return (
    <aside className="bg-[#f8f7f7] content-stretch flex h-full w-[255px] shrink-0 flex-col justify-between px-[18px] py-[24px]">
      <div className="content-stretch flex flex-col gap-[34px] items-start">
        <img
          src={etihadBeyondBordersLogo}
          alt="Etihad Beyond Borders"
          className="block h-auto w-[132px]"
        />

        <nav className="content-stretch flex flex-col gap-[22px] items-start w-full">
          <div className="content-stretch flex gap-[12px] items-center text-[#646363]">
            <img src={sidebarIconEdit} alt="" className="size-[20px] shrink-0" />
            <span className="font-['Etihad_Altis:Text',sans-serif] text-[15px]">Chat</span>
          </div>
          <div className="content-stretch flex gap-[12px] items-center text-[#646363]">
            <img src={sidebarIconHistory} alt="" className="size-[20px] shrink-0" />
            <span className="font-['Etihad_Altis:Text',sans-serif] text-[15px]">History</span>
          </div>

          <div className="border-l border-[#e3e3e3] content-stretch flex flex-col gap-[10px] ml-[8px] pl-[18px] w-[calc(100%-8px)]">
            <p className="font-['Etihad_Altis:Bold',sans-serif] text-[#1d1c1b] text-[13px]">July</p>
            <div className="content-stretch flex flex-col gap-[4px] items-start w-full">
              {chatHistory.map((item, index) => (
                <button
                  className={`${index === 0 ? 'bg-[rgba(13,34,59,0.05)]' : 'bg-transparent hover:bg-[rgba(13,34,59,0.04)]'} overflow-hidden px-[12px] py-[9px] rounded-[10px] text-left transition-colors w-full`}
                  key={item}
                  type="button"
                >
                  <span className="block truncate font-['Etihad_Altis:Text',sans-serif] text-[#646363] text-[13px]">{item}</span>
                </button>
              ))}
            </div>
            <button className="font-['Etihad_Altis:Text',sans-serif] text-[#646363] text-[13px] text-left">See all</button>
          </div>
        </nav>
      </div>

      <div className="content-stretch flex items-center justify-between relative w-full">
        {isUserMenuOpen && (
          <UserDropdownMenu
            onPersonalizationClick={() => {
              setIsUserMenuOpen(false);
              setIsMemoryModalOpen(true);
            }}
          />
        )}
        <button
          aria-label="Open user menu"
          className="rounded-full"
          onClick={() => setIsUserMenuOpen((open) => !open)}
          type="button"
        >
          <img src={sidebarUserAvatar} alt="Muhammad" className="block size-[32px] rounded-full" />
        </button>
      </div>
      {isMemoryModalOpen && <MemoryModal onClose={() => setIsMemoryModalOpen(false)} />}
    </aside>
  );
}

function UserDropdownMenu({ onPersonalizationClick }: { onPersonalizationClick: () => void }) {
  const items = [
    { icon: menuPersonalizationIcon, label: 'Personalization', onClick: onPersonalizationClick },
    { icon: menuProfileIcon, label: 'Profile' },
    { icon: menuSettingsIcon, label: 'Settings' },
    { icon: menuHelpIcon, label: 'Help', trailing: <ChevronRightIcon /> },
    { icon: menuLogOutIcon, label: 'Log out' },
  ];

  return (
    <div className="absolute bottom-[42px] left-0 z-20 w-[210px] rounded-[16px] border border-[#d8d8d8] bg-white p-[8px] shadow-[0px_10px_22px_rgba(17,24,39,0.08)]">
      <div className="content-stretch flex flex-col gap-[2px] items-start">
        {items.map((item, index) => (
          <div className="w-full" key={item.label}>
            {index === 3 && <div className="my-[6px] h-px w-full bg-[#e3e3e3]" />}
            <button className="content-stretch flex items-center justify-between rounded-[10px] px-[10px] py-[9px] text-left transition-colors hover:bg-[rgba(13,34,59,0.05)] w-full" onClick={item.onClick} type="button">
              <span className="content-stretch flex gap-[10px] items-center">
                <img src={item.icon} alt="" className="size-[20px] shrink-0" />
                <span className="font-['Etihad_Altis:Text',sans-serif] leading-[20px] text-[#1d1c1b] text-[14px]">{item.label}</span>
              </span>
              {item.trailing}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function MemoryModal({ onClose }: { onClose: () => void }) {
  const memories = [
    'Usually travels from London and prefers direct flights.',
    'Prefers window seats when flying long haul.',
    'Likes concise travel summaries with clear next steps.',
    'Often asks about baggage allowance before booking.',
    'Interested in beach destinations and boutique hotels.',
    'Prefers Etihad flights through Abu Dhabi when available.',
    'Likes reminders about visa rules and airport terminals.',
  ];

  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#f6f8f9]/86 px-[32px]">
      <div className="relative w-full max-w-[760px] rounded-[16px] border border-[#e8e8e8] bg-white px-[28px] py-[26px] shadow-[0px_18px_40px_rgba(17,24,39,0.08)]">
        <button aria-label="Close memory modal" className="absolute right-[24px] top-[24px] text-[#1d1c1b]" onClick={onClose} type="button">
          <svg className="size-[22px]" fill="none" viewBox="0 0 20 20">
            <path d="M4.5 4.5L15.5 15.5M15.5 4.5L4.5 15.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
          </svg>
        </button>

        <div className="content-stretch flex flex-col gap-[20px] items-start">
          <h2 className="font-['Etihad_Altis:Bold',sans-serif] leading-[1.2] text-[#1d1c1b] text-[24px]">Manage Memory</h2>

          <div className="w-full rounded-[8px] border border-[#e3e3e3]">
            {memories.map((memory) => (
              <div className="content-stretch flex min-h-[54px] items-center justify-between gap-[18px] border-b border-[#e3e3e3] px-[18px] py-[14px] last:border-b-0" key={memory}>
                <p className="font-['Etihad_Altis:Text',sans-serif] leading-[22px] text-[#1d1c1b] text-[15px]">{memory}</p>
                <button aria-label="Delete memory" className="shrink-0 text-[#646363] transition-colors hover:text-[#1d1c1b]" type="button">
                  <TrashIcon />
                </button>
              </div>
            ))}
          </div>

          <button className="rounded-[10px] border border-[#f1c7c9] px-[16px] py-[11px] font-['Etihad_Altis:Bold',sans-serif] text-[#e57373] text-[15px] transition-colors hover:bg-[#fff4f4]" type="button">
            Clear memory
          </button>
        </div>
      </div>
    </div>
  );
}

function TrashIcon() {
  return (
    <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
      <path d="M4.5 6H15.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M8 6V4.8C8 4.25 8.45 3.8 9 3.8H11C11.55 3.8 12 4.25 12 4.8V6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 6.5L6.6 15.2C6.67 16.17 7.47 16.92 8.44 16.92H11.56C12.53 16.92 13.33 16.17 13.4 15.2L14 6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.8 9.1V14M11.2 9.1V14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="size-[16px] shrink-0 text-[#1d1c1b]" fill="none" viewBox="0 0 20 20">
      <path d="M7.5 4.5L12.5 10L7.5 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}
