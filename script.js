
class Game {
    constructor(rows, cols, cellSize) {
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.grid = this.createEmptyGrid();
        this.isRunning = false;
    }

    createEmptyGrid() {
        return Array(this.rows).fill().map(() => Array(this.cols).fill(false));
    }

    randomize() {
        this.grid = this.grid.map(row =>
            row.map(() => Math.random() > 0.85)
        );
    }

    drawGliderGun() {
        // Write your function here
        let metrix = [
            [26, 1],
            [24, 2], [26, 2],
            [14, 3], [15, 3], [22, 3], [23, 3], [36, 3], [37, 3],
            [13, 4], [17, 4], [22, 4], [23, 4], [36, 4], [37, 4],
            [2, 5], [3, 5], [12, 5], [18, 5], [22, 5], [23, 5],
            [2, 6], [3, 6], [12, 6], [16, 6], [18, 6], [19, 6], [24, 6], [26, 6],
            [12, 7], [18, 7], [26, 7],
            [13, 8], [17, 8],
            [14, 9], [15, 9]
        ];
        metrix.forEach(([x, y]) => {
            this.grid[y][x] = true;
        })
    }

    drawPulsar() {
        let pulsar = [
            [2, 4], [2, 5], [2, 6], [2, 10], [2, 11], [2, 12],
            [4, 2], [4, 7], [4, 9], [4, 14],
            [5, 2], [5, 7], [5, 9], [5, 14],
            [6, 2], [6, 7], [6, 9], [6, 14],
            [7, 4], [7, 5], [7, 6], [7, 10], [7, 11], [7, 12],
            [9, 4], [9, 5], [9, 6], [9, 10], [9, 11], [9, 12],
            [10, 2], [10, 7], [10, 9], [10, 14],
            [11, 2], [11, 7], [11, 9], [11, 14],
            [12, 2], [12, 7], [12, 9], [12, 14],
            [14, 4], [14, 5], [14, 6], [14, 10], [14, 11], [14, 12]
        ];





        pulsar.forEach(([x, y]) => {
            this.grid[y][x] = true;
        })


        // Write your function here
    }

    drawPentaDecathlon() {
        // Write your function here
        let pentaDecathlon = [
            [3, 5], [3, 10],
            [4, 3], [4, 4], [4, 6], [4, 7],
            [4, 8], [4, 9], [4, 11], [4, 12], [5, 5], [5, 10]
        ]



        pentaDecathlon.forEach(([x, y]) => {
            this.grid[x][y] = true;
        });
    }


