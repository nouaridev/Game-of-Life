
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


    // a function that use this given array by chat gpt that represents "palastine"
    myLove(){
        const pls =  [
            // "PALESTINE"
            // P
            [87, 160], [87, 161], [87, 162],
            [88, 160], [88, 163],
            [89, 160], [89, 161], [89, 162],
            [90, 160],
            [91, 160],
        
            // A
            [87, 167], [87, 168], [87, 169],
            [88, 166], [88, 170],
            [89, 166], [89, 167], [89, 168], [89, 169], [89, 170],
            [90, 166], [90, 170],
            [91, 166], [91, 170],
        
            // L
            [87, 174],
            [88, 174],
            [89, 174],
            [90, 174],
            [91, 174], [91, 175], [91, 176],
        
            // E
            [87, 179], [87, 180], [87, 181], [87, 182],
            [88, 179],
            [89, 179], [89, 180], [89, 181],
            [90, 179],
            [91, 179], [91, 180], [91, 181], [91, 182],
        
            // S
            [87, 186], [87, 187], [87, 188],
            [88, 186],
            [89, 186], [89, 187], [89, 188],
            [90, 188],
            [91, 186], [91, 187], [91, 188],
        
            // T
            [87, 192], [87, 193], [87, 194],
            [88, 193],
            [89, 193],
            [90, 193],
            [91, 193],
        
            // I
            [87, 198], [87, 199], [87, 200],
            [88, 199],
            [89, 199],
            [90, 199],
            [91, 198], [91, 199], [91, 200],
        
            // N
            [87, 204], [87, 208],
            [88, 204], [88, 205], [88, 208],
            [89, 204], [89, 206], [89, 208],
            [90, 204], [90, 207], [90, 208],
            [91, 204], [91, 208],
        
            // E
            [87, 211], [87, 212], [87, 213], [87, 214],
            [88, 211],
            [89, 211], [89, 212], [89, 213],
            [90, 211],
            [91, 211], [91, 212], [91, 213], [91, 214],
    
        ];
        
        
        pls.forEach(([x, y])=>{
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
                    this.ctx.shadowOffsetX = 2;
                    this.ctx.shadowOffsetY = 2;
                    this.ctx.shadowBlur = 2;
                    this.ctx.shadowColor = "#aaa";
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
    document.getElementById("myLove").addEventListener('click' ,()=>{
        game.myLove() ;
        renderer.draw() ; 
    })
    // Initial Draw
    // renderer.draw();
});