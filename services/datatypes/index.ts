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

export interface NominalsType {
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

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BanksTypes[];
}
