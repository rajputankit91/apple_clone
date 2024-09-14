
import { createServer, Model } from "miragejs";
import uuid from "react-uuid";

export default function server({ environment = "development" } = {}) {
    let server = createServer({
        environment,
        models: {
            phone: Model,
            selectPhone:Model,
        },

        seeds(server) {
            server.create("phone", {
                title: "iPhone 16 Pro",
                img:  "https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_16_pro_light__sh8e76empwyq_large.svg" ,
                id: uuid()
            });
            server.create("phone", {
                title: "iPhone 16",
                img:  "https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_16_light__1g0j6j3ygciy_large.svg" ,
                id: uuid()
            });
            server.create("phone", {
                title: "iPhone 15",
                img:  "https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_15_light__fj1tpga410a6_large.svg" ,
                id: uuid()
            });
            server.create("phone", {
                title: "iPhone 14",
                img:  "https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_14_light__cazn2nyanwuq_large.svg" ,
                id: uuid()
            });
            server.create("phone", {
                title:"iPhoneSE",
                img: "https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_se_light__cdjrao3pq2he_large.svg",
                id: uuid()
            });
            server.create("phone", {
                title:"compare",
                img: "https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_compare_light__f01dnbvbb62y_large.svg",
                id: uuid()
            });
            server.create("phone", {
                title: "AirPods",
                img:  "https://www.apple.com/v/iphone/home/bw/images/chapternav/airpods_light__cd9exnztczjm_large.svg" ,
                id: uuid()
            });
            server.create("phone", {
                title: "AirTag",
                img:  "https://www.apple.com/v/iphone/home/bw/images/chapternav/airtag_light__c19z9f5le0ia_large.svg" ,
                id: uuid()
            });
            server.create("phone", {
                title: "Accessories",
                img:  "https://www.apple.com/v/iphone/home/bw/images/chapternav/accessories_light__e917u1i857e6_large.svg" ,
                id: uuid()
            });
            server.create("phone", {
                title: "iOS 18",
                img:  "https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_ios_light__b0jhieo01t0i_large.svg" ,
                id: uuid()
            });
            server.create("phone", {
                title: "Shop iPhone",
                img:  "https://www.apple.com/v/iphone/home/bw/images/chapternav/shop_iphone_light__e4dlk2n6h26a_large.svg" ,
                id: uuid()
            });
            server.create("selectPhone", {
                title: "iPhone 16 Pro",
                description:"The ultimate iPhone",
                price:"From Rs. 119900.00",
                img:  "https://www.apple.com/v/iphone/home/bw/images/overview/select/iphone_14__eso1fig4ci6a_large.png" ,
                id: uuid(),
                color:["red","yellow","gray","blue"],
                specification:[
                    {
                        title:"Built for Apple Intelligence1",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_apple_intelligence__cy36nscjfrma_large.png"
                    },
                    {
                        title:"A18 Pro chip with 6-core GPU",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_a18_pro__exkx38vklpci_large.png"
                    },
                    {
                        title:"Camera Control",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_camera_button__e83hkgwaefam_large.png"
                    },
                    {
                        title:"Pro camera system",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_iphone_16_pro_camera__edtadvfv6hg2_large.png"
                    },
                    {
                        title:"Up to 33 hours video playback2",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_battery_100__den5pjokk60y_large.png"
                    }
                ]
            });
            server.create("selectPhone", {
                title: "iPhone 16",
                description:"A total powerhouse.",
                price:"From ₹119900.00*",
                img:  "https://www.apple.com/v/iphone/home/bw/images/overview/select/iphone_16__c5bvots96jee_large.png" ,
                id: uuid(),
                color:["red","yellow","gray","blue"],
                specification:[
                    {
                        title:"Built for Apple Intelligence1",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_apple_intelligence__cy36nscjfrma_large.png"
                    },
                    {
                        title:"A18 Pro chip with 6-core GPU",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_a18_pro__exkx38vklpci_large.png"
                    },
                    {
                        title:"Camera Control",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_camera_button__e83hkgwaefam_large.png"
                    },
                    {
                        title:"Pro camera system",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_iphone_16_pro_camera__edtadvfv6hg2_large.png"
                    },
                    {
                        title:"Up to 33 hours video playback2",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_battery_100__den5pjokk60y_large.png"
                    }
                ]
            });
            server.create("selectPhone", {
                title: "iPhone 15",
                description:"As amazing as ever.",
                price:"From ₹69900.00*",
                img:"https://www.apple.com/v/iphone/home/bw/images/overview/select/iphone_14__eso1fig4ci6a_large.png" ,
                id: uuid(),
                color:["red","yellow","gray","blue","green"],
                specification:[
                    {
                        title:"Built for Apple Intelligence1",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_apple_intelligence__cy36nscjfrma_large.png"
                    },
                    {
                        title:"A18 Pro chip with 6-core GPU",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_a18_pro__exkx38vklpci_large.png"
                    },
                    {
                        title:"Camera Control",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_camera_button__e83hkgwaefam_large.png"
                    },
                    {
                        title:"Pro camera system",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_iphone_16_pro_camera__edtadvfv6hg2_large.png"
                    },
                    {
                        title:"Up to 33 hours video playback2",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_battery_100__den5pjokk60y_large.png"
                    }
                ]
            });
            server.create("selectPhone", {
                title: "iPhone 14",
                description:"All kinds of awesome.",
                price:"From ₹59900.00*",
                img:  "https://www.apple.com/v/iphone/home/bw/images/overview/select/iphone_14__eso1fig4ci6a_large.png" ,
                id: uuid(),
                color:["red","yellow","gray","blue","black"],
                specification:[
                    {
                        title:"Built for Apple Intelligence1",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_apple_intelligence__cy36nscjfrma_large.png"
                    },
                    {
                        title:"A18 Pro chip with 6-core GPU",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_a18_pro__exkx38vklpci_large.png"
                    },
                    {
                        title:"Camera Control",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_camera_button__e83hkgwaefam_large.png"
                    },
                    {
                        title:"Pro camera system",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_iphone_16_pro_camera__edtadvfv6hg2_large.png"
                    },
                    {
                        title:"Up to 33 hours video playback2",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_battery_100__den5pjokk60y_large.png"
                    }
                ]
            });
            server.create("selectPhone", {
                title: "iPhone SE",
                description:"Serious power. Serious value.",
                price:"From ₹47600.00*",
                img:  "https://www.apple.com/v/iphone/home/bw/images/overview/select/iphone_16pro__erw9alves2qa_large.png" ,
                id: uuid(),
                color:["red","yellow","gray","blue"],
                specification:[
                    {
                        title:"Built for Apple Intelligence1",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_apple_intelligence__cy36nscjfrma_large.png"
                    },
                    {
                        title:"A18 Pro chip with 6-core GPU",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_a18_pro__exkx38vklpci_large.png"
                    },
                    {
                        title:"Camera Control",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_camera_button__e83hkgwaefam_large.png"
                    },
                    {
                        title:"Pro camera system",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_iphone_16_pro_camera__edtadvfv6hg2_large.png"
                    },
                    {
                        title:"Up to 33 hours video playback2",
                        icon:"https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_battery_100__den5pjokk60y_large.png"
                    }
                ]
            })
        },
        routes() {
            this.namespace = "api/apple"
            this.get("/", (schema, request) => {
                // console.log(schema)
                return schema.phones.all()
            });
                                    
            this.namespace = "api/selectPhones"
            this.get("/", (schema, request) => {
                // console.log(schema)
                return schema.selectPhones.all()
            });

        }
    })
    return server;
}