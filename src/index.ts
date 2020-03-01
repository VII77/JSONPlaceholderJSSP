import '@k2oss/k2-broker-core';

metadata = {
	"systemName": "JSONPlaceholder",
	"displayName": "JSONPlaceholder Broker",
    "description": "Sample broker for JSONPlaceholder",
    "configuration": {
        "ServiceURL": {
          displayName: "JSONPlaceholder Service URL",
          type: "string",
          value: "https://jsonplaceholder.typicode.com/"
        }
      }
};

ondescribe = function(configuration) {
    postSchema({ objects: {
                "posts": {
                    displayName: "Posts",
                    description: "Manages Posts",
                    properties: {
                        "id": {
                            displayName: "ID",
                            type: "number"
                        },
                        "userId": {
                            displayName: "User ID",
                            type: "number"
                        },
                        "title": {
                            displayName: "Title",
                            type: "string"
                        },
                        "body": {
                            displayName: "Body",
                            type: "string"
                        }
                    },
                    methods: {
                        "getList": {
                            displayName: "Get Posts List",
                            type: "list",
                            outputs: [ "id", "userId", "title", "body" ]
                        },
                        "getById": {
                            displayName: "Get Post By ID",
                            type: "read",
                            inputs: ["id"],                   
                            requiredInputs: ["id"],
                            outputs: [ "id", "userId", "title", "body" ]
                        },
                        "getByUserId": {
                            displayName: "Get Posts By User ID",
                            type: "list",
                            inputs: ["userId"],   
                            requiredInputs: ["userId"],
                            outputs: [ "id", "userId", "title", "body" ]
                        },
                        "create": {
                            displayName: "Create Post",
                            type: "create",
                            inputs: ["userId", "title", "body"],
                            outputs: [ "id", "userId", "title", "body" ]
                        },
                        "update": {
                            displayName: "Update Post",
                            type: "update",
                            inputs: ["id","userId", "title", "body"],
                            requiredInputs: ["id"],
                            outputs: [ "id", "userId", "title", "body" ]
                        },
                        "delete": {
                            displayName: "Delete Post",
                            type: "delete",
                            inputs: ["id"],
                            requiredInputs: ["id"]
                        }
                    }
                },
                "comments": {
                    displayName: "Comments",
                    description: "Manages Comments",
                    properties: {
                        "id": {
                            displayName: "ID",
                            type: "number"
                        },
                        "postId": {
                            displayName: "Post ID",
                            type: "number"
                        },
                        "name": {
                            displayName: "Name",
                            type: "string"
                        },
                        "email": {
                            displayName: "Email",
                            type: "string"
                        },
                        "body": {
                            displayName: "Body",
                            type: "string"
                        }
                    },
                    methods: {
                        "getList": {
                            displayName: "Get Comments List",
                            type: "list",
                            outputs: [ "id", "postId", "name", "email", "body" ]
                        },
                        "getById": {
                            displayName: "Get Comment By ID",
                            type: "read",
                            inputs: ["id"],
                            requiredInputs: ["id"],
                            outputs: [ "id", "postId", "name", "email", "body" ]
                        },
                        "getByPostId": {
                            displayName: "Get Comments By Post ID",
                            type: "list",
                            inputs: ["postId"],      
                            requiredInputs: ["postId"],
                            outputs: [ "id", "postId", "name", "email", "body" ]
                        }
                    }
                },
                "todos": {
                    displayName: "To Do",
                    description: "Manages To Dos",
                    properties: {
                        "id": {
                            displayName: "ID",
                            type: "number"
                        },
                        "userId": {
                            displayName: "User ID",
                            type: "number"
                        },
                        "title": {
                            displayName: "Title",
                            type: "string"
                        },
                        "completed": {
                            displayName: "Completed",
                            type: "boolean"
                        }
                    },
                    methods: {
                        "getList": {
                            displayName: "Get To Dos List",
                            type: "list",
                            outputs: [ "id", "userId", "title", "completed" ]
                        },
                        "getById": {
                            displayName: "Get To Do By ID",
                            type: "read",
                            inputs: ["id"],
                            requiredInputs: ["id"],
                            outputs: [ "id", "userId", "title", "completed" ]
                        }
                    }
                },
                "users": {
                    displayName: "Users",
                    description: "Manages Users",
                    properties: {
                        "id": {
                            displayName: "ID",
                            type: "number"
                        },
                        "name": {
                            displayName: "Name",
                            type: "string"
                        },
                        "username": {
                            displayName: "User Name",
                            type: "string"
                        },
                        "email": {
                            displayName: "Email",
                            type: "string"
                        },
                        "address.street": {
                            displayName: "Address.Street",
                            type: "string"
                        },
                        "address.suite": {
                            displayName: "Address.Suite",
                            type: "string"
                        },
                        "address.city": {
                            displayName: "Address.City",
                            type: "string"
                        },
                        "address.geo.lat": {
                            displayName: "Address.Geo.Latitude",
                            type: "string"
                        },
                        "address.geo.lng": {
                            displayName: "Address.Get.Longitude",
                            type: "string"
                        },
                        "phone": {
                            displayName: "Phone",
                            type: "string"
                        },
                        "website": {
                            displayName: "Website",
                            type: "string"
                        },
                        "company.name": {
                            displayName: "Company.Name",
                            type: "string"
                        },
                        "company.catchPhrase": {
                            displayName: "Company.CatchPhrase",
                            type: "string"
                        },
                        "company.bs": {
                            displayName: "Company.BS",
                            type: "string"
                        }
                    },
                    methods: {
                        "getList": {
                            displayName: "Get Users List",
                            type: "list",
                            outputs: ["id",
                            "name",
                            "username",
                            "email",
                            "address.street",
                            "address.suite",
                            "address.city",
                            "address.geo.lat",
                            "address.geo.lng",
                            "phone",
                            "website",
                            "company.name",
                            "company.catchPhrase",
                            "company.bs"]
                        },
                        "getById": {
                            displayName: "Get Users By ID",
                            type: "read",
                            inputs: ["id"],
                            requiredInputs: ["id"],
                            outputs: ["id",
                            "name",
                            "username",
                            "email",
                            "address.street",
                            "address.suite",
                            "address.city",
                            "address.geo.lat",
                            "address.geo.lng",
                            "phone",
                            "website",
                            "company.name",
                            "company.catchPhrase",
                            "company.bs"]                        }
                    }
            }
        }
    }
    )};

