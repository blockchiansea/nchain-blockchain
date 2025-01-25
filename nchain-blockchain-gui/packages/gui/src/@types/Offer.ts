import { type OfferSummaryRecord } from '@nchain-network/api';

type Offer = {
  id: string;
  valid: boolean;
  data: string;
  summary: OfferSummaryRecord;
};

export default Offer;
