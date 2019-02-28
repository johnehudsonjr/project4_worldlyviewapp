const mongoose = require('./connection')
const Europe = require('../models/Europe')
const Africa = require('../models/Africa')
const Asia= require('../models/Asia')

Europe.deleteMany({})
    .then(() => {
        return Europe.create(
                [{
                        euCountryName: "Portugal",
                        euDescription: "I would go back.",
                        euVisitAgain: "PARTY PARTY",
                        euImage: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1546172_10152923682218248_6391968026427646443_n.jpg?_nc_cat=103&_nc_ht=scontent-atl3-1.xx&oh=5c611fdba410a4e68b27ef3edddbb2c0&oe=5D1B98F0"
                    },
                    {
                        euCountryName: "Switzerland",
                        euDescription: "I would go back.",
                        euVisitAgain: "The alps were breathtaking!",
                        euImage: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/11039267_10152913080273248_987558879536974865_n.jpg?_nc_cat=100&_nc_ht=scontent-atl3-1.xx&oh=2ee67914c79e7bccab512135499c2b86&oe=5CDE099C"
                    }
                
                ]
            ).then((newEurope) => {
                console.log(newEurope, "Good")

            })

            .then(() => mongoose.connection.close())
    })

    Africa.deleteMany({})
    .then(() => {
        return Africa.create(
                [{
                        afCountryName: "Rwanda",
                        afDescription: "I would go back.",
                        afVisitAgain: "BEAUTIFUL and rich in culture!",
                        afImage: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p206x206/1185453_10202758192665781_498934295_n.jpg?_nc_cat=101&_nc_ht=scontent-atl3-1.xx&oh=0f370897218c305d74dafbc9e9280cc5&oe=5D205932"
                    },
                    {
                        afCountryName: "Egypt",
                        afDescription: "I would go back.",
                        afVisitAgain: "Rich in culture and history!",
                        afImage: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/10641295_10152503553988248_3633239501761297993_n.jpg?_nc_cat=107&_nc_ht=scontent-atl3-1.xx&oh=09b4b96de4a25911d41bd532ec9e4b04&oe=5CDA12DF"
                    }
                
                ]
            ).then((newAfrica) => {
                console.log(newAfrica, "Good")

            })

            .then(() => mongoose.connection.close())
    })

    Asia.deleteMany({})
    .then(() => {
        return Asia.create(
                [{
                        asCountryName: "Cambodia",
                        asDescription: "Yes",
                        asVisitAgain: "Ancient and fun!",
                        asImage: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/11144463_10153347936209808_5549201266580258967_n.jpg?_nc_cat=111&_nc_ht=scontent-atl3-1.xx&oh=02f7ce18fea62d8e942835980bfa0d9f&oe=5D26DE23"
                    },
                    {
                        asCountryName: "Thailand",
                        asDescription: "YES YES YES!",
                        asVisitAgain: "The food was AMAZING!",
                        asImage: "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/12032712_10153359410543248_2022963858654643914_o.jpg?_nc_cat=106&_nc_ht=scontent-atl3-1.xx&oh=5baeedce33ec8d64b1199cb645bbe6d1&oe=5CDF4998"
                    }
                
                ]
            ).then((newAsia) => {
                console.log(newAsia, "Good")

            })

            .then(() => mongoose.connection.close())
    })