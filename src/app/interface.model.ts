export interface Admin {
  name: string;
  pack: string | null;
  dateSubscription: Date;
  dateExpiration: Date;
  userSupp: number;
  options: string[];
  smsConsomation: number;
  signatureConsomation: number;
  ocrConsomation: number;
  tarifeoLicence: number;
}

export interface ApiSubscriptionInfo {
  societeName: string;
  packageName?: string;
  subscriptionDate: string;
  expirationDate: string;
  additionalUsers?: number;
  enabledModules?: string[];
  smsUsage?: number;
  signatureUsage?: number;
  ocrUsage?: number;
  tarifeoLicenses?: number;
  [key: string]: any; 
}