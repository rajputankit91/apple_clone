
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
            footer: Model,
            gridPhoto: Model,
            detail: Model,
            iPhoneGalleryGetToKnow:Model,
            iPhoneessential:Model,
            browserProduct: Model,
            browserCategory:Model
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
                    },
                    server.create('gridPhoto', {
                        id: '1',
                        url: 'https://www.apple.com/v/home/br/images/promos/airpods-4/promo_airpods_4_announce__dvb5tea0uyye_medium_2x.jpg',
                        headLine: 'AirPods 4',
                        subhead: 'Iconic.Now supersonic. Available with Active Noise Cancellation.',
                        callout: 'Available starting 9.20',
                        btn: ['Learn more', 'Pre-order'],
                        color:'white'
                    }),
                    server.create('gridPhoto', {
                        id: '2',
                        url: 'https://www.apple.com/v/home/br/images/promos/airpods-pro-2/promo_airpods_pro_2_announce__egsgrnnmo3ee_medium_2x.jpg',
                        headLine: 'AirPods Pro 2',
                        subhead: 'Hearing Aid and Hearing Test features coming with a free software update this fall.',
                        callout: 'Available starting 9.20',
                        btn: ['Learn more', 'Buy'],
                        color:'white'
                    }),
                    server.create('gridPhoto', {
                        id: '3',
                        url: 'https://www.apple.com/v/home/br/images/promos/airpods-max/promo_airpodsmax_announce__2srayzjz3iay_medium_2x.jpg',
                        headLine: 'AirPods Max',
                        subhead: 'Symphonic boom.',
                        callout: 'Available starting 9.20',
                        btn: ['Learn more', 'Pre-order'],
                        color:'black'
                    }),
                    server.create('gridPhoto', {
                        id: '4',
                        url: 'https://www.apple.com/v/home/br/images/promos/carriers/promo_carrier__e0izvxwqosgi_medium_2x.jpg',
                        headLine: 'Carrier deals at Apple',
                        subhead: 'Get up to $1000 in credit on a new iPhone. Trade-in may be required.',
                        callout: 'Available starting 9.20',
                        btn: ['Learn more','Find your deal'],
                        color:'black'
                    }),
                    server.create('detail' ,{
                        id:'1',
                        title:'1. Available for Qualified Purchasers only. Qualified Purchasers receive an Apple Gift Card when they purchase an Eligible Product at a Qualifying Location through September 30, 2024. Gift card values may vary by Eligible Product. Only one Apple Gift Card per Eligible Product per Qualified Purchaser. Offer subject to availability. While supplies last. Qualified Purchasers shall receive a discount equal to the value of the Apple Gift Card off the price of the Eligible Product, but will be charged for all items in their cart, including the Apple Gift Card. Important notice regarding the checkout receipt and monthly statement for Apple Card Monthly Installments (ACMI) purchases with this promotion: Qualified Purchasers selecting ACMI (a 0% APR payment option available only in the U.S.) as payment type at checkout shall receive a discount equal to the value of the Apple Gift Card off the price of the Eligible Product. This will result in one ACMI installment plan over 12 months for the Eligible Product discounted by the instant credit, and a second ACMI installment plan over 12 months for the full price of the Apple Gift Card. The total combined amount charged over the two separate ACMI installment plans will reflect the original full retail price of the Eligible Product. Separately, Qualified Purchasers will receive and be charged for the Apple Gift Card in the amount of the applicable discount off the Eligible Product. Apple Card Monthly Installments (ACMI) is a 0% APR payment option that is only available if you select it at checkout in the U.S. for eligible products purchased at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. See support.apple.com/kb/HT211204 for more information about eligible products. APR ranges may vary based on when you accepted an Apple Card. Cardholders who accept an Apple Card on and or after August 1, 2024: Variable APRs for Apple Card, other than ACMI, range from 19.24% to 29.49% based on creditworthiness. Rates as of August 1, 2024. Existing cardholders: See your Customer Agreement for applicable rates and fee. If you buy an ACMI-eligible product by choosing to pay in full with Apple Card (instead of using ACMI), that purchase is subject to the Apple Card variable APR, not 0% APR. Taxes and shipping on ACMI purchases are subject to the variable APR, not 0% APR. When you buy an iPhone with ACMI, you’ll need to select AT&T, Boost Mobile, T-Mobile, or Verizon as your carrier when you check out. An iPhone purchased with ACMI is always unlocked, so you can switch carriers at any time. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government and Veterans and Military Purchase Programs; or on refurbished devices. The last month’s payment for each product will be the product’s purchase price, less all other payments at the monthly payment amount. ACMI financing is subject to change at any time for any reason, including but not limited to installment term lengths and eligible products. See support.apple.com/kb/HT211204 for information about upcoming changes to ACMI financing. See the Apple Card Customer Agreement for more information about ACMI financing. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch. Available for qualifying applicants in the United States. If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about accessing this offer or applying for Apple Card. This offer cannot be combined with the Apple Employee Purchase Plan or business loyalty pricing. Additional restrictions apply. View full terms and conditions of offer here.'
                    }),
                    server.create('detail' ,{
                        id:'2',
                        title:'2. Apple Intelligence will be available in beta on all iPhone 16 models, iPhone 15 Pro, and iPhone 15 Pro Max with Siri and device language set to U.S. English, as an iOS 18 update this fall. Some features and additional language will be coming over the course of the next year.'
                    }),
                    server.create('detail' ,{
                        id:'3',
                        title:'3. Apple Intelligence will be available in beta on all iPhone 16 models, iPhone 15 Pro, and iPhone 15 Pro Max with Siri and device language set to U.S. English, as an iOS 18 update this fall. Some features and additional language will be coming over the course of the next year.'
                    }),
                    server.create('detail' ,{
                        id:'4',
                        title:'4. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.'
                    }),
                    server.create('detail' ,{
                        id:'5',
                        title:'5. Hearing Test and Hearing Aid features expected fall 2024. They will be supported on AirPods Pro 2 with the latest firmware paired with a compatible iPhone or iPad with iOS 18 or iPadOS 18 and later, and are intended for people 18 years old or older. The Hearing Aid feature will be intended for people with perceived mild to moderate hearing loss and is pending FDA review.'
                    }),

                    server.create('iPhoneGalleryGetToKnow' , {
                        id:1,
                        url:'https://www.apple.com/v/iphone/home/bw/images/overview/consider/apple_intelligence__gbh77cvflkia_medium_2x.jpg',
                        subTitle:'Apple Intelligence',
                        title:'AI‑opening possibilities.',
                        color:'white'
                    }),
                    server.create('iPhoneGalleryGetToKnow' , {
                        id:2,
                        url:'https://www.apple.com/v/iphone/home/bw/images/overview/consider/camera__exi2qfijti0y_medium_2x.jpg',
                        subTitle:'Cutting-Edge Cameras',
                        title:'Picture your best',
                        title1:'photes and videos',
                        color:'white'
                    }),
                    server.create('iPhoneGalleryGetToKnow' , {
                        id:3,
                        url:'https://www.apple.com/v/iphone/home/bw/images/overview/consider/battery__2v7w6kmztvm2_medium_2x.jpg',
                        subTitle:'Chip and Battery Life',
                        title:'Fast that lasts.',
                        color:'white'
                    }),
                    server.create('iPhoneGalleryGetToKnow' , {
                        id:4,
                        url:'https://www.apple.com/v/iphone/home/bw/images/overview/consider/innovation__os9bmmo3mjee_medium_2x.jpg',
                        subTitle:'Innovation',
                        title:'Beautiful and durable,',
                        title1:'by Design',
                        color:'black'
                    }),
                    server.create('iPhoneGalleryGetToKnow' , {
                        id:5,
                        url:'https://www.apple.com/v/iphone/home/bw/images/overview/consider/environment__e3v3gj88dl6q_medium_2x.jpg',
                        subTitle:'Environment',
                        title:'Recycle.Reuse.Repeat.',
                        color:'black'
                    }),
                    server.create('iPhoneGalleryGetToKnow' , {
                        id:6,
                        url:'https://www.apple.com/v/iphone/home/bw/images/overview/consider/privacy__ckc0wa30o55y_medium_2x.jpg',
                        subTitle:'Privacy',
                        title:'Your Data',
                        title1:'Just where you want it',
                        color:'white'
                    }),
                    server.create('iPhoneGalleryGetToKnow' , {
                        id:7,
                        url:'https://www.apple.com/v/iphone/home/bw/images/overview/consider/personalize__dwg8srggrbo2_medium_2x.jpg',
                        subTitle:'Customize Your iPhone',
                        title:'Make it you.',
                        title1: 'Thought and through',
                        color:'white'
                    }),
                    server.create('iPhoneGalleryGetToKnow' , {
                        id:8,
                        url:'https://www.apple.com/v/iphone/home/bw/images/overview/consider/safety__bwp7rsowtjiu_medium_2x.jpg',
                        subTitle:'Peace of Mind',
                        title:'Helpful safety features.',
                        title1:'Just in case.',
                        color:'white'
                    }),
                    server.create('iPhoneessential',{
                        id: "1",
                        title: "MagSafe",
                        para: "Snap on a magnetic case, wallet or both.And get fast, efficient wireless charging.",
                        linkSub: "Shop MagSafe accessories",
                        link: "https://www.apple.com/in/shop/accessories/all/magsafe",
                        url: "https://www.apple.com/v/iphone/home/bw/images/overview/essentials/magsafe__dac2joyve8wi_large.jpg"
                    }),
                    server.create('iPhoneessential',{
                        id: "2",
                        title: "AirTag",
                        para: "Attach one to your keys. Put another in your backpack.If they’re misplaced, just use the Find My app.",
                        linkSub: "Buy",
                        link: "https://www.apple.com/in/shop/buy-airtag/airtag",
                        url: "https://www.apple.com/v/iphone/home/bw/images/overview/essentials/airtag__furx99ax8rm2_small.jpg"
                    }),
                    server.create('browserProduct', {
                        id: "1",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-mac?wid=225&hei=225&fmt=png-alpha&.v=1700067558508",
                        title: "Mac"
                    }),
                    server.create('browserProduct', {
                        id: "2",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-ipad?wid=225&hei=225&fmt=png-alpha&.v=1699474605227",
                        title: "iPad"
                    }),
                    server.create('browserProduct', {
                        id: "3",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-iphone?wid=225&hei=225&fmt=png-alpha&.v=1699474605231",
                        title: "iPhone"
                    }),
                    server.create('browserProduct', {
                        id: "4",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-watch?wid=225&hei=225&fmt=png-alpha&.v=1699474605232",
                        title: "Watch"
                    }),
                    server.create('browserProduct', {
                        id: "5",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-category-new-arrivals?wid=150&hei=150&fmt=png-alpha&.v=1699572503991",
                        title: "TV & Home"
                    }),
                    server.create('browserCategory', {
                        id: "1",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-tv?wid=225&hei=225&fmt=png-alpha&.v=1699474605227",
                        title: "New Arrivals"
                    }),
                    server.create('browserCategory', {
                        id: "2",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-category-cases-protection?wid=150&hei=150&fmt=png-alpha&.v=1699561941827",
                        title: "Cases & Protection"
                    }),
                    server.create('browserCategory', {
                        id: "3",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-category-charging-essentials?wid=150&hei=150&fmt=png-alpha&.v=1699561941713",
                        title: "Charging Essentials"
                    }),
                    server.create('browserCategory', {
                        id: "4",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-category-magsafe?wid=150&hei=150&fmt=png-alpha&.v=1699572503981",
                        title: "MagSafe"
                    }),
                    server.create('browserCategory', {
                        id: "5",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-category-audio-music?wid=150&hei=150&fmt=png-alpha&.v=1699561939556",
                        title: "Headphones & Speakers"
                    }) 
                                
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
            this.get('/gridPhotos', (schema) => {
                return schema.gridPhotos.all();
            })

            this.get('/details', (schema) => {
                return schema.details.all();
            })

            this.get('/iPhoneGalleryGetToKnows', (schema) => {
                console.log(schema);
                return schema.iPhoneGalleryGetToKnows.all();
            })

            this.get('/iPhoneessentials', (schema) => {
                return schema.iPhoneessentials.all();
            })

            this.get('/browserProducts', (schema) => {
                return schema.browserProducts.all();
            })
            
            this.get('/browserCategories', (schema) => {
                console.log("check schema",schema)
            return schema.browserCategories.all();
        })
        }
    })
    return server;
}