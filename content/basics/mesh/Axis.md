---
PG_TITLE: Rotation Around an Axis
---

# Rotation Around an Axis

 Rotation properties and methods of a mesh are set to be about an axis through the _local origin_ of a mesh. In this case 
 all that is necessary to define an axis is a vector.

## Rotate

The rotate method has the following form where axis is a vector of the type (x, y, z), angle is in radians and space is local (BABYLON.Space.LOCAL) or 
world (BABYLON.Space.WORLD)

```javascript
mesh.rotate(axis, angle, space);
```
Using rotate is cumulative, that is the rotation angle is added to the current rotation angle.

Read more about [rotate](/intermediate/translate.html)


## Rotation Quaternion

Just as you set mesh.rotation to a 3 dimensional vector you set mesh.rotationQuaternion to a quaternion, a 4 dimensional vector (x, y, z, w) 
where x, y, z defines a world axis and w the angle of rotation about the axis.

You set the rotationQuaternion property given an axis and an angle as follows

```javascript
mesh.rotationQuaternion = BABYLON.RotationAxis(axis, angle);
```
As for rotation a further use of rotationQuaternion re-sets the rotation to the new angle.



