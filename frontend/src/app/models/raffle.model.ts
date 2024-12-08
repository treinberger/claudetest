export interface Raffle {
  id?: number;
  name: string;
  description: string;
  teaserImage: string;
  detailImage: string;
  status: RaffleStatus;
  previewDate: Date;
  startDate: Date;
  endDate: Date;
  prizeTiers: PrizeTier[];
  apointsConfig?: ApointsConfig;
}

export interface PrizeTier {
  id?: number;
  description: string;
  quantity: number;
  remainingQuantity: number;
}

export interface ApointsConfig {
  costPerChance: number;
  maxPurchases: number;
}

export enum RaffleStatus {
  DRAFT = 'DRAFT',
  PREVIEW = 'PREVIEW',
  ACTIVE = 'ACTIVE',
  ENDED = 'ENDED',
  DRAWN = 'DRAWN'
}