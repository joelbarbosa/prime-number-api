define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "Request index information",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "status",
            "description": "<p>Server is working.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/apis/api.js",
    "group": "D__workspace_js_prime_number_api_src_apis_api_js",
    "groupTitle": "D__workspace_js_prime_number_api_src_apis_api_js",
    "name": "Get"
  },
  {
    "type": "get",
    "url": "/primenumber/is_prime/:number",
    "title": "pass number",
    "description": "<p>test if number is prime</p>",
    "version": "0.0.1",
    "name": "_primenumber",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Boolean",
            "description": "<p>true/false if number is prime.</p>"
          }
        ]
      }
    },
    "filename": "src/apis/primenumber/api/index.js",
    "group": "D__workspace_js_prime_number_api_src_apis_primenumber_api_index_js",
    "groupTitle": "D__workspace_js_prime_number_api_src_apis_primenumber_api_index_js"
  }
] });
