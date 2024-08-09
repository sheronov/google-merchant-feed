import { AgeGroup } from "./age-group";
import { Availability } from "./availability";
import { Certification } from "./certification";
import { Condition } from "./condition";
import { DateRange } from "./date-range";
import { DimensionWithUnit } from "./dimension-with-unit";
import { EnergyEfficiencyClass } from "./energy-efficiency-class";
import { Gender } from "./gender";
import { Installment } from "./installment";
import { LoyaltyPoints } from "./loyalty-points";
import { Pause } from "./pause";
import { Price } from "./price";
import { ProductDetail } from "./product-detail";
import { Shipping } from "./shipping";
import { SubscriptionCost } from "./subscription-cost";
import { Tax } from "./tax";
import { ValueWithUnit } from "./value-with-unit";
import { WeightWithUnit } from "./weight-with-unit";
import { YesNo } from "./yes-no";

export type Product = {
  id?: string;
  title?: string;
  link?: string;
  imageLink?: string;
  description?: string;
  additionalImageLinks?: string[];
  mobileLink?: string;
  availability?: Availability.Model;
  availabilityDate?: Date;
  costOfGoodsSold?: Price.Model;
  expirationDate?: Date;
  price?: Price.Model;
  salePrice?: Price.Model;
  salePriceEffectiveDate?: DateRange.Model;
  unitPricingMeasure?: ValueWithUnit.Model;
  unitPricingBaseMeasure?: ValueWithUnit.Model;
  installment?: Installment;
  subscriptionCost?: SubscriptionCost;
  loyaltyPoints?: LoyaltyPoints;
  googleProductCategory?: string;
  productType?: string;
  brand?: string;
  gtin?: string;
  mpn?: string;
  identifierExists?: YesNo.Model | boolean;
  condition?: Condition;
  adult?: YesNo.Model | boolean;
  multipack?: number;
  isBundle?: YesNo.Model | boolean;
  certification?: Certification.Model;
  energyEfficiencyClass?: EnergyEfficiencyClass;
  minEnergyEfficiencyClass?: EnergyEfficiencyClass;
  maxEnergyEfficiencyClass?: EnergyEfficiencyClass;
  ageGroup?: AgeGroup.Model;
  color?: string;
  gender?: Gender;
  material?: string;
  pattern?: string;
  size?: string;
  sizeType?: string;
  sizeSystem?: string;
  itemGroupId?: string;
  productLength?: DimensionWithUnit.Model;
  productWidth?: DimensionWithUnit.Model;
  productHeight?: DimensionWithUnit.Model;
  productWeight?: WeightWithUnit.Model;
  productDetail?: ProductDetail.Model | ProductDetail.Model[];
  productHighlight?: string | string[];
  adsRedirect?: string;
  customLabels?: string[];
  promotionId?: string;
  lifestyleImageLink?: string;
  externalSellerId?: string;
  excludedDestination?: string;
  includedDestination?: string;
  shoppingAdsExcludedCountries?: string[];
  pause?: Pause.Model;
  shipping?: Shipping.Model;
  shippingLabel?: string;
  shippingWeight?: ValueWithUnit.Model;
  shippingLength?: ValueWithUnit.Model;
  shippingWidth?: ValueWithUnit.Model;
  shippingHeight?: ValueWithUnit.Model;
  shipsFromCountry?: string;
  maxHandlingTime?: number;
  transitTimeLabel?: string;
  minHandlingTime?: number;
  tax?: Tax;
  taxCategory?: string;
  quantity?: number;
  [key: string]: any;
};
