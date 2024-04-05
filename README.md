# minecraft-bedrock-json-types
Types for Minecraft Bedrock's add-on json files. Generated from the [blockception json schemas](https://github.com/Blockception/Minecraft-bedrock-json-schemas/tree/main).

## Installation
```
npm i minecraft-bedrock-json-types --save-dev
```

## Usage
```ts
import type { BehaviorEntity } from "minecraft-bedrock-json-types";

const myEntity: BehaviorEntity = {
    format_version: "1.20.80",
    "minecraft:entity": {
        description: {
            identifier: "hatchi:my_entity"
        }
    }
}
```

## List of Types
- `BehaviorAnimationController` - `behavior/animation_controllers/animation_controller.json`
- `BehaviorAnimation` - `behavior/animations/animations.json`
- `Biome` - `behavior/biomes/biomes.json`
- `Block` - `behavior/blocks/blocks.json`
- `Dialogue` - `behavior/dialogue/dialogue.json`
- `BehaviorEntity` - `behavior/entities/entities.json`
- `FeatureRule` - `behavior/feature_rules/feature_rules.json`
- `Feature` - `behavior/features/features.json`
- `Item` - `behavior/items/items.json`
- `LootTable` - `behavior/loot_tables/loot_tables.json`
- `Recipe` - `behavior/recipes/recipes.json`
- `SpawnRule` - `behavior/spawn_rules/spawn_rules.json`
- `Trades` - `behavior/trading/trading.json`
- `ResourceAnimationController` - `resource/animation_controllers/animation_controller.json`
- `ResourceAnimation` - `resource/animations/actor_animation.json`
- `Attachable` - `resource/attachables/attachables.json`
- `BlockCulling` - `resource/block_culling/block_culling.json`
- `ResourceEntity` - `resource/entity/entity.json`
- `Fog` - `resource/fog/fog.json`
- `ResourceItem` - `resource/items/items.json`
- `Material` - `resource/materials/materials.json`
- `EntityModel` - `resource/models/entity/model_entity.json`
- `Particle` - `resource/particles/particles.json`
- `RenderController` - `resource/render_controllers/render_controllers.json`
- `MusicDefinitions` - `resource/sounds/music_definitions.json`
- `SoundDefinitions` - `resource/sounds/sound_definitions.json`
- `FlipbookTextures` - `resource/textures/flipbook_textures.json`
- `ItemTexture` - `resource/textures/item_texture.json`
- `TerrainTexture` - `resource/textures/terrain_texture.json`
- `TextureSet` - `resource/textures/texture_set.json`
- `TexturesList` - `resource/textures/textures_list.json`
- `UITextureDefinition` - `resource/textures/ui_texture_definition.json`
- `UIGlobalVariables` - `resource/ui/_global_variables.json`
- `UIDefs` - `resource/ui/_ui_defs.json`
- `UI` - `resource/ui/ui.json`
- `BiomesClient` - `resource/biomes_client.json`
- `ResourceBlocksJSON` - `resource/blocks.json`
- `Sounds` - `resource/sounds.json`