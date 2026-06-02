import React from 'react';
import {
  Armchair,
  CornerDownRight,
  CheckCircle2,
  UserCheck,
} from 'lucide-react';
import { seatBooking, seatOptions, type SeatLeg, type SeatOption, type SeatPassenger } from '../../data/seatSelectionMock';

type FlowStep = 'identify' | 'legs' | 'seats' | 'summary' | 'payment' | 'confirmed' | 'partner-leg';
type SelectedSeats = Record<string, SeatOption>;
export type SeatFlowActionIconName = 'map' | 'review' | 'payment' | 'change' | 'verify' | 'confirm';
type SeatFlowButtonAction = {
  disabled?: boolean;
  icon?: SeatFlowActionIconName;
  kind?: 'button';
  label: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
};
type SeatFlowCustomAction = {
  content: React.ReactNode;
  id: string;
  kind: 'custom';
};
export type SeatFlowAction = SeatFlowButtonAction | SeatFlowCustomAction;

const exitRowCriteria = [
  '18 or older',
  'Able to move freely without a mobility aid',
  'Not requiring a seat-belt extension',
  'Able to speak and understand English',
  'Able to see and hear instructions clearly',
  'Able to help in an emergency if asked',
  'Not pregnant',
  'Not travelling with a falcon',
];

function formatPrice(seat: SeatOption) {
  return seat.price === 0 ? 'Free' : `£${seat.price}`;
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`seat-flow-card bg-white border border-[#e8e8e8] rounded-[18px] shadow-[0px_4px_12px_rgba(0,0,0,0.04)] w-full ${className}`}>
      {children}
    </div>
  );
}

function FlowNote({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="seat-flow-note [word-break:break-word] font-['Etihad_Altis:Text',sans-serif] leading-[24px] text-[#374151] text-[16px] w-full">
      {children}
    </p>
  );
}

function FlowSuggestions({
  onSuggestionClick,
}: {
  onSuggestionClick?: (text: string) => void;
}) {
  const suggestions = ['Check baggage allowance', 'Help with another booking'];

  return (
    <div className="seat-flow-note flex flex-col gap-[8px] w-full">
      {suggestions.map((suggestion) => (
        <button
          className="bg-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.05)] relative rounded-[72px] text-left transition-colors hover:bg-gray-50 w-full"
          key={suggestion}
          onClick={() => onSuggestionClick?.(suggestion)}
          type="button"
        >
          <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[72px]" />
          <div className="flex gap-[8px] items-center p-[14px] relative w-full">
            <CornerDownRight className="size-[16px] shrink-0 text-[#374151]" />
            <span className="font-['Etihad_Altis:Text',sans-serif] leading-[20px] text-[#374151] text-[14px]">{suggestion}</span>
          </div>
        </button>
      ))}
    </div>
  );
}

function TinyLabel({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'neutral' | 'gold' | 'success' | 'danger' }) {
  const toneClass = {
    neutral: 'bg-[#f3f2ef] text-[#646363]',
    gold: 'bg-[#f6ecd5] text-[#6c3921]',
    success: 'bg-[#e8f5ef] text-[#1f6f4a]',
    danger: 'bg-[#f8e7e5] text-[#8f2f27]',
  }[tone];

  return (
    <span className={`${toneClass} rounded-[999px] px-[8px] py-[3px] font-['Etihad_Altis:Text',sans-serif] text-[11px] leading-[16px] whitespace-nowrap`}>
      {children}
    </span>
  );
}

function BookingSummary({ passengers, selectedSeats }: { passengers: SeatPassenger[]; selectedSeats: SelectedSeats }) {
  return (
    <div className="mx-auto w-[calc(100%-12px)]">
      <Card className="p-[14px]">
        <div className="flex items-start justify-between gap-[12px]">
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Etihad_Altis:Bold',sans-serif] text-[#1d1c1b] text-[15px]">Booking {seatBooking.pnr}</p>
            <p className="font-['Etihad_Altis:Text',sans-serif] text-[#646363] text-[13px]">{seatBooking.route}</p>
          </div>
          <TinyLabel tone="success">Retrieved</TinyLabel>
        </div>

        <div className="bg-[#f8f7f7] flex flex-col gap-[8px] mt-[12px] rounded-[12px] p-[10px]">
          {passengers.map((passenger) => (
            <BookingPassengerRow key={passenger.id} passenger={passenger} selectedSeat={selectedSeats[passenger.id]} />
          ))}
        </div>
      </Card>
    </div>
  );
}

