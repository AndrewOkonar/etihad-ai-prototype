import React from 'react';
import svgPaths from "../../imports/Aside-2/svg-15bvahakzp";
import { imgGroup, imgGroup1, imgGroup2 } from "../../imports/Aside-2/svg-9y83r";
import EtihadLogo from "./EtihadLogo";
import dotFlightCardLight from "../../assets/dot-flight-card-light-trimmed.png";
import baggageCheckedCard from "../../assets/baggage-checked-card.png";
import baggageSmallCard from "../../assets/baggage-small-card.png";
import destinationGoaCard from "../../assets/destination-goa-card.png";
import destinationLadakhCard from "../../assets/destination-ladakh-card.png";
import destinationKeralaCard from "../../assets/destination-kerala-card.png";
import discoverGoaCard from "../../assets/discover-goa-card.png";
import discoverLadakhCard from "../../assets/discover-ladakh-card.png";
import discoverKeralaCard from "../../assets/discover-kerala-card.png";
import discoverHotelLaCabanaCard from "../../assets/discover-hotel-la-cabana-card.png";
import discoverHotelDeltinCard from "../../assets/discover-hotel-deltin-card.png";
import discoverHotelPartialCard from "../../assets/discover-hotel-partial-card.png";
import discoverRestaurantsCard from "../../assets/discover-restaurants-card.png";
import PushToTalkButton from "./PushToTalkButton";

interface ConversationScreenProps {
  conversation: Array<{ type: 'user' | 'assistant', content: string; imageUrl?: string }>;
  isWideLayout?: boolean;
  onDateSelect: (date: string) => void;
  onShareLocation: () => void;
  onNewChat: () => void;
  onSidebarToggle: () => void;
  onInputSubmit: (text: string, imageUrl?: string) => void;
  onFullVoice: () => void;
}

type SourceView = 'none' | 'posts' | 'web';

function IconEditBig() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="IconEditBig">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="IconEditBig">
          <path d={svgPaths.p262ade80} fill="var(--fill-0, #646363)" id="Vector" />
          <path d={svgPaths.p26457f80} id="Vector_2" stroke="var(--stroke-0, #646363)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconSidebarLeftArrow() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="IconSidebarLeftArrow">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="IconSidebarLeftArrow">
          <path d={svgPaths.p30beec00} id="Vector" stroke="var(--stroke-0, #646363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1764c860} id="Vector_2" stroke="var(--stroke-0, #646363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M6.875 3.125V16.875" id="Vector_3" stroke="var(--stroke-0, #646363)" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconCrossLarge() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="IconCrossLarge">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="IconCrossLarge">
          <path d={svgPaths.p208a4880} id="Vector" stroke="var(--stroke-0, #646363)" strokeLinecap="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Header({
  activeSourceView,
  onNewChat,
  onSidebarToggle,
  onSourceViewChange,
  showSourceTabs,
}: {
  activeSourceView: SourceView;
  onNewChat: () => void;
  onSidebarToggle: () => void;
  onSourceViewChange: (view: SourceView) => void;
  showSourceTabs: boolean;
}) {
  return (
    <div className="bg-[#f8f7f7] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e3e3e3] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] py-[24px] relative size-full">
          {showSourceTabs ? (
            <SourceHeaderTabs activeSourceView={activeSourceView} onSourceViewChange={onSourceViewChange} />
          ) : (
            <button onClick={onNewChat} className="cursor-pointer">
              <IconEditBig />
            </button>
          )}
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <button aria-label="Toggle sidebar" className="cursor-pointer" onClick={onSidebarToggle} type="button">
              <IconSidebarLeftArrow />
            </button>
            <IconCrossLarge />
          </div>
        </div>
      </div>
    </div>
  );
}

function SourceHeaderTabs({ activeSourceView, onSourceViewChange }: { activeSourceView: SourceView; onSourceViewChange: (view: SourceView) => void }) {
  const pillBase = 'content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 shadow-[0px_4px_10px_rgba(0,0,0,0.08)] transition-colors';

  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <button
        className={`${pillBase} bg-white gap-[5px] px-[10px] py-[7px] text-[#0d223b]`}
        onClick={() => onSourceViewChange(activeSourceView === 'posts' ? 'none' : 'posts')}
        type="button"
      >
        <span className="font-['Etihad_Altis:Text',sans-serif] leading-[20px] text-[14px]">15</span>
        <span className="font-['Etihad_Altis:Bold',sans-serif] leading-[20px] text-[14px]">𝕏</span>
        <span className="font-['Etihad_Altis:Text',sans-serif] leading-[20px] text-[14px]">posts</span>
      </button>

      <button
        className={`${pillBase} ${activeSourceView === 'web' ? 'bg-[#1d1c1b] text-white' : 'bg-white text-[#0d223b]'} gap-[6px] px-[10px] py-[7px]`}
        onClick={() => onSourceViewChange(activeSourceView === 'web' ? 'none' : 'web')}
        type="button"
      >
        <SourceBadgeStack />
        <span className="font-['Etihad_Altis:Text',sans-serif] leading-[20px] text-[14px] whitespace-nowrap">6 web pages</span>
      </button>
    </div>
  );
}