onexecute = function(objectName, methodName, parameters, properties, configuration) {
    switch (objectName)
    {
        case "posts": onexecutePosts(methodName, parameters, properties, configuration); break;
        case "comments": onexecuteComments(methodName, parameters, properties, configuration); break;
        case "todos": onexecuteToDos(methodName, parameters, properties, configuration); break;
        case "users": onexecuteUsers(methodName, parameters, properties, configuration); break;
        default: throw new Error("The object " + objectName + " is not supported.");
    }
}

function onexecutePosts(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    switch (methodName)
    {
        case "getList": onexecutePostsGetList(parameters, properties, configuration); break;
        case "getById": onexecutePostsGetById(parameters, properties, configuration); break;
        case "getByUserId": onexecutePostsGetByUserId(parameters, properties, configuration); break;
        case "create": onexecutePostsCreate(parameters, properties, configuration); break;
        case "update": onexecutePostsUpdate(parameters, properties, configuration); break;
        case "delete": onexecutePostsDelete(parameters, properties, configuration); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function onexecuteComments(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    switch (methodName)
    {
        case "getList": onexecuteCommentsGetList(parameters, properties, configuration); break;
        case "getById": onexecuteCommentsGetById(parameters, properties, configuration); break;
        case "getByPostId": onexecuteCommentsGetByPostId(parameters, properties, configuration); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function onexecuteToDos(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    switch (methodName)
    {
        case "getList": onexecuteToDosGetList(parameters, properties, configuration); break;
        case "getById": onexecuteToDosGetById(parameters, properties, configuration); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function onexecuteUsers(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    switch (methodName)
    {
        case "getList": onexecuteUsersGetList(parameters, properties, configuration); break;
        case "getById": onexecuteUsersGetById(parameters, properties, configuration); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function onexecutePostsGetList(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    var urlValue = configuration["ServiceURL"] + 'posts/';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        postResult(obj.map(x => {return{
                "id": x.id,
                "userId": x.userId,
                "title": x.title,
                "body": x.body
        }}));
    },
    xhr.open("GET", urlValue);
    xhr.send();     
}

function onexecutePostsGetById(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    var urlValue = configuration["ServiceURL"] + 'posts/';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        postResult({
            "id": obj.id,
            "userId": obj.userId,
            "title": obj.title,
            "body": obj.body
        });
    },
    xhr.open("GET", urlValue + encodeURIComponent(properties["id"]));
    xhr.send();
}

function onexecutePostsGetByUserId(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    var urlValue = configuration["ServiceURL"] + 'posts?userId=';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        postResult(obj.map(x => {return{
            "id": x.id,
            "userId": x.userId,
            "title": x.title,
            "body": x.body
        }}));
    },
    xhr.open("GET", urlValue + encodeURIComponent(properties["userId"]));
    xhr.send();
}


function onexecutePostsCreate(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    var urlValue = configuration["ServiceURL"] + 'posts/';
    var data = JSON.stringify({
        "userId": properties["userId"],
        "title": properties["title"],
        "body": properties["body"]
    });

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {

        if (xhr.readyState !== 4) return;
        // look for 'created' code
        if (xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        postResult({
            "id": obj.id,
            "userId": obj.userId,
            "title": obj.title,
            "body": obj.body
        });
    },      
    xhr.open("POST", urlValue);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data); 
}

function onexecutePostsUpdate(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
        var urlValue = configuration["ServiceURL"] + 'posts/';
        var data = JSON.stringify({
            "userId": properties["userId"],
            "title": properties["title"],
            "body": properties["body"]
        });
    
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
            
            //console.log(xhr.responseText);
            var obj = JSON.parse(xhr.responseText);
            postResult({
                "id": obj.id,
                "userId": obj.userId,
                "title": obj.title,
                "body": obj.body
            });
        },
        xhr.open("PUT", urlValue + encodeURIComponent(properties["id"]));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
}

function onexecutePostsDelete(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    var urlValue = configuration["ServiceURL"];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        //console.log(xhr.responseText);
    },

    xhr.open("DELETE", urlValue + 'posts/' + encodeURIComponent(properties["id"]));
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();

}

function onexecuteCommentsGetList(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    var urlValue = configuration["ServiceURL"] + 'comments';
    console.log("urlValue: " + urlValue)
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        postResult(obj.map(x => {return{
            "id": x.id,
            "postId": x.postId,
            "name": x.name,
            "email": x.email,
            "body": x.body
        }}));
    },

    xhr.open("GET", urlValue);
    xhr.send();
    //console.log("response header" + xhr.getResponseHeader);
}

function onexecuteCommentsGetById(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    var urlValue = configuration["ServiceURL"];
    var xhr = new XMLHttpRequest();
    

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log("responseText: " + xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        postResult({
            "id": obj.id,
            "postId": obj.postId,
            "name": obj.name,
            "email": obj.email,
            "body": obj.body
        });
    },

    
    xhr.open("GET", urlValue + 'comments/' + encodeURIComponent(properties["id"]));
    xhr.send();   
}

function onexecuteCommentsGetByPostId(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord){
    var urlValue = configuration["ServiceURL"];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        postResult(obj.map(x => {return{
            "id": x.id,
            "postId": x.postId,
            "name": x.name,
            "email": x.email,
            "body": x.body
        }}));
    },
    xhr.open("GET", urlValue + '/comments?postId=' + encodeURIComponent(properties["postId"]));
    xhr.send();
}

function onexecuteToDosGetList(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    var urlValue = configuration["ServiceURL"];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        postResult(obj.map(x => {return{
                "id": x.id,
                "userId": x.userId,
                "title": x.title,
                "completed": x.completed
            }}));
    },
    xhr.open("GET", urlValue + 'todos/');
    xhr.send();  
}

