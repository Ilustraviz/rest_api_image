# Rest API Image
Documentation Ilustraviz Rest API

## Variables
{} indicates a use of variable

## Getting a single product
Product it`s a info and images of product

Method: GET
```
https://api.ilustranext.com/products/{id}?key_api={key_api}&token={token}
```

Return:
```
{
    "success": true,
    "product": {
        "id": "1",
        "id_customer": "1",
        "name": "name product",
        "sku": "999",
        "collection": "summer",
        "note": "This product is a limited edition",
        "group_id": "1",
        "width": "10",
        "heigth": "15",
        "depth": "20",
        "unit_scale": "inches",
        "layers": [
            {
                "id": "1",
                "name": "Layer0",
                "colors": [
                    {
                        "id": "1",
                        "name": "White",
                        "image_link": "https://ilustraviz.com/images/image.png"
                    },
                    {
                        "id": "2",
                        "name": "Copper",
                        "image_link": "https://ilustraviz.com/images/image.png"
                    }
                ]
            },
            {
                "id": "1",
                "name": "Layer0",
                "colors": [
                    {
                        "id": "1",
                        "name": "White",
                        "image_link": "https://ilustraviz.com/images/image.png"
                    },
                    {
                        "id": "2",
                        "name": "Copper",
                        "image_link": "https://ilustraviz.com/images/image.png"
                    }
                ]
            }
        ]
    }
}
```


## Getting groups
Group is the conjunt of clients or finals application group. 
Each product is associate to a group.
Groups are very interessanting to separate final clients images.

Method: GET
```
https://api.ilustranext.com/groups?key_api={key_api}&token={token}
```

Return:
```
{
    "success": true,
    "groups": [
        {
            "id": "1",
            "id_customer": "1",
            "name": "Development Client",
            "note": "A development client group"
        },
        {
            "id": "2",
            "id_customer": "2",
            "name": "A another Development Client",
            "note": "A development client group"
        }
    ]
}
```


## Getting products in group
Get all products associate of a group.

Method: GET
```
https://api.ilustranext.com/groups{id}/products?key_api={key_api}&token={token}
```

Return:
```
{
    "success": true,
    "products": [
        {
            "id": "1",
            "name": "Fist Product",
            "sku": "2280",
            "collection": "",
            "note": "",
            "width": "61",
            "heigth": "14",
            "depth": "87",
            "unit_scale": "inches"
        },
        {
            "id": "2",
            "name": "Second product",
            "sku": "1520",
            "collection": "",
            "note": "",
            "width": "61",
            "heigth": "14",
            "depth": "87",
            "unit_scale": "inches"
        }
    ]
}
```