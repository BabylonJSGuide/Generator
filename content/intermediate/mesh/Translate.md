---
PG_TITLE: Translate and Rotate
---

# Translation and Rotation
In mathematics a translation is a vector displacement of an object from its current position to a new position. A rotation turns an object 
through an angle about an axis, which is a fixed line. When using rotate on a mesh the axis passes through the _local origin_ of the mesh.

Unlike mesh.rotation using mesh.rotate adds new angles of roation to previous ones.

View the two playgrounds below to see a translation and a rotation, using rotate, in progress.

[Playground Example Translate](http://www.babylonjs-playground.com/#1JLGFP)

[Playground Example Rotate](http://www.babylonjs-playground.com/#1JLGFP#3)

# Frames of Reference

There are two frames of reference one the **world axes** in *world space* and the other the **local axes** in *local space*. 
When a mesh is created the **world axes** and the **local axes** coincide. As a mesh is translated or rotated the **local axes** move with it. 
The frame of reference used depends whether translate and rotate take place on the *world space* or the *local space*. 

The **world space** is set using BABYLON.Space.WORLD

The **local space** is set using BABYLON.Space.LOCAL

## Translate
To translate a mesh a direction, distance and space need to be specified. 

```javascript
pilot.translate(BABYLON.Axis.Y, 2, BABYLON.Space.WORLD);

pilot.translate(new BABYLON.Vector3(-1, 3, -2), 3, BABYLON.Space.LOCAL);
```
## Rotate
To rotate a mesh an axis, angle and the space specified are needed. The axis is given as any vector(x, y, z) and this is taken as the line passing through the 
origin of the local axes.  In other words the mesh spins at its current position.
For convenience unit vectors in the positive directions of the x, y and z axes are pre-defined as the constants BABYLON.Axis.X, BABYLON.Axis.Y and BABYLON.Axis.Z respectively.

```javascript
pilot.rotate(BABYLON.Axis.Y, Math.PI / 2, BABYLON.Space.WORLD);

pilot.rotate(new BABYLON.Vector3(-1, 3, -10), 7 * Math.PI / 12, BABYLON.Space.LOCAL);
```

Should you wish to rotate a mesh about a pivot that is not the _local origin_ of the mesh then there are method to do so. See the links in further reading.

## Add Rotations

From BabylonJS version 2.6 there is a new property that also allows the accumulation of rotations but only about **local axes**, this is mesh.addRotation(x, y, z). 
Only one of x, y or z should be non zero

```javascript
mesh.addRotation(Math.PI/2, 0, 0).addRotation(0, Math.PI/4, 0).addRotation(0, Math.PI/6, 0)
```
Whatever the current rotation of the mesh this will rotate it further first around the *local X axis*, followed by a rotation around the *local Y axis* followed by 
a rotation around the *local Z axis*.

In the following playground the sequence of boxes shows the result of applying a rotation around the *local Z axis*, followed by a rotation around the *local Y axis* followed by 
a rotation around the *local X axis*.

[Playground Example - Addition of Rotations](http://www.babylonjs-playground.com/#1PON40#8)

[Playground Example - Wheels](http://www.babylonjs-playground.com/#1PON40#12) Author [Jerome Bousquie](http://jerome.bousquie.fr/BJS/demos/)

# Tip
When animating with translate and rotate use scene.register**After**Render rather than scene.register**Before**Render

# Further Reading

## Intermediate
[A Simple Car Following a Path](/gamelets/Car.html)

## Advanced
[Using Pivots](/advanced/Pivots.html)   
[Rotate About a Pivot Other than the Local Origin](/advanced/Pivot.html)  
[Translate and Rotate in Detail](/advanced/Rotate.html)