function BookingPassengerRow({ passenger, selectedSeat }: { passenger: SeatPassenger; selectedSeat?: SeatOption }) {
  const seatLabel = selectedSeat?.id || passenger.currentSeat;

  return (
    <div className="flex items-center justify-between gap-[10px]">
      <div className="min-w-0">
        <p className="truncate font-['Etihad_Altis:Text',sans-serif] text-[#1d1c1b] text-[13px]">{passenger.name}</p>
        <p className="font-['Etihad_Altis:Text',sans-serif] text-[#8a8783] text-[11px]">
          {seatLabel ? `Seat ${seatLabel}` : 'No seat selected'}
        </p>
      </div>
      <TinyLabel tone={seatLabel ? 'success' : 'gold'}>{seatLabel ? 'Selected' : 'Needs seat'}</TinyLabel>
    </div>
  );
}

function LegSelector({
  selectedLeg,
  onSelectLeg,
}: {
  selectedLeg?: SeatLeg;
  onSelectLeg: (leg: SeatLeg) => void;
}) {
  const airportCodes: Record<string, string> = {
    'Abu Dhabi': 'AUH',
    Frankfurt: 'FRA',
    'London Heathrow': 'LHR',
  };

  return (
    <div className="flex flex-col gap-[6px] w-full">
      {seatBooking.legs.map((leg) => (
        <button
          className={`${selectedLeg?.id === leg.id ? 'bg-[rgba(158,116,43,0.08)] ring-1 ring-[#9e742b]' : 'bg-transparent hover:bg-[rgba(13,34,59,0.04)]'} rounded-[12px] px-[10px] py-[8px] text-left transition-colors w-full`}
          key={leg.id}
          onClick={() => leg.isEtihadOperated && onSelectLeg(leg)}
          type="button"
        >
          <div className="flex items-start justify-between gap-[8px]">
            <div className="min-w-0">
              <p className="font-['Etihad_Altis:Bold',sans-serif] text-[#1d1c1b] text-[13px]">{leg.flightNumber}</p>
              <p className="font-['Etihad_Altis:Text',sans-serif] text-[#646363] text-[12px]">
                {airportCodes[leg.from] || leg.from} to {airportCodes[leg.to] || leg.to} · {leg.date.replace(/^[^,]+, /, '')}, {leg.time}
              </p>
            </div>
            <TinyLabel tone={leg.isEtihadOperated ? 'success' : 'danger'}>
              {leg.isEtihadOperated ? 'Available' : 'Partner'}
            </TinyLabel>
          </div>
          {!leg.isEtihadOperated && (
            <p className="mt-[4px] font-['Etihad_Altis:Text',sans-serif] text-[#646363] text-[11px] leading-[15px]">
              {leg.operatedBy} handles seats.
            </p>
          )}
        </button>
      ))}
    </div>
  );
}