    // a function that use this given array by chat gpt that represents my name 
    sayMyname(){
        const ismailCells = [
            // I
            [0,1], [0,2], [0,3],
            [1,2],
            [2,2],
            [3,2],
            [4,1], [4,2], [4,3],
        
            // S
            [0,6], [0,7], [0,8], [0,9],
            [1,6],
            [2,6], [2,7], [2,8], [2,9],
            [3,9],
            [4,6], [4,7], [4,8], [4,9],
        
            // M
            [0,11], [0,15],
            [1,11], [1,12], [1,14], [1,15],
            [2,11], [2,13], [2,15],
            [3,11], [3,15],
            [4,11], [4,15],
        
            // A
            [0,18], [0,19], [0,20],
            [1,17], [1,21],
            [2,17], [2,18], [2,19], [2,20], [2,21],
            [3,17], [3,21],
            [4,17], [4,21],
        
            // I
            [0,24], [0,25], [0,26],
            [1,25],
            [2,25],
            [3,25],
            [4,24], [4,25], [4,26],
        
            // L
            [0,29],
            [1,29],
            [2,29],
            [3,29],
            [4,29], [4,30], [4,31], [4,32],
        
            // Space between names
        
            // N
            [0,36], [0,40],
            [1,36], [1,37], [1,40],
            [2,36], [2,38], [2,40],
            [3,36], [3,39], [3,40],
            [4,36], [4,40],
        
            // O
            [0,43], [0,44], [0,45],
            [1,42], [1,46],
            [2,42], [2,46],
            [3,42], [3,46],
            [4,43], [4,44], [4,45],
        
            // U
            [0,49], [0,53],
            [1,49], [1,53],
            [2,49], [2,53],
            [3,49], [3,53],
            [4,49], [4,50], [4,51], [4,52], [4,53],
        
            // A
            [0,56], [0,57], [0,58],
            [1,55], [1,59],
            [2,55], [2,56], [2,57], [2,58], [2,59],
            [3,55], [3,59],
            [4,55], [4,59],
        
            // R
            [0,62], [0,63], [0,64],
            [1,62], [1,65],
            [2,62], [2,63], [2,64],
            [3,62], [3,65],
            [4,62], [4,65],
        
            // I
            [0,68], [0,69], [0,70],
            [1,69],
            [2,69],
            [3,69],
            [4,68], [4,69], [4,70],
        
            // Space before "SECOND WEEK CHALLENGE"
            
            // S
            [7,1], [7,2], [7,3], [7,4],
            [8,1],
            [9,1], [9,2], [9,3], [9,4],
            [10,4],
            [11,1], [11,2], [11,3], [11,4],
        
            // E
            [7,7], [7,8], [7,9], [7,10],
            [8,7],
            [9,7], [9,8], [9,9],
            [10,7],
            [11,7], [11,8], [11,9], [11,10],
        
            // C
            [7,13], [7,14], [7,15], [7,16],
            [8,13],
            [9,13],
            [10,13],
            [11,13], [11,14], [11,15], [11,16],
        
            // O
            [7,19], [7,20], [7,21],
            [8,18], [8,22],
            [9,18], [9,22],
            [10,18], [10,22],
            [11,19], [11,20], [11,21],
        
            // N
            [7,25], [7,29],
            [8,25], [8,26], [8,29],
            [9,25], [9,27], [9,29],
            [10,25], [10,28], [10,29],
            [11,25], [11,29],
        
            // D
            [7,32], [7,33], [7,34],
            [8,31], [8,35],
            [9,31], [9,35],
            [10,31], [10,35],
            [11,32], [11,33], [11,34],
        
            // W
            [7,38], [7,42],
            [8,38], [8,40], [8,42],
            [9,38], [9,39], [9,41], [9,42],
            [10,38], [10,42],
            [11,38], [11,42],
        
            // E
            [7,45], [7,46], [7,47], [7,48],
            [8,45],
            [9,45], [9,46], [9,47],
            [10,45],
            [11,45], [11,46], [11,47], [11,48],
        
            // K
            [7,51], [7,55],
            [8,51], [8,54],
            [9,51], [9,53],
            [10,51], [10,52],
            [11,51], [11,55],
        
            // CHALLENGE would follow with a similar approach
        ];
        
        ismailCells.forEach(([x, y])=>{
            this.grid[x][y] = true ; 
        })
    }
    countNeighbors(col, row) {
        // here i made my oun function 
        let cpt = 0 ; 
        for(let r = -1; r <= 1  ; r++ ){
            for(let cl = -1 ; cl<=1 ; cl ++){
                if(cl===0 && r===0) continue ; 
                let nrow = row + r ; 
                let ncol = col + cl ;
                if((ncol >= 0 && nrow >= 0)&&(nrow <this.rows && ncol <  this.cols) ){
                    if(this.grid[nrow][ncol]){cpt++}
                }

            }
        }
         return cpt ;
        
    }

    update() {
        const newGrid = this.createEmptyGrid();
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                const neighbors = this.countNeighbors(x, y);
                const isAlive = this.grid[y][x];
                newGrid[y][x] = (isAlive && (neighbors === 2 || neighbors === 3)) ||
                    (!isAlive && neighbors === 3);
            }
        }
        this.grid = newGrid;
    }
}

class Renderer {
    constructor(canvas, game) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.game = game;
        canvas.width = game.cols * game.cellSize;
        canvas.height = game.rows * game.cellSize;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let y = 0; y < this.game.rows; y++) {
            for (let x = 0; x < this.game.cols; x++) {
                if (this.game.grid[y][x]) {
                    this.ctx.fillStyle = '#2c3e50';
                    this.ctx.fillRect(
                        x * this.game.cellSize,
                        y * this.game.cellSize,
                        this.game.cellSize - 1,
                        this.game.cellSize - 1
                    );
                }
            }
        }
    }
}

// Initialize Game
document.addEventListener('DOMContentLoaded', () => {
    const game = new Game(180, 360, 5);
    const canvas = document.getElementById('gridCanvas');
    const renderer = new Renderer(canvas, game);
    let intervalId = null;

    // Button Event Handlers
    document.getElementById('startBtn').addEventListener('click', () => {
        game.isRunning = !game.isRunning;
        document.getElementById('startBtn').textContent =
            game.isRunning ? 'Stop' : 'Start';
        if (game.isRunning) {
            intervalId = setInterval(() => {
                game.update();
                renderer.draw();
            }, 1);
        } else {
            clearInterval(intervalId);
        }
    });

    document.getElementById('clearBtn').addEventListener('click', () => {
        game.grid = game.createEmptyGrid();
        renderer.draw();
    });

    document.getElementById('randomBtn').addEventListener('click', () => {
        game.randomize();
        renderer.draw();
    });

    document.getElementById('gliderGunBtn').addEventListener('click', () => {
        game.drawGliderGun();
        renderer.draw();
    });

    document.getElementById('pulsarBtn').addEventListener('click', () => {
        game.drawPulsar();
        renderer.draw();
    });

    document.getElementById('pentaDecathlonBtn').addEventListener('click', () => {
        game.drawPentaDecathlon();
        renderer.draw();
    });
    document.getElementById("sayMyName").addEventListener('click' ,()=>{
        game.sayMyname() ;
        renderer.draw() ; 
    })
    // Initial Draw
    // renderer.draw();
});