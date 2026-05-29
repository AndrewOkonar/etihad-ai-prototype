import React from 'react';

interface PushToTalkButtonProps {
  children: React.ReactNode;
  onSubmit: () => void;
}

export default function PushToTalkButton({ children, onSubmit }: PushToTalkButtonProps) {
  const [isPressed, setIsPressed] = React.useState(false);
  const isPressedRef = React.useRef(false);

  const startPress = (event: React.PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    isPressedRef.current = true;
    setIsPressed(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const finishPress = (event: React.PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!isPressedRef.current) {
      return;
    }

    isPressedRef.current = false;
    setIsPressed(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
    event.currentTarget.blur();
    onSubmit();
  };

  const cancelPress = () => {
    isPressedRef.current = false;
    setIsPressed(false);
  };

  return (
    <button
      aria-label="Hold to talk"
      className="push-to-talk-button content-stretch flex items-center justify-center p-[10px] relative rounded-[99px] shrink-0 size-[40px] cursor-pointer transition-colors"
      data-pressed={isPressed ? 'true' : 'false'}
      onContextMenu={(event) => event.preventDefault()}
      onPointerCancel={cancelPress}
      onPointerDown={startPress}
      onPointerLeave={() => {
        if (isPressedRef.current) {
          setIsPressed(true);
        }
      }}
      onPointerUp={finishPress}
    >
      <span className="push-to-talk-bars push-to-talk-bars-left" aria-hidden="true">
        {Array.from({ length: 11 }).map((_, index) => (
          <span key={`left-${index}`} style={{ ['--bar-index' as string]: index }} />
        ))}
      </span>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
