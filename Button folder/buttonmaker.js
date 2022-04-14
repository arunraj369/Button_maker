function apply() {
    let bgclr = document.getElementById("bgclr");
    let bgclrvalue = bgclr.value;


    let fnclr = document.getElementById("fnclr");
    let fnclrvalue = fnclr.value;

    let fnsze = document.getElementById("fnsze");
    let fnszevalue = fnsze.value;

    let fnweight = document.getElementById("fnweight");
    let fnweightvalue = fnweight.value;

    let pad = document.getElementById("pad");
    let padvalue = pad.value;

    let bdradius = document.getElementById("bdradius");
    let bdradiusvalue = bdradius.value;

    let custbutton = document.getElementById("custbutton")
    



    custbutton.style.backgroundColor = bgclrvalue;
    custbutton.style.color = fnclrvalue;
    custbutton.style.fontSize = fnweightvalue;
    custbutton.style.fontWeight = fnweightvalue;
    custbutton.style.padding = padvalue;
    custbutton.style.borderRadius = bdradiusvalue;

}