function PassengerTracker({
  activePassengerId,
  passengers,
  selectedSeats,
  onPassengerChange,
}: {
  activePassengerId: string;
  passengers: SeatPassenger[];
  selectedSeats: SelectedSeats;
  onPassengerChange: (passengerId: string) => void;
}) {
  return (
    <div className="destination-slider w-full">
      <div className="flex gap-[8px] w-[max-content] pr-[10px]">
        {passengers.map((passenger) => {
          const selectedSeat = selectedSeats[passenger.id];
          const isActive = passenger.id === activePassengerId;
          return (
            <button
              className={`${isActive ? 'bg-[#1d1c1b] text-white' : 'bg-white text-[#1d1c1b]'} border border-[#e8e8e8] flex items-center gap-[8px] min-w-[132px] rounded-[999px] px-[10px] py-[8px] transition-colors`}
              key={passenger.id}
              onClick={() => onPassengerChange(passenger.id)}
              type="button"
            >
              <UserCheck className="size-[14px] shrink-0" />
              <span className="truncate font-['Etihad_Altis:Text',sans-serif] text-[12px]">{passenger.name.split(' ')[0]}</span>
              <span className={`${isActive ? 'text-[#d7d0c4]' : 'text-[#8a8783]'} ml-auto font-['Etihad_Altis:Text',sans-serif] text-[12px]`}>
                {selectedSeat?.id || passenger.currentSeat || '--'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SeatMap({
  activePassenger,
  selectedSeats,
  onSeatPick,
}: {
  activePassenger: SeatPassenger;
  selectedSeats: SelectedSeats;
  onSeatPick: (seat: SeatOption) => void;
}) {
  const rows = Array.from(new Set(seatOptions.map((seat) => seat.row)));
  const columns = ['A', 'B', 'C', 'D', 'E', 'F'];
  const selectedSeatIds = new Set(Object.values(selectedSeats).map((seat) => seat.id));

  const seatTone = (seat: SeatOption) => {
    if (selectedSeats[activePassenger.id]?.id === seat.id) {
      return 'seat-choice-selected bg-[#1d1c1b] border-[#1d1c1b] text-white';
    }
    if (selectedSeatIds.has(seat.id)) {
      return 'seat-choice-held bg-[#d8c9a1] border-[#d8c9a1] text-[#1d1c1b]';
    }
    if (seat.status === 'occupied') {
      return 'bg-[#d9d7d2] border-[#d9d7d2] text-[#8a8783] cursor-not-allowed';
    }
    if (seat.status === 'unavailable') {
      return 'bg-[#f3f2ef] border-[#e0ded8] text-[#bbb7ae] cursor-not-allowed';
    }
    if (seat.exitRow) {
      return 'bg-[#fff6e3] border-[#c79a3b] text-[#6c3921]';
    }
    if (seat.extraLegroom) {
      return 'bg-[#eef5f5] border-[#6b9d9f] text-[#23494b]';
    }
    return seat.price === 0 ? 'bg-white border-[#d8d5cc] text-[#1d1c1b]' : 'bg-[#f8f7f7] border-[#cfcac0] text-[#1d1c1b]';
  };

  return (
    <div className="mx-auto w-[calc(100%-12px)]">
      <Card className="overflow-hidden">
        <div className="border-b border-[#ece9e2] flex items-center justify-between gap-[10px] px-[14px] py-[12px]">
          <div>
            <p className="font-['Etihad_Altis:Bold',sans-serif] text-[#1d1c1b] text-[14px]">Choose a seat for {activePassenger.name.split(' ')[0]}</p>
            <p className="font-['Etihad_Altis:Text',sans-serif] text-[#646363] text-[12px]">Tap any available seat. Prices are shown before payment.</p>
          </div>
          <Armchair className="size-[20px] shrink-0 text-[#9e742b]" />
        </div>

        <div className="bg-[#f8f7f7] p-[14px]">
          <div className="mx-auto mb-[12px] h-[28px] w-[88px] rounded-b-[44px] border-b border-l border-r border-[#d7d2c8] bg-white text-center font-['Etihad_Altis:Text',sans-serif] text-[#8a8783] text-[10px] leading-[24px]">
            Front
          </div>
          <div className="grid grid-cols-[24px_repeat(3,38px)_18px_repeat(3,38px)] gap-[6px] items-center justify-center">
            <span />
            {columns.slice(0, 3).map((column) => (
              <span className="text-center font-['Etihad_Altis:Text',sans-serif] text-[#8a8783] text-[10px]" key={column}>{column}</span>
            ))}
            <span />
            {columns.slice(3).map((column) => (
              <span className="text-center font-['Etihad_Altis:Text',sans-serif] text-[#8a8783] text-[10px]" key={column}>{column}</span>
            ))}

            {rows.map((row) => (
              <React.Fragment key={row}>
                <span className="font-['Etihad_Altis:Text',sans-serif] text-[#8a8783] text-[10px]">{row}</span>
                {columns.map((column, index) => {
                  const seat = seatOptions.find((option) => option.id === `${row}${column}`);
                  if (!seat) {
                    return null;
                  }
                  const disabled = seat.status !== 'available' || selectedSeatIds.has(seat.id) && selectedSeats[activePassenger.id]?.id !== seat.id;
                  const seatButton = (
                    <button
                      aria-label={`Seat ${seat.id}, ${formatPrice(seat)}`}
                      className={`seat-choice-button ${seatTone(seat)} border flex flex-col h-[38px] items-center justify-center rounded-[9px] transition-colors w-[38px]`}
                      disabled={disabled}
                      key={seat.id}
                      onClick={() => onSeatPick(seat)}
                      type="button"
                    >
                      <span className="font-['Etihad_Altis:Bold',sans-serif] text-[10px] leading-[12px]">{seat.id}</span>
                      {seat.status === 'available' && <span className="font-['Etihad_Altis:Text',sans-serif] text-[8px] leading-[10px]">{formatPrice(seat)}</span>}
                    </button>
                  );
                  return index === 3 ? (
                    <React.Fragment key={seat.id}>
                      <span />
                      {seatButton}
                    </React.Fragment>
                  ) : seatButton;
                })}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-[6px] px-[14px] py-[12px]">
          <TinyLabel>Available</TinyLabel>
          <TinyLabel tone="gold">Exit row</TinyLabel>
          <TinyLabel>Occupied</TinyLabel>
          <TinyLabel tone="success">Your selection</TinyLabel>
        </div>
      </Card>
    </div>
  );
}

function SeatDetail({ seat, passenger }: { seat?: SeatOption; passenger: SeatPassenger }) {
  if (!seat) {
    return null;
  }

  return (
    <p className="seat-flow-note font-['Etihad_Altis:Text',sans-serif] leading-[22px] text-[#374151] text-[14px]">
      Seat <span className="font-['Etihad_Altis:Bold',sans-serif] text-[#1d1c1b]">{seat.id}</span> is held for {passenger.name.split(' ')[0]}: {seat.attributes.join(' · ')} · {formatPrice(seat)}.
    </p>
  );
}

function ExitRowConsent({
  seat,
}: {
  seat: SeatOption;
}) {
  return (
    <div className="seat-flow-note flex flex-col gap-[9px] w-full">
      <div>
        <p className="font-['Etihad_Altis:Text',sans-serif] leading-[22px] text-[#374151] text-[15px]">
          Seat <span className="font-['Etihad_Altis:Bold',sans-serif] text-[#1d1c1b]">{seat.id}</span> is in an exit row, so I need a quick safety confirmation.
        </p>
        <p className="font-['Etihad_Altis:Text',sans-serif] leading-[19px] text-[#646363] text-[13px]">
          Please confirm these apply:
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[5px]">
        {exitRowCriteria.map((criterion) => (
          <div className="flex items-start gap-[7px]" key={criterion}>
            <CheckCircle2 className="mt-[2px] size-[13px] shrink-0 text-[#1f6f4a]" />
            <p className="font-['Etihad_Altis:Text',sans-serif] leading-[17px] text-[#374151] text-[12px]">{criterion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CartSummary({
  passengers,
  selectedLeg,
  selectedSeats,
}: {
  passengers: SeatPassenger[];
  selectedLeg: SeatLeg;
  selectedSeats: SelectedSeats;
}) {
  const selectedPassengers = passengers.filter((passenger) => selectedSeats[passenger.id]);
  const total = selectedPassengers.reduce((sum, passenger) => sum + selectedSeats[passenger.id].price, 0);

  return (
    <div className="seat-flow-note flex flex-col gap-[12px] w-full">
      <div>
        <p className="font-['Etihad_Altis:Text',sans-serif] leading-[22px] text-[#374151] text-[15px]">
          Here is the seat summary for <span className="font-['Etihad_Altis:Bold',sans-serif] text-[#1d1c1b]">{selectedLeg.flightNumber}</span>.
        </p>
        <p className="font-['Etihad_Altis:Text',sans-serif] text-[#646363] text-[13px]">{selectedLeg.from} to {selectedLeg.to} · GBP</p>
      </div>

      <div className="flex flex-col gap-[8px]">
        {selectedPassengers.map((passenger) => {
          const seat = selectedSeats[passenger.id];
          return (
            <div className="flex flex-col gap-[2px]" key={passenger.id}>
              <div className="flex items-center justify-between gap-[8px]">
                <p className="truncate font-['Etihad_Altis:Bold',sans-serif] text-[#1d1c1b] text-[13px]">{passenger.name}</p>
                <p className="font-['Etihad_Altis:Bold',sans-serif] text-[#1d1c1b] text-[13px]">{formatPrice(seat)}</p>
              </div>
              <p className="font-['Etihad_Altis:Text',sans-serif] leading-[17px] text-[#646363] text-[12px]">
                Seat {seat.id} · {seat.attributes.join(' · ')}
              </p>
            </div>
          );
        })}
      </div>

      <div className="border-t border-[#ece9e2] flex items-center justify-between pt-[10px]">
        <p className="font-['Etihad_Altis:Text',sans-serif] text-[#646363] text-[13px]">Total before payment</p>
        <p className="font-['Etihad_Altis:Bold',sans-serif] text-[#1d1c1b] text-[18px]">£{total}</p>
      </div>

    </div>
  );
}

function parseBookingDetails(text: string) {
  const pnrMatch = text.match(/\b(?=[A-Z0-9]{6}\b)(?=[A-Z0-9]*\d)[A-Z0-9]{6}\b/i);

  if (!pnrMatch) {
    return null;
  }

  const pnr = pnrMatch[0].toUpperCase();
  const remainingText = text.replace(pnrMatch[0], ' ').trim();
  const nameMatch = remainingText.match(/[A-Za-z]{2,}/);

  return {
    pnr,
    lastName: nameMatch?.[0] || '',
  };
}

export default function SeatSelectionFlow({
  animate,
  latestUserText,
  onActionBarChange,
  onSuggestionClick,
}: {
  animate: boolean;
  latestUserText: string;
  onActionBarChange?: (actions: SeatFlowAction[] | null) => void;
  onSuggestionClick?: (text: string) => void;
}) {
  const [step, setStep] = React.useState<FlowStep>('identify');
  const [pnr, setPnr] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [error, setError] = React.useState('');
  const [selectedLeg, setSelectedLeg] = React.useState<SeatLeg | undefined>(
    seatBooking.legs.find((leg) => leg.isEtihadOperated),
  );
  const [activePassengerId, setActivePassengerId] = React.useState(seatBooking.passengers[0].id);
  const [selectedSeats, setSelectedSeats] = React.useState<SelectedSeats>({});
  const [pendingExitSeat, setPendingExitSeat] = React.useState<SeatOption | undefined>();
  const flowEndRef = React.useRef<HTMLDivElement>(null);
  const processedBookingTextRef = React.useRef('');

  const activePassenger = seatBooking.passengers.find((passenger) => passenger.id === activePassengerId) || seatBooking.passengers[0];
  const seatedCount = Object.keys(selectedSeats).length;
  const allPassengersSeated = seatedCount === seatBooking.passengers.length;
  const activeSeat = selectedSeats[activePassenger.id];

  React.useEffect(() => {
    const shouldAutoScroll = pendingExitSeat
      || step === 'payment'
      || step === 'confirmed'
      || step === 'partner-leg'
      || step === 'summary'
      || (step === 'seats' && seatedCount > 0);

    if (!shouldAutoScroll) {
      return;
    }

    const timer = window.setTimeout(() => {
      flowEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [step, pendingExitSeat, seatedCount, activePassengerId]);

  React.useEffect(() => {
    if (step !== 'identify' || !latestUserText || processedBookingTextRef.current === latestUserText) {
      return;
    }

    const parsedDetails = parseBookingDetails(latestUserText);

    if (!parsedDetails) {
      return;
    }

    processedBookingTextRef.current = latestUserText;

    if (!parsedDetails.lastName) {
      setError('Please send your booking reference and last name together, for example: 6X8KQ2 Haddad.');
      return;
    }

    if (parsedDetails.pnr !== seatBooking.pnr || parsedDetails.lastName.toLowerCase() !== seatBooking.lastName.toLowerCase()) {
      setPnr(parsedDetails.pnr);
      setLastName(parsedDetails.lastName);
      setError('I could not match those details. For this prototype, use: 6X8KQ2 Haddad.');
      return;
    }

    setPnr(parsedDetails.pnr);
    setLastName(parsedDetails.lastName);
    setError('');
    setStep('legs');
  }, [latestUserText, step]);

  const assignSeat = (seat: SeatOption) => {
    setSelectedSeats((current) => ({ ...current, [activePassenger.id]: seat }));
    const nextPassenger = seatBooking.passengers.find((passenger) => passenger.id !== activePassenger.id && !selectedSeats[passenger.id]);
    if (nextPassenger) {
      window.setTimeout(() => setActivePassengerId(nextPassenger.id), 220);
    }
  };

  const confirmSeats = () => {
    setStep('confirmed');
  };

  React.useEffect(() => {
    return () => onActionBarChange?.(null);
  }, [onActionBarChange]);

  React.useEffect(() => {
    if (!onActionBarChange) {
      return;
    }

    if (step === 'identify') {
      onActionBarChange(null);
      return;
    }

    if (step === 'legs') {
      onActionBarChange([
        {
          content: <LegSelector selectedLeg={selectedLeg} onSelectLeg={setSelectedLeg} />,
          id: 'leg-selector',
          kind: 'custom',
        },
        {
          disabled: !selectedLeg,
          label: 'Seat map',
          onClick: () => setStep('seats'),
          variant: 'primary',
        },
      ]);
      return;
    }

    if (step === 'seats') {
      if (pendingExitSeat) {
        onActionBarChange([
          {
            icon: 'confirm',
            label: 'Confirm eligibility',
            onClick: () => {
              assignSeat(pendingExitSeat);
              setPendingExitSeat(undefined);
            },
            variant: 'primary',
          },
          {
            label: 'Choose a different seat',
            onClick: () => setPendingExitSeat(undefined),
            variant: 'secondary',
          },
        ]);
        return;
      }

      onActionBarChange([
        {
          disabled: !allPassengersSeated,
          icon: 'review',
          label: 'Review selected seats',
          onClick: () => setStep('summary'),
          variant: 'primary',
        },
      ]);
      return;
    }

    if (step === 'summary') {
      onActionBarChange([
        {
          icon: 'payment',
          label: 'Continue to secure payment',
          onClick: () => setStep('payment'),
          variant: 'primary',
        },
        {
          icon: 'change',
          label: 'Change seats',
          onClick: () => setStep('seats'),
          variant: 'secondary',
        },
      ]);
      return;
    }

    if (step === 'payment') {
      onActionBarChange([
        {
          icon: 'verify',
          label: 'Simulate secure payment',
          onClick: confirmSeats,
          variant: 'primary',
        },
        {
          label: 'Back to summary',
          onClick: () => setStep('summary'),
          variant: 'secondary',
        },
      ]);
      return;
    }

    if (step === 'partner-leg') {
      onActionBarChange(null);
      return;
    }

    onActionBarChange([
      {
        label: 'Add another leg',
        onClick: () => setStep('partner-leg'),
        variant: 'secondary',
      },
      {
        label: 'Start seat selection again',
        onClick: () => setStep('identify'),
        variant: 'secondary',
      },
    ]);
  }, [allPassengersSeated, onActionBarChange, pendingExitSeat, selectedLeg, step]);

  const handleSeatPick = (seat: SeatOption) => {
    if (seat.exitRow) {
      setPendingExitSeat(seat);
      return;
    }

    assignSeat(seat);
  };

  return (
    <div className={`${animate ? 'chat-sequence-item' : ''} seat-flow-step flex flex-col gap-[12px] w-full`} data-animate={animate ? 'true' : 'false'} style={{ animationDelay: animate ? '780ms' : undefined }}>
      {step === 'identify' && (
        <>
          <FlowNote>
            Happy to help you choose your seats. Please send your booking reference and last name in the message box below, for example: 6X8KQ2 Haddad.
          </FlowNote>
          {error ? (
          <p className="[word-break:break-word] flex-[1_0_0] font-['Etihad_Altis:Text',sans-serif] leading-[22px] min-w-px text-[#8f2f27] text-[14px]">
            {error}
          </p>
          ) : null}
        </>
      )}

      {step === 'legs' && (
        <>
          <FlowNote>
            I found your trip and will keep the choices transparent before anything is committed.
          </FlowNote>
          <BookingSummary passengers={seatBooking.passengers} selectedSeats={selectedSeats} />
          <FlowNote>
            I can help with Etihad-operated flights here. Partner-operated flights are shown, but seat selection stays with the operating carrier.
          </FlowNote>
        </>
      )}

      {step === 'seats' && selectedLeg && (
        <>
          <div className="flex items-center justify-between gap-[10px] w-full">
            <div>
              <p className="font-['Etihad_Altis:Bold',sans-serif] text-[#1d1c1b] text-[15px]">{selectedLeg.flightNumber} seat selection</p>
              <p className="font-['Etihad_Altis:Text',sans-serif] text-[#646363] text-[12px]">
                {seatedCount} of {seatBooking.passengers.length} passengers seated
              </p>
            </div>
            <TinyLabel tone={allPassengersSeated ? 'success' : 'gold'}>{allPassengersSeated ? 'Ready' : 'In progress'}</TinyLabel>
          </div>
          <PassengerTracker
            activePassengerId={activePassenger.id}
            passengers={seatBooking.passengers}
            selectedSeats={selectedSeats}
            onPassengerChange={setActivePassengerId}
          />
          <SeatMap activePassenger={activePassenger} selectedSeats={selectedSeats} onSeatPick={handleSeatPick} />
          {pendingExitSeat && (
            <ExitRowConsent seat={pendingExitSeat} />
          )}
          {!pendingExitSeat && <SeatDetail passenger={activePassenger} seat={activeSeat} />}
          {!pendingExitSeat && allPassengersSeated && (
            <FlowNote>
              Great, everyone has a seat. Review the total once more before I hand you to the secure payment page.
            </FlowNote>
          )}
        </>
      )}

      {step === 'summary' && selectedLeg && (
        <>
          <FlowNote>
            Here is everything together. Nothing is charged until the secure payment step.
          </FlowNote>
          <CartSummary
            passengers={seatBooking.passengers}
            selectedLeg={selectedLeg}
            selectedSeats={selectedSeats}
          />
        </>
      )}

      {step === 'payment' && (
        <div className="seat-flow-note flex flex-col gap-[12px] w-full">
          <div>
            <p className="font-['Etihad_Altis:Text',sans-serif] leading-[22px] text-[#374151] text-[15px]">
              I would now open a secure Etihad payment page.
            </p>
            <p className="font-['Etihad_Altis:Text',sans-serif] leading-[19px] text-[#646363] text-[13px]">
              For the prototype, I can simulate the secure payment step now.
            </p>
          </div>
        </div>
      )}

      {step === 'confirmed' && (
        <div className="seat-confirmation-card flex flex-col gap-[12px] w-full">
          <div>
            <p className="font-['Etihad_Altis:Bold',sans-serif] text-[#1d1c1b] text-[15px]">Seats confirmed</p>
            <p className="font-['Etihad_Altis:Text',sans-serif] leading-[20px] text-[#374151] text-[14px]">
              I re-checked the booking after payment. These seats are now attached to the booking.
            </p>
          </div>
          <div className="flex flex-col gap-[7px]">
            {seatBooking.passengers.map((passenger) => (
              <div className="flex items-center justify-between gap-[8px]" key={passenger.id}>
                <span className="truncate font-['Etihad_Altis:Text',sans-serif] text-[#374151] text-[13px]">{passenger.name}</span>
                <TinyLabel tone="success">{selectedSeats[passenger.id]?.id}</TinyLabel>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 'partner-leg' && (
        <>
          <FlowNote>
            The return leg BA914 is operated by British Airways, so British Airways handles seats for that flight.
          </FlowNote>
          <FlowSuggestions onSuggestionClick={onSuggestionClick} />
        </>
      )}

      <div ref={flowEndRef} className="h-0 shrink-0" />
    </div>
  );
}
