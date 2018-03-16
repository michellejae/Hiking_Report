let rainfall = {}
// console.log('smokies')

const rainReport = {
  "Nuuanu":
    {
      "name": "Nuuanu Upper",
      "stationId": "NUUH1",
      "3-HR": 0.22,
      "6-HR": 0.63,
      "12-HR": 1.10,
      "24-HR": 2.10
    },
  "Manoa":  
    {
      "name": "Manoa Lyon Arboretum",
      "stationId": "MNLH1",
      "3-HR": 0.13,
      "6-HR": 0.72,
      "12-HR": 1.30,
      "24-HR": 2.63
    },
  
  "Stephens":
    {
      "name": "St. Stephens",
      "stationId": "STVH1",
      "3-HR": 0.01,
      "6-HR": 0.05,
      "12-HR": 0.27,
      "24-HR": 0.33
    },
  "Maunawili": 
    {
      "name": "Maunawili",
      "stationId": "MAUH1",
      "3-HR": 0.00,
      "6-HR": 0.16,
      "12-HR": 0.48,
      "24-HR": 0.66
    },
  "Waianae":
    {
      "name": "Waianae",
      "stationId": "WAIH1",
      "3-HR": 0.00,
      "6-HR": 0.00,
      "12-HR": 0.00,
      "24-HR": 0.00
    }
};

const rainGaugeStations = {
  "Nuuanu":
    {
      "name": "Nuuanu Upper",
      "stationId": "NUUH1",
      "coordinates": [22.14806, -159.64472]
    },
  "Manoa": 
    {
      "name": "Manoa Lyon Arboretum",
      "stationId": "MNLH1",
      "coordinates": [21.333088, -157.801516]
    },
  "Stephens": 
    {
      "name": "St. Stephens",
      "stationId": "STVH1",
      "coordinates": [21.42111, -158.13528]
    },
  "Maunawili":
    {
      "name": "Maunawili",
      "stationId": "MAUH1",
      "coordinates": [21.35111, -157.76667]
    },
  "Waianae": 
    {
      "name": "Waianae",
      "stationId": "WAIH1",
      "coordinates": [21.45694, -158.18028]
    }
};

// console.log('raingaugename',rainGaugeStations.Nuuanu.name)

const rainStationAndTrail = {
  "POAH1" : {
    1: "Mokuleia Forest Reserve Access Road",
    2: "Mokuleia Trail",
    3: "Kealia Trail",
    5: "Kealia Access Road",
    6: "Kaena Pt. Rd. (Mokuleia)",
    7: "Kuaokala Trail",
    8: "Kaena Pt. Rd. (Waianae)",
    9: "Kaena Point Trail"
  },

  "KTAH1" : {
    1: "Kaunala Trail (West)"
  },
  
  "PACH1" : {
    1: "Upper Waimano Trail",
    2: "Waimano Trail Access",
    3: "Manana Trail"
  },

  "OFRH1" : { 
    1: "Poamoho RidgeTrail",
    2: "Schofield-Waikane Trail",
  },

  "PNSH1" : {
    1: "Hauula Loop Trail",
    2: "Maakua Ridge Trail"
  },
 
  "KNRH1" : {
    1: "Kapa'ele'ele Trail",
    2: "Nakoa Trail",

  },

  "MOAH1" : {
    1: "Kamananui Valley Road",
    2: "Aiea Loop Trail",
    3: "Kulanaahane Trail",

  },

  "PFSH1" : {
    1: "Waahila Ridge Trail",
  },

  "MAUH1" : {
    1: "Maunawili Trail",
    2: "Maunawili Trail Pali Access",
    3: "Maunawili Falls Trail",
  },

  "NIUH1" : {
    1: "Kuliouou Ridge Trail",
    2: "Hawailoa Ridge Trail",
  },

  "WMLH1" : {
    1: "Maunawili-Waimanalo Access Road",
    2: "Maunawili Ditch Trail"
  },

  "KMHH1" : {
    1: "Makapuu Lighthouse Road",

  },

  "MNLH1" : { 
    1: "Puu Pia Trail",
    2: "Aihualama Trail",
    3: "Nuuanu Trail",
    4: "Pauoa Flats Trail",
    5: "Puu Ohia Trail",
    6: "Moleka Trail",
    7: "Manoa Cliff Trail",
    8: "Kalawahine Trail",
    9: "Judd Memorial Loop Trail",
    10: "Makiki Valley Trail",
    11: "Tantalus Arboretum and Sculpture Trail",
    12: "Maunalaha Trail"
  }

}

module.exports = {
  rainReport,
  rainGaugeStations,
  rainStationAndTrail
}