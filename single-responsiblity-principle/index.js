import { display } from "./display";
/*  Single Responsibility Principle amader bole j ekta class ekta function er activity handle korbe  */
class Shop {
    constructor(item) {
        this.item = item;
        this.currentItems = 0;
    }

    trackItems(count) {
        this.currentItems += count;
        if (this.currentItems > this.item) {
            display("Maximum item sxceeded");
        }
    }
    /* Display(){
         console.log("Maximum item sxceeded"); //Eta Avoid korte hole arekta file e etar program kore eta k import korte hobe .
     }*/
};

const TanvirStore = new Shop(500);

TanvirStore.trackItems(50);
TanvirStore.trackItems(200);
TanvirStore.trackItems(255);