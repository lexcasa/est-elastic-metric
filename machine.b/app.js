"use strict";

// MODERN VIEW
let opSpace 	= /\+|\-|\*|\/|return/g
let clearFunct 	= /\n|\t/g

let dimFull = (phi) => {
	let ind = 0;
	let strFunctions = [];
	
	let dim_p_phi 		= 0;
	let dim_p_phi_star 	= 0;
	let dim_m 			= 0;

	for (let key in phi){
		dim_p_phi++;

		if(typeof phi[key] !== 'function'){
			dim_p_phi_star++;
		} else {
			let strFn = phi[key]
							.toString()
							.replace(clearFunct, '');

			strFunctions.push( strFn )
		}
	}

	// PROC SIZE M
	strFunctions.map( (m) => {
		dim_m = dim_m + (m.match(opSpace) ? m.match(opSpace).length : 0)
	})

	return {dim_p_phi: dim_p_phi,  dim_p_phi_star: dim_p_phi_star, dim_m: dim_m}
}

// CLASIC
let phi = {
	nombre: "Alex",
	apellido: "Casadevall",
	changePhi: () => {
		phi = {
			nombre: "Alex"
		}
		return true;
	},
	fullName: () => {
		return phi.nombre + phi.apellido;
	}
}

let phi2 = {
	nombre: "Alex",
	apellido: "Casadevall",
	changePhi: () => {
		phi2.addChar = () => {
			return phi2.nombre + "b";
		}
		return true;
	},
	fullName: () => {
		return phi.nombre + phi.apellido;
	}
}


console.log("phi std:", 	dimFull(phi));
console.log("transition:", 	phi.changePhi());
console.log("phi mounted:", dimFull(phi));

console.log("---------------");

console.log("phi2 std:", 	 dimFull(phi2));
console.log("transition:", 	 phi2.changePhi());
console.log("phi2 mounted:", dimFull(phi2));

