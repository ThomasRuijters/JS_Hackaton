export class ConveyorBelt{
    speed;
    length;
    packageList = [];
    divObj;

    constructor(length) {
        this.length =length;
    }

    setDivObject(div) {
      this.divObj = div;
    }

    addPackage(packageBox){
        this.packageList.push(packageBox);
    }

    removePackage(packageBox) {
        for (var i = 0; i < this.packageList.length; i++) {
          if (this.packageList[i].name === packageBox.name) {
            this.packageList.splice(i, 1);
            break;
          }
        }
      }
}