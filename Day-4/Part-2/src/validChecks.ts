export function isByrValid(val: string) {
    return val.length <= 4 && Number(val) <= 2002 && Number(val) >= 1920;
  }

  export function isIyrValid(val: string) {
    return val.length <= 4 && Number(val) <= 2020 && Number(val) >= 2010;
  }

  export function isEyrValid(val: string) {
    return val.length <= 4 && Number(val) <= 2030 && Number(val) >= 2020;
  }
  export function isHgtValid(val: string) {
    if (val.slice(-2) == "cm") {
        console.log("Centimeter Value", parseInt(val))
      return Number(parseInt(val)) >= 150 && Number(parseInt(val)) <= 193;
    }
    if (val.slice(-2) == "in") {
        console.log("Inches Value", parseInt(val))
      return Number(parseInt(val)) >= 59 && Number(parseInt(val)) <= 76;
    }
    console.log("Invalid type Value", val)
    return false;
  }

  export function isHclValid(val: string) {
    if (val.search(`/#[0-9A-Fa-f]{6}/gi`) == -1) {
      console.log("Invalid HCL: ", val);
      return false;
    }
    console.log("Valid HCL: ", val);
    return true;
  }

  export function isEclValid(val: string) {
    let validColours = [`amb`, `blu`, `brn`, `gry`, `grn`, `hzl`, `oth`];

    for (let i = 0; i < validColours.length - 1; i++) {
      if (val == validColours[i]) {
        return true;
      }
    }
    return false;
  }

  export function isPidValid(val: string) {
    if (val.search(`/{9}/g`) == -1 || !isNaN(+Number(val))) {
      console.log("Invalid PID: ", val);
      return false;
    }
    return true;
  }
