import json
import random


def generate_logical_levels(num_levels=100, width=31, height=14):
    levels = []

    def add_walls_around_path(path, width, height, start, end, density=0.2):
        """Ajouter des murs aléatoires autour du chemin."""
        walls = []
        for point in path:
            for dx in [-1, 1]:
                if 0 <= point[0] + dx < width and random.random() < density:
                    position = (point[0] + dx, point[1])
                    if position != start and position != end:
                        walls.append({
                            "position": position, "type": "brick"
                        })
            for dy in [-1, 1]:
                if 0 <= point[1] + dy < height and random.random() < density:
                    position = (point[0], point[1] + dy)
                    if position != start and position != end:
                        walls.append({
                            "position": position, "type": "brick"
                        })
        return walls

    for level_number in range(num_levels):
        start = random.randint(0, width - 1), random.randint(0, height - 1),
        end = random.randint(0, width - 1), random.randint(0, height - 1),

        while start == end:
            end = random.randint(0, width - 1), random.randint(0, height - 1)

        # Créer un chemin logique entre le début et la fin
        path = []
        x, y = start[0], start[1]

        while (x, y) != (end[0], end[1]):
            if x < end[0]:
                x += 1
            elif x > end[0]:
                x -= 1
            elif y < end[1]:
                y += 1
            elif y > end[1]:
                y -= 1
            path.append([x, y])

        # Ajouter des murs autour du chemin
        walls = add_walls_around_path(path, width, height, start, end, density=0.4)

        # Ajouter quelques murs aléatoires supplémentaires
        additional_walls = random.randint(10, 30)
        for _ in range(additional_walls):
            wx, wy = random.randint(0, width - 1), random.randint(0, height - 1)
            if [wx, wy] not in path and [wx, wy] not in walls and [wx, wy] != start and [wx, wy] != end:
                walls.append({
                    "position": (wx, wy), "type": "brick"
                })

        level = {
            "name" : level_number,
            "playerStart": start,
            "exit": end,
            "walls": walls,
            "removed": []
        }
        levels.append(level)

    return levels

# Générer 100 niveaux logiques et les écrire dans un fichier JSON
logical_levels = generate_logical_levels(num_levels=100)
output_file_logical = "100_logical_levels.json"

with open(output_file_logical, "w") as f:
    json.dump(logical_levels, f, indent=4)

output_file_logical