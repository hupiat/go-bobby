import json
import random

def dfs(grid, start, end):
    """Recherche DFS pour vérifier si un chemin existe."""
    stack = [start]
    visited = set()
    visited.add(start)
    
    while stack:
        x, y = stack.pop()
        if (x, y) == end:
            return True
        
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < len(grid[0]) and 0 <= ny < len(grid) and (nx, ny) not in visited:
                if grid[ny][nx] not in ['brick', 'ice']:
                    stack.append((nx, ny))
                    visited.add((nx, ny))
    
    return False

def place_wall_if_valid(grid, walls, x, y, width, height, start, end, level_number):
    """Place un mur si c'est valide."""
    if 0 <= x < width and 0 <= y < height and grid[y][x] == '.':
        wall_type = 'brick'
        if level_number >= 20:
            wall_type = random.choice(['brick', 'ice'])  # Randomiser le type de mur
        grid[y][x] = wall_type
        if dfs(grid, start, end):
            walls.append({"position": (x, y), "type": wall_type})
        else:
            grid[y][x] = '.'

def generate_logical_levels(num_levels=50, width=30, height=13):
    levels = []

    def create_level(level_number):
        start = (random.randint(1, width - 1), random.randint(1, height - 1))
        end = (random.randint(1, width - 1), random.randint(1, height - 1))
        
        while start == end:
            end = (random.randint(1, width - 1), random.randint(1, height - 1))

        grid = [['.' for _ in range(width)] for _ in range(height)]
        path = generate_longer_path(start, end, width, height)

        for x, y in path:
            grid[y][x] = 'path'

        walls = []
        
        for i in range(len(path) - 1):
            x1, y1 = path[i]
            x2, y2 = path[i+1]
            if x1 != x2:  # Mouvement horizontal
                if x1 < x2:  # Vers la droite
                    place_wall_if_valid(grid, walls, x2 + 1, y2, width, height, start, end, level_number)
                    place_wall_if_valid(grid, walls, x1 - 1, y1, width, height, start, end, level_number)
                else:  # Vers la gauche
                    place_wall_if_valid(grid, walls, x2 - 1, y2, width, height, start, end, level_number)
                    place_wall_if_valid(grid, walls, x1 + 1, y1, width, height, start, end, level_number)
            elif y1 != y2:  # Mouvement vertical
                if y1 < y2:  # Vers le bas
                    place_wall_if_valid(grid, walls, x2, y2 + 1, width, height, start, end, level_number)
                    place_wall_if_valid(grid, walls, x1, y1 - 1, width, height, start, end, level_number)
                else:  # Vers le haut
                    place_wall_if_valid(grid, walls, x2, y2 - 1, width, height, start, end, level_number)
                    place_wall_if_valid(grid, walls, x1, y1 + 1, width, height, start, end, level_number)

        # Augmentation du nombre de murs supplémentaires pour ajouter de la complexité
        additional_walls = random.randint(20, 50)  # Augmenté pour plus de complexité
        for _ in range(additional_walls):
            wx, wy = random.randint(1, width - 1), random.randint(1, height - 1)
            if grid[wy][wx] == '.' and (wx, wy) != start and (wx, wy) != end:
                wall_type = 'brick'
                if level_number >= 20:
                    wall_type = random.choice(['brick', 'ice'])  # Randomiser le type de mur
                grid[wy][wx] = wall_type
                if dfs(grid, start, end):
                    walls.append({"position": (wx, wy), "type": wall_type})
                else:
                    grid[wy][wx] = '.'

        return {
            "name": level_number,
            "playerStart": start,
            "exit": end,
            "walls": walls,
            "removed": []
        }

    for level_number in range(num_levels):
        level = create_level(level_number)
        levels.append(level)

    return levels

def generate_longer_path(start, end, width, height):
    """Générer un chemin plus long et sinueux entre start et end."""
    path = []
    x, y = start
    while (x, y) != end:
        path.append((x, y))
        
        # Ajout de variations pour rendre le chemin plus sinueux
        if random.random() > 0.5:
            if x < end[0] and random.random() > 0.3:
                x += 1
            elif x > end[0] and random.random() > 0.3:
                x -= 1
            elif y < end[1]:
                y += 1
            elif y > end[1]:
                y -= 1
        else:
            if y < end[1] and random.random() > 0.3:
                y += 1
            elif y > end[1] and random.random() > 0.3:
                y -= 1
            elif x < end[0]:
                x += 1
            elif x > end[0]:
                x -= 1

        # Ajout de détour aléatoire
        if random.random() > 0.7:
            if random.random() > 0.5:
                if x < width - 1:
                    x += 1
                elif x > 0:
                    x -= 1
            else:
                if y < height - 1:
                    y += 1
                elif y > 0:
                    y -= 1

        if (x, y) not in path:
            path.append((x, y))
    path.append(end)
    return path

# Générer 50 niveaux logiques avec plus de complexité et les écrire dans un fichier JSON
logical_levels = generate_logical_levels(num_levels=50)
output_file_logical = "50_complex_logical_levels.json"

with open(output_file_logical, "w") as f:
    json.dump(logical_levels, f, indent=4)

output_file_logical