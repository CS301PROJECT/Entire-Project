import { YangoDriver } from "./YangoDriver/YangoDriver";
import { FreelanceCreative } from "./FreelanceCreative/FreelanceCreative";
import { ShopOwner } from "./ShopOwner/ShopOwner";

export const PROFESSIONS = [YangoDriver, FreelanceCreative, ShopOwner];

export const getScenariosForProfession = (professionId) => {
  const profession = PROFESSIONS.find((p) => p.id === professionId);
  return profession ? profession.scenarios : [];
};
