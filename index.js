const search = ()=>{
    let text = document.getElementById("searchData").value;
    console.log(text);
    document.getElementById('result').innerHTML = "";
    document.getElementById('single-result').innerHTML = "";

    fetch(` https://openapi.programming-hero.com/api/phones?search=${text}`)
    .then(res => res.json())
    .then(data => diplayData(data));
};

const diplayData = phones=>{
    
    if(phones.status){
        for(let phone of phones.data){
            console.log(phone);
    
            let div = document.createElement('div');
            div.classList.add('col');
            div.classList.add('mt-5');
            div.innerHTML = `
            <div class="card mt-3 bg-black" style="width: 18rem;">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-danger">${phone.brand}</h5>
                    <p class="card-text text-danger">${phone.phone_name}</p>
                    <a href="#"  onclick="details('${phone.slug}')" class="btn btn-danger">More Details</a>
                </div>
            </div>
            `;
            document.getElementById('result').appendChild(div);
        }
    }else{
        let h1 = document.createElement("h1")
        h1.innerHTML="Invalid"
        document.getElementById('result').appendChild(h1);

    }
}

const details = showSingledata=>{
    document.getElementById('single-result').innerHTML = "";

    console.log(showSingledata);
    fetch(`https://openapi.programming-hero.com/api/phone/${showSingledata}`)
    .then(res => res.json())
    .then(data => singleData(data));
};

const singleData = features =>{
    console.log(features)
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="d-flex justify-content-center mb-4">
        <img class="img-fluid" src="${features.data.image}" alt="">
                        </div>
                        <div>
                            <h1 class="text-center mt-5 text-danger mb-5">Features</h1>
                        </div>
                        <div class="row">

                        <div class="col-5 border border-1 border-danger">
                            <p class="text-danger mt-3">Brand</p>
                        </div>
                        <div class="col-7 border border-1 border-danger">
                            <p class="text-danger mt-3">${features.data.brand}</p>
                        </div> 

                        </div>

                        <div class="row">
                        <div class="col-5 border border-1 border-danger">
                         <p class="text-danger mt-3">Model:</p>
                        </div>
                        <div class="col-7 border border-1 border-danger">
                            <p class="text-danger mt-3">${features.data.name}</p>
                        </div>  
                        </div>

                        <div class="row">
                        <div class="col-5 border border-1 border-danger">
                            <p class="text-danger mt-3">Release Date:</p>
                        </div>
                        <div class="col-7 border border-1 border-danger">
                            <p class="text-danger mt-3">${features.data.releaseDate}</p>
                        </div>  
                        </div>
                        <div class="row">
                        <div class="col-5 border border-1 border-danger">
                            <p class="text-danger mt-3">Chipset:</p>
                        </div>
                        <div class="col-7 border border-1 border-danger">
                            <p class="text-danger mt-3">${features.data.mainFeatures.chipSet}</p>
                        </div>  
                        </div>
                        <div class="row">
                        <div class="col-5 border border-1 border-danger">
                            <p class="text-danger mt-3">Display Size:</p>
                        </div>
                        <div class="col-7 border border-1 border-danger">
                            <p class="text-danger mt-3">${features.data.mainFeatures.displaySize}</p>
                        </div>  
                        </div>
                        <div class="row">
                        <div class="col-5 border border-1 border-danger">
                            <p class="text-danger mt-3">Memory</p>
                        </div>
                        <div class="col-7 border border-1 border-danger">
                            <p class="text-danger mt-3">${features.data.mainFeatures.memory}</p>
                        </div>  
                        </div>
                        <div class="row">
                        <div class="col-5 border border-1 border-danger">
                            <p class="text-danger mt-3">Storage</p>
                        </div>
                        <div class="col-7 border border-1 border-danger">
                            <p class="text-danger mt-3">${features.data.mainFeatures.storage}</p>
                        </div>  
                        </div>
                        <div class="row">
                        <div class="col-5 border border-1 border-danger">
                            <p class="text-danger mt-3">Sensor</p>
                        </div>
                        <div class="col-7 border border-1 border-danger">
                            <p class="text-danger mt-3">${features.data.mainFeatures.sensors}</p>
                        </div>  
                        </div>
                        
                        ${features.data.others ? `<div><h1 class="text-center mt-5 text-danger mb-5">Others</h1></div>` : ""}
                        ${features.data.others ? `   <div class="row">
                        <div class="col-5 border border-1 border-danger">
                         <p class="text-danger mt-3">Bluetooth:</p>
                        </div>
                        <div class="col-7 border border-1 border-danger">
                            <p class="text-danger mt-3">${features.data.others.Bluetooth}</p>
                        </div>  
                        </div>` : ""}
                        ${features.data.others ? `   <div class="row">
                        <div class="col-5 border border-1 border-danger">
                         <p class="text-danger mt-3">GPS:</p>
                        </div>
                        <div class="col-7 border border-1 border-danger">
                            <p class="text-danger mt-3">${features.data.others.GPS}</p>
                        </div>  
                        </div>` : ""}
                        ${features.data.others ? `   <div class="row">
                        <div class="col-5 border border-1 border-danger">
                         <p class="text-danger mt-3">NFC:</p>
                        </div>
                        <div class="col-7 border border-1 border-danger">
                            <p class="text-danger mt-3">${features.data.others.NFC}</p>
                        </div>  
                        </div>` : ""}
                        ${features.data.others ? `   <div class="row">
                        <div class="col-5 border border-1 border-danger">
                         <p class="text-danger mt-3">Radio:</p>
                        </div>
                        <div class="col-7 border border-1 border-danger">
                            <p class="text-danger mt-3">${features.data.others.Radio}</p>
                        </div>  
                        </div>` : ""}
                        ${features.data.others ? `   <div class="row">
                        <div class="col-5 border border-1 border-danger">
                         <p class="text-danger mt-3">USB:</p>
                        </div>
                        <div class="col-7 border border-1 border-danger">
                            <p class="text-danger mt-3">${features.data.others.USB}</p>
                        </div>  
                        </div>` : ""}
                        ${features.data.others ? `   <div class="row">
                        <div class="col-5 border border-1 border-danger">
                         <p class="text-danger mt-3">WLAN:</p>
                        </div>
                        <div class="col-7 border border-1 border-danger">
                            <p class="text-danger mt-3">${features.data.others.WLAN}</p>
                        </div>  
                        </div>` : ""}

                        `;
                        document.getElementById('single-result').appendChild(div);
}