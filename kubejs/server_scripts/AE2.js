ServerEvents.recipes(e=>{
    e.remove({output:'ae2:molecular_assembler'})
    e.remove({output:'ae2:vibration_chamber'})
    e.remove({output:'megacells:printed_accumulation_processor'})
    e.remove({output:'megacells:accumulation_processor'})
    e.remove({output:'megacells:accumulation_processor_press',input:'minecraft:iron_block'})

    e.recipes.create.mechanical_crafting('ae2:inscriber',
        [
            'BIIFIIB',
            'ILSECLI',
            'IRDMOOI',
            'FWGPGSF',
            'IRDMOOI',
            'ILSECLI',
            'BIIFIIB'
        ],{
            B:'minecraft:blackstone',
            I:'create_new_age:overcharged_iron_sheet',
            F:'ae2:fluix_crystal',
            L:'tfmg:industrial_pipe',
            S:'create:portable_storage_interface',
            E:'createaddition:electric_motor',
            C:'create:encased_chain_drive',
            R:'createaddition:iron_rod',
            D:'create:deployer',
            M:'create:mechanical_press',
            O:'copycats:copycat_board',
            W:'quark:white_crystal_lamp',
            G:'ae2:quartz_glass',
            P:'createcasing:industrial_iron_depot'
        }
    )

    let inter_circuit_1 = 'kubejs:incomplete_printed_accumulation_circuit';
    e.recipes.create.sequenced_assembly('megacells:printed_accumulation_processor','megacells:sky_steel_ingot',[
        e.recipes.create.deploying(inter_circuit_1,[inter_circuit_1,'megacells:accumulation_processor_press']).keepHeldItem(),
        e.recipes.create.pressing(inter_circuit_1,inter_circuit_1)
    ]).transitionalItem(inter_circuit_1).loops(1)

    let inter_processor_0 = 'kubejs:incomplete_printed_accumulation_processor';
    e.recipes.create.sequenced_assembly('megacells:accumulation_processor','ae2:printed_silicon',[
        e.recipes.create.deploying(inter_processor_0,[inter_processor_0,'megacells:printed_accumulation_processor']),
        e.recipes.create.deploying(inter_processor_0,[inter_processor_0,'ae2:fluix_dust']),
        e.recipes.create.pressing(inter_processor_0,inter_processor_0)
    ]).transitionalItem(inter_processor_0).loops(1)
})