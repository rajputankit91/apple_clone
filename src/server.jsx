
import { createServer, Model } from "miragejs";
import uuid from "react-uuid";

export default function server({ environment = "development" } = {}) {
    let server = createServer({
        environment,
        models: {
            phone: Model,
            selectPhone:Model,
            ItemList: Model,
            testList: Model,
            support: Model,
            supportPro: Model,
            appleCare: Model,
            footer: Model
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
            });
            server.create('ItemList', {
                id: "1",
                url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-iphone_2x.png",
                title: "iPhone",
                href: "https://support.apple.com/en-in/iphone"
            }),
                server.create('ItemList', {
                    id: "2",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-mac_2x.png",
                    title: "Mac",
                    href: "https://support.apple.com/en-in/mac"
                }),
                server.create('ItemList', {
                    id: "3",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-ipad_2x.png",
                    title: "iPad",
                    href: "https://support.apple.com/en-in/ipad"
                }),
                server.create('ItemList', {
                    id: "4",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-watch-_2x.png",
                    title: "Watch",
                    href: "https://support.apple.com/en-in/watch"
                }),
                server.create('ItemList', {
                    id: "5",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-airpods_2x.png",
                    title: "AirPods",
                    href: "https://support.apple.com/en-in/airpods"
                }),
                server.create('ItemList', {
                    id: "6",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-music_2x.png",
                    title: "Music",
                    href: "https://support.apple.com/en-in/music"
                }),
                server.create('ItemList', {
                    id: "7",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-tv_2x.png",
                    title: "TV",
                    href: "https://support.apple.com/en-in/tv"
                })
            server.create('testList', {
                id: "1",
                url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/tile-topic-password_2x.svg",
                title: "Forgotten Apple ID password"
            }),
                server.create('testList', {
                    id: "2",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/tile-topic-repair_2x.svg",
                    title: "Apple Repair"
                }),
                server.create('testList', {
                    id: "3",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/tile-topic-billing_2x.svg",
                    title: "Billing and Subscriptions"
                })
            server.create('support', {
                id: "1",
                title: "Apple Support on YouTube",
                para: "Check out our official YouTube channel to help you get the most from your Apple devices and services.",
                linkSub: "Visit Apple Support on YouTube",
                link: "https://www.youtube.com/applesupport",
                url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-AppleSupport-YouTube-promo.image.large_2x.png"
            })
            server.create('support', {
                id: "2",
                title: "Join free sessions at your Apple Store",
                para: "Find out about the latest features and how to go further with your Apple devices..",
                linkSub: "Sign up",
                link: "https://www.apple.com/in/today/calendar/?topics=daily-sessions&sessions=skills&cid=rem-in-taa-support-fundm-cal",
                url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-taa-fundamentals.image.large_2x.png"
            })
            server.create('supportPro', {
                id: "1",
                title: "Get Support",
                para: "Give us a few details and we’ll offer the best solution. Connect by phone, chat, email and more.",
                linkSub: "Start Now",
                link: "https://getsupport.apple.com/?caller=home&PRKEYS=",
                url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-split-getsupport.image.large_2x.png"
            })
            server.create('supportPro', {
                id: "2",
                title: "Apple Support app",
                para: "Get help for all of your Apple products in one place, or connect with an expert.",
                linkSub: "Download",
                link: "https://apps.apple.com/in/app/apple-support/id1130498044?pt=2003&ct=support.home&mt=8&l=en",
                url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-split-supportapp.image.large_2x.png"
            })
            server.create('appleCare', {
                id: "1",
                title: "My Support",
                para: "Get up-to-date information about your Apple products including cover, repairs and much more.",
                linkSub: "Sign in to My Support",
                link: "https://support.apple.com/en-in/my-support"
            })
            server.create('appleCare', {
                id: "2",
                title: "AppleCare+",
                para: "Get unlimited repairs for accidental damage protection, priority access to Apple experts, and more..",
                linkSub: "Learn more",
                link: "https://www.apple.com/in/support/products/?cid=aaa-ols-home-acpp-psp-0922",
                url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-applecare-plus.image.large_2x.png"
            })
            server.create('appleCare', {
                id: "3",
                title: "Beware of counterfeit parts",
                para: "Some counterfeit and third-party power adapters and batteries may not be designed properly and could result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we recommend visiting an Apple Authorised Service Provider. If you need a replacement adapter to charge your Apple device, we recommend getting an Apple power adapter.Also non-genuine replacement displays may have compromised visual quality and may fail to work correctly. Apple-certified screen repairs are performed by trusted experts who use genuine Apple parts.",
            })
            server.create('footer', {
                id: "1",
                title: "Product Support",
                content: [
                    {
                        id: "1",
                        subtitle: "iPhone"
                    },
                    {
                        id: "2",
                        subtitle: "Mac"
                    },
                    {
                        id: "1",
                        subtitle: "iPad"
                    },
                    {
                        id: "1",
                        subtitle: "iPhone"
                    },
                    {
                        id: "1",
                        subtitle: "iPhone"
                    },
                    {
                        id: "1",
                        subtitle: "iPhone"
                    }
                ]
            })
            server.create('footer', {
                id: "2",
                title: "Service and Repair",
                content: [
                    {
                        id: "1",
                        subtitle: "Apple Repair Options"
                    },
                    {
                        id: "2",
                        subtitle: "Service and Repair Information"
                    },
                    {
                        id: "1",
                        subtitle: "AppleCare Products"
                    },
                    {
                        id: "1",
                        subtitle: "Hardware Warranties"
                    },
                    {
                        id: "1",
                        subtitle: "Software License Agreements"
                    },
                    {
                        id: "1",
                        subtitle: "Complimentary Support"
                    }
                ]
            })
            server.create('footer', {
                id: "3",
                title: "Resources",
                content: [
                    {
                        id: "1",
                        subtitle: "My Support"
                    },
                    {
                        id: "2",
                        subtitle: "Product Documentation"
                    },
                    {
                        id: "3",
                        subtitle: "Apple Support Videos"
                    },
                    {
                        id: "4",
                        subtitle: "Accessibility"
                    }
                ]
            })
            server.create('footer', {
                id: "4",
                title: "Connect",
                content: [
                    {
                        id: "1",
                        subtitle: "Contact Us"
                    },
                    {
                        id: "2",
                        subtitle: "Phone Numbers"
                    },
                    {
                        id: "",
                        subtitle: "Support app"
                    },
                    {
                        id: "1",
                        subtitle: "Apple Communities"
                    },
                    {
                        id: "1",
                        subtitle: "@AppleSupport"
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
            this.namespace = 'api';
            this.get('/ItemLists', (schema) => {
                console.log(schema)
                return schema.itemLists.all()
            })
            this.get('/testLists', (schema) => {
                console.log("Test-Lists", schema)
                return schema.testLists.all()
            })
            this.get('/supports', (schema) => {
                console.log("Support-Lists", schema)
                return schema.supports.all()
            })
            this.get('/supportPros', (schema) => {
                console.log("SupportPro-Lists", schema)
                return schema.supportPros.all()
            })
            this.get('/appleCares', (schema) => {
                console.log("appleCare-Lists", schema)
                return schema.appleCares.all()
            })
            this.get('/footers', (schema) => {
                console.log("footers-Lists", schema)
                return schema.footers.all()
            })

        }
    })
    return server;
}