function SourceBadgeStack() {
  return (
    <span className="content-stretch flex -space-x-[6px] items-center relative shrink-0">
      <span className="bg-[#00d99c] border border-white content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 size-[16px] text-[#0d223b] text-[8px] font-['Etihad_Altis:Bold',sans-serif]">TA</span>
      <span className="bg-[#0057a8] border border-white content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 size-[16px] text-white text-[10px] font-['Etihad_Altis:Bold',sans-serif]">B.</span>
      <span className="bg-[#0b83c9] border border-white content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 size-[16px] text-white text-[7px] font-['Etihad_Altis:Bold',sans-serif]">CNT</span>
    </span>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[13.3%_-24.26%_-10.89%_12.92%] mask-position-[-1.902px_-2.293px,_-2.435px_-2.225px,_0.74px_1.672px]" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}'), url('${imgGroup2}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.6285 31.2285">
        <g id="Group">
          <path d={svgPaths.pdbe5400} fill="var(--fill-0, #9E742B)" id="Vector" />
          <path d={svgPaths.p267b8f00} fill="var(--fill-0, #6C3921)" id="Vector_2" />
          <path d={svgPaths.p3c531580} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p19e1fc00} fill="var(--fill-0, #CDC9B6)" id="Vector_4" />
          <path d={svgPaths.p2f6d0170} fill="var(--fill-0, #F6ECD5)" id="Vector_5" />
          <path d={svgPaths.p372ad600} fill="var(--fill-0, #CDC9B6)" id="Vector_6" />
          <path d={svgPaths.pd455400} fill="var(--fill-0, #6C3921)" id="Vector_7" />
          <path d={svgPaths.p7be1100} fill="var(--fill-0, #F6ECD5)" id="Vector_8" />
          <path d={svgPaths.p2d2abea0} fill="var(--fill-0, #CD9B2B)" id="Vector_9" />
          <path d={svgPaths.p229b7c00} fill="var(--fill-0, #6C3921)" id="Vector_10" />
          <path d={svgPaths.p2f051440} fill="var(--fill-0, #9E742B)" id="Vector_11" />
          <path d={svgPaths.pe498280} fill="var(--fill-0, #CDC9B6)" id="Vector_12" />
          <path d={svgPaths.p7158b40} fill="var(--fill-0, #CD9B2B)" id="Vector_13" />
          <path d={svgPaths.p196d6b00} fill="var(--fill-0, #6C3921)" id="Vector_14" />
          <path d={svgPaths.p21f95000} fill="var(--fill-0, #CDC9B6)" id="Vector_15" />
          <path d={svgPaths.pedc7040} fill="var(--fill-0, #9C762B)" id="Vector_16" />
          <path d={svgPaths.p25e96180} fill="var(--fill-0, #F6ECD5)" id="Vector_17" />
          <path d={svgPaths.p1c9bccb0} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p1d36de00} fill="var(--fill-0, #F6ECD5)" id="Vector_19" />
          <path d={svgPaths.p307a2e00} fill="var(--fill-0, #CDC9B6)" id="Vector_20" />
        </g>
      </svg>
    </div>
  );
}

function WingLogo() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2" data-name="wing-logo">
      <div className="absolute flex inset-[1.35%_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-2.57%_-2.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.6 32.7351">
                <path d={svgPaths.p152e780} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents inset-[4.03%_2.72%_4.02%_2.78%]" style={{ containerType: "size" }}>
        <div className="absolute contents inset-[20.27%_-20.18%_-0.56%_16%]">
          <div className="absolute contents inset-[20.27%_-20.18%_-0.56%_16%]">
            <div className="absolute contents inset-[13.3%_-24.26%_-10.89%_12.92%]">
              <Group2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <EtihadLogo size={32} />
  );
}

