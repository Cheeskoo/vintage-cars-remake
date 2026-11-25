// Catalogo de autos clasicos. Cada auto tiene una imagen principal (portada)
// y una galeria de fotos para el slider de la vista de detalle.
export const cars = [
  {
    "id": 1,
    "nombre": "Ford Model T",
    "marca": "Ford",
    "categoria": "Clásico Vintage",
    "precio": 25000,
    "disponible": true,
    "descripcion": "El pionero absoluto de la industria automotriz que transformó la producción en masa.",
    "imagen": "https://images.unsplash.com/photo-1628501285669-4f30aecaee0d?q=80&w=1279&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1915,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1628501285669-4f30aecaee0d?q=80&w=1279&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Model_T_Ford_Touring_Car_%2815180110626%29.jpg/1280px-Model_T_Ford_Touring_Car_%2815180110626%29.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Model_T_Ford_Touring_Car_(15180110626).jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Model_T_Ford_%2832464855%29.jpg/1280px-Model_T_Ford_%2832464855%29.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Model_T_Ford_(32464855).jpg"
      }
    ]
  },
  {
    "id": 2,
    "nombre": "Chevrolet Bel Air 1957",
    "marca": "Chevrolet",
    "categoria": "Clásico Americano",
    "precio": 45000,
    "disponible": true,
    "descripcion": "Gran icono del diseño norteamericano con sus imponentes y características aletas traseras.",
    "imagen": "https://images.unsplash.com/photo-1726587837158-b7a96475be99?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1957,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1726587837158-b7a96475be99?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Chevy_Bel_Air_in_the_Presidio_of_San_Francisco.jpg/1280px-Chevy_Bel_Air_in_the_Presidio_of_San_Francisco.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Chevy_Bel_Air_in_the_Presidio_of_San_Francisco.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/1957_Chevrolet_Bel_Air_4-Door_Sedan_1X7A2547.jpg/1280px-1957_Chevrolet_Bel_Air_4-Door_Sedan_1X7A2547.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1957_Chevrolet_Bel_Air_4-Door_Sedan_1X7A2547.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/1957_Chevrolet_Bel_Air_Sport_Coupe_P5200937.jpg/1280px-1957_Chevrolet_Bel_Air_Sport_Coupe_P5200937.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1957_Chevrolet_Bel_Air_Sport_Coupe_P5200937.jpg"
      }
    ]
  },
  {
    "id": 3,
    "nombre": "Volkswagen Beetle 1965",
    "marca": "Volkswagen",
    "categoria": "Económico Clásico",
    "precio": 12500,
    "disponible": false,
    "descripcion": "El legendario auto del pueblo equipado con su confiable y tradicional motor bóxer.",
    "imagen": "https://images.unsplash.com/photo-1621931379142-873a9075e7a2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1965,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1621931379142-873a9075e7a2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Volkswagen_Beetle_de_1965.jpg/1280px-Volkswagen_Beetle_de_1965.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Volkswagen_Beetle_de_1965.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/1965_Volkswagen_Beetle_%289553720141%29.jpg/1280px-1965_Volkswagen_Beetle_%289553720141%29.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1965_Volkswagen_Beetle_(9553720141).jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/1965_Volkswagen_Beetle_%2815330936202%29.jpg/1280px-1965_Volkswagen_Beetle_%2815330936202%29.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1965_Volkswagen_Beetle_(15330936202).jpg"
      }
    ]
  },
  {
    "id": 4,
    "nombre": "Ford Mustang Fastback 1967",
    "marca": "Ford",
    "categoria": "Muscle Car",
    "precio": 68000,
    "disponible": true,
    "descripcion": "Imponente potencia de motor V8 combinada con un estilo deportivo sumamente agresivo.",
    "imagen": "https://images.unsplash.com/photo-1725122756652-e64d2f5cbcfb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1967,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1725122756652-e64d2f5cbcfb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/1967_Ford_Mustang%2C_Blenheim_Classics_Auto_Show%2C_Blenheim%2C_Ontario%2C_2025-06-21_03.jpg/1280px-1967_Ford_Mustang%2C_Blenheim_Classics_Auto_Show%2C_Blenheim%2C_Ontario%2C_2025-06-21_03.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1967_Ford_Mustang%2C_Blenheim_Classics_Auto_Show%2C_Blenheim%2C_Ontario%2C_2025-06-21_03.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/1967_Ford_Mustang_289_V8_Fastback_Coupe.jpg/1280px-1967_Ford_Mustang_289_V8_Fastback_Coupe.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1967_Ford_Mustang_289_V8_Fastback_Coupe.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Ford-Mustang-Fastback-avant.jpg/1280px-Ford-Mustang-Fastback-avant.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Ford-Mustang-Fastback-avant.jpg"
      }
    ]
  },
  {
    "id": 5,
    "nombre": "Jaguar E-Type Series 1",
    "marca": "Jaguar",
    "categoria": "Deportivo Clásico",
    "precio": 115000,
    "disponible": true,
    "descripcion": "Una auténtica obra maestra de elegancia británica y un rendimiento de alta velocidad.",
    "imagen": "https://images.unsplash.com/photo-1655207297101-74aadf311205?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1961,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1655207297101-74aadf311205?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Jaguar_E-Type_Series_1_3.8_Litre_1961.jpg/1280px-Jaguar_E-Type_Series_1_3.8_Litre_1961.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Jaguar_E-Type_Series_1_3.8_Litre_1961.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Jaguar_E-Type_series_1_coup%C3%A9_1964.jpg/1280px-Jaguar_E-Type_series_1_coup%C3%A9_1964.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Jaguar_E-Type_series_1_coup%C3%A9_1964.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Jaguar_E-Type_Series_1_4.2_Litre_1967.jpg/1280px-Jaguar_E-Type_Series_1_4.2_Litre_1967.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Jaguar_E-Type_Series_1_4.2_Litre_1967.jpg"
      }
    ]
  },
  {
    "id": 6,
    "nombre": "Porsche 356 Speedster",
    "marca": "Porsche",
    "categoria": "Deportivo Clásico",
    "precio": 140000,
    "disponible": false,
    "descripcion": "Diseño aerodinámico atemporal combinado con una ligereza pura pensada para la pista.",
    "imagen": "https://images.unsplash.com/photo-1650913543096-46be6435ae35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1955,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1650913543096-46be6435ae35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Porsche_356_B_Classic-Gala_2021_1X7A0119.jpg/1280px-Porsche_356_B_Classic-Gala_2021_1X7A0119.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Porsche_356_B_Classic-Gala_2021_1X7A0119.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Porsche_356_Speedster_mit_Nardi-Lenkrad_%282009-08-07%29.jpg/1280px-Porsche_356_Speedster_mit_Nardi-Lenkrad_%282009-08-07%29.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Porsche_356_Speedster_mit_Nardi-Lenkrad_(2009-08-07).jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Porsche_356_A_Speedster_mit_Hardtop_%282011-08-13_Sp%29.JPG/1280px-Porsche_356_A_Speedster_mit_Hardtop_%282011-08-13_Sp%29.JPG",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Porsche_356_A_Speedster_mit_Hardtop_(2011-08-13_Sp).JPG"
      }
    ]
  },
  {
    "id": 7,
    "nombre": "Dodge Charger R/T 1969",
    "marca": "Dodge",
    "categoria": "Muscle Car",
    "precio": 75000,
    "disponible": true,
    "descripcion": "Leyenda pura de las pistas norteamericanas en las carreras de aceleración cuarto de milla.",
    "imagen": "https://images.unsplash.com/photo-1662667457078-d9ae6309f0c3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1969,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1662667457078-d9ae6309f0c3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/1969_Dodge_Charger_R-T%2C_front_right_%282022_Ellwood_City_Fall_Fest_%26_Car_Cruise%29.jpg/1280px-1969_Dodge_Charger_R-T%2C_front_right_%282022_Ellwood_City_Fall_Fest_%26_Car_Cruise%29.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1969_Dodge_Charger_R-T%2C_front_right_(2022_Ellwood_City_Fall_Fest_%26_Car_Cruise).jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/1969_Dodge_Charger_R-T%2C_rear_left_%282022_Ellwood_City_Fall_Fest_%26_Car_Cruise%29.jpg/1280px-1969_Dodge_Charger_R-T%2C_rear_left_%282022_Ellwood_City_Fall_Fest_%26_Car_Cruise%29.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1969_Dodge_Charger_R-T%2C_rear_left_(2022_Ellwood_City_Fall_Fest_%26_Car_Cruise).jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/1969_Dodge_Charger_R-T_%2817134446667%29.jpg/1280px-1969_Dodge_Charger_R-T_%2817134446667%29.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1969_Dodge_Charger_R-T_(17134446667).jpg"
      }
    ]
  },
  {
    "id": 8,
    "nombre": "Mercedes-Benz 300 SL Gullwing",
    "marca": "Mercedes-Benz",
    "categoria": "Colección Histórica",
    "precio": 350000,
    "disponible": false,
    "descripcion": "Superdeportivo icónico mundialmente famoso por sus famosas puertas tipo ala de gaviota.",
    "imagen": "https://images.unsplash.com/photo-1685548527781-5f737559203d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1955,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1685548527781-5f737559203d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Mercedes-Benz_W198_300_SL_Gullwing_Genf_2019_1Y7A4987.jpg/1280px-Mercedes-Benz_W198_300_SL_Gullwing_Genf_2019_1Y7A4987.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_W198_300_SL_Gullwing_Genf_2019_1Y7A4987.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Mercedes-Benz_W198_300_SL_Gullwing_Genf_2019_1Y7A5007.jpg/1280px-Mercedes-Benz_W198_300_SL_Gullwing_Genf_2019_1Y7A5007.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_W198_300_SL_Gullwing_Genf_2019_1Y7A5007.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Mercedes-Benz_W198_300_SL_Gullwing_Genf_2019_1Y7A5009.jpg/1280px-Mercedes-Benz_W198_300_SL_Gullwing_Genf_2019_1Y7A5009.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_W198_300_SL_Gullwing_Genf_2019_1Y7A5009.jpg"
      }
    ]
  },
  {
    "id": 9,
    "nombre": "Aston Martin DB5",
    "marca": "Aston Martin",
    "categoria": "Gran Turismo Clásico",
    "precio": 280000,
    "disponible": true,
    "descripcion": "El sofisticado, elegante y legendario automóvil preferido del célebre agente James Bond.",
    "imagen": "https://images.unsplash.com/photo-1614241927170-1f68a7f2ab3b?q=80&w=1048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1964,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1614241927170-1f68a7f2ab3b?q=80&w=1048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Aston_Martin_DB5_%28Skyfall%29.jpg/1280px-Aston_Martin_DB5_%28Skyfall%29.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Aston_Martin_DB5_(Skyfall).jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Aston_Martin%2C_Techno-Classica_2018%2C_Essen_%28IMG_9411%29.jpg/1280px-Aston_Martin%2C_Techno-Classica_2018%2C_Essen_%28IMG_9411%29.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Aston_Martin%2C_Techno-Classica_2018%2C_Essen_(IMG_9411).jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Nottingham_Autokarna_MMB_22_Aston_Martin_DB5.jpg/1280px-Nottingham_Autokarna_MMB_22_Aston_Martin_DB5.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Nottingham_Autokarna_MMB_22_Aston_Martin_DB5.jpg"
      }
    ]
  },
  {
    "id": 10,
    "nombre": "Cadillac Eldorado 1959",
    "marca": "Cadillac",
    "categoria": "Lujo Clásico",
    "precio": 85000,
    "disponible": true,
    "descripcion": "El máximo estándar del lujo americano clásico, destacado por sus icónicas aletas gigantes.",
    "imagen": "https://images.unsplash.com/photo-1747803082249-90d4753a6834?q=80&w=1149&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1959,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1747803082249-90d4753a6834?q=80&w=1149&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/1959_Cadillac_Eldorado_Biarritz.jpg/1280px-1959_Cadillac_Eldorado_Biarritz.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1959_Cadillac_Eldorado_Biarritz.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/1959_Cadillac_Eldorado_Biarritz_Convertible.jpg/1280px-1959_Cadillac_Eldorado_Biarritz_Convertible.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1959_Cadillac_Eldorado_Biarritz_Convertible.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/1959_Cadillac_Eldorado_Biarritz_Convertible_%2822891%29.jpg/1280px-1959_Cadillac_Eldorado_Biarritz_Convertible_%2822891%29.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1959_Cadillac_Eldorado_Biarritz_Convertible_(22891).jpg"
      }
    ]
  },
  {
    "id": 11,
    "nombre": "Chevrolet Camaro SS",
    "marca": "Chevrolet",
    "categoria": "Muscle Car",
    "precio": 62000,
    "disponible": true,
    "descripcion": "Competidor directo de la era de oro con silueta agresiva y motor de alto rendimiento.",
    "imagen": "https://images.unsplash.com/photo-1720474753071-1d77a3f9bc3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1969,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1720474753071-1d77a3f9bc3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Chevrolet_Camaro_RS-SS_Convertible_Sachs_Franken_Classic_2018_P5201027.jpg/1280px-Chevrolet_Camaro_RS-SS_Convertible_Sachs_Franken_Classic_2018_P5201027.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Chevrolet_Camaro_RS-SS_Convertible_Sachs_Franken_Classic_2018_P5201027.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/AutoCl%C3%A1sica_2026._Chevrolet_Camaro_SS_RS_1969.jpg/1280px-AutoCl%C3%A1sica_2026._Chevrolet_Camaro_SS_RS_1969.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:AutoCl%C3%A1sica_2026._Chevrolet_Camaro_SS_RS_1969.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/AutoCl%C3%A1sica_2026._Chevrolet_Camaro_1969.jpg/1280px-AutoCl%C3%A1sica_2026._Chevrolet_Camaro_1969.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:AutoCl%C3%A1sica_2026._Chevrolet_Camaro_1969.jpg"
      }
    ]
  },
  {
    "id": 12,
    "nombre": "Ferrari 275 GTB/C",
    "marca": "Ferrari",
    "categoria": "Colección Histórica",
    "precio": 450000,
    "disponible": false,
    "descripcion": "Una variante ultraligera de competición de la que solo se fabricaron 12 unidades en todo el mundo.",
    "imagen": "https://images.unsplash.com/photo-1662757776990-ba453cfb350f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1965,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1662757776990-ba453cfb350f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/R%C3%A9tromobile_2011_-_Ferrari_275_GTB_-_006.jpg/1280px-R%C3%A9tromobile_2011_-_Ferrari_275_GTB_-_006.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:R%C3%A9tromobile_2011_-_Ferrari_275_GTB_-_006.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/1965_Ferrari_275_GTB%2C_Auto_2024%2C_Zurich_%28PANA0730%29.jpg/1280px-1965_Ferrari_275_GTB%2C_Auto_2024%2C_Zurich_%28PANA0730%29.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1965_Ferrari_275_GTB%2C_Auto_2024%2C_Zurich_(PANA0730).jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Ferrari_275_GTB%2C_Auto_2025%2C_Zurich_%2820251029-P1073701%29.jpg/1280px-Ferrari_275_GTB%2C_Auto_2025%2C_Zurich_%2820251029-P1073701%29.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Ferrari_275_GTB%2C_Auto_2025%2C_Zurich_(20251029-P1073701).jpg"
      }
    ]
  },
  {
    "id": 13,
    "nombre": "AC Cobra 427",
    "marca": "AC",
    "categoria": "Deportivo Clásico",
    "precio": 180000,
    "disponible": true,
    "descripcion": "Fusión perfecta de un chasis británico ligero con un brutal bloque V8 americano.",
    "imagen": "https://images.unsplash.com/photo-1786279334224-3635e95f2a0b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1965,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1786279334224-3635e95f2a0b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/AC_Cobra_427.jpg/1280px-AC_Cobra_427.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:AC_Cobra_427.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/AC_Shelby_Cobra_427_Oldtimertreffen_Ebern_2019_6200154.jpg/1280px-AC_Shelby_Cobra_427_Oldtimertreffen_Ebern_2019_6200154.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:AC_Shelby_Cobra_427_Oldtimertreffen_Ebern_2019_6200154.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Shelby_Cobra_Kulmbach-20220626-RM-111042.jpg/1280px-Shelby_Cobra_Kulmbach-20220626-RM-111042.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Shelby_Cobra_Kulmbach-20220626-RM-111042.jpg"
      }
    ]
  },
  {
    "id": 14,
    "nombre": "BMW 2002 Turbo 1973",
    "marca": "BMW",
    "categoria": "Económico Clásico",
    "precio": 52000,
    "disponible": true,
    "descripcion": "Pionero en el uso de turbocompresores en autos de producción con ágil manejo.",
    "imagen": "https://images.unsplash.com/photo-1767023210119-8128d4d3121b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1973,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1767023210119-8128d4d3121b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/BMW_2002_Turbo_%282008-06-28%29_ret.jpg/1280px-BMW_2002_Turbo_%282008-06-28%29_ret.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:BMW_2002_Turbo_(2008-06-28)_ret.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/BMW_2002_Turbo_%282008-06-28_Sp%29.JPG/1280px-BMW_2002_Turbo_%282008-06-28_Sp%29.JPG",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:BMW_2002_Turbo_(2008-06-28_Sp).JPG"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/BMW_2002_Turbo-_P5190663.jpg/1280px-BMW_2002_Turbo-_P5190663.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:BMW_2002_Turbo-_P5190663.jpg"
      }
    ]
  },
  {
    "id": 15,
    "nombre": "Pontiac GTO 1966",
    "marca": "Pontiac",
    "categoria": "Muscle Car",
    "precio": 58000,
    "disponible": true,
    "descripcion": "Ampliamente reconocido por los fanáticos como el modelo que inició el fenómeno Muscle.",
    "imagen": "https://images.unsplash.com/photo-1579867907567-b9889454c637?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1966,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1579867907567-b9889454c637?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Pontiac_GTO_%281964-1967%29_IMG_3193.jpg/1280px-Pontiac_GTO_%281964-1967%29_IMG_3193.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Pontiac_GTO_(1964-1967)_IMG_3193.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/1966_Pontiac_GTO%2C_black%2C_15th_Annual_All_Pontiac_Car_Show_2026-09-20.jpg/1280px-1966_Pontiac_GTO%2C_black%2C_15th_Annual_All_Pontiac_Car_Show_2026-09-20.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1966_Pontiac_GTO%2C_black%2C_15th_Annual_All_Pontiac_Car_Show_2026-09-20.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/1966_Pontiac_GTO%2C_maroon_with_black_top%2C_15th_Annual_All_Pontiac_Car_Show_2026-09-20.jpg/1280px-1966_Pontiac_GTO%2C_maroon_with_black_top%2C_15th_Annual_All_Pontiac_Car_Show_2026-09-20.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1966_Pontiac_GTO%2C_maroon_with_black_top%2C_15th_Annual_All_Pontiac_Car_Show_2026-09-20.jpg"
      }
    ]
  },
  {
    "id": 16,
    "nombre": "Fiat 500F 1965",
    "marca": "Fiat",
    "categoria": "Económico Clásico",
    "precio": 15000,
    "disponible": true,
    "descripcion": "El pequeño utilitario que movilizó a toda Italia con su carismático diseño urbano.",
    "imagen": "https://images.unsplash.com/photo-1644602558641-4c76e66cc6b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1965,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1644602558641-4c76e66cc6b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Fiat_500_in_Emilia-Romagna.jpg/1280px-Fiat_500_in_Emilia-Romagna.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Fiat_500_in_Emilia-Romagna.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Fiat_500_R_%282017-06-11_Sp%29.jpg/1280px-Fiat_500_R_%282017-06-11_Sp%29.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Fiat_500_R_(2017-06-11_Sp).jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Fiat_500_F_Berlina_in_Berlin_%282009%29.jpg/1280px-Fiat_500_F_Berlina_in_Berlin_%282009%29.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Fiat_500_F_Berlina_in_Berlin_(2009).jpg"
      }
    ]
  },
  {
    "id": 17,
    "nombre": "Chevrolet Corvette C1 1958",
    "marca": "Chevrolet",
    "categoria": "Deportivo Clásico",
    "precio": 89000,
    "disponible": true,
    "descripcion": "El clásico deportivo estadounidense fabricado en fibra de vidrio con faros dobles.",
    "imagen": "https://images.unsplash.com/photo-1710590982328-80e5e82ff0ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1958,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1710590982328-80e5e82ff0ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/1958_Chevrolet_Corvette_C1_J58S105245.jpg/1280px-1958_Chevrolet_Corvette_C1_J58S105245.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1958_Chevrolet_Corvette_C1_J58S105245.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/1958_Chevrolet_Corvette_C1_LC24.jpg/1280px-1958_Chevrolet_Corvette_C1_LC24.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1958_Chevrolet_Corvette_C1_LC24.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/1958_Chevrolet_Corvette_C1_3.jpg/1280px-1958_Chevrolet_Corvette_C1_3.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1958_Chevrolet_Corvette_C1_3.jpg"
      }
    ]
  },
  {
    "id": 18,
    "nombre": "Datsun 240Z",
    "marca": "Datsun",
    "categoria": "Deportivo Clásico",
    "precio": 34000,
    "disponible": true,
    "descripcion": "Coupé japonés que democratizó los autos deportivos con gran fiabilidad y rendimiento.",
    "imagen": "https://images.unsplash.com/photo-1625630282543-e995697c83b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1970,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1625630282543-e995697c83b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Yellow_Datsun_240Z_dllu.jpg/1280px-Yellow_Datsun_240Z_dllu.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Yellow_Datsun_240Z_dllu.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/1971_Datsun_240Z_East_African_Safari_Rally.jpg/1280px-1971_Datsun_240Z_East_African_Safari_Rally.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1971_Datsun_240Z_East_African_Safari_Rally.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/1973_Datsun_240Z_white.jpg/1280px-1973_Datsun_240Z_white.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:1973_Datsun_240Z_white.jpg"
      }
    ]
  },
  {
    "id": 19,
    "nombre": "Porsche 911 Carrera RS 1973",
    "marca": "Porsche",
    "categoria": "Deportivo Clásico",
    "precio": 210000,
    "disponible": true,
    "descripcion": "Leyenda de homologación ligera equipada con su famoso alerón tipo cola de pato.",
    "imagen": "https://images.unsplash.com/photo-1603909390477-bf6fc90bb68e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "anio": 1973,
    "imagenes": [
      {
        "url": "https://images.unsplash.com/photo-1603909390477-bf6fc90bb68e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Porsche_911_Carrera_RS%2C_Bj._1972-73_%282016-07-02_01_Sp%29.JPG/1280px-Porsche_911_Carrera_RS%2C_Bj._1972-73_%282016-07-02_01_Sp%29.JPG",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Porsche_911_Carrera_RS%2C_Bj._1972-73_(2016-07-02_01_Sp).JPG"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Porsche_911_Carrera_RS_2.7_%281972%29_Solitude_Revival_2022_1X7A0355.jpg/1280px-Porsche_911_Carrera_RS_2.7_%281972%29_Solitude_Revival_2022_1X7A0355.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Porsche_911_Carrera_RS_2.7_(1972)_Solitude_Revival_2022_1X7A0355.jpg"
      },
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Porsche_911_Carrera_RS_P5190434.jpg/1280px-Porsche_911_Carrera_RS_P5190434.jpg",
        "credito": "Wikimedia Commons",
        "fuente": "https://commons.wikimedia.org/wiki/File:Porsche_911_Carrera_RS_P5190434.jpg"
      }
    ]
  }
]
