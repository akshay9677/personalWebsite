import moment from "moment";

export function getTimeFromNow(date) {
  return moment(parseInt(date)).fromNow();
}

export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    Number(value) === -1 ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};