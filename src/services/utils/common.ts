export const trimObject = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "string") {
      obj[key] = obj[key].trim();
    }
  });
  return obj;
};

export const getCursorKey = (url: string) => {
  const arr = url.split('cursor=');
  if(arr?.length == 2) return arr[1];
  return ''
}

export const minifyNumber = (val: number) => {
  const THOUSAND = 1000;
  const MILLION = 1000000;
  const BILLION = 1000000000;
  if(val >= BILLION / 10) return `${(val / BILLION).toFixed(1)}B`
  if(val >= MILLION / 10) return `${(val / MILLION).toFixed(1)}M`
  return `${(val / THOUSAND /10).toFixed(1)}K`
}
