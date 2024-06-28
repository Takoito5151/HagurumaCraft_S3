ServerEvents.recipes(e =>{
    e.remove({not:{input:'minecraft:dirt'},type:'createsifter:sifting'})

    e.recipes.createsifterSifting(
        [Item.of('minecraft:quartz').withChance(0.8),
        Item.of('destroy:fluorite').withChance(0.2),
        Item.of('create:experience_nugget').withChance(0.01)
    ],[
        'kubejs:crushed_diorite','createsifter:zinc_mesh'
    ])
    e.recipes.createsifterSifting([
        Item.of('garnished:crushed_salt').withChance(0.3), 
        Item.of('2x minecraft:iron_nugget').withChance(0.05), 
        Item.of('2x create:zinc_nugget').withChance(0.05), 
        Item.of('tfmg:limesand').withChance(0.3), 
        Item.of('5x destroy:chalk_dust').withChance(0.3),
        Item.of('create:experience_nugget').withChance(0.01)
    ],[
        'kubejs:crushed_limestone','createsifter:zinc_mesh'
    ])
    e.recipes.createsifterSifting([
        Item.of('create_dd:coal_piece').withChance(0.4), 
        Item.of('create:cinder_flour').withChance(0.1),
        Item.of('garnished:brittle_dust').withChance(0.4), 
        Item.of('vintageimprovements:sulfur_chunk').withChance(0.2),
        Item.of('create:experience_nugget').withChance(0.01)
    ],[
        'kubejs:crushed_scorchia','createsifter:zinc_mesh'
    ])
    e.recipes.createsifterSifting([
        Item.of('quark:green_shard').withChance(0.1), 
        Item.of('quark:pink_shard').withChance(0.1), 
        Item.of('quark:brown_shard').withChance(0.1), 
        Item.of('quark:light_gray_shard').withChance(0.1), 
        Item.of('quark:white_shard').withChance(0.1), 
        Item.of('quark:clear_shard').withChance(0.1), 
        Item.of('quark:blue_shard').withChance(0.1), 
        Item.of('quark:light_blue_shard').withChance(0.1), 
        Item.of('quark:cyan_shard').withChance(0.1)
    ],[
        '#forge:sand','createsifter:andesite_mesh'
    ]).waterlogged()
})