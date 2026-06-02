export type SeatPassenger = {
  id: string;
  name: string;
  title: string;
  status: 'not-assigned' | 'assigned' | 'paid';
  currentSeat?: string;
  restrictions?: string[];
};

export type SeatLeg = {
  id: string;
  from: string;
  to: string;
  date: string;
  time: string;
  flightNumber: string;
  aircraft: string;
  cabin: string;
  operatedBy: string;
  isEtihadOperated: boolean;
};

export type SeatOption = {
  id: string;
  row: number;
  column: string;
  status: 'available' | 'occupied' | 'unavailable';
  price: number;
  currency: string;
  attributes: string[];
  exitRow?: boolean;
  extraLegroom?: boolean;
};

export const seatBooking = {
  pnr: '6X8KQ2',
  lastName: 'Haddad',
  route: 'Abu Dhabi to London',
  passengers: [
    {
      id: 'p1',
      name: 'Muhammad Haddad',
      title: 'Mr',
      status: 'not-assigned',
    },
    {
      id: 'p2',
      name: 'Maya Haddad',
      title: 'Ms',
      status: 'not-assigned',
    },
    {
      id: 'p3',
      name: 'Nour Haddad',
      title: 'Ms',
      status: 'not-assigned',
    },
  ] satisfies SeatPassenger[],
  legs: [
    {
      id: 'ey18',
      from: 'Abu Dhabi',
      to: 'London Heathrow',
      date: 'Sunday, 19 April',
      time: '14:05',
      flightNumber: 'EY18',
      aircraft: 'Boeing 787-9',
      cabin: 'Economy',
      operatedBy: 'Etihad Airways',
      isEtihadOperated: true,
    },
    {
      id: 'ba914',
      from: 'London Heathrow',
      to: 'Frankfurt',
      date: 'Monday, 20 April',
      time: '09:15',
      flightNumber: 'BA914',
      aircraft: 'Airbus A320',
      cabin: 'Economy',
      operatedBy: 'British Airways',
      isEtihadOperated: false,
    },
  ] satisfies SeatLeg[],
};

const unavailableById = new Set(['10B', '11E', '14D', '15C']);
const occupiedById = new Set(['10C', '11A', '12E', '13F', '15A', '16B']);
const extraLegroomRows = new Set([10, 12]);
const exitRows = new Set([12]);

export const seatOptions: SeatOption[] = Array.from({ length: 7 }, (_, rowIndex) => {
  const row = rowIndex + 10;
  return ['A', 'B', 'C', 'D', 'E', 'F'].map((column) => {
    const id = `${row}${column}`;
    const extraLegroom = extraLegroomRows.has(row);
    const exitRow = exitRows.has(row);
    const isWindow = column === 'A' || column === 'F';
    const isAisle = column === 'C' || column === 'D';
    const price = extraLegroom ? 65 : isWindow || isAisle ? 35 : 0;
    const attributes = [
      isWindow ? 'Window' : isAisle ? 'Aisle' : 'Middle',
      ...(extraLegroom ? ['Extra legroom'] : []),
      ...(exitRow ? ['Exit row'] : []),
      ...(row >= 15 ? ['Near rear cabin'] : []),
    ];

    return {
      id,
      row,
      column,
      status: unavailableById.has(id) ? 'unavailable' : occupiedById.has(id) ? 'occupied' : 'available',
      price,
      currency: 'GBP',
      attributes,
      exitRow,
      extraLegroom,
    } satisfies SeatOption;
  });
}).flat();
