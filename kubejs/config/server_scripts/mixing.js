ServerEvents.recipes(e =>{
    e.recipes.create.mixing([
        'kubejs:enstatite',
        '2x kubejs:forsterite',
        '2x kubejs:garnierite',
        Fluid.water(4000)
    ],[
        Fluid.water(1000),
        '2x kubejs:serpentinite'
    ]).superheated()
})