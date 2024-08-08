import json
import random

# Généré à l'aide de ChatGPT

def generate_logical_levels(num_levels=50, width=31, height=14):
    levels = []

    def add_walls_around_path(path, width, height, start, end, density=0.2):
        """Ajouter des murs aléatoires autour du chemin, avec validation après chaque ajout."""
        walls = []
        level_matrix = [['.' for _ in range(width)] for _ in range(height)]

        for point in path:
            level_matrix[point[1]][point[0]] = 'path'

        for point in path:
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = point[0] + dx, point[1] + dy
                if 0 <= nx < width and 0 <= ny < height:
                    position = (nx, ny)
                    if (position != start and position != end and random.random() < density):
                        level_matrix[ny][nx] = 'brick'
                        if validate_path(level_matrix, start, end):
                            walls.append({
                                "position": position, "type": "brick"
                            })
                        else:
                            level_matrix[ny][nx] = '.'

        return walls

    def validate_path(level_matrix, start, end):
        """Vérifier si un chemin existe toujours après l'ajout des murs."""
        width = len(level_matrix[0])
        height = len(level_matrix)
        visited = [[False] * width for _ in range(height)]

        def dfs(x, y):
            if not (0 <= x < width and 0 <= y < height):
                return False
            if visited[y][x] or level_matrix[y][x] == 'brick':
                return False
            if (x, y) == end:
                return True

            visited[y][x] = True
            return (dfs(x + 1, y) or dfs(x - 1, y) or
                    dfs(x, y + 1) or dfs(x, y - 1))

        return dfs(start[0], start[1])

    def create_level():
        start = random.randint(0, width - 1), random.randint(0, height - 1)
        end = random.randint(0, width - 1), random.randint(0, height - 1)

        while start == end:
            end = random.randint(0, width - 1), random.randint(0, height - 1)

        path = []
        x, y = start[0], start[1]
        while (x, y) != (end[0], end[1]):
            path.append([x, y])
            if x < end[0]:
                x += random.choice([0, 1])
            elif x > end[0]:
                x -= random.choice([0, 1])
            if y < end[1]:
                y += random.choice([0, 1])
            elif y > end[1]:
                y -= random.choice([0, 1])
            if [x, y] not in path:
                path.append([x, y])

        walls = add_walls_around_path(path, width, height, start, end, density=0.3)

        additional_walls = random.randint(10, 30)
        level_matrix = [['.' for _ in range(width)] for _ in range(height)]

        for wall in walls:
            wx, wy = wall["position"]
            level_matrix[wy][wx] = 'brick'

        for _ in range(additional_walls):
            wx, wy = random.randint(0, width - 1), random.randint(0, height - 1)
            if ([wx, wy] not in path and
                level_matrix[wy][wx] != 'brick' and
                (wx, wy) != start and (wx, wy) != end):
                level_matrix[wy][wx] = 'brick'
                if validate_path(level_matrix, start, end):
                    walls.append({
                        "position": (wx, wy), "type": "brick"
                    })
                else:
                    level_matrix[wy][wx] = '.'

        if validate_path(level_matrix, start, end):
            return {
                "name": level_number,
                "playerStart": start,
                "exit": end,
                "walls": walls,
                "removed": []
            }
        return None

    for level_number in range(num_levels):
        level = None
        while not level:
            level = create_level()
        levels.append(level)

    return levels


# Générer 50 niveaux logiques et les écrire dans un fichier JSON
logical_levels = generate_logical_levels(num_levels=50)
output_file_logical = "50_logical_levels.json"

with open(output_file_logical, "w") as f:
    json.dump(logical_levels, f, indent=4)

output_file_logical