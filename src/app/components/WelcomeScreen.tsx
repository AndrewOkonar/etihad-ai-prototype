import React from 'react';
import svgPaths from "../../imports/Aside/svg-69lzozuaeh";
import { imgGroup, imgGroup1, imgGroup2, imgGroup3 } from "../../imports/Aside/svg-ehpuj";
import EtihadLogo from "./EtihadLogo";
import PushToTalkButton from "./PushToTalkButton";

interface WelcomeScreenProps {
  isWideLayout?: boolean;
  onSidebarToggle: () => void;
  onSuggestionClick: (suggestion: string, imageUrl?: string) => void;
  onFullVoice: () => void;
}

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

function Right({ onSidebarToggle }: { onSidebarToggle: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Right">
      <button aria-label="Toggle sidebar" className="cursor-pointer" onClick={onSidebarToggle} type="button">
        <IconSidebarLeftArrow />
      </button>
      <IconCrossLarge />
    </div>
  );
}

function Header({ onSidebarToggle }: { onSidebarToggle: () => void }) {
  return (
    <div className="bg-[#f8f7f7] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e3e3e3] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] py-[24px] relative size-full">
          <IconEditBig />
          <Right onSidebarToggle={onSidebarToggle} />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[13.3%_-24.26%_-10.89%_12.92%] mask-position-[-1.902px_-2.293px,_-2.435px_-2.225px,_0.74px_1.672px]" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}'), url('${imgGroup2}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.7106 66.3605">
        <g id="Group">
          <path d={svgPaths.p1d4b400} fill="var(--fill-0, #9E742B)" id="Vector" />
          <path d={svgPaths.p3b1dfe00} fill="var(--fill-0, #6C3921)" id="Vector_2" />
          <path d={svgPaths.p30730f00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2af66e00} fill="var(--fill-0, #CDC9B6)" id="Vector_4" />
          <path d={svgPaths.p3e483c00} fill="var(--fill-0, #F6ECD5)" id="Vector_5" />
          <path d={svgPaths.p26ff16e0} fill="var(--fill-0, #CDC9B6)" id="Vector_6" />
          <path d={svgPaths.p344bd800} fill="var(--fill-0, #6C3921)" id="Vector_7" />
          <path d={svgPaths.pc835200} fill="var(--fill-0, #F6ECD5)" id="Vector_8" />
          <path d={svgPaths.p304c0a00} fill="var(--fill-0, #CD9B2B)" id="Vector_9" />
          <path d={svgPaths.p15e7f800} fill="var(--fill-0, #6C3921)" id="Vector_10" />
          <path d={svgPaths.p267f8900} fill="var(--fill-0, #9E742B)" id="Vector_11" />
          <path d={svgPaths.p2f12d880} fill="var(--fill-0, #CDC9B6)" id="Vector_12" />
          <path d={svgPaths.p39aeaa80} fill="var(--fill-0, #CD9B2B)" id="Vector_13" />
          <path d={svgPaths.p2759f80} fill="var(--fill-0, #6C3921)" id="Vector_14" />
          <path d={svgPaths.p26988200} fill="var(--fill-0, #CDC9B6)" id="Vector_15" />
          <path d={svgPaths.p33409c80} fill="var(--fill-0, #9C762B)" id="Vector_16" />
          <path d={svgPaths.p1e25e600} fill="var(--fill-0, #F6ECD5)" id="Vector_17" />
          <path d={svgPaths.p2e3c1570} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p21303880} fill="var(--fill-0, #F6ECD5)" id="Vector_19" />
          <path d={svgPaths.p9290200} fill="var(--fill-0, #CDC9B6)" id="Vector_20" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[13.3%_-24.26%_-10.89%_12.92%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[20.27%_-20.18%_-0.56%_16%]" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[20.27%_-20.18%_-0.56%_16%]" data-name="Group">
      <ClipPathGroup1 />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[4.03%_2.72%_4.02%_2.78%]" style={{ containerType: "size" }} data-name="Clip path group">
      <Group />
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
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.4 69.5621">
                <path d={svgPaths.p3fa02400} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="1.7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ClipPathGroup />
    </div>
  );
}

function Frame() {
  return (
    <EtihadLogo size={68} />
  );
}

