function bankRob() {
  const heroes = ["police", "military", "swat"]; 
  function cryForHelp() {
    for (let hero of heroes) {
      function anotherIn() {
        console.log("please help us!", hero.toUpperCase());
      }
      anotherIn();
    }
  }
  cryForHelp();
}

bankRob();