function AnimatedAssistantText({ text, animate }: { text: string; animate: boolean }) {
  const emphasized = new Set(['EY63', 'Abu Dhabi', 'London']);
  const parts = text.split(/(EY63|Abu Dhabi|London|\s+)/).filter((part) => part !== '');
  let wordIndex = 0;

  return (
    <p className="[word-break:break-word] flex-[1_0_0] font-['Etihad_Altis:Text',sans-serif] leading-[24px] min-w-px not-italic relative text-[#374151] text-[16px] whitespace-pre-wrap">
      {parts.map((part, index) => {
        if (/^\s+$/.test(part)) {
          return part;
        }

        const delay = Math.min(wordIndex * 34, 900);
        wordIndex += 1;

        return (
          <span
            key={`${part}-${index}`}
            className={`${animate ? 'chat-assistant-word' : ''} ${emphasized.has(part) ? "font-['Etihad_Altis:Bold',sans-serif]" : ''}`}
            style={{ animationDelay: `${delay}ms` }}
          >
            {part}
          </span>
        );
      })}
    </p>
  );
}

function EmphasizedAssistantText({ text, animate }: { text: string; animate: boolean }) {
  const emphasized = new Set(['EY63', 'Abu Dhabi', 'London']);
  const pattern = /(EY63|Abu Dhabi|London)/g;
  const parts = text.split(pattern).filter(Boolean);
  let wordIndex = 0;

  return (
    <p className="[word-break:break-word] flex-[1_0_0] font-['Etihad_Altis:Text',sans-serif] leading-[24px] min-w-px not-italic relative text-[#374151] text-[16px] whitespace-pre-wrap">
      {parts.map((part, index) => {
        if (emphasized.has(part)) {
          const delay = Math.min(wordIndex * 34, 900);
          wordIndex += 1;

          return (
            <span
              key={`${part}-${index}`}
              className={`${animate ? 'chat-assistant-word' : ''} font-['Etihad_Altis:Bold',sans-serif]`}
              style={{ animationDelay: `${delay}ms` }}
            >
              {part}
            </span>
          );
        }

        const words = part.split(/(\s+)/);

        return words.map((word, wordPartIndex) => {
          if (/^\s+$/.test(word)) {
            return word;
          }

          const delay = Math.min(wordIndex * 34, 900);
          wordIndex += 1;

          return (
            <span
              key={`${part}-${index}-${word}-${wordPartIndex}`}
              className={`${animate ? 'chat-assistant-word' : ''} ${emphasized.has(word) ? "font-['Etihad_Altis:Bold',sans-serif]" : ''}`}
              style={{ animationDelay: `${delay}ms` }}
            >
              {word}
            </span>
          );
        });
      })}
    </p>
  );
}

function UserMessageText({ text }: { text: string }) {
  const emphasized = new Set(['EY63', 'Abu Dhabi', 'London']);
  const parts = text.split(/(EY63|Abu Dhabi|London)/).filter(Boolean);

  return (
    <p className="[word-break:break-word] font-['Etihad_Altis:Text',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#374151] text-[16px]">
      {parts.map((part, index) => emphasized.has(part) ? (
        <span key={`${part}-${index}`} className="font-['Etihad_Altis:Bold',sans-serif]">{part}</span>
      ) : part)}
    </p>
  );
}

function FlightStatusTimeline({ animate }: { animate: boolean }) {
  return (
    <div className={`${animate ? 'chat-sequence-item' : ''} relative shrink-0 w-full`} style={{ animationDelay: animate ? '1120ms' : undefined }}>
      <img
        src={dotFlightCardLight}
        alt="Flight EY18 details from Abu Dhabi to London"
        className="block h-auto w-full"
      />
    </div>
  );
}

function FollowUpButton({ children, animate, delay, plain = false, onClick }: { children: string; animate: boolean; delay: string; plain?: boolean; onClick?: () => void }) {
  if (plain) {
    return (
      <button className={`${animate ? 'chat-sequence-item' : ''} bg-transparent border-0 shadow-none p-0 relative shrink-0 text-left w-full cursor-pointer transition-colors hover:text-[#111827]`} style={{ animationDelay: animate ? delay : undefined }} onClick={onClick}>
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]">
            <div className="absolute inset-[18.23%_11.98%_11.98%_18.23%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.167 11.1668">
                <path d={svgPaths.p14982100} fill="var(--fill-0, #374151)" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Etihad_Altis:Text',sans-serif] leading-[1.3] min-w-px not-italic relative text-[#374151] text-[16px] text-left">{children}</p>
        </div>
      </button>
    );
  }

  return (
    <button className={`${animate ? 'chat-sequence-item' : ''} bg-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.05)] relative rounded-[72px] shrink-0 text-left w-full cursor-pointer hover:bg-gray-50 transition-colors`} style={{ animationDelay: animate ? delay : undefined }} onClick={onClick}>
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[72px]" />
      <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute inset-[18.23%_11.98%_11.98%_18.23%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.167 11.1668">
              <path d={svgPaths.p14982100} fill="var(--fill-0, #374151)" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Etihad_Altis:Text',sans-serif] leading-[1.3] min-w-px not-italic relative text-[#374151] text-[16px] text-left">{children}</p>
      </div>
    </button>
  );
}

