const friction = (disfric) => {
    return {
        type: "FRICTION",
        payload: disfric
    }
}

const weight = (diswei) => {
    return {
        type: "WEIGHT",
        payload: diswei
    }
}

const normal = (disnor) => {
    return {
        type: "NORMAL",
        payload: disnor
    }
}

const torque = (distor) => {
    return {
        type: "TORQUE",
        payload: distor
    }
}

export default {
    friction,
    weight,
    normal,
    torque
}