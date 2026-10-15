const origines = ["Brazillië", "Ethiopie", "colombia"];
origines.push("Kenia");
origines.unshift("Peru");
origines.splice(2, 1);
console.log(origines.join(","));
console.log(`aantal origines in de lijst ${origines.length}`);
if (origines.includes("Ethiopië")){
    console.log("Ethopië staat nog in de lijst")
}else { 
        console.log("Ethiopië staat niet meer in de lijst.")
    }
}
console.log(`colombia staat op index: ${origines.indexOf("colombia")}`);
