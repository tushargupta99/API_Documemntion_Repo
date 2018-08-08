define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all products",
    "version": "0.0.1",
    "group": "Read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All Products Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n                   productId:\"string\",\n                   name: \"string\",\n                   description: \"string\"\n                   price: number,\n                   category:\"string\",\n                   freeDelivery:\"boolean\",\n                   imageLink:\"string\",\n                   views: \"number\",\n                   availableSizes: object(type = array),\n                   tags: object(type = array),\n                   inStock: \"boolean\",\n                   productAdded: today,\n                   lastModified: today\n                }\n            ]\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To find product details\",\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Read",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "post",
    "url": "/api/v1/products/Create",
    "title": "Create product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "freeDelivery",
            "description": "<p>freeDelivery of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "views",
            "description": "<p>views of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "availableSizes",
            "description": "<p>availableSizes of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>tags of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inStock",
            "description": "<p>inStock of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Product Created successfully\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    productId:\"string\",\n                    name: \"string\",\n                    description: \"string\"\n                    price: number,\n                    category:\"string\",\n                    freeDelivery:\"boolean\",\n                    imageLink:\"string\",\n                    views: \"number\",\n                    availableSizes: object(type = array),\n                    tags: object(type = array),\n                    inStock: \"boolean\",\n                    productAdded: today,\n                    lastModified: today\n                }\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured\",\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "create",
    "name": "PostApiV1ProductsCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/products/:productId/delete",
    "title": "Delete product by productId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Product Deleted Successfully\",\n    \"status\": 200,\n    \"data\": []\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured\",\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductsProductidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/:productId/edit",
    "title": "Edit product by productId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Product Edited Successfully.\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    productId:\"string\",\n                    name: \"string\",\n                    description: \"string\"\n                    price: number,\n                    category:\"string\",\n                    freeDelivery:\"boolean\",\n                    imageLink:\"string\",\n                    views: \"number\",\n                    availableSizes: object(type = array),\n                    tags: object(type = array),\n                    inStock: \"boolean\",\n                    productAdded: today,\n                    lastModified: today\n                 }\n            ]\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured\",\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "edit",
    "name": "PutApiV1ProductidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/:productId",
    "title": "Get a single product",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Products Found Successfully.\",\n    \"status\": 200,\n    \"data\": {\n                productId:\"string\",\n                name: \"string\",\n                description: \"string\"\n                price: number,\n                category:\"string\",\n                freeDelivery:\"boolean\",\n                imageLink:\"string\",\n                views: \"number\",\n                availableSizes: object(type = array),\n                tags: object(type = array),\n                inStock: \"boolean\",\n                productAdded: today,\n                lastModified: today\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured\",\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewProductid"
  }
] });
