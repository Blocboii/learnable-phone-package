class Telsphones {constructor() {this.phoneNo = new Set(); this.observers = new Set()}
    
addObserver(observer) {this.observers.add(observer);}
  
removeObserver(observer) {this.observers.delete(observer);}
  
addPhoneNo(phoneNo) {this.phoneNo.add(phoneNo);}
  
removePhoneNo(phoneNo) {this.phoneNo.delete(phoneNo);}
  
dialPhoneNo(phoneNo) {if (this.phoneNo.has(phoneNo)) {this.observers.forEach((observer) => {observer.notify(phoneNo)});} else {console.log("Phone No is available");}}}
  
class DisplayObserver {notify(phoneNo) {console.log(phoneNo);}}
  
class DialObserver {notify(phoneNo) {console.log(`Now Dialing ${phoneNo}`);}}
  
const myTelsphones = new Telsphones();

const dialObserver = new DialObserver();

const displayObserver = new DisplayObserver();

myTelsphones.addObserver(dialObserver);  

myTelsphones.addObserver(displayObserver);

myTelsphones.addPhoneNo("08149972933");
  
myTelsphones.dialPhoneNo("08149972933");

console.log(myTelsphones.phoneNo);