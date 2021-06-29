var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.3817186705009146,
        "pitch": 0.06780014384520072,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 2.3817185375113903,
          "pitch": 0.011380223892997421,
          "rotation": 0,
          "target": "1-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lounge",
      "name": "Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.7544689387043775,
        "pitch": 0.3243744746277528,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -1.1810731517038082,
          "pitch": -0.039826786856298924,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -0.9744692814143683,
          "pitch": -0.041804052733315444,
          "rotation": 1.5707963267948966,
          "target": "2-toilet"
        },
        {
          "yaw": 1.6238291191787084,
          "pitch": 0.04779026814000176,
          "rotation": 6.283185307179586,
          "target": "3-kitchen"
        },
        {
          "yaw": 0.1457041767216012,
          "pitch": -0.37544630564454806,
          "rotation": 0.7853981633974483,
          "target": "6-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-toilet",
      "name": "Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.15259800645537425,
        "pitch": 0.23853103851701185,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -0.20910273598908447,
          "pitch": 0.015284172978162758,
          "rotation": 4.71238898038469,
          "target": "1-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.1566885447979605,
        "pitch": 0.09594411262331093,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.1776439765058289,
          "pitch": 0.15726803647810783,
          "rotation": 10.995574287564278,
          "target": "1-lounge"
        },
        {
          "yaw": 3.0376485113459895,
          "pitch": 0.15322331624416563,
          "rotation": 1.5707963267948966,
          "target": "4-conservatory"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-conservatory",
      "name": "Conservatory",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.567143773319536,
        "pitch": 0.04042547843173239,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -2.722594794147188,
          "pitch": 0.12677605455247765,
          "rotation": 0,
          "target": "5-garden"
        },
        {
          "yaw": 1.2015618180516636,
          "pitch": 0.02702560467196946,
          "rotation": 0,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-garden",
      "name": "Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.022122558376917567,
        "pitch": -0.04247278139532895,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -0.8959337898713926,
          "pitch": 0.04410384227975861,
          "rotation": 4.71238898038469,
          "target": "4-conservatory"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.5967452746577777,
        "pitch": 0.23717438528368184,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.704675998917173,
          "pitch": 0.16506658983116296,
          "rotation": 0.7853981633974483,
          "target": "7-master-bedroom"
        },
        {
          "yaw": -2.5424778534385446,
          "pitch": 0.08664810310859927,
          "rotation": 4.71238898038469,
          "target": "8-bathroom"
        },
        {
          "yaw": -2.024273440074939,
          "pitch": -0.0016254768461614333,
          "rotation": 4.71238898038469,
          "target": "9-guest-room"
        },
        {
          "yaw": -1.7495965492288228,
          "pitch": -0.05082151159843029,
          "rotation": 0,
          "target": "10-spare-room"
        },
        {
          "yaw": -0.8809897053661988,
          "pitch": 0.2625801372019083,
          "rotation": 16.493361431346422,
          "target": "1-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.362497687754221,
        "pitch": 0.0546191400090148,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 2.452492874555811,
          "pitch": 0.06796066298162806,
          "rotation": 10.995574287564278,
          "target": "6-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.929732011045658,
        "pitch": 0.061276490562558905,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -2.8274595265170888,
          "pitch": 0.04323378851244719,
          "rotation": 0,
          "target": "6-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-guest-room",
      "name": "Guest Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6085867176819342,
        "pitch": 0.15981531645687497,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.7938775182616888,
          "pitch": 0.025450328855434634,
          "rotation": 1.5707963267948966,
          "target": "6-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-spare-room",
      "name": "Spare room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.8960077837294698,
        "pitch": 0.10848265078902486,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -3.100491712098755,
          "pitch": 0.06569421818811705,
          "rotation": 0,
          "target": "6-corridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
