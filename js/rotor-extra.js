var rotor = (...rotors) => {
    console.log(rotors);
//    var $picPosition = 1;
    for (let i=0; i<rotors.length; i++) {
        console.log(rotors[i]);
        let startOver = i + 1;
        if (startOver === rotors.length) {
            var nextPic = "main#rotor_1";
        }
        else if (startOver < rotors.length) {
            var nextPic = "main.rotor:nth-child(" + startOver + ")";
        }
        //  Now, use nextPic to specify which
    }
}

var picInit = () => {
    console.log('picInit() running');
    var hideSelector = "div#rotor:not(:first-child)";
//    $(hideSelector).hide();
    $('div#rotor_1').toggle();
}
