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
        
        for _ in range(random.randint(20, 50)):  # Ajout de murs aléatoires
            wx, wy = random.randint(1, width - 1), random.randint(1, height - 1)
            if grid[wy][wx] == '.' and (wx, wy) != start and (wx, wy) != end:
                place_wall_if_valid(grid, walls, wx, wy, width, height, start, end, level_number)

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
    visited = set()
    
    while (x, y) != end:
        path.append((x, y))
        visited.add((x, y))
        
        possible_moves = []
        
        if x < end[0] and (x + 1, y) not in visited:
            possible_moves.append((x + 1, y))
        if x > end[0] and (x - 1, y) not in visited:
            possible_moves.append((x - 1, y))
        if y < end[1] and (x, y + 1) not in visited:
            possible_moves.append((x, y + 1))
        if y > end[1] and (x, y - 1) not in visited:
            possible_moves.append((x, y - 1))

        if not possible_moves:
            break  # Cas rare où il n'y a plus de mouvement possible
        
        x, y = random.choice(possible_moves)

        # Ajout de détours aléatoires pour rallonger le chemin
        if random.random() > 0.7:
            detour = (random.choice([-1, 1]), random.choice([-1, 1]))
            x = max(0, min(width - 1, x + detour[0]))
            y = max(0, min(height - 1, y + detour[1]))

    path.append(end)
    return path

# Générer 50 niveaux logiques avec plus de complexité et les écrire dans un fichier JSON
logical_levels = generate_logical_levels(num_levels=50)
output_file_logical = "50_logical_levels.json"

with open(output_file_logical, "w") as f:
    json.dump(logical_levels, f, indent=4)

output_file_logical