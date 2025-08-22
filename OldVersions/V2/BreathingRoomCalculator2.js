function breathingRoom() {
    var TaxIn = parseInt(document.getElementById("TaxIn").value);
    var TaxOut = (100-TaxIn)/100;
    var Hours = parseInt(document.getElementById("Hours").value);
    var Weeks = parseInt(document.getElementById("Weeks").value);
    var Bills = parseInt(document.getElementById("Bills").value);
    var Pay = parseInt(document.getElementById("Pay").value);
    var BreathingRoom = (Weeks*(Hours*(TaxOut*Pay)))-Bills;
    var YourBreathingRoom = "";
    if(BreathingRoom>0) {
    BreathingRoom = BreathingRoom.toFixed(2);
    YourBreathingRoom = "Your will have $"+BreathingRoom+" extra each month";
    }else if(BreathingRoom==0) {
    YourBreathingRoom = "You will have no money left over";
    }else if(BreathingRoom<0) {
    BreathingRoom = BreathingRoom*-1;
    BreathingRoom = BreathingRoom.toFixed(2);
    YourBreathingRoom = "You will be $"+BreathingRoom+" short for the month";
    }
    display_breathingroom.innerHTML = YourBreathingRoom;
}