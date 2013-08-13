var pieces = {
    verticalLine: {
        blocks: [{ row: 0, col: 1 }, { row: 1, col: 1 }, { row: 2, col: 1 }, { row: 3, col: 1 }],
        rotateNext: 'horizontalLine',
        width: 2,
        offset: 1
    },
    horizontalLine: {
        blocks: [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 0, col: 3 }],
        rotateNext: 'verticalLine',
        width: 4,
        offset: 0
    },
    cube: {
        blocks: [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 1, col: 0 }, { row: 1, col: 1 }],
        rotateNext: 'cube',
        width: 2,
        offset: 0
    },
    zright: {
        blocks: [{ row: 0, col: 1 }, { row: 0, col: 2 }, { row: 1, col: 0 }, { row: 1, col: 1 }],
        rotateNext: 'uleft',
        width: 3,
        offset: 0
    },
    zleft: {
        blocks: [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 1, col: 1 }, { row: 1, col: 2 }],
        rotateNext: 'uright',
        width: 3,
        offset: 0
    },
    uleft: {
        blocks: [{ row: 0, col: 0 }, { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 1 }],
        rotateNext: 'zright',
        width: 2,
        offset: 0
    },
    uright: {
        blocks: [{ row: 0, col: 1 }, { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 0 }],
        rotateNext: 'zleft',
        width: 2,
        offset: 0
    },
    tright: {
        blocks: [{ row: 0, col: 1 }, { row: 1, col: 1 }, { row: 1, col: 2 }, { row: 2, col: 1 }],
        rotateNext: 'tup',
        width: 3,
        offset: 1
    },
    tup: {
        blocks: [{ row: 0, col: 1 }, { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }],
        rotateNext: 'tleft',
        width: 3,
        offset: 0
    },
    tleft: {
        blocks: [{ row: 0, col: 1 }, { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 1 }],
        rotateNext: 'tdown',
        width: 2,
        offset: 0
    },
    tdown: {
        blocks: [{ row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }, { row: 2, col: 1 }],
        rotateNext: 'tright',
        width: 3,
        offset: 0
    },
    L: {
        blocks: [{ row: 0, col: 1 }, { row: 1, col: 1 }, { row: 2, col: 1 }, { row: 2, col: 2 }],
        rotateNext: 'L90',
        width: 3,
        offset: 1
    },
    L90: {
        blocks: [{ row: 0, col: 2 }, { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }],
        rotateNext: 'L180',
        width: 3,
        offset: 0
    },
    L180: {
        blocks: [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 1, col: 1 }, { row: 2, col: 1 }],
        rotateNext: 'L270',
        width: 2,
        offset: 0
    },
    L270: {
        blocks: [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 1, col: 0 }],
        rotateNext: 'L',
        width: 3,
        offset: 0
    },
    reversedL: {
        blocks: [{ row: 0, col: 1 }, { row: 1, col: 1 }, { row: 2, col: 0 }, { row: 2, col: 1 }],
        rotateNext: 'reversedL90',
        width: 2,
        offset: 0
    },
    reversedL90: {
        blocks: [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 1, col: 2 }],
        rotateNext: 'reversedL180',
        width: 3,
        offset: 0
    },
    reversedL180: {
        blocks: [{ row: 0, col: 1 }, { row: 0, col: 2 }, { row: 1, col: 1 }, { row: 2, col: 1 }],
        rotateNext: 'reversedL270',
        width: 3,
        offset: 1
    },
    reversedL270: {
        blocks: [{ row: 0, col: 0 }, { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }],
        rotateNext: 'reversedL',
        width: 3,
        offset: 0
    }
}