function FlightStatusResponse({ animate }: { animate: boolean }) {
  return (
    <>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
        <EmphasizedAssistantText text="Here’s the latest status for flight EY63 from London to Abu Dhabi tomorrow:" animate={animate} />
      </div>

      <FlightStatusTimeline animate={animate} />

      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <FollowUpButton animate={animate} delay="1320ms" plain>See the flight status for the other leg</FollowUpButton>
        <FollowUpButton animate={animate} delay="1480ms" plain>Travel checklist for before flight</FollowUpButton>
      </div>
    </>
  );
}

function BaggageResponse({ animate }: { animate: boolean }) {
  return (
    <>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
        <AnimatedAssistantText text="You can bring these baggage options on your trip:" animate={animate} />
      </div>

      <div className="content-stretch flex flex-col gap-0 items-start relative shrink-0 w-full">
        <div
          className={`${animate ? 'chat-sequence-item' : ''} relative shrink-0 w-full`}
          style={{ animationDelay: animate ? '860ms' : undefined }}
        >
          <img
            src={baggageSmallCard}
            alt="Small bag carry onboard size 40 x 30 x 20cm"
            className="block h-auto w-full"
          />
        </div>
        <div
          className={`${animate ? 'chat-sequence-item' : ''} relative shrink-0 w-full`}
          style={{ animationDelay: animate ? '1040ms' : undefined }}
        >
          <img
            src={baggageCheckedCard}
            alt="Checked baggage check in size 80 x 120 x 120cm"
            className="block h-auto w-full"
          />
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <FollowUpButton animate={animate} delay="1200ms" plain>Check my bag with camera</FollowUpButton>
      </div>
    </>
  );
}

function DestinationResponse({ animate }: { animate: boolean }) {
  const destinations = [
    { src: destinationGoaCard, alt: 'Goa starting from £1,200' },
    { src: destinationLadakhCard, alt: 'Ladakh starting from £3,200' },
    { src: destinationKeralaCard, alt: 'Kerala starting from £2,100' },
  ];

  return (
    <>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
        <AnimatedAssistantText text="Not sure where to go? These destinations are trending among travelers like you." animate={animate} />
      </div>

      <div className={`${animate ? 'chat-sequence-item' : ''} destination-slider relative shrink-0`} style={{ animationDelay: animate ? '980ms' : undefined }}>
        <div className="content-stretch flex gap-[8px] items-start relative w-[max-content] pr-[16px]">
          {destinations.map((destination) => (
            <img
              key={destination.alt}
              src={destination.src}
              alt={destination.alt}
              className="block h-auto w-[148px] shrink-0"
            />
          ))}
        </div>
      </div>
    </>
  );
}

