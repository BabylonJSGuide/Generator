---
ID_PAGE: 25088
PG_TITLE: Ribbons in Detail
---
##Ribbons in Detail
By looking in detail a clearer understanding  can be gained.

The ribbon is a very simple and versatile shape. As it is very elementary, you can model almost any shape using a ribbon or many merged ribbons. 
It is formed using one or more paths. A path is simply an array of at least two points Vector3 points (four points if you provide a single path).  

Below shows the construction of a ribbon using two paths A and B each having five points. 

![Ribbon](http://jerome.bousquie.fr/BJS/images/ribbon.png)

##Length of Paths

It's not mandatory that all the ribbon paths have the same length, but it is not recommended.  
The best way to emulate different lengths for some parts of your mesh is then to simply use many ribbons.
  
In this [example](http://www.babylonjs-playground.com/#88AZQ#16), _path2_ and _path3_ are longer than _path1_ and _path4_.    
As you can see, the final ribbon adjusts to different lengths. The rule is they all start from first path points and each intermediate 
ribbon then stops at first of its both constituting paths end. However, while you can add color using a material, as done [here](http://www.babylonjs-playground.com/#88AZQ#17) 
there is no incidence on light reflection for ribbon with different length paths. 
Therefore you **can't add a texture**  to a ribbon constructed with different length paths.  
This is due to the fact that the nested ribbon texturing algorithm only knows how to deal with a unique length for all paths. 
When applying a texture the algorithm assumes that the ribbon can be unfolded into a rectangle that can stretched to fit on top of the image used for the texture. 
This is only possible when paths are of equal length.
  
##Single Path Ribbon
First construct the single path. [Single Path to be Used for Ribbon ](http://www.babylonjs-playground.com/#1W5VJN#44).

Now create the ribbon around this path. [Ribbon from Single Path](http://www.babylonjs-playground.com/#1W5VJN#45).

Since the _offset_ is set to 20 the ribbon is created by joining each point p in the path array to the point p + 20, where 
point p + 20 exists. Changing the _offset_ results in different ribbons. [The above Ribbon with _offset_ set to 5](http://www.babylonjs-playground.com/#1W5VJN#46).

##Closed shapes : normals or textures ?   
The ribbon mesh provides two ways to automatically close an unclosed shape.
  
* _closeArray_ parameter : this will add an extra unit ribbon between the last path and the first path of your _pathArray_.  
* _closePath_ parameter : this will join the last and first points of each _path_ in your _pathArray_.  

[Start with an unclosed ribbon](http://www.babylonjs-playground.com/#3XMWZ#44).
```javascript
var ribbon = BABYLON.MeshBuilder.CreateRibbon("ribbon", { pathArray: paths },  scene );
```  

[The same closed ribbon with _closeArray_ set to _true_](http://www.babylonjs-playground.com/#3XMWZ#45).
```javascript
var ribbon = BABYLON.MeshBuilder.CreateRibbon("ribbon", { pathArray: paths, closeArray: true },  scene );
```
[Now with a texture](http://www.babylonjs-playground.com/#3XMWZ#49).

Notice that the texture isn't stretched on the surface added by the automatic closing but applied independently. 
The reason of this behavior is that, with ribbon _closeXXX_ parameters, priority is given on normals (the tools that compute light reflection) over textures. 
If you don't care about continuous light reflection but you do want your texture to be stretched along the whole surface, 
you just have to forget automatic closing and close the ribbon by yourself. A simple way to do this is just to re-push the first _path_ at the end of the _pathArray_

[Manual close with texture](http://www.babylonjs-playground.com/#3XMWZ#50).
```javascript
paths.push(paths[0]);
var ribbon = BABYLON.MeshBuilder.CreateRibbon("ribbon", { pathArray: paths },  scene );
``` 

The same rules and workarounds apply to the _closePath_ parameter.  
[Example with _closePath_ set to true](http://www.babylonjs-playground.com/#3XMWZ#52). 
[As above with Texture](http://www.babylonjs-playground.com/#3XMWZ#51).  


## Further Reading

### Intermediate     
[Parametric Shapes](/intermediate/Parametric_Shapes.html)
[Polyhedra Shapes](/intermediate/Polyhedra_Shapes.html)

### Advanced   
[Maths Makes Ribbons](/advanced/Maths_Make_Ribbons.html)
[Decals](/advanced/Decals.html) 
