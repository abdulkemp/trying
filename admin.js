let display = document.getElementById('displayTable')

localStorage.setItem('cars', JSON.stringify([{
        id: 1,
        title: "Audi",
        image: "https://i.postimg.cc/pTvCfbRn/2022-audi-a8-103-1644872258.jpg",
        desc: "While some large luxury sedans are designed to turn heads with their flamboyant styling, the 2023 Audi A8 wears a more tailored, professional appearance that has a unique appeal. ",
        content: "While some large luxury sedans are designed to turn heads with their flamboyant styling, the 2023 Audi A8 wears a more tailored, professional appearance that has a unique appeal. The big Audi is just as roomy and comfortable as rivals such as the BMW 7-series and the Mercedes-Benz S-class inside, and a host of high-tech features makes staying connected during travel easy. Extensive sound deadening measures ensure the A8’s cabin is whisper-quiet, drowning out even the sound of the turbocharged V-6 engine. This makes the A8 a relaxing place to reflect as your driver shuttles you to your next board meeting.",
        date: new Date(),
        link: "https://www.caranddriver.com/audi/a8"
    },
    {
        id: 2,
        title: "Toyota",
        image: "https://i.postimg.cc/GmZqpTfK/2023-Toyota-Supra-2.webp",
        desc: "The return of the iconic Supra nameplate has been quite the story for Toyota. From its co-development story with the BMW Z4, its performance, to its dashing good looks, its fair to say that the latest generation Supra is one complete package.",
        content: "The return of the iconic Supra nameplate has been quite the story for Toyota. From its co-development story with the BMW Z4, its performance, to its dashing good looks, its fair to say that the latest generation Supra is one complete package. However, enthusiasts were a bit disappointed to hear that it would be offered in automatic form only. Granted, the 8-speed ZF is a terrific gearbox, perfectly mimicking the responsiveness of a dual-clutch transmission, but enthusiasts really wanted is a three-pedal stick setup. So, for the 2023 model year, the Toyota Supra manual has joined the range. We suspect the reveal for the flagship GRMN Supra may take place this year, promising supercar levels of pace.",
        date: new Date(),
        link: "https://www.cars.co.za/motoring-news/toyota-supra-manual-goes-official/122539/"
    },
    {
        id: 3,
        title: "BMW",
        image: "https://i.postimg.cc/hGTMQPWB/cs-1.webp",
        desc: "The new BMW M3 CS sedan has been revealed, boasting extra oomph from its twin-turbo inline-6 engine and a raft of weight-saving measures.",
        content: "Described as a “limited-run” model, the fresh-faced M3 CS sedan is set to go into production in Munich from March 2023. BMW Group South Africa has yet to confirm whether we’ll see the latest version of the high-performance saloon on local roads, though the international press material lists the United States, Germany, the United Kingdom and Japan as the “most important sales regions for the new special-edition model”.",
        date: new Date(),
        link: "https://www.cars.co.za/motoring-news/new-bmw-m3-cs-breaks-cover-with-extra-power-less-weight/143479/"
    },
    {
        id: 4,
        title: "Volskwagen",
        image: "https://i.postimg.cc/GhgXZ5JZ/Volkswagen-Tiguan-R-jpg.webp",
        desc: "The Volkswagen Tiguan R is a high-performance version of the regular Tiguan SUV range, which has been on sale since the Tiguan’s mid-life facelift in 2020.",
        content: "This is not to be confused with the Tiguan R-Line, which is a range-topping trim in the regular SUV range that features many of the Tiguan R’s design elements both inside and out, but none of its performance upgrades. Described as a “fantastic all-rounder” by What Car?, the Tiguan R blends the space and practicality of an SUV with the acceleration and pace of the Golf R hot hatch, which uses the same 320hp 2.0-litre turbocharged petrol engine.",
        date: new Date(),
        link: "https://www.thecarexpert.co.uk/volkswagen-tiguan-r-2020/"
    },
]))

let ind = JSON.parse(localStorage.getItem('cars'));


Object.keys(ind).forEach((item) => {
    let collect = ind[item];
    display.innerHTML += `
    <tr class="stu">
      <td><div class="stuff">${collect.id}</div></td>
      <td><div class="stuff">${collect.title}</div></td>
      <td><div class="stuff"><img src="${collect.image}"></div></td>
      <td><div class="stuff">${collect.desc}</div></td>
      <td><div class="stuff">${collect.date}</div></td>
      <td>` + '<div class="stuff butt"><button>Edit</button><button>Delete</button></div>' + `</td>
    </tr>`
})
