export function rowCalc(val: string) {
  let row: string = val.substring(0, 7);
  let position: number[] = [0, 127];

  for (let i = 0; i < row.length; i++) {
    if (row.charAt(i) == "F") {
      let mid = Math.floor((position[1] + position[0]) / 2);
      position[1] = mid - 1;
    }
    if (row.charAt(i) == "B") {
      let mid = Math.floor((position[1] + position[0]) / 2);
      position[0] = mid + 1;
    }
  }
  console.log( "Row: ", position[0])
  return position[0];
}

export function colCalc(val: string) {
  let col: string = val.slice(-3);
  let position: number[] = [0, 7];

  for (let i = 0; i < col.length; i++) {
    if (col.charAt(i) == "L") {
      let mid = Math.floor((position[1] + position[0]) / 2);
      position[1] = mid - 1;
    }
    if (col.charAt(i) == "R") {
      let mid = Math.floor((position[1] + position[0]) / 2);
      position[0] = mid + 1;
    }
  }
console.log( "col: ", position[0])
  return position[0];
}

export function calculatePassIds(Data: string[]) {
  let allIds: number[] = [];
  for (let i = 0; i < Data.length; i++) {
    let row: number = rowCalc(Data[i]);
    let col: number = colCalc(Data[i]);

    let passNumber: number = row * 8 + col;

    if (row !== 0 && row !== 127) {
      allIds.push(passNumber);
    }
  }
  return allIds;
}
