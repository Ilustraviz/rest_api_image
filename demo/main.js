(function Main(){
    /* API Settings */
    var key_api = ""; //Your Key API
    var token = ""; //Your Token
    var product = null;

    function Start()
    {
        FetchProduct(1); //Set product ID
    }

    function FetchProduct(id)
    {
        var url = `https://api.ilustranext.com/products/${id}?key_api=${key_api}&token=${token}`;
        
        axios.get(`${url}`)
        .then(r => {
            SetProductDOM(r.data.product);
            product = r.data.product;
        })
        .catch()
    }

    function SetProductDOM(data)
    {
        
        CreateImage(data.layers);
    }
    function CreateImage(layers)
    {
        var $divImages = document.getElementById('images');
        var $divButtons = document.getElementById('listColors');
        var $layers = "";
        var $colors = "";
        layers.forEach((layer,i) => {
            $layers += `<img src="${layer.colors[0].image_link}" alt="" id="image_${i}">`;
            $colors += CreateButtonsColors(layer,i);
        });

        $divImages.innerHTML = $layers;
        $divButtons.innerHTML = $colors;


    }
    function CreateButtonsColors(layer,index)
    {
        var aux = `<div><p>${layer.name}</p>
            <ul>`
        var $colors = "";
        layer.colors.forEach((color,i) => {
            $colors += `<li><button onclick="Main.setImage(${index},${i})">${color.name}</button></li>`;
        });

        aux +=`${$colors}</ul></div>`;
        return aux;
    }
    function SetImage(layer,index)
    {
        var $img = document.getElementById(`image_${layer}`);
        $img.src = product.layers[layer].colors[index].image_link;
    }

    Start();

    window.Main = {
        setImage:SetImage
    }
})();