const uuidv4 = require('uuid/v4')

const products = [
    {
        id: uuidv4(),
        name: 'Malm',
        price: '315',
        img: 'https://www.ikea.com/PIAimages/0749129_PE745498_S5.JPG?f=m'
    },
    {
        id: uuidv4(),
        name: 'BALESTRAND',
        price: '359',
        img: 'https://www.ikea.com/PIAimages/0616676_PE687736_S5.JPG?f=m'
    },
    {
        id: uuidv4(),
        name: 'BALESTRAND',
        price: '279',
        img: 'https://www.ikea.com/PIAimages/0592975_PE674842_S5.JPG?f=m'
    },
    {
        id: uuidv4(),
        name: 'KVALFJORD',
        price: '599',
        img: 'https://www.ikea.com/PIAimages/0670614_PE715566_S5.JPG?f=m'
    },
    {
        id: uuidv4(),
        name: 'BJÖRKSNÄS',
        price: '374',
        img: 'https://www.ikea.com/PIAimages/0629696_PE694429_S5.JPG?f=m'
    },
    {
        id: uuidv4(),
        name: 'BRIMNES',
        price: '290',
        img: 'https://www.ikea.com/PIAimages/0416815_PE577730_S5.JPG?f=m'
    },
    {
        id: uuidv4(),
        name: 'TOMREFJORD',
        price: '479',
        img: 'https://www.ikea.com/PIAimages/0622892_PE690811_S5.JPG?f=m'
    },
    {
        id: uuidv4(),
        name: 'LEIRVIK',
        price: '165',
        img: 'https://www.ikea.com/PIAimages/0637552_PE704561_S5.JPG?f=m'
    }
]

export default products;