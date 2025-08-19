link : https://gameoflifebyismail.netlify.app/ 


# Conway's Game of Life

## Logic & Abstract Code Implementation by Ismail Nouari

### 1. Understanding the Logic

Conway's Game of Life consists of a **grid of cells**, where the number of cells and their size can be defined by the user. This game functions as a **matrix of cells**, and each cell can be in one of two states:

- **Alive** (active)
- **Dead** (inactive)

Each cell has **eight neighboring cells**, and its state evolves over time based on three simple rules:

1. **Survival**: If a cell has **two or three** alive neighbors, it remains alive. If it was dead, it becomes alive.
2. **Overpopulation or Isolation**: If a cell has **more than three** or **fewer than two** alive neighbors, it dies.
3. **Reproduction**: A dead cell with exactly **three** alive neighbors becomes alive.

The game progresses **level by level**, with each new level updating the state of all cells based on these rules.

The game can start either with:
- A **random** set of alive cells
- A **specific pattern** (such as gliders, pulsars, or custom shapes) defined by functions

---

### 2. Building the Game Class

To implement this logic, we use **Object-Oriented Programming (OOP)**, where the game is represented as a class with attributes and methods.

#### Attributes of the Game Class
- **Number of rows and columns**
- **Cell size**
- **Boolean variable** to indicate whether the game is running
- **Matrix (grid)** representing the game state

#### Methods of the Game Class

- **Constructor Method**: Initializes the attributes of the game.
- **`createEmptyGrid()` Method**: Generates a grid where each cell is initially **dead**.
- **`randomize()` Method**: Loops through the grid and **randomly selects** some cells to be alive using `Math.random()`.
- **`countNeighbors(row, col)` Method**: Counts the number of **alive neighbors** for a given cell.
- **`update()` Method**: Handles **grid updates** by checking the number of alive neighbors and applying the game rules.

---

### 3. Creating the Rendering Class

To **display** the game on the screen, we use the **HTML Canvas API**.

#### Steps to Learn Canvas
Before implementing the rendering class, it’s helpful to:
- Watch **Canvas tutorials** on YouTube.
- Read **MDN documentation** on Canvas.

#### Attributes of the Renderer Class
- **Game object** (instance of the Game class)
- **Canvas element** (HTML `<canvas>` tag)
- **2D canvas context** (used for drawing shapes)

#### Methods of the Renderer Class

- **Constructor Method**: Initializes attributes and sets **canvas width and height** based on the game grid.
- **`draw()` Method**: Uses **nested loops** to iterate through the grid and draws **rectangles** for each alive cell.

---

### 4. Handling Events and Buttons

When the document is loaded, an `onload` event is triggered, which:
- Creates an **instance** of the Game class.
- Creates an **instance** of the Renderer class.
- Attaches **event listeners** to buttons.
- Draws the **initial state** of the game.

#### Button Functionalities

- **Start Button:** Starts the game by setting an interval that updates and redraws the grid every **1ms**.
- **Randomize Button:** Generates a **new random** grid and redraws it.
- **Clear Button:** Resets the grid to all **dead cells** and redraws it.
- **Custom Pattern Buttons:** Draws predefined patterns such as the **Glider Gun**, **Pulsar**, and **Penta-Decathlon**.

---

This document provides a structured overview of **Conway’s Game of Life**, explaining its logic and implementation while maintaining clarity and readability.
