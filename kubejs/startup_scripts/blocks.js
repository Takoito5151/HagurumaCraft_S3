StartupEvents.registry("block",(e)=>{
    e.create("serpentinite")
    e.create("olivine")
    e.create("garnierite")
    e.create("crushed_diorite",'falling').gravelSoundType()
    function crushed_stones(name){
        e.create('crushed_'+name,'falling').gravelSoundType()
    }
    crushed_stones('limestone')
    crushed_stones('scoria')
    crushed_stones('scorchia')
})
