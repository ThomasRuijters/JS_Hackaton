export class ConveyorBelt{
    speed;
    length;
    packageList;

    constructor(length) {
        this.length =length;
    }

    addPackage(package){
        this.packageList.push(package);
    }

    removePackage(package) {
        for (var i = 0; i < this.packageList.length; i++) {
          if (this.packageList[i].name === package.name) {
            this.packageList.splice(i, 1);
            break;
          }
        }
      }
}