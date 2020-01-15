"use strict";

// CLASIC VIEW
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
	fullName: (x, y) => {
		let full = x + " " + y
		return full;
	}
}

// MODERN PHI
let phi2 = {
	nombre: "Alex",
	apellido: "Casadevall",
	fullName: () => {
		let full = phi.nombre + " " + phi.apellido
		return full;
	}
}

console.log("phi clasic: ", dimFull(phi));
console.log("phi modern: ", dimFull(phi2));

