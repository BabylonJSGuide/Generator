---
PG_TITLE: BabylonJS Constants
---

# BabylonJS Constants

## Side Orientation

Used if required when creating a mesh to set side orientation.

BABYLON.Mesh.FRONTSIDE,  
BABYLON.Mesh.BACKSIDE,  
BABYLON.Mesh.DOUBLESIDE,  
BABYLON.Mesh.DEFAULT which is the default value and equals FRONTSIDE currently.

## VertexBuffer Kind

Used when accessing the vertex data from the vertex buffer

BABYLON.VertexBuffer.PositionKind  
BABYLON.VertexBuffer.UVKind  
BABYLON.VertexBuffer.UV2Kind  
BABYLON.VertexBuffer.UV3Kind  
BABYLON.VertexBuffer.UV4Kind  
BABYLON.VertexBuffer.UV5Kind  
BABYLON.VertexBuffer.UV6Kind  
BABYLON.VertexBuffer.ColorKind  
BABYLON.VertexBuffer.MatricesIndicesKind  
BABYLON.VertexBuffer.MatricesIndicesExtraKind  
BABYLON.VertexBuffer.MatricesWeightsKind  
BABYLON.VertexBuffer.MatricesWeightsExtraKind  

## Axis

Specifies world or local axis when using rotate or tranlate for example.

BABYLON.Space.LOCAL  
BABYLON.Space.WORLD

Specifies the x, y or z axis as a unit vector

BABYLON.Axis.X  
BABYLON.Axis.Y  
BABYLON.Axis.Z

## Animation

Specifies the property types 

BABYLON.Animation.ANIMATIONTYPE_COLOR3  
BABYLON.Animation.ANIMATIONTYPE_FLOAT  
BABYLON.Animation.ANIMATIONTYPE_MATRIX  
BABYLON.Animation.ANIMATIONTYPE_QUATERNION  
BABYLON.Animation.ANIMATIONTYPE_VECTOR2  
BABYLON.Animation.ANIMATIONTYPE_VECTOR3  

Specifies the loop methods

BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE - Restart the animation from initial value  
BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT - Stop the animation at the final value  
BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE - Repeat the animation incrementing using key values  


