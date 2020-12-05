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

      return Number(parseInt(val)) >= 150 && Number(parseInt(val)) <= 193;
    }
    if (val.slice(-2) == "in") {

      return Number(parseInt(val)) >= 59 && Number(parseInt(val)) <= 76;
    }

    return false;
  }

  export function isHclValid(val: string) {
    var re = /[0-9A-Fa-f]{6}/g;
    if (val.substring(0,1) == "#" &&
        val.length == 7 &&
        re.test(val.substring(1,7)) ) {
      return true;
    }
    return false;
  }

  export function isEclValid(val: string) {
    let validColours = [`amb`, `blu`, `brn`, `gry`, `grn`, `hzl`, `oth`];

    for (let i = 0; i < validColours.length; i++) {
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
