﻿(function () {
    'use strict';

    var canvas,
        ctx,
        FRAME_RATE = 1000 / 20,
        ROWS = 22,
        COLS = 10,
        size = 20,
        score = 0,
        field,
        currentPiece,
        nextPiece,
        nextPieceColor,
        currentPiecePosition = { row: 0, col: 4 },
        GameState = { Title: 0, Playing: 1, GameOver: 2, Paused: 3 },
        currentGameState = GameState.Title,
        currentFrame = 0,
        colors = ['#000', '#ff0', '#f00', '#0f0', '#cc3300', '#ff0088', '#67cddc'],
        pieceColor = 2,
        keyboardState = { Down: false, Left: false, Right: false },
        linesScore = [0, 100, 300, 800, 1500];

    function init() {
        canvas = document.getElementById('game-canvas');
        ctx = canvas.getContext('2d');

        field = [];
        for (var row = 0; row < ROWS; row++) {
            field[row] = [];
            for (var col = 0; col < COLS; col++) {
                field[row][col] = 0;
            }
        }

        currentPiece = getRandomPiece();
        nextPiece = getRandomPiece();
        nextPieceColor = getRandomColor();
        score = 0;
    }

    function draw() {
        if (currentGameState === GameState.Playing) {
            drawPlaying();
        } else if (currentGameState === GameState.Paused) {
            drawPaused();
        } else if (currentGameState === GameState.Title) {
            drawTitleScreen();
        } else if (currentGameState === GameState.GameOver) {
            drawGameOverScreen();
        }
    }

    function drawTitleScreen() {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#fff';
        ctx.font = '20px Arial';
        ctx.fillText('Tetris', 135, 150);
        ctx.font = '12px Arial';
        ctx.fillText('Press ENTER to start the game)', 80, 170);
    }

    function drawPlaying() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw field
        for (var row = 0; row < ROWS; row++) {
            for (var col = 0; col < COLS; col++) {
                if (field[row][col] !== 0) {
                    ctx.fillStyle = colors[field[row][col]];
                } else {
                    ctx.fillStyle = '#000';
                }
                ctx.fillRect(col * size, row * size, size, size);
                ctx.fillStyle = '#000';
                ctx.fillRect(col * size + 8, row * size + 8, 5, 5);

                ctx.strokeStyle = '#222';
                ctx.strokeRect(col * size, row * size, size, size);
            }
        }
        ctx.strokeStyle = '#fff';
        ctx.beginPath();
        ctx.moveTo(200, 0);
        ctx.lineTo(200, canvas.height);
        ctx.stroke();

        // Draw currentPiece
        for (var i = 0; i < currentPiece.blocks.length; i++) {
            row = currentPiecePosition.row + currentPiece.blocks[i].row;
            col = currentPiecePosition.col + currentPiece.blocks[i].col;

            ctx.fillStyle = colors[pieceColor];
            ctx.fillRect((currentPiecePosition.col + currentPiece.blocks[i].col) * size,
                (currentPiecePosition.row + currentPiece.blocks[i].row) * size, size, size);
            ctx.fillStyle = '#000';
            ctx.fillRect(col * size + 8, row * size + 8, 5, 5);
            ctx.strokeStyle = '#222';
            ctx.strokeRect(col * size, row * size, size, size);
        }

        // Draw status
        ctx.font = '12px Arial';
        ctx.fillStyle = '#fff';
        ctx.fillText('Score: ', 220, 20);
        ctx.font = '16px Arial';
        ctx.fillText('' + score, 220, 40);

        for (var i = 0; i < nextPiece.blocks.length; i++) {
            ctx.fillStyle = colors[nextPieceColor];
            row = 100 + nextPiece.blocks[i].row * size;
            col = 220 + nextPiece.blocks[i].col * size;

            ctx.fillRect(col, row, size, size);
            ctx.fillStyle = '#000';
            ctx.fillRect(col + 8, row + 8, 5, 5);
            ctx.strokeStyle = '#222';
            ctx.strokeRect(col, row, size, size);
        }
    }

    function drawPaused() {
        drawPlaying();
        ctx.fillStyle = '#fff';
        ctx.fillText('PAUSED', 220, 200);
        ctx.font = '10px Arial';
        ctx.fillText('(Press ENTER to resume)', 220, 220);
    }

    function drawGameOverScreen() {
        ctx.font = '16px Arial';
        ctx.fillStyle = '#fff';
        ctx.fillText('Game Over', 220, 200);
    }

    function update() {
        if (currentGameState === GameState.Playing) {
            if (keyboardState.Left) {
                movePiece('left');
            } else if (keyboardState.Right) {
                movePiece('right');
            } else if (keyboardState.Down) {
                movePiece('down');
            }
            
            if (currentFrame % 10 === 0) {
                var row,
                    col;

                for (var i = 0; i < currentPiece.blocks.length; i++) {
                    row = currentPiecePosition.row + currentPiece.blocks[i].row;
                    col = currentPiecePosition.col + currentPiece.blocks[i].col;

                    if (row === ROWS - 1 || (row + 1 < ROWS && field[row + 1][col] !== 0)) {
                        landPiece();
                        currentPiece = nextPiece;
                        pieceColor = nextPieceColor;
                        currentPiecePosition = { row: 0, col: 4 };
                        nextPiece = getRandomPiece();
                        nextPieceColor = getRandomColor();
                    }
                }

                for (var i = 0; i < COLS; i++) {
                    if (field[0][col] !== 0) {
                        currentGameState = GameState.GameOver;
                        break;
                    }
                }

                currentPiecePosition.row++;
            }
            currentFrame++;
            if (currentFrame >= 10) currentFrame = 0;
        }
    }

    function getRandomColor() {
        var index = Math.floor(Math.random() * (colors.length - 1)) + 1;
        return index;
    }

    function getRandomPiece() {        
        var keys = ['horizontalLine', 'cube', 'zright', 'uright', 'tup', 'L', 'reversedL'];
        var selectedKey = keys[Math.floor(Math.random() * keys.length)];
        var rotateTimes = Math.floor(Math.random() * 4) - 1;
        var piece = pieces[selectedKey];
        for (var i = 0; i < rotateTimes; i++) {
            piece = pieces[piece.rotateNext];
        }

        return piece;
    }

    function landPiece() {
        var row = 0,
            col = 0,
            rowsToCheck = {},
            rowsCount = 0;

        for (var i = 0; i < currentPiece.blocks.length; i++) {
            row = currentPiecePosition.row + currentPiece.blocks[i].row;
            col = currentPiecePosition.col + currentPiece.blocks[i].col;

            field[row][col] = pieceColor;
        }

        // Check for lines
        for (var i = 0; i < currentPiece.blocks.length; i++) {
            row = currentPiecePosition.row + currentPiece.blocks[i].row;
            col = currentPiecePosition.col + currentPiece.blocks[i].col;

            if (isRowFull(row)) {
                if (!rowsToCheck.hasOwnProperty(row)) {
                    rowsToCheck[row] = true;
                    rowsCount++;
                }
            }
        }

        if (rowsCount > 0) {
            for (var key in rowsToCheck) {
                field.splice(key, 1);
                field.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            }

            score += linesScore[rowsCount];
        }
    }

    function isRowFull(row) {
        for (var i = 0; i < COLS; i++) if (field[row][i] === 0) return false;
        return true;
    }

    function movePiece(direction) {
        var row = 0
          , col = 0;
        switch (direction) {
            case 'left': col = -1; break;
            case 'right': col = 1; break;
            case 'down': row = 1; break;
            default: return;
        }

        var r, c, i;
        for (i = 0; i < currentPiece.blocks.length; i++) {
            r = currentPiecePosition.row + row + currentPiece.blocks[i].row;
            c = currentPiecePosition.col + col + currentPiece.blocks[i].col;
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || field[r][c] !== 0) {
                return;
            }
        }

        currentPiecePosition.row += row;
        currentPiecePosition.col += col;
    }

    function canRotate() {
        var row,
            col,
            rotated = pieces[currentPiece.rotateNext];

        for (var i = 0; i < rotated.blocks.length; i++) {
            row = currentPiecePosition.row + rotated.blocks[i].row;
            col = currentPiecePosition.col + rotated.blocks[i].col + rotated.offset;
            if (col >= COLS || field[row][col] !== 0) return false;
        }

        return true;
    }

    window.onload = function () {
        init();

        canvas.addEventListener('keydown', function (keyInfo) {
            var keyCode = keyInfo.keyCode;

            if (currentGameState === GameState.Playing) {
                if (keyCode === 38) {
                    var rotated = pieces[currentPiece.rotateNext];
                    if (currentPiecePosition.col > COLS - rotated.width) {
                        currentPiecePosition.col = COLS - rotated.width + rotated.offset;
                        currentPiece = rotated;
                    } else if (canRotate()) {
                        currentPiece = rotated;
                    }
                } else if (keyCode === 80) {
                    currentGameState = GameState.Paused;
                } else {
                    switch (keyCode) {
                        case 37: keyboardState.Left = true; break;
                        case 39: keyboardState.Right = true; break;
                        case 40: keyboardState.Down = true; break;
                    }
                }
            } else if (currentGameState === GameState.GameOver && keyCode === 13) {
                currentGameState = GameState.Title;
            } else if (currentGameState === GameState.Title && keyCode === 13) {
                currentGameState = GameState.Playing;
                init();
            } else if (currentGameState === GameState.Paused && keyCode === 13) {
                currentGameState = GameState.Playing;
            }
        }, false);

        canvas.addEventListener('keyup', function (keyInfo) {
            var keyCode = keyInfo.keyCode;
            switch (keyCode) {
                case 37: keyboardState.Left = false; break;
                case 39: keyboardState.Right = false; break;
                case 40: keyboardState.Down = false; break;
            }
        }, false);

        canvas.focus();

        setInterval(function () {
            update();
            draw();
        }, FRAME_RATE);
    };
}());