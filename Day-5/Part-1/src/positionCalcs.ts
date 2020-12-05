export function rowCalc(val: string) {
  let row: string = val.substring(0, 6);
  let position: number[] = [0, 127];
  let lastPicked: number = 0;
  for (let i = 0; i < row.length; i++) {
    if (row.charAt(i) == "F") {
      position[1] = position[1] - Math.floor((position[1] - position[0]) / 2);
      lastPicked = position[1];
    }
    if (row.charAt(i) == "B") {
      position[0] = position[0] + Math.ceil((position[1] - position[0]) / 2);
      lastPicked = position[0];
    }
  }
  return lastPicked;
}
//TODO: LOOK AT HOW COL IS PICKED
export function colCalc(val: string) {
    let col: string = val.slice(-3);
    let position: number[] = [0, 7];
    let lastPicked: number = 0;
    for (let i = 0; i < col.length; i++) {
      if (col.charAt(i) == "L") {
        position[1] = position[1] - Math.floor((position[1] - position[0]) / 2);
        lastPicked = position[1]
ß
      }
      if (col.charAt(i) == "R") {
        position[0] = position[0] + Math.ceil((position[1] - position[0]) / 2);
        lastPicked = position[0];
        if(position[1] >= position[0]){
            lastPicked  = position[1]
        };
      }
    }
    return lastPicked;
  }
