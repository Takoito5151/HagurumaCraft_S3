ServerEvents.recipes(e => {
    e.remove({input:'#create:stone_types/diorite',type:'create:crushing'})
    e.remove({input:'#create:stone_types/limestone',type:'create:crushing'})
    e.remove({input:'#create:stone_types/scorchia',type:'create:crushing'})

    e.recipes.create.crushing(['minecraft:cobbled_deepslate',Item.of('kubejs:olivine').withChance(0.3)],'minecraft:deepslate')
    e.recipes.create.crushing([Item.of('create:crushed_raw_nickel').withChance(0.4)],'kubejs:garnierite')
    e.recipes.create.crushing('kubejs:crushed_diorite','#create:stone_types/diorite')
    e.recipes.create.crushing('kubejs:crushed_limestone','#create:stone_types/limestone')
    e.recipes.create.crushing('kubejs:crushed_scorchia','#create:stone_types/scorchia')
    e.recipes.create.crushing(
        'tfmg:sulfur_dust',
        'vintageimprovements:sulfur'
    )
})