const mongoose = require('./connection')
const Europe = require('../models/Europe')
const Africa = require('../models/Africa')
const Asia= require('../models/Asia')

Europe.deleteMany({})
    .then(() => {
        return Europe.create(
                [{
                        euCountryName: "Germany",
                        euDescription: "Loved the food!",
                        euVisitAgain: "I encourage people to go but I wouldn't go back!",
                        euImage: "https://lh5.googleusercontent.com/proxy/9i_EluYqOdpga_sZde__YVkP96yReQWhIJ65pyyczun73DRk9EWJpsQ61kXMl984wfADv0ep0olKEmKbptYwDiOYgsGu85hj5qMqdo4LIq4GhIQhT58YPPkfux-vtDAZ8xDF6UOqEKfsF203mYtDBeyM-UU=w347-h238-k-no"
                    },
                    {
                        euCountryName: "Germany",
                        euDescription: "Loved the food!",
                        euVisitAgain: "I encourage people to go but I wouldn't go back!",
                        euImage: "https://lh5.googleusercontent.com/proxy/9i_EluYqOdpga_sZde__YVkP96yReQWhIJ65pyyczun73DRk9EWJpsQ61kXMl984wfADv0ep0olKEmKbptYwDiOYgsGu85hj5qMqdo4LIq4GhIQhT58YPPkfux-vtDAZ8xDF6UOqEKfsF203mYtDBeyM-UU=w347-h238-k-no"
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
                        afDescription: "Such a beautiful country!!",
                        afVisitAgain: "Most certainly would!",
                        afImage: "https://lh5.googleusercontent.com/proxy/9i_EluYqOdpga_sZde__YVkP96yReQWhIJ65pyyczun73DRk9EWJpsQ61kXMl984wfADv0ep0olKEmKbptYwDiOYgsGu85hj5qMqdo4LIq4GhIQhT58YPPkfux-vtDAZ8xDF6UOqEKfsF203mYtDBeyM-UU=w347-h238-k-no"
                    },
                    {
                        afCountryName: "Burundi",
                        afDescription: "We went to this really cool beach!",
                        afVisitAgain: "Definitely!",
                        afImage: "https://lh5.googleusercontent.com/proxy/9i_EluYqOdpga_sZde__YVkP96yReQWhIJ65pyyczun73DRk9EWJpsQ61kXMl984wfADv0ep0olKEmKbptYwDiOYgsGu85hj5qMqdo4LIq4GhIQhT58YPPkfux-vtDAZ8xDF6UOqEKfsF203mYtDBeyM-UU=w347-h238-k-no"
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
                        asCountryName: "India",
                        asDescription: "It is sensory overload.",
                        asVisitAgain: "Yes!",
                        asImage: "https://lh5.googleusercontent.com/proxy/9i_EluYqOdpga_sZde__YVkP96yReQWhIJ65pyyczun73DRk9EWJpsQ61kXMl984wfADv0ep0olKEmKbptYwDiOYgsGu85hj5qMqdo4LIq4GhIQhT58YPPkfux-vtDAZ8xDF6UOqEKfsF203mYtDBeyM-UU=w347-h238-k-no"
                    },
                    {
                        asCountryName: "China",
                        asDescription: "Very nice people and they loved to take pictures with us.",
                        asVisitAgain: "Definitely!",
                        asImage: "https://lh5.googleusercontent.com/proxy/9i_EluYqOdpga_sZde__YVkP96yReQWhIJ65pyyczun73DRk9EWJpsQ61kXMl984wfADv0ep0olKEmKbptYwDiOYgsGu85hj5qMqdo4LIq4GhIQhT58YPPkfux-vtDAZ8xDF6UOqEKfsF203mYtDBeyM-UU=w347-h238-k-no"
                    }
                
                ]
            ).then((newAsia) => {
                console.log(newAsia, "Good")

            })

            .then(() => mongoose.connection.close())
    })