export function transformKeys(obj: { [key: string]: any }): { [key: string]: any } {
    const newObj: { [key: string]: any } = {};
  
    for (const key in obj) {
      const newKey = key.replace(/\s+/g, "_");
      newObj[newKey] = obj[key];
    }
  
    return newObj;
  }