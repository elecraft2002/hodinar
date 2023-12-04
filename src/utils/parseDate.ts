import * as prismicH from "@prismicio/helpers";
import { DateField } from "@prismicio/types";
const parseDate = (prismicDate: DateField) => {
  const date = prismicH.asDate(prismicDate);
  if (!date) return null;
  return `${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`;
};
export default parseDate;