function onexecuteToDosGetById(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    var urlValue = configuration["ServiceURL"];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        postResult({
            "id": obj.id,
            "userId": obj.userId,
            "title": obj.title,
            "completed": obj.completed
        });
    },
    xhr.open("GET", urlValue + 'todos/' + encodeURIComponent(properties["id"]));
    xhr.send();  
}

function onexecuteUsersGetList(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    var urlValue = configuration["ServiceURL"];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        postResult(obj.map(x => {return{
                "id": x.id,
                "name": x.name,
                "username": x.username,
                "email": x.email,
                "address.street": x.address.street,
                "address.suite": x.address.suite,
                "address.city": x.address.city,
                "address.geo.lat": x.address.geo.lat,
                "address.geo.lng": x.address.geo.lng,
                "phone": x.phone,
                "website": x.website,
                "company.name": x.company.name,
                "company.catchPhrase": x.company.catchPhrase,
                "company.bs": x.company.bs
            }}));
        },
    
    xhr.open("GET", urlValue + 'users/');
    xhr.send();
}

function onexecuteUsersGetById(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
        var urlValue = configuration["ServiceURL"];
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
            
            //console.log(xhr.responseText);
            var obj = JSON.parse(xhr.responseText);
            postResult({
                "id": obj.id,
                "name": obj.name,
                "username": obj.username,
                "email": obj.email,
                "address.street": obj.address.street,
                "address.suite": obj.address.suite,
                "address.city": obj.address.city,
                "address.geo.lat": obj.address.geo.lat,
                "address.geo.lng": obj.address.geo.lng,
                "phone": obj.phone,
                "website": obj.website,
                "company.name": obj.company.name,
                "company.catchPhrase": obj.company.catchPhrase,
                "company.bs": obj.company.bs
            });
        },

        xhr.open("GET", urlValue + 'users/' + encodeURIComponent(properties["id"]));
        xhr.send();
}