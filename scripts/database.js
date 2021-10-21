const carDatabase = {
    carOrderBuilder: {},
    paintColor: [
        { id: 1, paintColor: "Silver", price: 199.99 },
        { id: 2, paintColor: "Midnight Blue", price: 299.99 },
        { id: 3, paintColor: "Firebrick Red", price: 499.99 },
        { id: 4, paintColor: "Spring Green", price: 899.99 }
    ],
    interiors: [
        { id: 1, interiorColor: "Beige Fabric", price: 1100 },
        { id: 2, interiorColor: "Charcoal Fabric", price: 1400 },
        { id: 3, interiorColor: "White Leather", price: 2000 },
        { id: 4, interiorColor: "Black Leather", price: 800 }
    ],
    technologies: [
        { id: 1, packageType: "Basic Package", price: 1599 },
        { id: 2, packageType: "Navigation Package", price: 2999 },
        { id: 3, packageType: "Visibility Package", price: 4000 },
        { id: 4, packageType: "Ultra Package", price: 4900 }
    ],
    wheels: [
        { id: 1, wheelStyle: "Silver Radial", wheelSize: 17, price: 500, },
        { id: 2, wheelStyle: "Black Radial", wheelSize: 17, price: 950, },
        { id: 3, wheelStyle: "Silver Spoke", wheelSize: 18, price: 1200, },
        { id: 4, wheelStyle: "Black Spoke", wheelSize: 18, price: 1600, }
    ],
    carOrders: [
        { id: 1, paintId: 3, interiorId: 3, technologyId: 4, wheelsId: 4 },
    ],
}

export const getPaintColor = () => {
    return carDatabase.paintColor.map(paint => ({ ...paint }))
}

export const getInteriors = () => {
    return carDatabase.interiors.map(interior => ({ ...interior }))
}

export const getTechnologies = () => {
    return carDatabase.technologies.map(technology => ({ ...technology }))
}

export const getWheels = () => {
    return carDatabase.wheels.map(wheel => ({ ...wheel }))
}

export const getCarOrders = () => {
    return carDatabase.carOrders.map(orders => ({ ...orders }))
}