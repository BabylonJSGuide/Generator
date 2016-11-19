---
PG_TITLE: Putting Shader Code in BabylonJS
---

# Putting Shader Code in BabylonJS
Here are four ways of putting shader code into your scene:

1. Use [BabylonJS Create Your Own Shader (CYOS)](http://www.babylonjs.com/cyos/) and download a zip file; 
2. Write the Vertex and Fragment Shader Code into \<script\> tags
3. Write, save and import a Vertex and Fragment Shader file of type .fx into your code; 
4. Use the shaderBuilder extension of BabylonJS.

## BabylonJS CYOS Download

This site allows you to write code for a Vertex Shader and a Fragment Shader and see the results on a variety of meshes. 
Downloading a zip file produces a folder containing and index.html file and some image files for texture.

![CYOS Screen](/img/cyos1.html);

The index.html file contains the shader code in the correct format to apply as a material.

Within the HTML page the shader code becomes (in Javascript)

```javascript
BABYLON.Effect.ShadersStore["customVertexShader"]= "\r\n"+
    "precision highp float;\r\n"+

   "// Attributes\r\n"+
   "attribute vec3 position;\r\n"+
   "attribute vec2 uv;\r\n"+

   "// Uniforms\r\n"+
   "uniform mat4 worldViewProjection;\r\n"+

   "// Varying\r\n"+
   "varying vec2 vUV;\r\n"+

   "void main(void) {\r\n"+
   "    gl_Position = worldViewProjection * vec4(position, 1.0);\r\n"+

   "    vUV = uv;\r\n"+
   "}\r\n";

BABYLON.Effect.ShadersStore["customFragmentShader"]= "\r\n"+
   "precision highp float;\r\n"+

   "varying vec2 vUV;\r\n"+

   "uniform sampler2D textureSampler;\r\n"+

   "void main(void) {\r\n"+
   "    gl_FragColor = texture2D(textureSampler, vUV);\r\n"+
   "}\r\n";
```

the Javascript code to use the shader as a material is

```javascript
var shaderMaterial = new BABYLON.ShaderMaterial("shader", scene, {
        vertex: "custom",
        fragment: "custom",
    },
    {
        attributes: ["position", "normal", "uv"],
        uniforms: ["world", "worldView", "worldViewProjection", "view", "projection"]
});
```

and the Javascript code to set a texture to the material is

```javascript
var mainTexture = new BABYLON.Texture("amiga.jpg", scene);
shaderMaterial.setTexture("textureSampler", mainTexture);
```

and to use the material on a mesh is

```javascript
mesh.material = shaderMaterial;
```

Extracting the appropriate sections of Javascript code allows you to transfer them to your own scenes.


[Guide Example From CYOS Zip](/examples/cyoszip.html)

## Shader Code in <script> Tags

In the index.html file the Javascript code for the shaders is

```javascript
<script type="application/vertexShader" id="vertexShaderCode">
    #ifdef GL_ES
        precision highp float;
    #endif

    // Attributes
    attribute vec3 position;
    attribute vec2 uv;

    // Uniforms
    uniform mat4 worldViewProjection;

    // Normal
    varying vec2 vUV;

    void main(void) {
    gl_Position = worldViewProjection * vec4(position, 1.0);

    vUV = uv;
    }
</script>

<script type="application/fragmentShader" id="fragmentShaderCode">
    #ifdef GL_ES
        precision mediump float;
    #endif

    varying vec2 vUV;

    uniform sampler2D textureSampler;

    void main(void) {
        gl_FragColor = texture2D(textureSampler, vUV);
    }
</script>
```

the Javascript code to use the shader as a material becomes

```javascript
var shaderMaterial = new BABYLON.ShaderMaterial("shader", scene, {
        vertexElement: "vertexShaderCode",
        fragmentElement: "fragmentShaderCode",
    },
    {
        attributes: ["position", "normal", "uv"],
        uniforms: ["world", "worldView", "worldViewProjection", "view", "projection"]
});
```

[Guide Example From Script](/examples/scriptcode.html)

## Shader Code in fx Files
Save your code in two files, one for the Vertex Shader and one for the Fragment Shader. 

These files **must** be in the same folder as your index.html page and the names of the files **must** follow this format

COMMON_NAME.vertex.fx

COMMON_NAME.fragment.fx

The Javascript code to use the shader as material becomes

```javascript
var shaderMaterial = new BABYLON.ShaderMaterial("shader", scene, "./COMMON_NAME",
    {
        attributes: ["position", "normal", "uv"],
        uniforms: ["world", "worldView", "worldViewProjection", "view", "projection"]
});
```

**Note**  ./ is neccesary before the COMMON_NAME

It is also possible to access the fx files from an URL by giving the full address of the URL, 
provide the CORS in enabled for them on their host site.

[Guide Example From Import](/examples/importcode.html)