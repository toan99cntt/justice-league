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
  if(!val) return 0;
  const units = ['', 'K', 'M', 'G', 'T', 'P', 'E'];
  let unitIndex = 0;
  while (val >= 1000 && unitIndex < units.length - 1) {
    val /= 1000;
    unitIndex++;
  }
  
  return (unitIndex > 0 ? val.toFixed(1) : val) + units[unitIndex];
}
