var pieces = {
    verticalLine: {
        blocks: [
            { row: 0, col: 1 },
            { row: 1, col: 1 },
            { row: 2, col: 1 },
            { row: 3, col: 1 }
        ],
        rotateNext: 'horizontalLine',
        width: 2,
        offset: 1,
        color: '#AA0000'
    },
    horizontalLine: {
        blocks: [
            { row: 0, col: 0 },
            { row: 0, col: 1 },
            { row: 0, col: 2 },
            { row: 0, col: 3 }
        ],
        rotateNext: 'verticalLine',
        width: 4,
        offset: 0,
        color: '#AA0000'
    },
    cube: {
        blocks: [
            { row: 0, col: 0 },
            { row: 0, col: 1 },
            { row: 1, col: 0 },
            { row: 1, col: 1 }
        ],
        rotateNext: 'cube',
        width: 2,
        offset: 0,
        color: '#0000AA'
    },
    zright: {
        blocks: [
            { row: 0, col: 1 },
            { row: 0, col: 2 },
            { row: 1, col: 0 },
            { row: 1, col: 1 }
        ],
        rotateNext: 'uleft',
        width: 3,
        offset: 0,
        color: '#00AA00'
    },
    zleft: {
        blocks: [
            { row: 0, col: 0 },
            { row: 0, col: 1 },
            { row: 1, col: 1 },
            { row: 1, col: 2 }
        ],
        rotateNext: 'uright',
        width: 3,
        offset: 0,
        color: '#00AAAA'
    },
    uleft: {
        blocks: [
            { row: 0, col: 0 },
            { row: 1, col: 0 },
            { row: 1, col: 1 },
            { row: 2, col: 1 }
        ],
        rotateNext: 'zright',
        width: 2,
        offset: 0,
        color: '#00AA00'
    },
    uright: {
        blocks: [
            { row: 0, col: 1 },
            { row: 1, col: 0 },
            { row: 1, col: 1 },
            { row: 2, col: 0 }
        ],
        rotateNext: 'zleft',
        width: 2,
        offset: 0,
        color: '#00AAAA'
    },
    tright: {
        blocks: [
            { row: 0, col: 1 },
            { row: 1, col: 1 },
            { row: 1, col: 2 },
            { row: 2, col: 1 }
        ],
        rotateNext: 'tup',
        width: 3,
        offset: 1,
        color: '#AA5500'
    },
    tup: {
        blocks: [
            { row: 0, col: 1 },
            { row: 1, col: 0 },
            { row: 1, col: 1 },
            { row: 1, col: 2 }
        ],
        rotateNext: 'tleft',
        width: 3,
        offset: 0,
        color: '#AA5500'
    },
    tleft: {
        blocks: [
            { row: 0, col: 1 },
            { row: 1, col: 0 },
            { row: 1, col: 1 },
            { row: 2, col: 1 }
        ],
        rotateNext: 'tdown',
        width: 2,
        offset: 0,
        color: '#AA5500'
    },
    tdown: {
        blocks: [
            { row: 1, col: 0 },
            { row: 1, col: 1 },
            { row: 1, col: 2 },
            { row: 2, col: 1 }
        ],
        rotateNext: 'tright',
        width: 2,
        offset: 0,
        color: '#AA5500'
    },
    L: {
        blocks: [
            { row: 0, col: 1 },
            { row: 1, col: 1 },
            { row: 2, col: 1 },
            { row: 2, col: 2 }
        ],
        rotateNext: 'L90',
        width: 3,
        offset: 1,
        color: '#AA00AA'
    },
    L90: {
        blocks: [
            { row: 0, col: 2 },
            { row: 1, col: 0 },
            { row: 1, col: 1 },
            { row: 1, col: 2 }
        ],
        rotateNext: 'L180',
        width: 3,
        offset: 0,
        color: '#AA00AA'
    },
    L180: {
        blocks: [
            { row: 0, col: 0 },
            { row: 0, col: 1 },
            { row: 1, col: 1 },
            { row: 2, col: 1 }
        ],
        rotateNext: 'L270',
        width: 2,
        offset: 0,
        color: '#AA00AA'
    },
    L270: {
        blocks: [
            { row: 0, col: 0 },
            { row: 0, col: 1 },
            { row: 0, col: 2 },
            { row: 1, col: 0 }
        ],
        rotateNext: 'L',
        width: 3,
        offset: 0,
        color: '#AA00AA'
    },
    reversedL: {
        blocks: [
            { row: 0, col: 1 },
            { row: 1, col: 1 },
            { row: 2, col: 0 },
            { row: 2, col: 1 }
        ],
        rotateNext: 'reversedL90',
        width: 2,
        offset: 0,
        color: '#C0C0C0'
    },
    reversedL90: {
        blocks: [
            { row: 0, col: 0 },
            { row: 0, col: 1 },
            { row: 0, col: 2 },
            { row: 1, col: 2 }
        ],
        rotateNext: 'reversedL180',
        width: 3,
        offset: 0,
        color: '#C0C0C0'
    },
    reversedL180: {
        blocks: [
            { row: 0, col: 1 },
            { row: 0, col: 2 },
            { row: 1, col: 1 },
            { row: 2, col: 1 }
        ],
        rotateNext: 'reversedL270',
        width: 3,
        offset: 1,
        color: '#C0C0C0'
    },
    reversedL270: {
        blocks: [
            { row: 0, col: 0 },
            { row: 1, col: 0 },
            { row: 1, col: 1 },
            { row: 1, col: 2 }
        ],
        rotateNext: 'reversedL',
        width: 3,
        offset: 0,
        color: '#C0C0C0'
    }
}