function DiscoverPlacesResponse({ animate }: { animate: boolean }) {
  const trendingDestinations = [
    { src: discoverGoaCard, alt: 'Goa starting from £1,200' },
    { src: discoverLadakhCard, alt: 'Ladakh starting from £3,200' },
    { src: discoverKeralaCard, alt: 'Kerala starting from £2,100' },
  ];
  const hotels = [
    { src: discoverHotelLaCabanaCard, alt: 'La Cabana Beach and Spa hotel' },
    { src: discoverHotelDeltinCard, alt: 'Deltin Suites hotel' },
    { src: discoverHotelPartialCard, alt: 'Deltin Suites hotel' },
  ];

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
        <AnimatedAssistantText text="Sometimes the best trips are the ones you weren’t planning. Here are a few destinations that might be worth adding to your bucket list." animate={animate} />
      </div>

      <div className={`${animate ? 'chat-sequence-item' : ''} content-stretch flex flex-col gap-[12px] items-start pt-[20px] relative shrink-0 w-full`} style={{ animationDelay: animate ? '840ms' : undefined }}>
        <h3 className="font-['Etihad_Altis:Medium',sans-serif] leading-[1.2] text-[#0d223b] text-[24px]">Trending Locations</h3>
        <div className="destination-slider relative shrink-0">
          <div className="content-stretch flex gap-[12px] items-start relative w-[max-content]">
            {trendingDestinations.map((destination) => (
              <img
                key={destination.alt}
                src={destination.src}
                alt={destination.alt}
                className="block h-[200px] w-[168px] shrink-0 object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <div className={`${animate ? 'chat-sequence-item' : ''} content-stretch flex flex-col gap-[12px] items-start pt-[32px] relative shrink-0 w-full`} style={{ animationDelay: animate ? '1040ms' : undefined }}>
        <h3 className="font-['Etihad_Altis:Medium',sans-serif] leading-[1.2] text-[#0d223b] text-[24px]">Romantic Getaway Hotels</h3>
        <div className="destination-slider relative shrink-0">
          <div className="content-stretch flex gap-[16px] items-start relative w-[max-content]">
            {hotels.map((hotel) => (
              <img
                key={hotel.src}
                src={hotel.src}
                alt={hotel.alt}
                className="block h-[240px] w-[160px] shrink-0 object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <div className={`${animate ? 'chat-sequence-item' : ''} content-stretch flex flex-col gap-[12px] items-start pt-[32px] relative shrink-0 w-full`} style={{ animationDelay: animate ? '1240ms' : undefined }}>
        <h3 className="font-['Etihad_Altis:Medium',sans-serif] leading-[1.2] text-[#0d223b] text-[24px]">Top restaurants for you</h3>
        <img
          src={discoverRestaurantsCard}
          alt="Falaknuma Palace and Maharani restaurant cards"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

function DiscoverSourcesContent() {
  const sources = [
    {
      title: 'Goa Travel Guide 2026 | Lonely Planet',
      description: "Explore Goa's beaches, nightlife, culture, and hidden coastal gems.",
      domain: 'lonelyplanet.com',
      badge: 'LP',
      color: '#111111',
    },
    {
      title: 'Top Hidden Destinations from London This Year',
      description: 'Discover unique destinations beyond the typical European city break.',
      domain: 'cntraveller.com',
      badge: 'CNT',
      color: '#0b83c9',
    },
    {
      title: 'Luxury Beach Resorts in Goa Under £150 per Night',
      description: 'Handpicked resorts with exceptional ratings and beachfront locations.',
      domain: 'booking.com',
      badge: 'B.',
      color: '#0057a8',
    },
    {
      title: 'Most Romantic Hotels in India for Couples',
      description: 'A curated selection of luxury stays, boutique resorts, and honeymoon escapes.',
      domain: 'forbestravelguide.com',
      badge: 'F',
      color: '#1f1f1f',
    },
    {
      title: 'Best Restaurants Near Popular Tourist Attractions',
      description: 'Find highly rated local restaurants and authentic dining experiences.',
      domain: 'tripadvisor.com',
      badge: 'TA',
      color: '#00d99c',
    },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[34px] items-start px-[10px] pt-[44px] relative shrink-0 w-full">
      {sources.map((source) => (
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" key={source.title}>
          <h4 className="font-['Etihad_Altis:Bold',sans-serif] leading-[22px] text-[#0d223b] text-[15px]">{source.title}</h4>
          <p className="font-['Etihad_Altis:Text',sans-serif] leading-[22px] text-[#0d223b] text-[15px]">{source.description}</p>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <span className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 size-[18px] text-[7px] font-['Etihad_Altis:Bold',sans-serif] text-white" style={{ backgroundColor: source.color }}>
              {source.badge}
            </span>
            <span className="font-['Etihad_Altis:Text',sans-serif] leading-[20px] text-[#7b8794] text-[14px]">{source.domain}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function AssistantActions({ animate }: { animate: boolean }) {
  const [rating, setRating] = React.useState<'good' | 'bad' | null>(null);

  return (
    <div className={`${animate ? 'chat-sequence-item' : ''} content-stretch flex items-center py-[24px] relative shrink-0 w-full`} style={{ animationDelay: animate ? '1660ms' : undefined }}>
      <div aria-hidden="true" className="absolute border-[#e3e3e3] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
        <RatingAction
          active={rating === 'good'}
          label="Good response"
          tooltipAlign="start"
          onClick={() => setRating((current) => current === 'good' ? null : 'good')}
        >
          <Like filled={rating === 'good'} />
        </RatingAction>
        <RatingAction
          active={rating === 'bad'}
          label="Bad response"
          onClick={() => setRating((current) => current === 'bad' ? null : 'bad')}
        >
          <Dislike filled={rating === 'bad'} />
        </RatingAction>
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]">
          <Copy />
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]">
          <Share />
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]">
          <Volume />
        </div>
      </div>
    </div>
  );
}

function RatingAction({ active, children, label, onClick, tooltipAlign = 'center' }: { active: boolean; children: React.ReactNode; label: string; onClick: () => void; tooltipAlign?: 'center' | 'start' }) {
  const tooltipPosition = tooltipAlign === 'start'
    ? 'left-0 translate-x-0'
    : 'left-1/2 -translate-x-1/2';

  return (
    <button
      aria-label={label}
      className={`${active ? 'bg-[#ebebea]' : 'bg-transparent hover:bg-[#ebebea]'} group content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px] transition-colors`}
      onClick={onClick}
      type="button"
    >
      {children}
      <span className={`opacity-0 group-hover:opacity-100 ${tooltipPosition} absolute bg-black bottom-[-38px] pointer-events-none rounded-[9px] text-white transition-opacity whitespace-nowrap px-[10px] py-[5px] font-['Etihad_Altis:Text',sans-serif] text-[13px] leading-[18px] z-10`}>
        {label}
      </span>
    </button>
  );
}

function Like({ filled = false }: { filled?: boolean }) {
  if (filled) {
    return (
      <div className="relative shrink-0 size-[20px]" data-name="like-filled">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20 20">
          <path d="M7.8 17H5.05C4.47 17 4 16.53 4 15.95V9.35C4 8.77 4.47 8.3 5.05 8.3H7.8V17Z" fill="#646363" />
          <path d="M8 8.25L10.8 3.65C11.06 3.22 11.65 3.12 12.04 3.44C12.44 3.77 12.58 4.31 12.39 4.79L11.35 7.4H15.1C16.06 7.4 16.77 8.3 16.55 9.24L15.39 14.28C15.04 15.84 13.65 16.95 12.05 16.95H8V8.25Z" fill="#646363" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative shrink-0 size-[20px]" data-name="like">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="like">
          <g id="Vector">
            <path d={svgPaths.p1b0f3900} fill="var(--fill-0, #646363)" />
            <path d={svgPaths.p2068180} stroke="var(--stroke-0, #646363)" strokeWidth="0.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Dislike({ filled = false }: { filled?: boolean }) {
  if (filled) {
    return (
      <div className="relative shrink-0 size-[20px]" data-name="dislike-filled">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20 20">
          <path d="M7.8 3H5.05C4.47 3 4 3.47 4 4.05V10.65C4 11.23 4.47 11.7 5.05 11.7H7.8V3Z" fill="#646363" />
          <path d="M8 11.75L10.8 16.35C11.06 16.78 11.65 16.88 12.04 16.56C12.44 16.23 12.58 15.69 12.39 15.21L11.35 12.6H15.1C16.06 12.6 16.77 11.7 16.55 10.76L15.39 5.72C15.04 4.16 13.65 3.05 12.05 3.05H8V11.75Z" fill="#646363" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative shrink-0 size-[20px]" data-name="dislike">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="dislike">
          <g id="Vector">
            <path d={svgPaths.p3a14ea80} fill="var(--fill-0, #646363)" />
            <path d={svgPaths.p1d0f3c00} stroke="var(--stroke-0, #646363)" strokeWidth="0.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Copy() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="copy">
      <div className="absolute inset-[10.32%_14.38%_10.29%_14.37%]">
        <div className="absolute inset-[-4.72%_-5.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.749 17.3768">
            <g id="Group">
              <path d={svgPaths.p4342f00} id="Vector" stroke="var(--stroke-0, #646363)" strokeWidth="1.5" />
              <path d={svgPaths.p1914e120} id="Vector_2" stroke="var(--stroke-0, #646363)" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Share() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="share">
      <div className="absolute inset-[15%]">
        <div className="absolute inset-[-5.36%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 15.5">
            <g id="Group">
              <path d={svgPaths.pbb59590} id="Vector" stroke="var(--stroke-0, #646363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p2ba2f580} id="Vector_2" stroke="var(--stroke-0, #646363)" strokeLinecap="round" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Volume() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="volume">
      <div className="absolute inset-[16%_10.42%_16%_6.25%]">
        <div className="absolute inset-[-5.52%_-4.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1667 15.0991">
            <g id="Group">
              <path d={svgPaths.p1b900ef0} id="Vector" stroke="var(--stroke-0, #646363)" strokeWidth="1.5" />
              <path d={svgPaths.p17ce9b00} id="Vector_2" stroke="var(--stroke-0, #646363)" strokeLinecap="round" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconPlusLarge() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="IconPlusLarge">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 16 16">
        <path d="M8 3.5V12.5M3.5 8H12.5" stroke="#1D1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function IconMicrophone() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="IconMicrophone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="IconMicrophone">
          <path d={svgPaths.pf91f600} id="Vector" stroke="var(--stroke-0, #1D1C1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconVoiceHigh() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="IconVoiceHigh">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="IconVoiceHigh">
          <path d={svgPaths.p35adcb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

export default function ConversationScreen({ conversation, isWideLayout = false, onDateSelect, onShareLocation, onNewChat, onSidebarToggle, onInputSubmit, onFullVoice }: ConversationScreenProps) {
  const [inputText, setInputText] = React.useState('');
  const [selectedImage, setSelectedImage] = React.useState<string | undefined>();
  const [sourceView, setSourceView] = React.useState<SourceView>('none');
  const messagesRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const hasFlightStatusQuery = conversation.some(msg => {
    const lowerContent = msg.content.toLowerCase();
    return lowerContent.includes('flight') && lowerContent.includes('status');
  });
  const hasSelectedDate = conversation.some(msg => msg.type === 'user' && msg.content.includes('April'));
  const hasSharedLocation = conversation.some(msg => msg.type === 'user' && msg.content.includes('EC3N'));
  const hasDiscoverResponse = conversation.some(msg => msg.type === 'assistant' && msg.content.includes('best trips are the ones'));
  const dates = ["Sunday, 19 April", "Monday, 20 April", "Tuesday, 21 April"];

  React.useEffect(() => {
    if (!hasDiscoverResponse) {
      setSourceView('none');
    }
  }, [hasDiscoverResponse]);

  const handleSubmit = () => {
    if (inputText.trim()) {
      onInputSubmit(inputText, selectedImage);
      setInputText('');
      setSelectedImage(undefined);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setSelectedImage(URL.createObjectURL(file));
    if (!inputText.trim()) {
      setInputText('What baggage can I bring on my trip?');
    }
    event.target.value = '';
  };

  const handlePushToTalkSubmit = () => {
    if (hasFlightStatusQuery && !hasSelectedDate) {
      onDateSelect('Sunday, 19 April');
      return;
    }

    onInputSubmit('Hey! I want to check a flight status EY63');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={`bg-[#f6f8f9] content-stretch ${isWideLayout ? '' : 'drop-shadow-[-18px_0px_18px_rgba(17,24,39,0.08)]'} flex flex-col items-start pl-px relative size-full`}>
      <div aria-hidden="true" className="absolute border-[rgba(17,24,39,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <Header
        activeSourceView={sourceView}
        onNewChat={onNewChat}
        onSidebarToggle={onSidebarToggle}
        onSourceViewChange={setSourceView}
        showSourceTabs={hasDiscoverResponse}
      />

      <div className="bg-[#f8f7f7] flex-[1_0_0] min-h-px relative w-full">
        <div className="flex flex-col items-center justify-center overflow-hidden size-full">
          <div className={`bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-between px-[16px] ${hasDiscoverResponse ? 'pb-[24px] pt-0' : 'py-[24px]'} ${isWideLayout ? 'max-w-[500px]' : ''} relative size-full`}>

            <div ref={messagesRef} className="messages-viewport content-stretch flex flex-[1_1_0] flex-col items-start min-h-0 relative w-full">
              {sourceView === 'web' ? (
                <DiscoverSourcesContent />
              ) : sourceView === 'posts' ? (
                <div className="shrink-0 w-full" />
              ) : conversation.map((msg, idx) => {
                const isLatestMessage = idx === conversation.length - 1;
                const isFlightStatusResponse = msg.type === 'assistant' && msg.content.includes('latest status for flight EY63');
                const isBaggageResponse = msg.type === 'assistant' && msg.content.includes('baggage options');
                const isDestinationResponse = msg.type === 'assistant' && msg.content.includes('destinations are trending');
                const isDiscoverPlacesResponse = msg.type === 'assistant' && msg.content.includes('best trips are the ones');
                const shouldShowLocationOption = msg.type === 'assistant' && msg.content.includes('share your location') && !hasSharedLocation;
                const shouldShowDateOptions = hasFlightStatusQuery && !hasSelectedDate && idx === 1;
                const shouldShowActions = msg.type === 'assistant' && !shouldShowDateOptions;

                return (
                <div key={idx} className={`content-stretch flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'} py-[12px] relative shrink-0 w-full`}>
                  {msg.type === 'user' ? (
                    <div className={`${isLatestMessage ? 'chat-message-user' : ''} bg-[rgba(13,34,59,0.05)] content-stretch flex flex-col gap-[10px] items-start justify-center px-[16px] py-[12px] relative rounded-bl-[20px] rounded-tl-[20px] rounded-tr-[20px] shrink-0 max-w-[323px]`}>
                      {msg.imageUrl && (
                        <img src={msg.imageUrl} alt="" className="max-h-[180px] w-full rounded-[14px] object-cover" />
                      )}
                      <UserMessageText text={msg.content} />
                    </div>
                  ) : (
                    <div className={`${isLatestMessage ? 'chat-message-assistant' : ''} content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full`}>
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <Frame />
                        </div>

                          {isFlightStatusResponse ? (
                          <FlightStatusResponse animate={isLatestMessage} />
                        ) : isBaggageResponse ? (
                          <BaggageResponse animate={isLatestMessage} />
                        ) : isDestinationResponse ? (
                          <DestinationResponse animate={isLatestMessage} />
                        ) : isDiscoverPlacesResponse ? (
                          <DiscoverPlacesResponse animate={isLatestMessage} />
                        ) : (
                          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                            <EmphasizedAssistantText text={msg.content} animate={isLatestMessage} />
                          </div>
                        )}

                        {shouldShowDateOptions && (
                          <div className={`${isLatestMessage ? 'chat-sequence-item' : ''} relative shrink-0 w-full`} style={{ animationDelay: isLatestMessage ? '1120ms' : undefined }}>
                            <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative size-full">
                              {dates.map((date, dateIdx) => (
                                <button
                                  key={dateIdx}
                                  onClick={() => onDateSelect(date)}
                                  className="bg-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.05)] relative rounded-[72px] shrink-0 text-left w-full cursor-pointer hover:bg-gray-50 transition-colors"
                                >
                                  <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[72px]" />
                                  <div className="flex flex-row items-center size-full">
                                    <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
                                      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[9999px] shrink-0">
                                        <div className="overflow-clip relative shrink-0 size-[16px]">
                                          <div className="absolute inset-[18.23%_11.98%_11.98%_18.23%]">
                                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.167 11.1668">
                                              <path d={svgPaths.p14982100} fill="var(--fill-0, #374151)" />
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                      <p className="[word-break:break-word] flex-[1_0_0] font-['Etihad_Altis:Text',sans-serif] leading-[1.3] min-w-px not-italic relative text-[#374151] text-[16px] text-left">{date}</p>
                                    </div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {shouldShowLocationOption && (
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            <FollowUpButton animate={isLatestMessage} delay="1120ms" onClick={onShareLocation}>
                              Share my location
                            </FollowUpButton>
                          </div>
                        )}
                      </div>

                      {shouldShowActions && <AssistantActions animate={isLatestMessage} />}
                    </div>
                  )}
                </div>
                );
              })}
            </div>

            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
              <div className="bg-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.05)] relative rounded-[24px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[24px]" />
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col gap-[18px] items-start justify-center pb-[8px] pt-[20px] px-[8px] relative size-full">
                    {selectedImage && (
                      <div className="content-stretch flex items-center px-[12px] relative shrink-0 w-full">
                        <img src={selectedImage} alt="" className="h-[52px] w-[52px] rounded-[12px] object-cover" />
                      </div>
                    )}

                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
                          <input
                            ref={inputRef}
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="How can I help you today?"
                            className="[word-break:break-word] flex-[1_0_0] font-['Etihad_Altis:Text',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#1d1c1b] text-[15px] bg-transparent border-none outline-none placeholder:text-[#646363]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <input ref={fileInputRef} className="hidden" type="file" accept="image/*" onChange={handleImageSelect} />
                      <button
                        className="bg-[#ebebea] content-stretch flex items-center justify-center p-[10px] relative rounded-[99px] shrink-0 size-[40px] cursor-pointer hover:bg-[#dddcdc] transition-colors"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <IconPlusLarge />
                      </button>

                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <PushToTalkButton onSubmit={handlePushToTalkSubmit}>
                            <IconMicrophone />
                          </PushToTalkButton>
                          <button
                            className="bg-[#1d1c1b] content-stretch flex items-center justify-center p-[10px] relative rounded-[99px] shrink-0 size-[40px] cursor-pointer hover:bg-[#3d3c3b] transition-colors"
                            onClick={inputText.trim() ? handleSubmit : onFullVoice}
                          >
                            {inputText.trim() ? (
                              <svg className="relative shrink-0 size-[16px]" fill="none" viewBox="0 0 16 16">
                                <path d="M8 13V3M8 3L4 7M8 3L12 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            ) : (
                              <IconVoiceHigh />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
