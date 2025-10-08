// app/components/productsData.ts
// import Image from "next/image"

const products = [
  // Productos Destacados
  {
    id: 1,
    name: "Set Midnight Drop",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Set_Midnight_Drop_quaube",
    category: "destacados",
    precio : 180000,
  },
  {
    id: 2,
    name: "Camiseta Tag Master",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Camiseta_Tag_Master_nr3ofk",
    category: "destacados",
    precio : 97000,
  },
  {
    id: 3,
    name: "Zapatillas Pulse Sneaker",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Zapatillas_Pulse_Sneaker_ke0owe",
    category: "destacados",
    precio : 320000,
  },
  {
    id: 4,
    name: "Buzo Neon Vibe",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Buzo_Neon_Vibe_u7bpj6",
    category: "destacados",
    precio : 120000,
  },
  {
    id: 5,
    name: "Combo Essential Pack",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Combo_Essential_Pack_ralpe8",
    category: "destacados",
    precio : 280000,
  },

  // Buzos
  {
    id: 6,
    name: "Buzo Street Vibe",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Buzo_Street_Vibe_cvzies",
    category: "buzos",
    precio : 120000,
  },
  {
    id: 7,
    name: "Buzo Urban Pulse",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Buzo_Urban_Pulse_ey9zm6",
    category: "buzos",
    precio : 100000,
  },
  {
    id: 8,
    name: "Buzo Metro Drift",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Buzo_Metro_Drift_bwxrde",
    category: "buzos",
    precio : 120000,
  },
  {
    id: 9,
    name: "Buzo Noise Layer",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Buzo_Noise_Layer_tzrqdg",
    category: "buzos",
    precio : 120000,
  },
  {
    id: 10,
    name: "Buzo Night Shift",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Buzo_Night_Shift_lrow8q",
    category: "buzos",
    precio : 120000,
  },

  // Camisetas
  {
    id: 11,
    name: "Camiseta Core Street",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Camiseta_Core_Street_fxauom",
    category: "camisetas",
    precio : 70000,
  },
  {
    id: 12,
    name: "Camiseta Tag Life",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Camiseta_Tag_Life_gjgxnu",
    category: "camisetas",
    precio : 70000,
  },
  {
    id: 13,
    name: "Camiseta Concrete Flow",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Camiseta_Concrete_Flow_zbhzoa",
    category: "camisetas",
    precio : 70000,
  },
  {
    id: 14,
    name: "Camiseta Skyline Edge",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Camiseta_Skyline_Edge_nv68b5",
    category: "camisetas",
    precio : 70000,
  },
  {
    id: 15,
    name: "Camiseta Raw District",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Camiseta_Raw_District_octcxw",
    category: "camisetas",
    precio : 70000,
  },

  // Pantalones
  {
    id: 16,
    name: "Jogger Grind Mode",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Jogger_Grind_Mode_awzdg0",
    category: "pantalones",
    precio : 90000,
  },
  {
    id: 17,
    name: "Cargo District Flex",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Cargo_District_Flex_roplx8",
    category: "pantalones",
    precio : 110000,
  },
  {
    id: 18,
    name: "Jean Underground",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Jean_Underground_tuipk6",
    category: "pantalones",
    precio : 130000,
  },
  {
    id: 19,
    name: "Pantalón Metroline",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Pantal%C3%B3n_Metroline_myex1m",
    category: "pantalones",
    precio : 100000,
  },
  {
    id: 20,
    name: "Pantalón Backalley Utility",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Pantal%C3%B3n_Backalley_Utility_iprvu9",
    category: "pantalones",
    precio : 120000,
  },

  // Accesorios
  {
    id: 21,
    name: "Gorra Concrete",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Gorra_Concrete_lkid5q",
    category: "accesorios",
    precio : 80000,
  },
  {
    id: 22,
    name: "Gorro Loop",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Gorro_Loop_snwxuq",
    category: "accesorios",
    precio : 70000,
  },
  {
    id: 23,
    name: "Lentes Block Shades",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Lentes_Block_Shades_i4dli8",
    category: "accesorios",
    precio : 150000,
  },
  {
    id: 24,
    name: "Medias Urban Stride (3 pares)",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Medias_Urban_Stride_fodi7a",
    category: "accesorios",
    precio : 60000,
  },
  {
    id: 25,
    name: "Riñonera Core Side Bag",
    image: "https://res.cloudinary.com/ddzetix8t/image/upload/Ri%C3%B1onera_Core_Side_Bag_um0hly",
    category: "accesorios",
    precio : 200000,
  },
];

export default products;