function IconAirplane() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="IconAirplane">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="IconAirplane">
          <path d={svgPaths.p2d144b00} id="Vector" stroke="var(--stroke-0, #646363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconTimeslot() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="IconTimeslot">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="IconTimeslot">
          <path d="M10 5.625V10H13.9583" id="Vector" stroke="var(--stroke-0, #646363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1c6f9780} id="Vector_2" stroke="var(--stroke-0, #646363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.pa7eb000} fill="var(--fill-0, #646363)" id="Vector_3" />
          <path d={svgPaths.p1e0be20} fill="var(--fill-0, #646363)" id="Vector_4" />
          <path d={svgPaths.p1faaeb80} fill="var(--fill-0, #646363)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[12.11%_18.97%_17.91%_11.05%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.209px_-2.422px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgGroup3}')` }} data-name="Group">
      <div className="absolute inset-[-4.47%_-4.47%_-4.47%_-4.46%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2465 15.2466">
          <g id="Group">
            <path d={svgPaths.p1bb63100} id="Vector" stroke="var(--stroke-0, #646363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p14f8b640} id="Vector_2" stroke="var(--stroke-0, #646363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function IconParasol() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="IconParasol">
      <ClipPathGroup2 />
    </div>
  );
}

function IconBag() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="IconBag">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="IconBag">
          <path d={svgPaths.p3fd2e4c0} id="Vector" stroke="var(--stroke-0, #646363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M17.5 10.625H2.5" id="Vector_2" stroke="var(--stroke-0, #646363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M10 10.625L10.0018 12.7083" id="Vector_3" stroke="var(--stroke-0, #646363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p373ac300} id="Vector_4" stroke="var(--stroke-0, #646363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
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

export default function WelcomeScreen({ isWideLayout = false, onSidebarToggle, onSuggestionClick, onFullVoice }: WelcomeScreenProps) {
  const [inputText, setInputText] = React.useState('');
  const [selectedImage, setSelectedImage] = React.useState<string | undefined>();
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const pushToTalkPrompt = 'Hey! I want to check a flight status EY63';

  const suggestions = [
    { icon: <IconAirplane />, text: "Help me find and book the best flight for my trip" },
    { icon: <IconTimeslot />, text: "Check the current status of my flight" },
    { icon: <IconParasol />, text: "Help me discover new places" },
    { icon: <IconBag />, text: "What baggage can I bring on my trip?" }
  ];

  const handleSubmit = () => {
    if (inputText.trim()) {
      onSuggestionClick(inputText, selectedImage);
      setInputText('');
      setSelectedImage(undefined);
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
    setInputText('');
    onSuggestionClick(pushToTalkPrompt);
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
      <Header onSidebarToggle={onSidebarToggle} />

      <div className="bg-[#f8f7f7] flex-[1_0_0] min-h-px relative w-full">
        <div className="flex flex-col items-center justify-center overflow-auto size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-between px-[16px] py-[24px] relative size-full">

            <div className={`content-stretch flex flex-[1_0_0] flex-col items-start ${isWideLayout ? 'max-w-[500px]' : 'max-w-[672px]'} min-h-px relative w-full`}>
              <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-center justify-center min-h-px relative w-full">
                  <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full z-[1]">
                  <div className={`content-stretch flex flex-col gap-[16px] items-center relative shrink-0 ${isWideLayout ? 'w-full' : 'w-[393px]'}`}>
                    <div className="content-stretch flex items-center relative shrink-0">
                      <Frame />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Etihad_Altis:Text',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1d1c1b] text-[24px] text-center w-[min-content]">
                      <p>
                        <span className="leading-[1.3]">Hello, </span>
                        <span className="[word-break:break-word] font-['Etihad_Altis:Medium',sans-serif] leading-[1.3] not-italic">Muhammad</span>
                        <span className="leading-[1.3]">.<br aria-hidden="true" />How can I help you today?</span>
                      </p>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full">
                      {suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => onSuggestionClick(suggestion.text)}
                          className="bg-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.05)] relative rounded-[72px] shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                          <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[72px]" />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
                              {suggestion.icon}
                              <p className="[word-break:break-word] font-['Etihad_Altis:Text',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1d1c1b] text-[15px] whitespace-nowrap">{suggestion.text}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] w-full whitespace-nowrap">
                      <div className="flex flex-col font-['Etihad_Altis:Text',sans-serif] justify-center relative shrink-0 text-[11px] tracking-[0.11px]">
                        <p className="leading-[16px]">Prefer another language? Chat with me in yours.</p>
                      </div>
                      <div className="flex flex-col font-['Etihad_Altis:Medium',sans-serif] justify-center relative shrink-0 text-[0px]">
                        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] text-[11px] underline">Learn more</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="How can I help you today?"
                            className="[word-break:break-word] flex-[1_0_0] font-['Etihad_Altis:Text',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#1d1c1b] text-[15px] bg-transparent border-none outline-none placeholder:text-[#646363] w-full"
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
                            className="bg-[#1d1c1b] content-stretch flex items-center justify-center p-[10px] relative rounded-[99px] shrink-0 size-[40px] cursor-pointer hover:bg-[#3d3c3b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
