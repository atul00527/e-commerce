import p1_img from '../public/assets/kid1.jpg'
import p2_img from '../public/assets/p2.jfif'
import p3_img from '../public/assets/p3.jfif'
import p4_img from '../public/assets/p4.jfif'

let data_product= [
     {
            id: 1,
            name: "Kurti",
            category: "women",
            image: p1_img,
            new_price: 50.0,
            old_price: 80.5
        },
    
        { id: 2, name: "Jeans", category: "men", image:p2_img, new_price: 60.0, old_price: 90.5 },
        { id: 3, name: "Saree", category: "women", image:p3_img, new_price: 75.0, old_price: 120.0 },
        { id: 4, name: "Jacket", category: "men", image: p4_img, new_price: 90.0, old_price: 140.0 }
]

export default data_product;