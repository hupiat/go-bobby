import random
import json

def create_path(width, height):
    path = []
    x, y = random.randint(0, width-1), random.randint(0, height-1)
    path.append((x, y))

    # Créer un chemin déterministe de manière aléatoire
    while len(path) < (width + height) // 2:  # Limiter la longueur du chemin
        direction = random.choice(['up', 'down', 'left', 'right'])
        if direction == 'up' and y > 0:
            y -= 1
        elif direction == 'down' and y < height - 1:
            y += 1
        elif direction == 'left' and x > 0:
            x -= 1
        elif direction == 'right' and x < width - 1:
            x += 1
        if (x, y) not in path:
            path.append((x, y))
    return path

def place_walls(grid, path, width, height, end_y, end_x, start_y, start_x):
    for (x, y) in path:
        if x == end_x and y == end_y or x == start_x and y == start_y:
            continue
        grid[y][x] = "#"
        # Placer des murs autour du chemin pour créer des arrêts
        if x > 0 and grid[y][x-1] == ".":
            grid[y][x-1] = "#"
        if x < width - 1 and grid[y][x+1] == ".":
            grid[y][x+1] = "#"
        if y > 0 and grid[y-1][x] == ".":
            grid[y-1][x] = "#"
        if y < height - 1 and grid[y+1][x] == ".":
            grid[y+1][x] = "#"

def create_level(width, height):
    grid = [["." for _ in range(width)] for _ in range(height)]
    
    # Créer le chemin et placer le départ et la sortie
    path = create_path(width, height)
    start_x, start_y = path[0]
    end_x, end_y = path[-1]
    
    grid[start_y][start_x] = "S"
    grid[end_y][end_x] = "E"
    
    # Placer des murs pour rendre le chemin viable
    place_walls(grid, path, width, height, end_y, end_x, start_y, start_x)
    
    return grid

def generate_levels(num_levels, width, height):
    levels = []
    for i in range(1, num_levels + 1):
        grid = create_level(width, height)
        start = ()
        end = ()
        walls = []
        for i in range(0, height):
            for j in range(0, width):
                if grid[i][j] == "#":
                    walls.append({
                        "position": (j, i),
                        "type": "brick"
                    })
                if grid[i][j] == "S":
                    start = (j, i)
                if grid[i][j] == "E":
                    end = (j, i)

                if start != () and end != ():
                    level = {
                        "level": i,
                        "walls": walls,
                        "playerStart": start,
                        "exit": end,
                        "removed": []
                    }
                    levels.append(level)
    
    return levels

def save_to_json(levels, filename):
    with open(filename, 'w') as file:
        json.dump(levels, file, indent=4)

# Configuration
width = 30
height = 13
num_levels = 50
filename = "sliding_levels.json"

# Générer et sauvegarder les niveaux
levels = generate_levels(num_levels, width, height)
save_to_json(levels, filename)