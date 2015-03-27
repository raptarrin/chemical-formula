$(function(){

    var PeriodicTableDataSource = {
        "H" : {
            mass: 1.00794,
            name: "Hydrogen"
        },
        "He": {
            mass: 4.0026,
            name: "Helium"
        },
        "Li": {
            mass: 6.941,
            name: "Lithium"
        },
        "Be": {
            mass: 9.0122,
            name: "Beryllium"
        },
        "B": {
            mass: 10.811,
            name: "Boron"
        },
        "C": {
            mass: 12.0107,
            name: "Carbon"
        },
        "N": {
            mass: 14.0067,
            name: "Nitrogen"
        },
        "O": {
            mass: 15.9994,
            name: "Oxygen"
        },
        "F": {
            mass: 18.9984,
            name: "Fluorine"
        },
        "Ne": {
            mass: 20.1797,
            name: "Neon"
        },
        "Na": {
            mass: 22.9897,
            name: "Sodium"
        },
        "Mg": {
            mass: 24.305,
            name: "Magnesium"
        },
        "Al": {
            mass: 26.9815,
            name: "Aluminum"
        },
        "Si": {
            mass: 28.0855,
            name: "Silicon"
        },
        "P": {
            mass: 30.9738,
            name: "Phosphorus"
        },
        "S": {
            mass: 32.065,
            name: "Sulphur"
        },
        "Cl": {
            mass: 35.453,
            name: "Chlorine"
        },
        "Ar": {
            mass: 39.948,
            name: "Argon"
        },
        "K": {
            mass: 39.0983,
            name: "Potassium"
        },
        "Ca": {
            mass: 40.078,
            name: "Calcium"
        },
        "Sc": {
            mass: 44.9559,
            name: "Scandium"
        },
        "Ti": {
            mass: 47.867,
            name: "Titanium"
        },
        "V": {
            mass: 50.9415,
            name: "Vanadium"
        },
        "Cr": {
            mass: 51.9961,
            name: "Chromium"
        },
        "Mn": {
            mass: 54.938,
            name: "Manganese"
        },
        "Fe": {
            mass: 55.845,
            name: "Iron"
        },
        "Co": {
            mass: 58.9332,
            name: "Cobalt"
        },
        "Ni": {
            mass: 58.6934,
            name: "Nickel"
        },
        "Cu": {
            mass: 63.546,
            name: "Copper"
        },
        "Zn": {
            mass: 65.39,
            name: "Zinc"
        },
        "Ga": {
            mass: 69.723,
            name: "Gallium"
        },
        "Ge": {
            mass: 72.64,
            name: "Germanium"
        },
        "As": {
            mass: 74.9216,
            name: "Arsenic"
        },
        "Se": {
            mass: 78.96,
            name: "Selenium"
        },
        "Br": {
            mass: 79.904,
            name: "Bromine"
        },
        "Kr": {
            mass: 83.8,
            name: "Krypton"
        },
        "Rb": {
            mass: 85.4678,
            name: "Rubidium"
        },
        "Sr": {
            mass: 87.62,
            name: "Strontium"
        },
        "Y": {
            mass: 88.9059,
            name: "Yttrium"
        },
        "Zr": {
            mass: 91.224,
            name: "Zirconium"
        },
        "Nb": {
            mass: 92.9064,
            name: "Niobium"
        },
        "Mo": {
            mass: 95.94,
            name: "Molybdenum"
        },
        "Tc": {
            mass: 98,
            name: "Technetium"
        },
        "Ru": {
            mass: 101.07,
            name: "Ruthenium"
        },
        "Rh": {
            mass: 102.9055,
            name: "Rhodium"
        },
        "Pd": {
            mass: 106.42,
            name: "Palladium"
        },
        "Ag": {
            mass: 107.8682,
            name: "Silver"
        },
        "Cd": {
            mass: 112.411,
            name: "Cadmium"
        },
        "In": {
            mass: 114.818,
            name: "Indium"
        },
        "Sn": {
            mass: 118.71,
            name: "Tin"
        },
        "Sb": {
            mass: 121.76,
            name: ""
        },
        "Te": {
            mass: 127.6,
            name: ""
        },
        "I": {
            mass: 126.9045,
            name: ""
        },
        "Xe": {
            mass: 131.293,
            name: "Xenon"
        },
        "Cs": {
            mass: 132.9055,
            name: ""
        },
        "Ba": {
            mass: 137.327,
            name: "Barium"
        },
        "La": {
            mass: 138.9055,
            name: "Lanthanum"
        },
        "Ce" : {
            mass: 140.116,
            name: ""
        },
        "Pr": {
            mass: 140.9077,
            name: ""
        },
        "Nd" : {
            mass: 144.24,
            name: ""
        },
        "Pm" : {
            mass: 145,
            name: ""
        },
        "Sm": {
            mass: 150.36,
            name: "Samarium"
        },
        "Eu": {
            mass: 151.964,
            name: "Europium"
        },
        "Gd": {
            mass: 157.25,
            name: ""
        },
        "Tb": {
            mass: 158.9253,
            name: ""
        },
        "Dy": {
            mass: 162.5,
            name: ""
        },
        "Ho": {
            mass: 164.9303,
            name: ""
        },
        "Er": {
            mass: 167.259,
            name: ""
        },
        "Tm": {
            mass: 168.9342,
            name: ""
        },
        "Yb": {
            mass: 173.04,
            name: ""
        },
        "Lu": {
            mass: 174.967,
            name: ""
        },
        "Hf": {
            mass: 178.49,
            name: "Hafnium"
        },
        "Ta": {
            mass: 180.9479,
            name: ""
        },
        "W": {
            mass: 183.84,
            name: ""
        },
        "Re": {
            mass: 186.207,
            name: ""
        },
        "Os": {
            mass: 190.23,
            name: "Osmium"
        },
        "Ir": {
            mass: 192.217,
            name: ""
        },
        "Pt": {
            mass: 195.078,
            name: ""
        },
        "Au": {
            mass: 196.9665,
            name: "Gold"
        },
        "Hg" : {
            mass: 200.59,
            name: "Mercury"
        },
        "Tl": {
            mass: 204.3833,
            name: ""
        },
        "Pb": {
            mass: 207.2,
            name: "Lead"
        },
        "Bi": {
            mass: 208.9804,
            name: "Bismuth"
        },
        "Po": {
            mass: 209,
            name: "Polonium"
        },
        "At": {
            mass: 210,
            name: ""
        },
        "Rn": {
            mass: 222,
            name: ""
        },
        "Fr": {
            mass: 223,
            name: "Francium"
        },
        "Ra": {
            mass: 226,
            name: "Radium"
        },
        "Ac": {
            mass: 227,
            name: ""
        },
        "Th": {
            mass: 232.0381,
            name: ""
        },
        "Pa": {
            mass: 231.0359,
            name: ""
        },
        "U": {
            mass: 238.0289,
            name: "Uranium"
        },
        "Np": {
            mass: 237,
            name: ""
        },
        "Pu": {
            mass: 244,
            name: ""
        },
        "Am": {
            mass: 243,
            name:""
        }
    };

    var chemCalcInstance;

// base calculator structure
    var ChemistryCalculator = {
        init: function(e){},
        PeriodicTable : PeriodicTableDataSource,
        Formula : {
            Input: [],
            Parsed: [],
            Paren: []
        },
        parseFormulaInput: function () {
            var badData=false;
            var a = this.Formula.Input;
            this.Formula.Parsed = [];
            this.Formula.Paren = [];
            for (var i=0; i < a.length; i++){
                var c = a[i];
                var n = a[i+1];
                var f = a[i +2];
                var f1 = a[i +3];
                var f2 = a[i + 4];
                var o = a.indexOf('(');
                var o1 = a.indexOf(')');

                if (a.indexOf('(')>-1) {
                    if (a.indexOf(')')>-1) {
                        var parencountWith = a.slice(o, o1+2);
                        parenlength = parencountWith.length;
                        var form = a.splice(o, parenlength);
                        var p = form.indexOf('(');
                        var p1 = form.indexOf(')');
                        form1 = form.slice(p+1, p1);
                        var parencount1 = form.slice(p1 + 1); //this is the number after the parentheses
                        console.log(parencount1);
                        if (!isNaN(parencount1)) {
                        for (var b=0; b < form1.length; b++) {
                            var curr = form1[b];
                            var next = form1[b+1];
                            var future = form1[b+2];
                            var future1 = form1[b+3];
                            if (next) {

                                if (isNaN(parseInt(next)) && curr != '(') {// if n is a letter, is it upper or lowercase?
                                    if (next === next.toLowerCase()) {
                                        if (!isNaN(future)) { //Al3
                                            if (!isNaN(future1)) { //Al22
                                                    inVal = future + future1;
                                                    symbolVal = curr + next;
                                                    b++;
                                                    b++
                                                }
                                            if (isNaN(future1)) {
                                                //Al2
                                                inVal = future;
                                                symbolVal = curr + next;
                                                b++}
                                        }
                                        if (isNaN(future)) {
                                            //SiAl
                                            inVal = 1;
                                            symbolVal = curr + next;

                                        }b++;
                                          //this has to be here or Al2 has dupes
                                    }
                                    if (next === next.toUpperCase()) {
                                        //such as OH
                                        inVal = 1;
                                        symbolVal = curr;

                                    }

                                }

                                if (!isNaN(next)) { //if n is a number
                                    if (!isNaN(future)) {//example O22
                                        if (!isNaN(future1)) {//O333
                                            inVal = next + future + future1;
                                            inVal = curr;
                                            b++;
                                            b++;
                                        } if (isNaN(future1)) { //O33H
                                            inVal = next + future;
                                            symbolVal = curr;
                                            b++;
                                            b++}
                                    } if (isNaN(future)) {//O2K
                                        inVal = next;
                                        symbolVal = curr;
                                        b++
                                    }
                                } }
                            if (!next) {
                                if (isNaN(curr)) {
                                    inVal = 1;
                                    symbolVal = curr;
                                }}
                            countVal = inVal * parencount1;
                            this.Formula.Parsed.push({symbol: symbolVal,count: countVal});

                                console.log(countVal,symbolVal);
                             //else {badData=true;break}

                        }} else {alert("Please only include parenthesis when there is a number outside. For example: Citric Acid: C3H4OH(COOH)3.")}
                    } else {badData=true;break}
                }

                 if (n) {

                    if (isNaN(parseInt(n)) && c!= '(') { //if n is a letter
                                if (n === n.toLowerCase()) {
                                    if (!isNaN(f)) {
                                        //if a number after second letter of symbol
                                        if (!isNaN(f1)) {//Al22
                                            if (!isNaN(f2)) {
                                                countVal = f + f1 + f2;
                                                symbolVal = c + n;
                                                i++;
                                                i++;
                                                i++
                                            } else {
                                            //something like Al22
                                            countVal = f + f1;
                                            symbolVal = c + n;
                                            i++;
                                            i++
                                        }}
                                        else {
                                            //Al2
                                            countVal = f;
                                            symbolVal = c + n;
                                            i++}
                                    }
                                    if (isNaN(f)) {
                                        //SiAl
                                        countVal = 1;
                                        symbolVal = c + n;
                                    }
                                    i++;  //this has to be here or Al2 has dupes
                                }
                                if (n === n.toUpperCase()) {
                                    //such as OH
                                    countVal = 1;
                                    symbolVal = c;
                                    console.log(countVal,symbolVal);

                                }


                    }

                    if (!isNaN(n) && c != ')' && c != '(') { //if n is a number
                        if (!isNaN(f)) {//example O22
                            if (!isNaN(f1)) {//O999
                                countVal = n + f + f1;
                                symbolVal = c;
                                i++;
                                i++;
                                i++
                            } if (isNaN(f1)) { //O22H...
                            countVal = n + f;
                            symbolVal = c;
                            i++;
                            i++}
                        } if (isNaN(f)) {//O2
                            countVal = n;
                            symbolVal = c;
                            console.log(countVal,symbolVal);
                            i++
                        }

                    }
                } if (!n) {
                    if (isNaN(c) && c != '(') {
                    countVal = 1;
                    symbolVal = c;
                     console.log(countVal,symbolVal)
                }}
                this.Formula.Parsed.push({symbol: symbolVal,count: countVal});
            }

            console.log(this.Formula.Parsed);
            if (badData==true) {alert("Formula did not parse correctly")}
        },



        lookupElementMass : function(el) {
            // return the mass or 0
            if (this.PeriodicTable[el]) {
                return this.PeriodicTable[el].mass
            } else {
                return 0;
            }
        },
        calculateElementQuantityMass : function(el, qty) {
            // todo: maybe need to add sanity check that qty is numeric
            return (this.lookupElementMass(el) * qty) || 0
        },
        lookupAllFormulaElements: function(){
            var qtyMass = 0;
            for (var i=0; i < this.Formula.Parsed.length; i++){
                //console.log(qtyMass);
                // var MM = this.lookupElementMass(this.Formula.Parsed[i].symbol);
                // var nbr = this.Formula.Parsed[i].count;
                qtyMass += this.calculateElementQuantityMass(this.Formula.Parsed[i].symbol, this.Formula.Parsed[i].count);
            }
            //console.log(qtyMass);
            return qtyMass;
        },
        gramsToOunce: function (qtyGrams) {
            return (qtyGrams / 28.34);
        },
        gramsToOunce1: function() {
            return this.gramsToOunce(this.lookupAllFormulaElements());
        },
        userResultGrams: function() {
            var userQty = document.getElementById('qtyOfMoles').value;
            return (userQty * this.lookupAllFormulaElements());
        },
        userResultOZ: function() {
            return this.gramsToOunce(this.userResultGrams());
        },

writeOut: function () {

        var rowCount = this.Formula.Parsed.length;
    console.log(this.Formula.Parsed);
        console.log(rowCount);
        var cellCount = 4;

        var tblDuh = "<table border='1'>";

        $('#OutputTable').html('');

        for(var i=0;i < rowCount; i++){
            tblDuh += '<tr>'

                tblDuh += '<td>' + this.Formula.Parsed[i].symbol + '</td>'
            tblDuh += '<td>' + this.Formula.Parsed[i].count + '</td>'

            tblDuh += '</tr>'

        }

        tblDuh += '</table>'
        $('#OutputTable').html(tblDuh);

}

    // writeOut: function ()  {
    //    var numCols = 5
    //    var numHeadRows = 2
    //    var numFootRows = 1
    //    var numSignificance = 2;
    //    var numRows = document.getElementById("outputTable").rows.length - numHeadRows - numFootRows;
    //
    //
    //
    //        for(iN=0; iN<(numRows); iN++) {
    //            document.getElementById('outputTable').deleteRow(numHeadRows)
    //        }
    //
    //        for(var i=0; i<=this.Formula.Parsed.length; i++) {
    //            var newRow = document.getElementById('outputTable').insertRow(i+numHeadRows)
    //            for(var j=0; j<this.Formula.Parsed.length; j++) {
    //                var newCell = newRow.insertCell(j)
    //                newCell.style.textAlign = "center"
    //                newCell.style.height = "22px"
    //
    //                if (j==0) {newCell.innerText = this.Formula.Parsed[i].count}
    //                else if (j==1) {newCell.innerText = this.Formula.Parsed[i].symbol}
    //                else if (j==2) {newCell.innerText = this.Formula.Parsed[i].mass}
    //                else if (j==3) {newCell.innerText = this.Formula.Parsed[i].mass}
    //                else if (j==4) {newCell.innerText = this.Formula.Parsed[i].mass}
    //                else {alert("This page operates incorrect. Please help Lenntech and report the failure.")}
    //            }
    //        }
    //
    //
    //    badData=false
    //
    //}
};

    $('#chemcalc-calculate-btn').on('click', function(){
        // make sure we have an instance of our Chem Calculator
        //if(!chemCalcInstance instanceof ChemistryCalculator)
        //    chemCalcInstance = new ChemistryCalculator();
        chemCalcInstance = ChemistryCalculator;
        chemCalcInstance.Formula.Input = $('#chemcalc-input-formula').val().split('');
//this is where it sets the value
        chemCalcInstance.parseFormulaInput();
        chemCalcInstance.writeOut();

        $('.result').html(chemCalcInstance.lookupAllFormulaElements());
        $('.resultOZ').html(chemCalcInstance.gramsToOunce1());
        $('.userResultGram').html(chemCalcInstance.userResultGrams());
        $('.userResultOZ').html(chemCalcInstance.userResultOZ());
        $('#moles').html(document.getElementById('qtyOfMoles').value);
        $('.compoundName').html(document.getElementById('chemcalc-input-formula').value);
        chemCalcInstance.calculateElementQuantityMass();
        // $('#feedback').html(chemCalcInstance.lookupElementMass('H'));
    });




});