const getRides = async() => {
    let res = await fetch('https://raw.githubusercontent.com/sedc-codecademy/sp2020-pr01-cpa/ivan-mitev/data.json')
    state.data =  await res.json()
    console.log(state.data);
    
    showRides(state.data)
    };