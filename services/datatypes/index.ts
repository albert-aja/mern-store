export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  _id: string;
  name: string;
  status: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface NominalsTypes {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
}

export interface BanksTypes {
  _id: string;
  bankName: string;
  name: string;
  noRek: string;
}

export interface PaymentsTypes {
  _id: string;
  type: string;
  status: string;
  banks: BanksTypes[];
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export interface JWTPayloadTypes {
  player: UserTypes;
  iat: number;
}

export interface checkoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface historyVoucherTopup {
  gameName: string;
  category: string;
  thumbnail: string;
  coinName: string;
  coinQuantity: number;
}

export interface HistoryTransactionTypes {
  _id: string;
  historyVoucherTopup: historyVoucherTopup;
  status: string;
  value: number;
}

export interface TopUpCategory {
  _id: string;
  name: string;
  value: number;
}
