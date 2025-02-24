export interface DataProduct {
    id: string;
    title: string;
    image: string;
    description: string;
    price: number;
    category: 'Beras' | 'Minyak' | 'Gula' | 'Telur';
    onClick?: () => void;
    detail?: string;
}

export const data: DataProduct[] = [
    {
        id: "1",
        title: "Beras Pandan Wangi 5kg",
        image: "https://allofresh.id/media/catalog/product/cache/6151a33a02c2f3881cb02a785f0fe387/b/r/brc-8997033570018-1.jpg?1739911458",
        description: "Beras premium dengan aroma khas pandan, pulen dan wangi.",
        price: 75000,
        category: "Beras"
    },
    {
        id: "2",
        title: "Minyak Goreng Bimoli 2L",
        image: "https://www.mirotakampus.com/resources/assets/images/product_images/1588079899.bimoli-min.jpg",
        description: "Minyak goreng berkualitas tinggi, cocok untuk menggoreng dan memasak.",
        price: 40000,
        category: "Minyak"
    },
    {
        id: "3",
        title: "Gula Pasir Gulaku 1kg",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbCygcWb5AralRTsQCEpMnXEZvkmvZiPo8A&s",
        description: "Gula pasir berkualitas tinggi, cocok untuk segala kebutuhan dapur.",
        price: 17000,
        category: "Gula"
    },
    {
        id: "4",
        title: "Beras Ramos 10kg",
        image: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/11/23/3cc9e16e-55ed-4a66-a6da-14d29d655be3.jpg",
        description: "Beras putih dengan tekstur pulen, cocok untuk hidangan sehari-hari.",
        price: 135000,
        category: "Beras"
    },
    {
        id: "5",
        title: "Minyak Kelapa Barco 1L",
        image: "https://raisa.aeonstore.id/wp-content/uploads/2023/04/5846245.jpg",
        description: "Minyak kelapa murni yang kaya akan manfaat untuk kesehatan.",
        price: 60000,
        category: "Minyak"
    },
    {
        id: "6",
        title: "Beras Rojolele 5kg",
        image: "",
        description: "Beras Rojolele berkualitas tinggi, pulen dan harum.",
        price: 82000,
        category: "Beras"
    },
    {
        id: "7",
        title: "Minyak Goreng Tropical 2L",
        image: "",
        description: "Minyak goreng sehat dengan kandungan omega 3 dan 6.",
        price: 42000,
        category: "Minyak"
    },
    {
        id: "8",
        title: "Gula Merah Aren 1kg",
        image: "",
        description: "Gula merah asli dari nira aren, manis alami.",
        price: 25000,
        category: "Gula"
    },
    {
        id: "9",
        title: "Beras Merah Organik 2kg",
        image: "",
        description: "Beras merah organik yang kaya serat, baik untuk kesehatan.",
        price: 58000,
        category: "Beras"
    },
    {
        id: "10",
        title: "Minyak Goreng SunCo 2L",
        image: "",
        description: "Minyak goreng bening sehat, cocok untuk menggoreng.",
        price: 45000,
        category: "Minyak"
    },
    {
        id: "11",
        title: "Gula Pasir Rose Brand 1kg",
        image: "",
        description: "Gula pasir putih murni berkualitas tinggi.",
        price: 16000,
        category: "Gula"
    },
    {
        id: "12",
        title: "Beras Hitam Organik 2kg",
        image: "",
        description: "Beras hitam organik yang kaya antioksidan.",
        price: 65000,
        category: "Beras"
    },
    {
        id: "13",
        title: "Minyak Goreng Fortune 2L",
        image: "",
        description: "Minyak goreng berkualitas dengan kandungan vitamin A.",
        price: 43000,
        category: "Minyak"
    },
    {
        id: "14",
        title: "Gula Batu 1kg",
        image: "",
        description: "Gula batu berkualitas, cocok untuk teh dan jamu.",
        price: 18000,
        category: "Gula"
    },
    {
        id: "15",
        title: "Beras Cianjur 10kg",
        image: "",
        description: "Beras premium asli Cianjur, pulen dan harum.",
        price: 140000,
        category: "Beras"
    },
    {
        id: "16",
        title: "Minyak Goreng Filma 2L",
        image: "",
        description: "Minyak goreng sehat dengan kandungan lemak tak jenuh.",
        price: 44000,
        category: "Minyak"
    }
];



