import { getInteriors } from "./Database";
import { getWheels } from "./Database";
import { getPaintColor } from "./Database";
import { getTechnologies } from "./Database";

export const getTechnologies = () => {
    return `<h2>Technologies</h2>`
}

export const getPaintColor = () => {
    return `<h2>Paint Colors</h2>`
}

export const getWheels = () => {
    return `<h2>Wheels</h2>`
}

export const getInteriors = () => {
    return `<h2>Interiors</h2>`
}
