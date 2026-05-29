import svgPaths from "../../imports/Aside-3/svg-hu3u81aj1k";
import { imgGroup, imgGroup1, imgGroup2 } from "../../imports/Aside-3/svg-swvho";
import EtihadLogo from "./EtihadLogo";

interface ThinkingScreenProps {
  conversation: Array<{ type: 'user' | 'assistant', content: string; imageUrl?: string }>;
  isWideLayout?: boolean;
  onSidebarToggle: () => void;
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

function Header({ onSidebarToggle }: { onSidebarToggle: () => void }) {
  return (
    <div className="bg-[#f8f7f7] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e3e3e3] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] py-[24px] relative size-full">
          <IconEditBig />
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

function UserMessageText({ text }: { text: string }) {
  const parts = text.split(/(EY63|Abu Dhabi|London)/).filter(Boolean);

  return (
    <p className="[word-break:break-word] font-['Etihad_Altis:Text',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#374151] text-[16px]">
      {parts.map((part, index) => (
        part === 'EY63' || part === 'Abu Dhabi' || part === 'London'
          ? <span key={`${part}-${index}`} className="font-['Etihad_Altis:Bold',sans-serif]">{part}</span>
          : part
      ))}
    </p>
  );
}

interface ThinkingStepProps {
  delay: string;
  icon: 'at' | 'dot';
  children: string;
}

function ThinkingStep({ delay, icon, children }: ThinkingStepProps) {
  return (
    <div className="ai-thinking-step content-stretch flex gap-[8px] items-center relative shrink-0 w-full" style={{ animationDelay: delay }}>
      <div className="ai-thinking-icon relative shrink-0 size-[16px]" style={{ animationDelay: delay }}>
        {icon === 'at' ? (
          <div className="absolute inset-[5.95%_7.6%_6.08%_7.52%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5807 14.0755">
              <path clipRule="evenodd" d={svgPaths.pf910580} fill="var(--fill-0, #8E8E93)" fillRule="evenodd" />
            </svg>
          </div>
        ) : (
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" fill="var(--fill-0, #8E8E93)" r="2" />
          </svg>
        )}
      </div>
      <p className="[word-break:break-word] font-['Etihad_Altis:Text',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8e8e93] text-[12px] tracking-[-0.1px] whitespace-nowrap">{children}</p>
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

export default function ThinkingScreen({ conversation, isWideLayout = false, onSidebarToggle, onFullVoice }: ThinkingScreenProps) {
  const lastUserMessage = conversation.filter(m => m.type === 'user').pop();
  const isBaggageFlow = Boolean(lastUserMessage && /baggage|luggage/i.test(lastUserMessage.content));
  const isBaggageImageFlow = Boolean(lastUserMessage?.imageUrl && isBaggageFlow);

  return (
    <div className={`bg-[#f6f8f9] content-stretch ${isWideLayout ? '' : 'drop-shadow-[-18px_0px_18px_rgba(17,24,39,0.08)]'} flex flex-col items-start pl-px relative size-full`}>
      <div aria-hidden="true" className="absolute border-[rgba(17,24,39,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <Header onSidebarToggle={onSidebarToggle} />

      <div className="bg-[#f8f7f7] flex-[1_0_0] min-h-px relative w-full">
        <div className="flex flex-col items-center justify-center overflow-auto size-full">
          <div className={`bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-between px-[16px] py-[24px] ${isWideLayout ? 'max-w-[500px]' : ''} relative size-full`}>

            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              {lastUserMessage && (
                <div className="content-stretch flex flex-col items-end py-[12px] relative shrink-0 w-full">
                  <div className="chat-message-user bg-[rgba(13,34,59,0.05)] content-stretch flex flex-col gap-[10px] items-start justify-center px-[16px] py-[12px] relative rounded-bl-[20px] rounded-tl-[20px] rounded-tr-[20px] shrink-0 max-w-[323px]">
                    {lastUserMessage.imageUrl && (
                      <img src={lastUserMessage.imageUrl} alt="" className="max-h-[180px] w-full rounded-[14px] object-cover" />
                    )}
                    <UserMessageText text={lastUserMessage.content} />
                  </div>
                </div>
              )}

              <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-center relative shrink-0">
                    <Frame />
                  </div>

                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <p className="ai-thinking-step [word-break:break-word] font-['Etihad_Altis:Text',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8e8e93] text-[12px] tracking-[-0.1px] whitespace-nowrap" style={{ animationDelay: '0ms' }}>
                        Thinking deeply...
                      </p>
                    </div>

                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      {isBaggageFlow ? (
                        <>
                          <ThinkingStep delay="360ms" icon="at">{isBaggageImageFlow ? '@ Inspecting attached image' : '@ Reviewing baggage policy'}</ThinkingStep>
                          <ThinkingStep delay="720ms" icon="dot">Checking Etihad baggage rules...</ThinkingStep>
                          <ThinkingStep delay="1080ms" icon="dot">Matching bag type to your allowance...</ThinkingStep>
                        </>
                      ) : (
                        <>
                          <ThinkingStep delay="360ms" icon="at">@ Reviewing live aviation APIs</ThinkingStep>
                          <ThinkingStep delay="720ms" icon="dot">Checking airline and airport databases...</ThinkingStep>
                          <ThinkingStep delay="1080ms" icon="dot">Analyzing flight schedules and status updates...</ThinkingStep>
                        </>
                      )}
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
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
                          <p className="[word-break:break-word] flex-[1_0_0] font-['Etihad_Altis:Text',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#646363] text-[15px]">How can I help you today?</p>
                        </div>
                      </div>
                    </div>

                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="bg-[#ebebea] content-stretch flex items-center justify-center p-[10px] relative rounded-[99px] shrink-0 size-[40px]">
                        <IconPlusLarge />
                      </div>

                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="content-stretch flex items-center justify-center p-[10px] relative rounded-[99px] shrink-0 size-[40px]">
                            <IconMicrophone />
                          </div>
                          <button onClick={onFullVoice} className="bg-[#1d1c1b] content-stretch flex items-center justify-center p-[10px] relative rounded-[99px] shrink-0 size-[40px]">
                            <IconVoiceHigh />
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
